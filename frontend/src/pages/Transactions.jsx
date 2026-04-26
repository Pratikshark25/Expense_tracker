import { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import TransactionTable from '../components/TransactionTable';

export default function Transactions() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [accountsLoading, setAccountsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [filters, setFilters] = useState({ merchant: '', category: '', type: '', startDate: '', endDate: '' });
  const [applied, setApplied] = useState({});
  const [accountQuery, setAccountQuery] = useState('');
  const [accountHistory, setAccountHistory] = useState([]);
  const [searchingAccount, setSearchingAccount] = useState(false);
  const [accountSearched, setAccountSearched] = useState(false);
  const [categoryQuery, setCategoryQuery] = useState('');
  const [categoryHistory, setCategoryHistory] = useState([]);
  const [searchingCategory, setSearchingCategory] = useState(false);
  const [categorySearched, setCategorySearched] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const fmt = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    try {
      const hasHistoryFilter = Boolean(applied.merchant || applied.category);
      const params = new URLSearchParams(
        hasHistoryFilter ? { all: 'true' } : { page, limit: 20 }
      );
      if (applied.merchant) params.append('merchant', applied.merchant);
      if (applied.category) params.append('category', applied.category);
      if (applied.type) params.append('type', applied.type);
      if (applied.startDate) params.append('startDate', applied.startDate);
      if (applied.endDate) params.append('endDate', applied.endDate);

      const { data } = await api.get(`/transactions?${params}`);
      setTransactions(data.transactions);
      setTotal(data.total);
      setPages(data.pages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, applied]);

  useEffect(() => { fetchTransactions(); }, [fetchTransactions]);

  const fetchAccounts = useCallback(async () => {
    setAccountsLoading(true);
    try {
      const { data } = await api.get('/summary/accounts');
      setAccounts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setAccounts([]);
    } finally {
      setAccountsLoading(false);
    }
  }, []);

  useEffect(() => { fetchAccounts(); }, [fetchAccounts]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/summary/dashboard');
        setCategoryOptions(Object.keys(data.categoryBreakdown || {}).sort((a, b) => a.localeCompare(b)));
      } catch (err) {
        console.error(err);
        setCategoryOptions([]);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this transaction?')) return;
    try {
      await api.delete(`/transactions/${id}`);
      fetchTransactions();
      fetchAccounts();
    } catch (err) {
      alert('Failed to delete transaction');
    }
  };

  const applyFilters = () => { setPage(1); setApplied({ ...filters }); };
  const clearFilters = () => {
    const empty = { merchant: '', category: '', type: '', startDate: '', endDate: '' };
    setFilters(empty);
    setApplied({});
    setPage(1);
  };

  const searchByAccount = async () => {
    if (!accountQuery.trim()) return;
    setSearchingAccount(true);
    setAccountSearched(true);
    try {
      const { data: result } = await api.get('/transactions', {
        params: {
          merchant: accountQuery.trim(),
          all: true,
        },
      });
      setAccountHistory(result.transactions || []);
    } catch {
      setAccountHistory([]);
    } finally {
      setSearchingAccount(false);
    }
  };

  const searchByCategory = async () => {
    if (!categoryQuery.trim()) return;
    setSearchingCategory(true);
    setCategorySearched(true);
    try {
      const { data: result } = await api.get('/transactions', {
        params: {
          category: categoryQuery.trim(),
          all: true,
        },
      });
      setCategoryHistory(result.transactions || []);
    } catch {
      setCategoryHistory([]);
    } finally {
      setSearchingCategory(false);
    }
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="page-title">Transactions</h1>
          <p className="page-subtitle">{total} total transactions</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-display mb-4" style={{ fontSize: '1.1rem' }}>👥 People & Accounts</h2>
        {accountsLoading ? (
          <div className="card">
            <div className="loader-page"><div className="loader" /></div>
          </div>
        ) : accounts.length === 0 ? (
          <div className="card text-muted text-sm">No account groups found yet.</div>
        ) : (
          <div className="grid-4">
            {accounts.map((account) => (
              <button
                key={account.merchant}
                type="button"
                className="card"
                onClick={() => navigate(`/accounts/${encodeURIComponent(account.merchant)}`)}
                style={{ textAlign: 'left', cursor: 'pointer', background: 'var(--bg-card)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <strong style={{ color: 'var(--text-primary)' }}>{account.merchant}</strong>
                  <span className="badge">{account.transactionCount} txns</span>
                </div>
                <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                  <span className="badge badge-credit">+{fmt(account.totalCredit)} received</span>
                  <span className="badge badge-debit">-{fmt(account.totalDebit)} sent</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="card mb-6" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, alignItems: 'flex-end' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Account Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Amma, Sanvi"
              value={filters.merchant}
              onChange={(e) => setFilters({ ...filters, merchant: e.target.value })}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Food"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Type</label>
            <select
              className="form-select"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">From</label>
            <input
              type="date"
              className="form-input"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">To</label>
            <input
              type="date"
              className="form-input"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
            />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-primary btn-sm" onClick={applyFilters}>
              <Search size={13} /> Apply
            </button>
            <button className="btn btn-secondary btn-sm" onClick={clearFilters}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div className="loader-page"><div className="loader" /></div>
        ) : (
          <TransactionTable transactions={transactions} onDelete={handleDelete} />
        )}
      </div>
      {pages > 1 && !applied.merchant && !applied.category && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 20 }}>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >← Prev</button>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Page {page} of {pages}
          </span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page === pages}
          >Next →</button>
        </div>
      )}

      <div className="grid-2 mt-4">
        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 12 }}>
            Search By Account Name
          </h3>
          <div className="flex gap-2 mb-4">
            <input
              className="form-input"
              placeholder="Enter account / merchant name"
              value={accountQuery}
              onChange={(e) => setAccountQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchByAccount()}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={searchByAccount}
              disabled={searchingAccount || !accountQuery.trim()}
            >
              <Search size={14} /> {searchingAccount ? 'Searching...' : 'Search'}
            </button>
          </div>
          {searchingAccount ? (
            <div className="loader-page"><div className="loader" /></div>
          ) : accountSearched ? (
            <TransactionTable transactions={accountHistory} />
          ) : (
            <p className="text-muted text-sm">Search to view complete payment history for an account.</p>
          )}
        </div>

        <div className="card">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 12 }}>
            Search By Final Category
          </h3>
          <div className="flex gap-2 mb-4">
            <select className="form-select" value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)}>
              <option value="">Select category</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button
              className="btn btn-primary btn-sm"
              onClick={searchByCategory}
              disabled={searchingCategory || !categoryQuery.trim()}
            >
              <Search size={14} /> {searchingCategory ? 'Searching...' : 'Search'}
            </button>
          </div>
          {searchingCategory ? (
            <div className="loader-page"><div className="loader" /></div>
          ) : categorySearched ? (
            <TransactionTable transactions={categoryHistory} />
          ) : (
            <p className="text-muted text-sm">Select a category to view complete transaction history.</p>
          )}
        </div>
      </div>
    </div>
  );
}
