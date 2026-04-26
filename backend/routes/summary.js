const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Summary = require('../models/Summary');
const { protect } = require('../middleware/auth');
function computeTotals(transactions) {
  let totalIncome = 0;
  let totalExpense = 0;
  const categoryBreakdown = {};

  for (const t of transactions) {
    if (t.type === 'Credit') {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
      categoryBreakdown[t.category] =
        (categoryBreakdown[t.category] || 0) + t.amount;
    }
  }

  return { totalIncome, totalExpense, categoryBreakdown };
}

function percentChange(current, previous) {
  if (!previous && !current) return 0;
  if (!previous) return 100;
  return ((current - previous) / previous) * 100;
}

function buildDateFilter(userId, from, to) {
  const filter = { userId };
  if (from || to) {
    filter.date = {};
    if (from) filter.date.$gte = new Date(from);
    if (to) filter.date.$lte = new Date(to);
  }
  return filter;
}

function compareCategoryBreakdowns(current = {}, previous = {}) {
  const keys = [...new Set([...Object.keys(current), ...Object.keys(previous)])];
  return keys
    .map((category) => {
      const currentAmount = current[category] || 0;
      const previousAmount = previous[category] || 0;
      return {
        category,
        current: currentAmount,
        previous: previousAmount,
        difference: currentAmount - previousAmount,
        percentChange: Number(percentChange(currentAmount, previousAmount).toFixed(1)),
      };
    })
    .sort((a, b) => Math.abs(b.difference) - Math.abs(a.difference));
}
function generateInsights(categoryBreakdown, totalExpense) {
  const insights = [];
  const avgSpend = totalExpense / (Object.keys(categoryBreakdown).length || 1);

  for (const [category, amount] of Object.entries(categoryBreakdown)) {
    const pct = totalExpense > 0 ? (amount / totalExpense) * 100 : 0;
    if (pct > 30) {
      insights.push({
        type: 'warning',
        message: `You are spending a lot on ${category} ⚠️ (${pct.toFixed(1)}% of total expenses)`,
      });
    } else if (pct < 5 && amount > 0) {
      insights.push({
        type: 'success',
        message: `Good control on ${category} expenses 👍`,
      });
    }
  }

  if (totalExpense > 0) {
    const highestCat = Object.entries(categoryBreakdown).sort((a, b) => b[1] - a[1])[0];
    if (highestCat) {
      insights.push({
        type: 'info',
        message: `Your biggest expense category is ${highestCat[0]} (₹${highestCat[1].toLocaleString()}) 📊`,
      });
    }
  }

  return insights;
}
router.get('/', protect, async (req, res) => {
  try {
    const { from, to, compareFrom, compareTo } = req.query;

    const currentTransactions = await Transaction.find(buildDateFilter(req.user._id, from, to));
    const current = computeTotals(currentTransactions);

    const response = {
      totalIncome: current.totalIncome,
      totalExpense: current.totalExpense,
      categoryBreakdown: current.categoryBreakdown,
      totalCount: currentTransactions.length,
    };

    if (compareFrom || compareTo) {
      const previousTransactions = await Transaction.find(
        buildDateFilter(req.user._id, compareFrom, compareTo)
      );
      const previous = computeTotals(previousTransactions);

      response.comparison = {
        current: {
          from: from || null,
          to: to || null,
          income: current.totalIncome,
          expense: current.totalExpense,
          categoryBreakdown: current.categoryBreakdown,
        },
        previous: {
          from: compareFrom || null,
          to: compareTo || null,
          income: previous.totalIncome,
          expense: previous.totalExpense,
          categoryBreakdown: previous.categoryBreakdown,
        },
        income: {
          difference: current.totalIncome - previous.totalIncome,
          percentChange: Number(percentChange(current.totalIncome, previous.totalIncome).toFixed(1)),
        },
        expense: {
          difference: current.totalExpense - previous.totalExpense,
          percentChange: Number(percentChange(current.totalExpense, previous.totalExpense).toFixed(1)),
        },
        categories: compareCategoryBreakdowns(current.categoryBreakdown, previous.categoryBreakdown),
      };
    }

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
router.get('/dashboard', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });

    if (transactions.length === 0) {
      return res.json({
        totalIncome: 0,
        totalExpense: 0,
        categoryBreakdown: {},
        totalCount: 0,
        latestTransactions: [],
        insights: [],
        chartData: [],
      });
    }

    const totals = computeTotals(transactions);
    const insights = generateInsights(totals.categoryBreakdown, totals.totalExpense);
    const chartMap = {};
    for (const t of transactions) {
      if (t.type === 'Debit') {
        const dateKey = new Date(t.date).toISOString().split('T')[0];
        if (!chartMap[dateKey]) chartMap[dateKey] = {};
        chartMap[dateKey][t.category] =
          (chartMap[dateKey][t.category] || 0) + t.amount;
      }
    }

    const chartData = Object.entries(chartMap)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      .map(([date, cats]) => ({ date, ...cats }));

    res.json({
      totalIncome: totals.totalIncome,
      totalExpense: totals.totalExpense,
      categoryBreakdown: totals.categoryBreakdown,
      totalCount: transactions.length,
      latestTransactions: transactions.slice(0, 10),
      insights,
      chartData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/accounts', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });

    const groups = new Map();

    for (const tx of transactions) {
      const merchant = (tx.merchant || '').trim();
      if (!merchant) continue;

      const key = merchant.toLowerCase();
      if (!groups.has(key)) {
        groups.set(key, {
          merchant,
          totalCredit: 0,
          totalDebit: 0,
          netBalance: 0,
          transactionCount: 0,
          transactions: [],
        });
      }

      const group = groups.get(key);
      const amount = Number(tx.amount) || 0;

      if (tx.type === 'Credit') {
        group.totalCredit += amount;
      } else if (tx.type === 'Debit') {
        group.totalDebit += amount;
      }

      group.transactionCount += 1;
      group.transactions.push(tx);
    }

    const accounts = Array.from(groups.values())
      .map((group) => ({
        ...group,
        netBalance: group.totalCredit - group.totalDebit,
        transactions: group.transactions.sort((a, b) => new Date(b.date) - new Date(a.date)),
      }))
      .sort((a, b) => b.transactionCount - a.transactionCount);

    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/save', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id });

    if (transactions.length === 0) {
      return res.status(400).json({ message: 'No transactions to snapshot' });
    }

    const totals = computeTotals(transactions);

    const summary = await Summary.create({
      userId: req.user._id,
      title: req.body.title || `Snapshot – ${new Date().toLocaleDateString('en-IN')}`,
      transactions: transactions.map((t) => ({
        date: t.date,
        merchant: t.merchant,
        type: t.type,
        amount: t.amount,
        category: t.category,
      })),
      totals: {
        totalIncome: totals.totalIncome,
        totalExpense: totals.totalExpense,
        categoryBreakdown: totals.categoryBreakdown,
      },
    });

    const savedSummary = await Summary.findOne({
      _id: summary._id,
      userId: req.user._id,
    }).select('_id createdAt');

    if (!savedSummary) {
      return res.status(500).json({ message: 'Snapshot could not be verified in database' });
    }

    res.status(201).json({
      message: 'Summary saved',
      summaryId: savedSummary._id,
      createdAt: savedSummary.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/history', protect, async (req, res) => {
  try {
    const summaries = await Summary.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .select('-transactions');

    res.json(summaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/history/:id', protect, async (req, res) => {
  try {
    const summary = await Summary.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!summary) {
      return res.status(404).json({ message: 'Summary not found' });
    }
    const totals = summary.totals;
    const categoryBreakdown = totals.categoryBreakdown
      ? typeof totals.categoryBreakdown.entries === 'function'
        ? Object.fromEntries(totals.categoryBreakdown)
        : totals.categoryBreakdown
      : {};
    const insights = generateInsights(categoryBreakdown, totals.totalExpense);

    const chartMap = {};
    for (const t of summary.transactions) {
      if (t.type === 'Debit') {
        const dateKey = new Date(t.date).toISOString().split('T')[0];
        if (!chartMap[dateKey]) chartMap[dateKey] = {};
        chartMap[dateKey][t.category] =
          (chartMap[dateKey][t.category] || 0) + t.amount;
      }
    }

    const chartData = Object.entries(chartMap)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      .map(([date, cats]) => ({ date, ...cats }));

    res.json({ ...summary.toObject(), insights, chartData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/history/:id', protect, async (req, res) => {
  try {
    await Summary.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    res.json({ message: 'Summary deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
