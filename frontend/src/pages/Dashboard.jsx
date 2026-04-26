import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  CreditCard,
  Activity,
  Save,
  RefreshCw,
  Bot,
  Send,
  X,
  Repeat,
} from 'lucide-react';
import api from '../api/axios';
import SummaryCard from '../components/SummaryCard';
import TransactionTable from '../components/TransactionTable';

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

const PIE_COLORS = ['#4f8ef7', '#7c6af7', '#22d3a5', '#f7b84f', '#f75f5f', '#f780b0', '#56cfe1'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: '10px 14px',
        }}
      >
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 6 }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ fontSize: '0.875rem', color: p.color, fontWeight: 600 }}>
            {p.name}: {fmt(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [aiInsights, setAiInsights] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionTotal, setSubscriptionTotal] = useState(0);
  const [compareMode, setCompareMode] = useState(false);
  const [comparison, setComparison] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Ask me about your spending, merchants, categories, or savings trend.' },
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const navigate = useNavigate();

  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    try {
      const { data: res } = await api.get('/summary/dashboard');
      setData(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const fetchAiPanels = useCallback(async () => {
    try {
      const [insightsRes, subscriptionsRes] = await Promise.all([
        api.get('/ai/insights'),
        api.get('/ai/subscriptions'),
      ]);
      setAiInsights(insightsRes.data.insights || []);
      setSubscriptions(subscriptionsRes.data.subscriptions || []);
      setSubscriptionTotal(subscriptionsRes.data.totalMonthlyCost || 0);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAiPanels();
  }, [fetchAiPanels]);

  const getMonthRange = (offset = 0) => {
    const now = new Date();
    const first = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    const last = new Date(now.getFullYear(), now.getMonth() + offset + 1, 0);
    const toIso = (date) => date.toISOString().slice(0, 10);
    return { from: toIso(first), to: toIso(last) };
  };

  const toggleCompareMode = async () => {
    const next = !compareMode;
    setCompareMode(next);

    if (!next) {
      setComparison(null);
      return;
    }

    try {
      const current = getMonthRange(0);
      const previous = getMonthRange(-1);
      const { data: result } = await api.get('/summary', {
        params: {
          from: current.from,
          to: current.to,
          compareFrom: previous.from,
          compareTo: previous.to,
        },
      });
      setComparison(result.comparison || null);
    } catch (err) {
      console.error(err);
      setComparison(null);
    }
  };

  const sendChat = async () => {
    const query = chatInput.trim();
    if (!query || chatLoading) return;

    setChatInput('');
    setChatMessages((prev) => [...prev, { role: 'user', text: query }]);
    setChatLoading(true);

    try {
      const { data: response } = await api.post('/ai/chat', { query });
      setChatMessages((prev) => [...prev, { role: 'assistant', text: response.answer || 'I could not answer that yet.' }]);
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: err.response?.data?.message || 'The AI chat is unavailable right now.' },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleSaveSnapshot = async () => {
    setSaving(true);
    setSaveMsg('');
    try {
      const { data: saved } = await api.post('/summary/save');
      if (saved?.summaryId) {
        setSaveMsg('Snapshot saved to history and database successfully.');
      } else {
        setSaveMsg('Snapshot request completed, but save could not be verified.');
      }
      await fetchDashboard();
      await fetchAiPanels();
      setTimeout(() => setSaveMsg(''), 3000);
    } catch (err) {
      setSaveMsg(err.response?.data?.message || 'Failed to save snapshot');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="loader-page"><div className="loader" /></div>
      </div>
    );
  }

  if (!data) return null;

  const {
    totalIncome,
    totalExpense,
    categoryBreakdown = {},
    totalCount,
    latestTransactions = [],
    chartData = [],
  } = data;

  const categories = Object.entries(categoryBreakdown).sort((a, b) => b[1] - a[1]);
  const pieData = categories.map(([name, value]) => ({ name, value }));
  const summaryChartData = chartData.slice(-14).map((d) => ({
    date: new Date(d.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
    ...d,
  }));
  const categoryKeys = [...new Set(chartData.flatMap((d) => Object.keys(d).filter((k) => k !== 'date')))];
  const comparisonChartData = comparison
    ? [
        { name: 'Income', Current: comparison.current.income, Previous: comparison.previous.income },
        { name: 'Expense', Current: comparison.current.expense, Previous: comparison.previous.expense },
      ]
    : [];

  return (
    <div className="page-wrapper fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Your financial overview at a glance</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-sm" onClick={fetchDashboard}>
            <RefreshCw size={14} /> Refresh
          </button>
          <button className={`btn ${compareMode ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={toggleCompareMode}>
            Compare with last month
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleSaveSnapshot} disabled={saving || !totalCount}>
            <Save size={14} /> {saving ? 'Saving...' : 'Save Snapshot'}
          </button>
        </div>
      </div>

      {saveMsg && (
        <div className={`alert ${saveMsg.toLowerCase().includes('saved') ? 'alert-success' : 'alert-error'}`}>
          {saveMsg}
        </div>
      )}

      {totalCount === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: '3rem', marginBottom: 12 }}>No data</p>
          <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 8 }}>No data yet</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
            Upload a PDF statement to start tracking your expenses
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/upload')}>
            Upload PDF
          </button>
        </div>
      ) : (
        <>
          <div className="grid-4 mb-6">
            <SummaryCard
              title="Total Income"
              value={fmt(totalIncome)}
              subtitle="All credit transactions"
              icon={TrendingUp}
              color="green"
            />
            <SummaryCard
              title="Total Expenses"
              value={fmt(totalExpense)}
              subtitle="All debit transactions"
              icon={TrendingDown}
              color="red"
            />
            <SummaryCard
              title="Net Balance"
              value={fmt(totalIncome - totalExpense)}
              subtitle="Income minus expenses"
              icon={Activity}
              color={totalIncome - totalExpense >= 0 ? 'green' : 'red'}
            />
            <SummaryCard
              title="Total Transactions"
              value={totalCount.toString()}
              subtitle="All time transactions"
              icon={CreditCard}
              color="blue"
            />
          </div>

          <div className="card mb-6">
            <div className="ai-insights-header">
              <div>
                <p className="ai-eyebrow">AI financial analyst</p>
                <h3>AI Insights</h3>
              </div>
              <span>{aiInsights.length || 0} signals</span>
            </div>
            {aiInsights.length > 0 ? (
              <div className="ai-insights-grid">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className={`ai-insight-tile tone-${index % 4}`}
                  >
                    <div className="ai-insight-rank">{String(index + 1).padStart(2, '0')}</div>
                    <p>
                      {typeof insight === 'string' ? insight : insight.message}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Upload and save more transactions to generate personalized AI insights.
              </p>
            )}
          </div>

          {compareMode && comparison && (
            <div className="grid-2 mb-6">
              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>
                  Month Comparison
                </h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={comparisonChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis
                      tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `INR ${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }} />
                    <Bar dataKey="Previous" fill="#56cfe1" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="Current" fill="#f7b84f" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>
                  Category Differences
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 220, overflowY: 'auto' }}>
                  {comparison.categories.slice(0, 8).map((item) => (
                    <div key={item.category} className="flex items-center justify-between gap-2">
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item.category}</span>
                      <span
                        style={{
                          color: item.difference > 0 ? 'var(--accent-red)' : 'var(--accent-green)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.difference >= 0 ? '+' : ''}{fmt(item.difference)} ({item.percentChange}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="card mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
                Monthly Subscriptions
              </h3>
              <span className="badge badge-debit">
                <Repeat size={12} /> {fmt(subscriptionTotal)} / month
              </span>
            </div>
            {subscriptions.length > 0 ? (
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Merchant</th>
                      <th>Category</th>
                      <th>Monthly Cost</th>
                      <th>Detected Since</th>
                      <th>Payments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((sub) => (
                      <tr key={`${sub.merchant}-${sub.firstDate}`}>
                        <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{sub.merchant}</td>
                        <td>{sub.category}</td>
                        <td style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                          {fmt(sub.monthlyCost)}
                        </td>
                        <td>{new Date(sub.firstDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</td>
                        <td>{sub.transactionCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                No recurring monthly payments detected yet. Add at least two similar debit transactions from the same merchant across nearby months.
              </p>
            )}
          </div>

          <div className="grid-2 mb-6">
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 20 }}>
                Spending Trend
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={summaryChartData}>
                  <defs>
                    {categoryKeys.slice(0, 3).map((k, i) => (
                      <linearGradient key={k} id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={PIE_COLORS[i]} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={PIE_COLORS[i]} stopOpacity={0} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `INR ${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }} />
                  {categoryKeys.slice(0, 4).map((k, i) => (
                    <Area
                      key={k}
                      type="monotone"
                      dataKey={k}
                      name={k}
                      stroke={PIE_COLORS[i % PIE_COLORS.length]}
                      fill={`url(#grad-${i})`}
                      strokeWidth={2}
                    />
                  ))}
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 20 }}>
                Category Breakdown
              </h3>
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v) => fmt(v)}
                      contentStyle={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        borderRadius: 10,
                        fontSize: '0.8rem',
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '60px 0' }}>
                  No expense data yet
                </p>
              )}
            </div>
          </div>

          <div className="card mb-6">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 20 }}>
              Category-wise Expenditure
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={categories.map(([name, value]) => ({ name, value }))} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `INR ${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Amount" radius={[6, 6, 0, 0]}>
                  {categories.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>Latest Transactions</h3>
              <button className="btn btn-secondary btn-sm" onClick={() => navigate('/transactions')}>
                View All
              </button>
            </div>
            <TransactionTable transactions={latestTransactions} />
          </div>
        </>
      )}

      <button
        className="ai-chat-fab"
        onClick={() => setChatOpen((open) => !open)}
        aria-label="Open AI chat"
      >
        {chatOpen ? <X size={20} /> : <Bot size={20} />}
        <span>{chatOpen ? 'Close chat' : 'Ask AI'}</span>
      </button>

      {chatOpen && (
        <div className="ai-chat-panel">
          <div className="ai-chat-header">
            <div>
              <h3>Ask Finsight</h3>
              <p>Questions about your spending</p>
            </div>
            <button onClick={() => setChatOpen(false)} aria-label="Close chat">
              <X size={16} />
            </button>
          </div>
          <div className="ai-chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className={`ai-chat-bubble ${message.role}`}>
                {message.text}
              </div>
            ))}
            {chatLoading && <div className="ai-chat-bubble assistant">Thinking...</div>}
          </div>
          <div className="ai-chat-input">
            <input
              className="form-input"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
              placeholder="How much did I spend on food last month?"
            />
            <button className="btn btn-primary btn-sm" onClick={sendChat} disabled={!chatInput.trim() || chatLoading}>
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          text-align: center;
        }
        .ai-insights-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .ai-insights-header h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
        }
        .ai-eyebrow {
          color: var(--accent-green);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .ai-insights-header span {
          color: var(--text-muted);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          padding: 5px 10px;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .ai-insights-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        .ai-insight-tile {
          position: relative;
          min-height: 132px;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          overflow: hidden;
        }
        .ai-insight-tile:nth-child(1),
        .ai-insight-tile:nth-child(2) {
          grid-column: span 3;
        }
        .ai-insight-tile:nth-child(n+3) {
          grid-column: span 2;
        }
        .ai-insight-tile::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--accent-primary);
        }
        .ai-insight-tile.tone-1::before { background: var(--accent-green); }
        .ai-insight-tile.tone-2::before { background: var(--accent-amber); }
        .ai-insight-tile.tone-3::before { background: var(--accent-red); }
        .ai-insight-rank {
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .ai-insight-tile p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .ai-insights-grid {
            grid-template-columns: 1fr;
          }
          .ai-insight-tile:nth-child(n) {
            grid-column: auto;
          }
        }
        .ai-chat-fab {
          position: fixed;
          right: 26px;
          bottom: 26px;
          min-width: 104px;
          height: 50px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          background: var(--accent-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 16px;
          font-family: var(--font-body);
          font-weight: 700;
          cursor: pointer;
          box-shadow: var(--shadow-card);
          z-index: 20;
        }
        .ai-chat-panel {
          position: fixed;
          right: 26px;
          bottom: 88px;
          width: min(380px, calc(100vw - 32px));
          height: 480px;
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 20;
        }
        .ai-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-elevated);
        }
        .ai-chat-header h3 { font-size: 1rem; }
        .ai-chat-header p { font-size: 0.75rem; color: var(--text-muted); }
        .ai-chat-header button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
        }
        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 14px;
        }
        .ai-chat-bubble {
          max-width: 86%;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          line-height: 1.45;
          white-space: pre-line;
        }
        .ai-chat-bubble.assistant {
          align-self: flex-start;
          background: var(--bg-elevated);
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }
        .ai-chat-bubble.user {
          align-self: flex-end;
          background: var(--accent-primary);
          color: #fff;
        }
        .ai-chat-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid var(--border);
          background: var(--bg-elevated);
        }
      `}</style>
    </div>
  );
}
