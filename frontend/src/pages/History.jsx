import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { Clock, ChevronRight, Trash2, ArrowLeft, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import api from '../api/axios';
import InsightCard from '../components/InsightCard';
import TransactionTable from '../components/TransactionTable';
import SummaryCard from '../components/SummaryCard';

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const PIE_COLORS = ['#4f8ef7', '#7c6af7', '#22d3a5', '#f7b84f', '#f75f5f', '#f780b0', '#56cfe1'];

const normalizeCategoryBreakdown = (value) => {
  if (!value) return {};
  if (Array.isArray(value)) return Object.fromEntries(value);
  if (typeof value === 'object') return value;
  return {};
};

export default function History() {
  const [summaries, setSummaries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    api.get('/summary/history')
      .then(({ data }) => setSummaries(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const openSummary = async (id) => {
    setDetailLoading(true);
    try {
      const { data } = await api.get(`/summary/history/${id}`);
      setSelected(data);
    } catch (err) {
      alert('Failed to load summary');
    } finally {
      setDetailLoading(false);
    }
  };

  const deleteSummary = async (id, e) => {
    e.stopPropagation();
    if (!confirm('Delete this snapshot?')) return;
    try {
      await api.delete(`/summary/history/${id}`);
      setSummaries((prev) => prev.filter((s) => s._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch { alert('Failed to delete'); }
  };
  if (selected) {
    const totals = selected.totals || {};
    const catBreakdown = normalizeCategoryBreakdown(totals.categoryBreakdown);
    const categories = Object.entries(catBreakdown).sort((a, b) => b[1] - a[1]);
    const chartData = (selected.chartData || []).map((d) => ({
      ...d,
      date: new Date(d.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
    }));
    const catKeys = [...new Set((selected.chartData || []).flatMap((d) => Object.keys(d).filter((k) => k !== 'date')))];

    return (
      <div className="page-wrapper fade-in">
        <button className="btn btn-secondary btn-sm mb-6" onClick={() => setSelected(null)}>
          <ArrowLeft size={14} /> Back to History
        </button>

        <h1 className="page-title">{selected.title}</h1>
        <p className="page-subtitle">
          Snapshot from {new Date(selected.createdAt).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'long', year: 'numeric',
          })}
        </p>

        <div className="grid-3 mb-6">
          <SummaryCard title="Total Income" value={fmt(totals.totalIncome || 0)} icon={TrendingUp} color="green" />
          <SummaryCard title="Total Expenses" value={fmt(totals.totalExpense || 0)} icon={TrendingDown} color="red" />
          <SummaryCard title="Transactions" value={(selected.transactions?.length || 0).toString()} icon={Activity} color="blue" />
        </div>

        <InsightCard insights={selected.insights || []} />

        {chartData.length > 0 && (
          <div className="card mb-6">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 20 }}>
              📈 Spending Trend
            </h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="date" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 10 }} />
                {catKeys.slice(0, 4).map((k, i) => (
                  <Area key={k} type="monotone" dataKey={k} name={k}
                    stroke={PIE_COLORS[i % PIE_COLORS.length]}
                    fill={PIE_COLORS[i % PIE_COLORS.length]}
                    fillOpacity={0.12} strokeWidth={2} />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {categories.length > 0 && (
          <div className="card mb-6">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 20 }}>
              📊 Category Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={categories.map(([name, value]) => ({ name, value }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 10 }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {categories.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>
            All Transactions
          </h3>
          <TransactionTable transactions={selected.transactions || []} />
        </div>
      </div>
    );
  }
  return (
    <div className="page-wrapper fade-in">
      <h1 className="page-title">History</h1>
      <p className="page-subtitle">Past snapshots of your expense summaries</p>

      {loading ? (
        <div className="loader-page"><div className="loader" /></div>
      ) : summaries.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontSize: '2.5rem', marginBottom: 12 }}>🗂️</p>
          <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 8 }}>No snapshots yet</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Go to Dashboard and click "Save Snapshot" to create your first history entry.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {summaries.map((s, i) => {
            const catBreakdown = normalizeCategoryBreakdown(s.totals?.categoryBreakdown);
            const topCats = Object.entries(catBreakdown)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3);

            return (
              <div
                key={s._id}
                className="card history-item fade-in"
                style={{ animationDelay: `${i * 0.04}s`, cursor: 'pointer' }}
                onClick={() => openSummary(s._id)}
              >
                <div className="history-item-inner">
                  <div className="history-icon">
                    <Clock size={18} color="var(--accent-primary)" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="flex items-center gap-2 mb-1">
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>
                        {s.title}
                      </p>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8 }}>
                      {new Date(s.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit', month: 'long', year: 'numeric',
                        hour: '2-digit', minute: '2-digit',
                      })}
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Income</span>
                        <p style={{ fontWeight: 700, color: 'var(--accent-green)', fontSize: '0.9rem' }}>
                          {fmt(s.totals?.totalIncome || 0)}
                        </p>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Expenses</span>
                        <p style={{ fontWeight: 700, color: 'var(--accent-red)', fontSize: '0.9rem' }}>
                          {fmt(s.totals?.totalExpense || 0)}
                        </p>
                      </div>
                      {topCats.length > 0 && (
                        <div>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top Categories</span>
                          <div style={{ display: 'flex', gap: 4, marginTop: 2, flexWrap: 'wrap' }}>
                            {topCats.map(([cat]) => (
                              <span key={cat} style={{
                                fontSize: '0.7rem', padding: '2px 8px',
                                background: 'var(--bg-elevated)', borderRadius: 99,
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)',
                              }}>{cat}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => deleteSummary(s._id, e)}
                      style={{ padding: '6px 10px' }}
                    >
                      <Trash2 size={13} />
                    </button>
                    <ChevronRight size={18} color="var(--text-muted)" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {detailLoading && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(8,12,20,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999,
        }}>
          <div className="loader" style={{ width: 32, height: 32, borderWidth: 3 }} />
        </div>
      )}

      <style>{`
        .history-item { transition: all 0.18s; }
        .history-item:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,142,247,0.12);
        }
        .history-item-inner {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .history-icon {
          width: 40px;
          height: 40px;
          background: rgba(79,142,247,0.1);
          border-radius: 12px;
          border: 1px solid rgba(79,142,247,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
}
