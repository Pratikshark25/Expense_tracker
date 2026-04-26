const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const { protect } = require('../middleware/auth');
const {
  categorizeTransaction,
  generateInsights,
  chatWithAI,
  normalizeCategory,
} = require('../services/aiService');

function toDateKey(date) {
  return new Date(date).toISOString().slice(0, 10);
}

function monthKey(date) {
  const d = new Date(date);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

function summarizeTransactions(transactions) {
  const byCategory = {};
  const byMerchant = {};
  const byMonth = {};
  const byCategoryMonth = {};
  const byMerchantMonth = {};
  const byDayType = { weekday: 0, weekend: 0 };
  const merchantCounts = {};
  const dailyExpense = {};
  const recent = transactions.slice(0, 60).map((t) => ({
    date: toDateKey(t.date),
    merchant: t.merchant,
    type: t.type,
    amount: t.amount,
    category: t.category,
  }));

  for (const t of transactions) {
    const amount = Number(t.amount) || 0;
    const month = monthKey(t.date);
    const category = t.category || 'Others';
    const merchant = t.merchant || 'Unknown';
    const dateKey = toDateKey(t.date);
    const day = new Date(t.date).getUTCDay();
    const dayType = day === 0 || day === 6 ? 'weekend' : 'weekday';

    if (!byMonth[month]) byMonth[month] = { income: 0, expense: 0 };
    if (!byCategoryMonth[month]) byCategoryMonth[month] = {};
    if (!byMerchantMonth[month]) byMerchantMonth[month] = {};

    if (t.type === 'Credit') byMonth[month].income += amount;
    if (t.type === 'Debit') {
      byMonth[month].expense += amount;
      byCategory[category] = (byCategory[category] || 0) + amount;
      byMerchant[merchant] = (byMerchant[merchant] || 0) + amount;
      byCategoryMonth[month][category] = (byCategoryMonth[month][category] || 0) + amount;
      byMerchantMonth[month][merchant] = (byMerchantMonth[month][merchant] || 0) + amount;
      byDayType[dayType] += amount;
      merchantCounts[merchant] = (merchantCounts[merchant] || 0) + 1;
      dailyExpense[dateKey] = (dailyExpense[dateKey] || 0) + amount;
    }
  }

  return {
    transactionCount: transactions.length,
    byCategory,
    byMerchant,
    byMonth,
    byCategoryMonth,
    byMerchantMonth,
    byDayType,
    merchantCounts,
    dailyExpense,
    recent,
  };
}

function detectSubscriptions(transactions) {
  const groups = new Map();

  for (const tx of transactions) {
    if (tx.type !== 'Debit') continue;
    const merchant = (tx.merchant || '').trim();
    if (!merchant) continue;
    const key = merchant.toLowerCase();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(tx);
  }

  const subscriptions = [];

  for (const [key, items] of groups.entries()) {
    if (items.length < 2) continue;

    const sorted = items.sort((a, b) => new Date(a.date) - new Date(b.date));
    const months = [...new Set(sorted.map((t) => monthKey(t.date)))];
    if (months.length < 2) continue;

    const amounts = sorted.map((t) => Number(t.amount) || 0);
    const avgAmount = amounts.reduce((sum, amount) => sum + amount, 0) / amounts.length;
    const similarAmounts = amounts.filter((amount) => {
      const diff = Math.abs(amount - avgAmount);
      return avgAmount > 0 && diff / avgAmount <= 0.2;
    }).length;

    const monthTimes = months.map((m) => {
      const [year, month] = m.split('-').map(Number);
      return year * 12 + month;
    });
    const consecutivePairs = monthTimes.slice(1).filter((value, index) => {
      const gap = value - monthTimes[index];
      return gap >= 1 && gap <= 2;
    }).length;

    const isSubscription = similarAmounts >= Math.ceil(amounts.length * 0.65) && consecutivePairs >= 1;
    if (!isSubscription) continue;

    subscriptions.push({
      merchant: sorted[0].merchant,
      averageAmount: Math.round(avgAmount * 100) / 100,
      monthlyCost: Math.round(avgAmount * 100) / 100,
      transactionCount: sorted.length,
      firstDate: toDateKey(sorted[0].date),
      lastDate: toDateKey(sorted[sorted.length - 1].date),
      category: sorted[sorted.length - 1].category || 'Others',
      transactionIds: sorted.map((t) => t._id),
      key,
    });
  }

  return subscriptions.sort((a, b) => b.monthlyCost - a.monthlyCost);
}

router.post('/categorize', protect, async (req, res) => {
  try {
    const { merchant = '', description = '', amount = '' } = req.body || {};
    if (!merchant && !description) {
      return res.json({ category: 'Others' });
    }

    const category = normalizeCategory(await categorizeTransaction({ merchant, description, amount }));
    return res.json({ category });
  } catch {
    return res.json({ category: 'Others' });
  }
});

router.get('/insights', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 }).lean();
    if (!transactions.length) return res.json({ insights: [] });

    const financialData = summarizeTransactions(transactions);
    const insights = await generateInsights(financialData);
    return res.json({ insights });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post('/chat', protect, async (req, res) => {
  try {
    const { query } = req.body || {};
    if (!query || !query.trim()) {
      return res.status(400).json({ message: 'Question is required' });
    }

    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 }).lean();
    const context = summarizeTransactions(transactions);
    const answer = await chatWithAI(query.trim(), context);
    return res.json({ answer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get('/subscriptions', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: 1 });
    const subscriptions = detectSubscriptions(transactions);
    const subscriptionIds = new Set(subscriptions.flatMap((sub) => sub.transactionIds.map(String)));

    if (transactions.length) {
      await Transaction.updateMany({ userId: req.user._id }, { $set: { isSubscription: false } });
      if (subscriptionIds.size) {
        await Transaction.updateMany(
          { userId: req.user._id, _id: { $in: [...subscriptionIds] } },
          { $set: { isSubscription: true } }
        );
      }
    }

    const cleanSubscriptions = subscriptions.map(({ transactionIds, key, ...sub }) => sub);
    const totalMonthlyCost = cleanSubscriptions.reduce((sum, sub) => sum + sub.monthlyCost, 0);

    return res.json({
      subscriptions: cleanSubscriptions,
      totalMonthlyCost: Math.round(totalMonthlyCost * 100) / 100,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
