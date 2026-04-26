const { GoogleGenerativeAI } = require('@google/generative-ai');

const CATEGORIES = [
  'Food',
  'Shopping',
  'Groceries',
  'Medical',
  'Travel',
  'Bills',
  'Education',
  'Entertainment',
  'Transport',
  'Investment',
  'Others',
];

const apiKey = String(process.env.GEMINI_API_KEY || '').trim();
const hasUsableApiKey = apiKey && apiKey !== 'your_gemini_api_key_here';
const genAI = hasUsableApiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI
  ? genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
    })
  : null;

function assertModel() {
  if (!model) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
}

function cleanJsonText(text = '') {
  return String(text)
    .trim()
    .replace(/^```(?:json)?/i, '')
    .replace(/```$/i, '')
    .trim();
}

function parseJsonArray(text) {
  const cleaned = cleanJsonText(text);
  try {
    const parsed = JSON.parse(cleaned);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    const start = cleaned.indexOf('[');
    const end = cleaned.lastIndexOf(']');
    if (start === -1 || end === -1 || end <= start) return [];
    try {
      const parsed = JSON.parse(cleaned.slice(start, end + 1));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}

function normalizeCategory(value) {
  const text = String(value || '').trim();
  const matched = CATEGORIES.find((category) => category.toLowerCase() === text.toLowerCase());
  return matched || 'Others';
}

function formatInr(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);
}

function getCalendarMonth(offset = 0) {
  const now = new Date();
  const date = new Date(Date.UTC(now.getFullYear(), now.getMonth() + offset, 1));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

function resolveMonth(query, context = {}) {
  const lower = query.toLowerCase();
  if (lower.includes('last month')) return getCalendarMonth(-1);
  if (lower.includes('this month') || lower.includes('current month')) return getCalendarMonth(0);

  const monthNames = {
    jan: '01',
    january: '01',
    feb: '02',
    february: '02',
    mar: '03',
    march: '03',
    apr: '04',
    april: '04',
    may: '05',
    jun: '06',
    june: '06',
    jul: '07',
    july: '07',
    aug: '08',
    august: '08',
    sep: '09',
    sept: '09',
    september: '09',
    oct: '10',
    october: '10',
    nov: '11',
    november: '11',
    dec: '12',
    december: '12',
  };

  const explicitYear = lower.match(/\b(20\d{2})\b/);
  for (const [name, number] of Object.entries(monthNames)) {
    if (lower.includes(name)) {
      const year = explicitYear?.[1] || String(new Date().getFullYear());
      return `${year}-${number}`;
    }
  }

  const months = Object.keys(context.byMonth || {}).sort();
  return months[months.length - 1] || getCalendarMonth(0);
}

function findNamedKey(query, object = {}) {
  const lower = query.toLowerCase();
  return Object.keys(object).find((key) => lower.includes(key.toLowerCase()));
}

function topEntry(object = {}) {
  return Object.entries(object).sort((a, b) => Number(b[1]) - Number(a[1]))[0] || null;
}

function isFinanceQuery(query) {
  const lower = String(query || '').toLowerCase();
  const financeTerms = [
    'spend',
    'spent',
    'expense',
    'expenses',
    'income',
    'saving',
    'savings',
    'balance',
    'transaction',
    'transactions',
    'merchant',
    'category',
    'categories',
    'paid',
    'pay',
    'payment',
    'credit',
    'debit',
    'subscription',
    'recurring',
    'bill',
    'budget',
    'money',
    'food',
    'shopping',
    'groceries',
    'medical',
    'travel',
    'transport',
    'investment',
    'entertainment',
    'month',
    'trend',
    'compare',
    'comparison',
    'highest',
    'lowest',
    'top',
  ];

  return financeTerms.some((term) => lower.includes(term));
}

function percentChange(current, previous) {
  if (!previous && !current) return 0;
  if (!previous) return 100;
  return ((current - previous) / previous) * 100;
}

function trendText(current, previous) {
  const change = percentChange(current, previous);
  if (Math.abs(change) < 1) return 'almost unchanged';
  return `${Math.abs(change).toFixed(1)}% ${change > 0 ? 'higher' : 'lower'}`;
}

function previousMonthKey(month) {
  const [year, monthNumber] = String(month || '').split('-').map(Number);
  if (!year || !monthNumber) return null;
  const date = new Date(Date.UTC(year, monthNumber - 2, 1));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

function formatTopEntries(object = {}, count = 3) {
  return Object.entries(object)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, count)
    .map(([name, value]) => `${name}: ${formatInr(value)}`);
}

function fallbackInsights(data = {}) {
  const insights = [];
  const categoryEntries = Object.entries(data.byCategory || {}).sort((a, b) => b[1] - a[1]);
  const merchantEntries = Object.entries(data.byMerchant || {}).sort((a, b) => b[1] - a[1]);
  const monthEntries = Object.entries(data.byMonth || {}).sort(([a], [b]) => a.localeCompare(b));
  const totalExpense = categoryEntries.reduce((sum, [, amount]) => sum + (Number(amount) || 0), 0);

  if (categoryEntries.length && totalExpense > 0) {
    const [category, amount] = categoryEntries[0];
    insights.push(
      `${category} expenses (${formatInr(amount)}) take up ${((amount / totalExpense) * 100).toFixed(1)}% of your total spending, making it your dominant category.`
    );
  }

  const weekend = Number(data.byDayType?.weekend) || 0;
  const weekday = Number(data.byDayType?.weekday) || 0;
  if (weekend || weekday) {
    const stronger = weekend > weekday ? 'weekends' : 'weekdays';
    const amount = Math.max(weekend, weekday);
    insights.push(
      `Your spending is heavier on ${stronger} (${formatInr(amount)}), which hints at a clear timing pattern in your purchases.`
    );
  }

  const frequentMerchant = Object.entries(data.merchantCounts || {}).sort((a, b) => b[1] - a[1])[0];
  if (frequentMerchant && frequentMerchant[1] >= 2) {
    const merchantSpend = data.byMerchant?.[frequentMerchant[0]] || 0;
    insights.push(
      `You paid '${frequentMerchant[0]}' ${frequentMerchant[1]} times, totaling ${formatInr(merchantSpend)}, so this merchant is a repeated behavior worth watching.`
    );
  } else if (merchantEntries.length) {
    insights.push(
      `Your largest merchant outflow is '${merchantEntries[0][0]}' at ${formatInr(merchantEntries[0][1])}, making it your biggest single payee.`
    );
  }

  if (monthEntries.length >= 2) {
    const [previousMonth, previousTotals] = monthEntries[monthEntries.length - 2];
    const [currentMonth, currentTotals] = monthEntries[monthEntries.length - 1];
    insights.push(
      `Expenses in ${currentMonth} are ${trendText(currentTotals.expense, previousTotals.expense)} than ${previousMonth}, moving from ${formatInr(previousTotals.expense)} to ${formatInr(currentTotals.expense)}.`
    );

    const savings = (currentTotals.income || 0) - (currentTotals.expense || 0);
    const ratio = currentTotals.income ? ((savings / currentTotals.income) * 100).toFixed(1) : '0.0';
    insights.push(
      `Your ${currentMonth} savings ratio is ${ratio}%, with ${formatInr(savings)} left after expenses.`
    );
  } else if (monthEntries.length === 1) {
    const [month, totals] = monthEntries[0];
    const savings = (totals.income || 0) - (totals.expense || 0);
    insights.push(
      `For ${month}, your savings after expenses are ${formatInr(savings)}, based on ${formatInr(totals.income)} income and ${formatInr(totals.expense)} expenses.`
    );
  }

  const dailySpike = Object.entries(data.dailyExpense || {}).sort((a, b) => b[1] - a[1])[0];
  if (dailySpike) {
    insights.push(
      `${dailySpike[0]} stands out as your highest spending day at ${formatInr(dailySpike[1])}, so it may be worth checking what drove that spike.`
    );
  }

  return [...new Set(insights)].slice(0, 6);
}

function localChatFallback(query, context = {}) {
  const lower = query.toLowerCase();

  if (!isFinanceQuery(query)) {
    return [
      'I can only help with your Finsight financial data.',
      'Ask me about spending, income, categories, merchants, subscriptions, trends, or month-to-month comparisons.',
    ].join('\n');
  }

  if (!context.transactionCount) {
    return 'I do not have any saved transactions to analyze yet. Upload and save transactions first, then ask me again.';
  }

  const month = resolveMonth(query, context);
  const previousMonth = previousMonthKey(month);
  const monthCategoryData = context.byCategoryMonth?.[month] || {};
  const monthMerchantData = context.byMerchantMonth?.[month] || {};
  const monthTotals = context.byMonth?.[month];
  const previousTotals = context.byMonth?.[previousMonth] || { income: 0, expense: 0 };
  const previousCategoryData = context.byCategoryMonth?.[previousMonth] || {};
  const previousMerchantData = context.byMerchantMonth?.[previousMonth] || {};

  const category = findNamedKey(query, context.byCategory || {});
  if (category && (lower.includes('spend') || lower.includes('spent') || lower.includes('expense'))) {
    const amount = lower.includes('month') ? monthCategoryData[category] || 0 : context.byCategory[category] || 0;
    const previousAmount = lower.includes('month') ? previousCategoryData[category] || 0 : 0;
    return lower.includes('month')
      ? [
          `You spent ${formatInr(amount)} on ${category} in ${month}.`,
          `Compared with ${previousMonth}, that is ${trendText(amount, previousAmount)}.`,
          `This category made up ${monthTotals?.expense ? ((amount / monthTotals.expense) * 100).toFixed(1) : 0}% of your monthly expenses.`,
        ].join('\n')
      : [
          `You spent ${formatInr(amount)} on ${category} across your saved transactions.`,
          `Top overall categories are ${formatTopEntries(context.byCategory).join(', ')}.`,
        ].join('\n');
  }

  const merchant = findNamedKey(query, context.byMerchant || {});
  if (merchant && (lower.includes('pay') || lower.includes('paid') || lower.includes('spend') || lower.includes('spent'))) {
    const amount = lower.includes('month') ? monthMerchantData[merchant] || 0 : context.byMerchant[merchant] || 0;
    const previousAmount = lower.includes('month') ? previousMerchantData[merchant] || 0 : 0;
    return lower.includes('month')
      ? [
          `You paid ${merchant} ${formatInr(amount)} in ${month}.`,
          `Compared with ${previousMonth}, that is ${trendText(amount, previousAmount)}.`,
          `Top merchants that month were ${formatTopEntries(monthMerchantData).join(', ') || 'not available'}.`,
        ].join('\n')
      : [
          `You paid ${merchant} ${formatInr(amount)} across your saved transactions.`,
          `Your top paid merchants are ${formatTopEntries(context.byMerchant).join(', ')}.`,
        ].join('\n');
  }

  if (lower.includes('who') && (lower.includes('most') || lower.includes('highest'))) {
    const entry = topEntry(lower.includes('month') ? monthMerchantData : context.byMerchant);
    if (!entry) return 'I could not find merchant spending for that period.';
    const previousAmount = lower.includes('month') ? previousMerchantData[entry[0]] || 0 : 0;
    return [
      `You paid ${entry[0]} the most: ${formatInr(entry[1])}${lower.includes('month') ? ` in ${month}` : ''}.`,
      lower.includes('month') ? `Compared with ${previousMonth}, payments to this merchant are ${trendText(entry[1], previousAmount)}.` : `Top merchants are ${formatTopEntries(context.byMerchant).join(', ')}.`,
    ].join('\n');
  }

  if (lower.includes('highest') || lower.includes('biggest') || lower.includes('top category')) {
    const entry = topEntry(lower.includes('month') ? monthCategoryData : context.byCategory);
    if (!entry) return 'I could not find category spending for that period.';
    const previousAmount = lower.includes('month') ? previousCategoryData[entry[0]] || 0 : 0;
    return [
      `Your highest spending category is ${entry[0]} at ${formatInr(entry[1])}${lower.includes('month') ? ` in ${month}` : ''}.`,
      lower.includes('month') ? `Compared with ${previousMonth}, this category is ${trendText(entry[1], previousAmount)}.` : `Top categories are ${formatTopEntries(context.byCategory).join(', ')}.`,
    ].join('\n');
  }

  if (lower.includes('income') || lower.includes('expense') || lower.includes('balance') || lower.includes('saving')) {
    const source = lower.includes('month') && monthTotals ? monthTotals : Object.values(context.byMonth || {}).reduce(
      (acc, item) => ({
        income: acc.income + (Number(item.income) || 0),
        expense: acc.expense + (Number(item.expense) || 0),
      }),
      { income: 0, expense: 0 }
    );
    const balance = source.income - source.expense;
    const previousBalance = previousTotals.income - previousTotals.expense;
    return [
      `Income is ${formatInr(source.income)}, expenses are ${formatInr(source.expense)}, and net savings are ${formatInr(balance)}${lower.includes('month') ? ` for ${month}` : ''}.`,
      lower.includes('month') ? `Expense trend: ${trendText(source.expense, previousTotals.expense)} than ${previousMonth}. Savings trend: ${trendText(balance, previousBalance)} than ${previousMonth}.` : `Your strongest spending areas are ${formatTopEntries(context.byCategory).join(', ')}.`,
    ].join('\n');
  }

  const topCategory = topEntry(context.byCategory);
  const topMerchant = topEntry(context.byMerchant);
  if (topCategory && topMerchant) {
    const monthExpense = monthTotals?.expense || 0;
    return [
      `Here is the current story from your saved transactions.`,
      `Top category: ${topCategory[0]} (${formatInr(topCategory[1])}). Top paid merchant: ${topMerchant[0]} (${formatInr(topMerchant[1])}).`,
      `${month} expenses are ${formatInr(monthExpense)}, which is ${trendText(monthExpense, previousTotals.expense)} than ${previousMonth}.`,
      `Top ${month} categories: ${formatTopEntries(monthCategoryData).join(', ') || 'not available'}.`,
    ].join('\n');
  }

  return 'I can read your saved transactions, but I need a more specific question about a category, merchant, month, income, or expenses.';
}

async function generateText(prompt) {
  assertModel();
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}

async function categorizeTransaction(data = {}) {
  try {
    const prompt = `
Categorize this transaction into exactly one category:
${CATEGORIES.join(', ')}.

Transaction:
Merchant: ${data.merchant || ''}
Description: ${data.description || ''}
Amount: ${data.amount || ''}

Return only the category name.`;

    const text = await generateText(prompt);
    return normalizeCategory(text);
  } catch (error) {
    console.warn('AI categorization failed:', error.message);
    return 'Others';
  }
}

async function extractTransactions(text) {
  const prompt = `
Extract transactions from this statement text and return a JSON array.

Format:
[
  { "date": "YYYY-MM-DD", "merchant": "", "amount": "", "type": "credit/debit" }
]

Rules:
- Return ONLY valid JSON.
- Ignore headers, balances, IDs, notes, and duplicated noise.
- Normalize INR amounts as plain numbers without currency symbols or commas.
- Use "credit" or "debit" only for type.

Text:
${String(text || '').slice(0, 45000)}`;

  const response = await generateText(prompt);
  return parseJsonArray(response);
}

async function generateInsights(data) {
  try {
    const prompt = `
You are a personal financial analyst.

Analyze the user's financial data and generate UNIQUE, SPECIFIC, and INSIGHTFUL observations.

---

## USER DATA:

${JSON.stringify(data).slice(0, 45000)}

---

## INSTRUCTIONS:

1. Generate 5-6 insights based ONLY on the data.
2. Avoid generic statements like:
- "You spent money on food"
- "Your expenses are high"
3. Focus on:
- Spending patterns (weekends vs weekdays)
- Category dominance (which category is unusually high)
- Sudden spikes or drops
- Repeated merchants or behaviors
- Savings vs expenses ratio
- Comparison with previous period (if available)
4. Highlight unusual or surprising behavior.
5. Use clear, natural, human-like language.
6. Keep each insight short (1-2 lines).
7. Use Indian Rupee format (₹).
8. Make insights feel personalized (like advice, not data).

---

## GOOD EXAMPLES:

- "Food expenses (₹8,200) take up nearly 35% of your total spending, making it your dominant expense category."
- "Your spending spikes on weekends, suggesting more discretionary purchases during that time."
- "You paid 'Swiggy' 12 times this month, indicating frequent food delivery usage."
- "Expenses increased by 22% compared to last month, mainly driven by Shopping."

---

## BAD EXAMPLES (DO NOT GENERATE):

- "You spent money on groceries."
- "Your expenses are high."
- "You have transactions."

---

## OUTPUT FORMAT:

Return ONLY a valid JSON array of strings:

[
  "Insight 1",
  "Insight 2",
  "Insight 3",
  "Insight 4",
  "Insight 5"
]

Do not include any explanation or extra text.`;

    const response = await generateText(prompt);
    const parsed = parseJsonArray(response)
      .map((item) => (typeof item === 'string' ? item : item?.message))
      .map((message) => String(message || '').trim())
      .filter(Boolean)
      .slice(0, 6);

    return parsed.length ? parsed : fallbackInsights(data);
  } catch (error) {
    console.warn('AI insights failed:', error.message);
    return fallbackInsights(data);
  }
}

async function chatWithAI(query, context) {
  try {
    if (!isFinanceQuery(query)) {
      return localChatFallback(query, context);
    }

    const prompt = `
You are Finsight, a financial assistant restricted to this app's expense tracking domain.
You must only answer questions about the user's uploaded financial data: spending, income, savings, categories, merchants, subscriptions, recurring payments, trends, and comparisons.
If the user asks anything outside personal finance or this transaction dataset, refuse politely in one or two sentences and suggest a finance question.

User question: ${query}

Financial data:
${JSON.stringify(context).slice(0, 45000)}

Answer in a detailed but readable way:
- Start with the direct answer.
- Include INR totals.
- Compare the relevant month with the previous month when possible.
- Mention category or merchant trends when relevant.
- Add a short takeaway or caution.
- Do not invent data. If data is missing, say exactly what is missing.`;

    return await generateText(prompt);
  } catch (error) {
    console.warn('AI chat failed, using local fallback:', error.message);
    return localChatFallback(query, context);
  }
}

module.exports = {
  CATEGORIES,
  categorizeTransaction,
  extractTransactions,
  generateInsights,
  chatWithAI,
  normalizeCategory,
  localChatFallback,
  isFinanceQuery,
  fallbackInsights,
};
