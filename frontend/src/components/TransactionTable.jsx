import { Trash2 } from 'lucide-react';

const fmt = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

const fmtDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

export default function TransactionTable({ transactions = [], onDelete, compact = false }) {
  if (!transactions.length) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-muted)' }}>
        <p style={{ fontSize: '2rem', marginBottom: 8 }}>📭</p>
        <p>No transactions found</p>
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Type</th>
            <th>Amount</th>
            {!compact && <th>Category</th>}
            {onDelete && <th></th>}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={t._id || i}>
              <td style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                {fmtDate(t.date)}
              </td>
              <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                {t.merchant}
              </td>
              <td>
                <span className={`badge ${t.type === 'Credit' ? 'badge-credit' : 'badge-debit'}`}>
                  {t.type}
                </span>
              </td>
              <td style={{ fontFamily: 'var(--font-display)', fontWeight: 700,
                color: t.type === 'Credit' ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                {t.type === 'Credit' ? '+' : '-'}{fmt(t.amount)}
              </td>
              {!compact && (
                <td>
                  <span style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    background: 'var(--bg-elevated)',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                  }}>
                    {t.category}
                  </span>
                </td>
              )}
              {onDelete && (
                <td>
                  <button
                    onClick={() => onDelete(t._id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text-muted)', padding: '4px', borderRadius: '6px' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-red)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}