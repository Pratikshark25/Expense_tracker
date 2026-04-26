const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const { protect } = require('../middleware/auth');

router.post('/', protect, async (req, res) => {
  try {
    const { transactions } = req.body;

    if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
      return res.status(400).json({ message: 'No transactions provided' });
    }

    const missingCategory = transactions.find((t) => !t.category || t.category.trim() === '');
    if (missingCategory) {
      return res.status(400).json({ message: 'All transactions must have a category' });
    }

    const normalizeDateKey = (date) => {
      const d = new Date(date);
      return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
    };

    const makeKey = (t) =>
      [
        normalizeDateKey(t.date),
        String(t.merchant || '').trim().toLowerCase(),
        String(t.type || '').trim(),
        Number(t.amount || 0).toFixed(2),
      ].join('|');

    const docs = transactions
      .map((t) => ({
        userId: req.user._id,
        date: new Date(t.date),
        merchant: String(t.merchant || '').trim(),
        type: t.type,
        amount: Number(t.amount),
        category: t.category.trim(),
        isSubscription: Boolean(t.isSubscription),
      }))
      .filter((t) => t.merchant && !Number.isNaN(t.date.getTime()) && Number.isFinite(t.amount));

    const incomingSeen = new Set();
    const uniqueDocs = docs.filter((doc) => {
      const key = makeKey(doc);
      if (incomingSeen.has(key)) return false;
      incomingSeen.add(key);
      return true;
    });

    const dateKeys = [...new Set(uniqueDocs.map((doc) => normalizeDateKey(doc.date)).filter(Boolean))].sort();
    const firstDateKey = dateKeys[0];
    const lastDateKey = dateKeys[dateKeys.length - 1];
    const existingTransactions = dateKeys.length
      ? await Transaction.find({
          userId: req.user._id,
          date: {
            $gte: new Date(`${firstDateKey}T00:00:00.000Z`),
            $lte: new Date(`${lastDateKey}T23:59:59.999Z`),
          },
        }).select('date merchant type amount')
      : [];

    const existingKeys = new Set(existingTransactions.map((t) => makeKey(t)));
    const newDocs = uniqueDocs.filter((doc) => !existingKeys.has(makeKey(doc)));

    if (!newDocs.length) {
      return res.status(200).json({
        message: 'No new transactions saved. These transactions were already imported.',
        count: 0,
        skipped: transactions.length,
      });
    }

    const saved = await Transaction.insertMany(newDocs);
    res.status(201).json({
      message: 'Transactions saved',
      count: saved.length,
      skipped: transactions.length - saved.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const { page = 1, limit = 50, category, merchant, type, startDate, endDate, all } = req.query;

    const filter = { userId: req.user._id };
    if (category) filter.category = { $regex: category, $options: 'i' };
    if (merchant) filter.merchant = { $regex: merchant, $options: 'i' };
    if (type) filter.type = type;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    if (String(all).toLowerCase() === 'true') {
      const transactions = await Transaction.find(filter).sort({ date: -1 });
      return res.json({
        transactions,
        total: transactions.length,
        page: 1,
        pages: 1,
      });
    }

    const total = await Transaction.countDocuments(filter);
    const transactions = await Transaction.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({ transactions, total, page: parseInt(page), pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
