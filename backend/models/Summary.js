const mongoose = require('mongoose');

const summaryTransactionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    merchant: { type: String, required: true },
    type: { type: String, enum: ['Credit', 'Debit'], required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { _id: false }
);

const summarySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      default: 'Summary Snapshot',
    },
    transactions: {
      type: [summaryTransactionSchema],
      default: [],
    },
    totals: {
      totalIncome: { type: Number, default: 0 },
      totalExpense: { type: Number, default: 0 },
      categoryBreakdown: { type: Map, of: Number },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Summary', summarySchema);
