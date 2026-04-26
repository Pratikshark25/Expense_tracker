import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

export default function AccountDetail() {
  const { merchant: merchantParam } = useParams();
  const decodedMerchant = decodeURIComponent(merchantParam || '').trim();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      setError('');
      try {
        const { data } = await api.get('/summary/accounts');
        const match = (Array.isArray(data) ? data : []).find(
          (item) => (item.merchant || '').trim().toLowerCase() === decodedMerchant.toLowerCase()
        );
        setAccount(match || null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load account details');
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [decodedMerchant]);

  const creditTransactions = useMemo(() => {
    if (!account?.transactions) return [];
    return account.transactions
      .filter((tx) => tx.type === 'Credit')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [account]);

  const debitTransactions = useMemo(() => {
    if (!account?.transactions) return [];
    return account.transactions
      .filter((tx) => tx.type === 'Debit')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [account]);

  if (loading) {
    return (
      <div className="page-wrapper fade-in">
        <div className="card">
          <div className="loader-page"><div className="loader" /></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper fade-in">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="page-wrapper fade-in">
        <h1 className="page-title">{decodedMerchant || 'Account'}</h1>
        <p className="page-subtitle">No account transactions found for this person.</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper fade-in">
      <h1 className="page-title">{account.merchant}</h1>
      <p className="page-subtitle">{account.transactionCount} transactions</p>

      <div className="grid-3 mb-6">
        <div className="card">
          <p className="text-sm text-muted mb-4">Total Received</p>
          <h2 className="font-display text-green">{fmt(account.totalCredit)}</h2>
        </div>
        <div className="card">
          <p className="text-sm text-muted mb-4">Total Sent</p>
          <h2 className="font-display text-red">{fmt(account.totalDebit)}</h2>
        </div>
        <div className="card">
          <p className="text-sm text-muted mb-4">Net Balance</p>
          <h2 className={`font-display ${account.netBalance >= 0 ? 'text-green' : 'text-red'}`}>
            {fmt(account.netBalance)}
          </h2>
        </div>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex items-center justify-between" style={{ padding: '16px 16px 8px 16px' }}>
            <h3 className="font-display" style={{ fontSize: '1rem' }}>Money Received</h3>
            <span className="badge badge-credit">{creditTransactions.length}</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {creditTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="text-muted">No credit transactions.</td>
                  </tr>
                ) : (
                  creditTransactions.map((tx) => (
                    <tr key={tx._id || `${tx.date}-${tx.amount}-${tx.type}`}>
                      <td>{fmtDate(tx.date)}</td>
                      <td className="text-green" style={{ fontWeight: 700 }}>{fmt(tx.amount)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex items-center justify-between" style={{ padding: '16px 16px 8px 16px' }}>
            <h3 className="font-display" style={{ fontSize: '1rem' }}>Money Sent</h3>
            <span className="badge badge-debit">{debitTransactions.length}</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {debitTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="text-muted">No debit transactions.</td>
                  </tr>
                ) : (
                  debitTransactions.map((tx) => (
                    <tr key={tx._id || `${tx.date}-${tx.amount}-${tx.type}`}>
                      <td>{fmtDate(tx.date)}</td>
                      <td className="text-red" style={{ fontWeight: 700 }}>{fmt(tx.amount)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
