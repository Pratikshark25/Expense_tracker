import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle, AlertCircle, X, ClipboardPaste } from 'lucide-react';
import api from '../api/axios';

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

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

function CategorySelect({ value, onChange, index, applyToSameBelow }) {
  const [isOther, setIsOther] = useState(false);

  useEffect(() => {
    if (value && !CATEGORIES.includes(value)) {
      setIsOther(true);
    } else {
      setIsOther(false);
    }
  }, [value]);

  const selectValue = !value ? '' : CATEGORIES.includes(value) ? value : 'Others';

  const handleSelectChange = (e) => {
    const selected = e.target.value;

    if (selected === 'Others') {
      setIsOther(true);
      if (!value || CATEGORIES.includes(value)) onChange(index, '', applyToSameBelow);
      return;
    }

    setIsOther(false);
    onChange(index, selected, applyToSameBelow);
  };

  return (
    <div>
      <select
        id={`cat-select-${index}`}
        className="form-input"
        value={selectValue}
        onChange={handleSelectChange}
        style={{ padding: '7px 10px', fontSize: '0.8125rem', cursor: 'pointer', minWidth: 170 }}
      >
        <option value="" disabled>-- Select category --</option>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {isOther && (
        <input
          id={`cat-${index}`}
          type="text"
          className="form-input"
          placeholder="Enter custom category"
          value={CATEGORIES.includes(value) ? '' : value}
          onChange={(e) => onChange(index, e.target.value, applyToSameBelow)}
          style={{ marginTop: 8, padding: '7px 10px', fontSize: '0.8125rem' }}
        />
      )}
    </div>
  );
}

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [showPasteMode, setShowPasteMode] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [pasteLoading, setPasteLoading] = useState(false);
  const [categorizing, setCategorizing] = useState(false);
  const [uploadMeta, setUploadMeta] = useState(null);
  const [currentNetBalance, setCurrentNetBalance] = useState('');
  const [applyToSameRows, setApplyToSameRows] = useState({});
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF file only');
      return;
    }
    setFile(selectedFile);
    setError('');
    setTransactions([]);
    setUploadMeta(null);
    setCurrentNetBalance('');
    setApplyToSameRows({});
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError('');
    setSuccess('');
    try {
      const formData = new FormData();
      formData.append('pdf', file);
      const { data } = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const rows = data.transactions.map((t) => ({ ...t, category: '' }));
      setUploadMeta({
        uploadedAt: data.uploadedAt,
        skippedExisting: data.skippedExisting || 0,
        skippedDuplicateInUpload: data.skippedDuplicateInUpload || 0,
      });

      if (!rows.length) {
        setTransactions([]);
        setSuccess(
          data.skippedExisting > 0
            ? `No new transactions found. ${data.skippedExisting} already-uploaded transactions were skipped.`
            : 'No new transactions found in this PDF.'
        );
        return;
      }

      setTransactions(rows);
      setApplyToSameRows({});
      autoCategorize(rows);
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to parse PDF';
      const usePaste = err.response?.data?.usePasteMethod;
      setError(msg);
      if (usePaste) setShowPasteMode(true);
    } finally {
      setUploading(false);
    }
  };

  const handlePasteSubmit = async () => {
    if (!pasteText.trim()) return;
    setPasteLoading(true);
    setError('');
    setSuccess('');
    try {
      const { data } = await api.post('/upload/text', { text: pasteText });
      const rows = data.transactions.map((t) => ({ ...t, category: '' }));
      setUploadMeta({
        uploadedAt: data.uploadedAt,
        skippedExisting: data.skippedExisting || 0,
        skippedDuplicateInUpload: data.skippedDuplicateInUpload || 0,
      });

      if (!rows.length) {
        setTransactions([]);
        setSuccess(
          data.skippedExisting > 0
            ? `No new transactions found. ${data.skippedExisting} already-uploaded transactions were skipped.`
            : 'No new transactions found in the pasted text.'
        );
        setShowPasteMode(false);
        return;
      }

      setTransactions(rows);
      setApplyToSameRows({});
      setShowPasteMode(false);
      autoCategorize(rows);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to parse pasted text');
    } finally {
      setPasteLoading(false);
    }
  };

  const autoCategorize = async (rows) => {
    if (!rows.length) return;

    setCategorizing(true);
    const merchantCache = new Map();

    try {
      const categorized = await Promise.all(
        rows.map(async (row) => {
          const key = `${(row.merchant || '').trim().toLowerCase()}|${row.type || ''}`;
          if (merchantCache.has(key)) return { ...row, category: merchantCache.get(key) };

          try {
            const { data } = await api.post('/ai/categorize', {
              merchant: row.merchant,
              description: `${row.type || ''} transaction at ${row.merchant || ''}`,
              amount: row.amount,
            });
            const category = CATEGORIES.includes(data.category) ? data.category : 'Others';
            merchantCache.set(key, category);
            return { ...row, category };
          } catch {
            merchantCache.set(key, 'Others');
            return { ...row, category: 'Others' };
          }
        })
      );

      setTransactions((current) =>
        current.map((row, index) => (row.category?.trim() ? row : { ...row, category: categorized[index]?.category || 'Others' }))
      );
    } finally {
      setCategorizing(false);
    }
  };

  const updateCategory = (index, value, applyToSameBelow = false) => {
    setTransactions((prev) => {
      const current = prev[index];
      if (!current) return prev;

      const targetMerchant = (current.merchant || '').trim().toLowerCase();

      return prev.map((t, i) => {
        if (i === index) return { ...t, category: value };
        if (!applyToSameBelow) return t;
        if (i < index) return t;

        const merchant = (t.merchant || '').trim().toLowerCase();
        if (merchant === targetMerchant) return { ...t, category: value };
        return t;
      });
    });
  };

  const removeTransaction = (index) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
    setApplyToSameRows((prev) =>
      Object.fromEntries(
        Object.entries(prev)
          .filter(([key]) => Number(key) !== index)
          .map(([key, checked]) => {
            const rowIndex = Number(key);
            return [rowIndex > index ? rowIndex - 1 : rowIndex, checked];
          })
      )
    );
  };

  const toggleApplyToSame = (index) => {
    const checked = !applyToSameRows[index];
    setApplyToSameRows((prev) => ({ ...prev, [index]: checked }));

    const category = transactions[index]?.category?.trim();
    if (checked && category) {
      updateCategory(index, category, true);
    }
  };

  const handleSave = async () => {
    const missing = transactions.findIndex((t) => !t.category.trim());
    if (missing !== -1) {
      setError(`Please fill in the category for row ${missing + 1}`);
      const el = document.getElementById(`cat-${missing}`) || document.getElementById(`cat-select-${missing}`);
      if (el) {
        el.focus();
        el.style.borderColor = 'var(--accent-red)';
      }
      return;
    }

    setSaving(true);
    setError('');
    try {
      const netBalanceValue = Number(String(currentNetBalance).replace(/,/g, ''));
      const shouldAddBalance = currentNetBalance !== '' && Number.isFinite(netBalanceValue) && netBalanceValue >= 0;
      const uploadedExpense = transactions
        .filter((t) => t.type === 'Debit')
        .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
      const uploadedCredit = transactions
        .filter((t) => t.type === 'Credit')
        .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
      const balanceAdjustment = shouldAddBalance
        ? Math.max(0, netBalanceValue + uploadedExpense - uploadedCredit)
        : 0;
      const transactionsToSave = balanceAdjustment > 0
        ? [
            ...transactions,
            {
              date: uploadMeta?.uploadedAt || new Date().toISOString(),
              merchant: 'Current Net Balance',
              type: 'Credit',
              amount: balanceAdjustment,
              category: 'Investment',
            },
          ]
        : transactions;

      const { data } = await api.post('/transactions', { transactions: transactionsToSave });
      const savedCount = data.count ?? transactions.length;
      const skippedCount = data.skipped ?? 0;
      setSuccess(
        skippedCount > 0
          ? `${savedCount} new transactions saved. ${skippedCount} duplicate transactions skipped.`
          : `${savedCount} transactions saved successfully!`
      );
      setTransactions([]);
      setApplyToSameRows({});
      setUploadMeta(null);
      setCurrentNetBalance('');
      setFile(null);
      setTimeout(() => navigate('/dashboard'), 1800);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save transactions');
    } finally {
      setSaving(false);
    }
  };

  const categorizedCount = transactions.filter((t) => t.category.trim() !== '').length;
  const allCategorized = transactions.length > 0 && categorizedCount === transactions.length;
  const currentNetBalanceNumber = Number(String(currentNetBalance).replace(/,/g, ''));
  const uploadExpenseTotal = transactions
    .filter((t) => t.type === 'Debit')
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const uploadCreditTotal = transactions
    .filter((t) => t.type === 'Credit')
    .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  const balanceIncomeToAdd =
    currentNetBalance !== '' && Number.isFinite(currentNetBalanceNumber) && currentNetBalanceNumber >= 0
      ? Math.max(0, currentNetBalanceNumber + uploadExpenseTotal - uploadCreditTotal)
      : 0;

  return (
    <div className="page-wrapper fade-in">
      <h1 className="page-title">Upload Statement</h1>
      <p className="page-subtitle">Upload your PhonePe or bank PDF statement to extract transactions</p>

      {error && (
        <div className="alert alert-error" style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <AlertCircle size={15} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="alert alert-success" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle size={15} /> {success}
        </div>
      )}

      {showPasteMode && transactions.length === 0 && (
        <div className="card mb-6" style={{ borderColor: 'rgba(247,184,79,0.3)', background: 'rgba(247,184,79,0.05)' }}>
          <div className="flex items-center gap-2 mb-3">
            <ClipboardPaste size={18} color="var(--accent-amber)" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--accent-amber)' }}>
              Use Paste Text Method
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
            This PhonePe PDF uses an encrypted font that can't be decoded automatically. Instead:
          </p>
          <ol style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', paddingLeft: 18, marginBottom: 16, lineHeight: 2 }}>
            <li>Open the PDF in your browser or PDF viewer</li>
            <li>Press <strong>Ctrl+A</strong> (select all text)</li>
            <li>Press <strong>Ctrl+C</strong> (copy)</li>
            <li>Paste it in the box below and click Parse</li>
          </ol>
          <textarea
            className="form-input"
            rows={8}
            placeholder="Paste the copied PDF text here..."
            value={pasteText}
            onChange={(e) => setPasteText(e.target.value)}
            style={{ fontFamily: 'monospace', fontSize: '0.8rem', resize: 'vertical' }}
          />
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            <button className="btn btn-primary" onClick={handlePasteSubmit} disabled={!pasteText.trim() || pasteLoading}>
              {pasteLoading ? <><span className="loader" style={{ width: 14, height: 14 }} /> Parsing…</> : <><FileText size={14} /> Parse Text</>}
            </button>
            <button className="btn btn-secondary" onClick={() => setShowPasteMode(false)}>Cancel</button>
          </div>
        </div>
      )}

      {transactions.length === 0 && !showPasteMode && (
        <>
          <div
            className={`drop-zone card ${dragOver ? 'drag-over' : ''} ${file ? 'has-file' : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !file && fileInputRef.current.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              style={{ display: 'none' }}
              onChange={(e) => handleFileSelect(e.target.files[0])}
            />
            {file ? (
              <div className="file-selected">
                <FileText size={36} color="var(--accent-primary)" />
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{file.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{(file.size / 1024).toFixed(1)} KB</p>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={(e) => { e.stopPropagation(); setFile(null); }}>
                  <X size={13} /> Remove
                </button>
              </div>
            ) : (
              <div className="drop-content">
                <div className="drop-icon">
                  <Upload size={28} color="var(--accent-primary)" />
                </div>
                <p style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 6 }}>Drop your PDF here</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  or <span style={{ color: 'var(--accent-primary)', cursor: 'pointer' }}>browse files</span>
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 8 }}>
                  PhonePe · HDFC · ICICI · SBI · Axis statements
                </p>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            {file && (
              <button className="btn btn-primary btn-lg" onClick={handleUpload} disabled={uploading}>
                {uploading ? <><span className="loader" style={{ width: 16, height: 16 }} /> Parsing PDF…</> : <><FileText size={16} /> Extract Transactions</>}
              </button>
            )}
            <button className="btn btn-secondary btn-lg" onClick={() => setShowPasteMode(true)}>
              <ClipboardPaste size={16} /> Paste Text Instead
            </button>
          </div>
        </>
      )}

      {transactions.length > 0 && (
        <div className="fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>Review Transactions</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: 2 }}>
                {transactions.length} transactions found — AI fills categories first, and you can override any row
              </p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary btn-sm" onClick={() => { setTransactions([]); setApplyToSameRows({}); setUploadMeta(null); setFile(null); }}>
                <X size={13} /> Start Over
              </button>
              <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={!allCategorized || saving}>
                {saving ? <span className="loader" style={{ width: 14, height: 14 }} /> : <CheckCircle size={14} />}
                {saving ? 'Saving…' : 'Save All'}
              </button>
            </div>
          </div>

          <div style={{ height: 4, background: 'var(--bg-elevated)', borderRadius: 99, marginBottom: 8 }}>
            <div
              style={{
                height: '100%',
                borderRadius: 99,
                width: `${(categorizedCount / transactions.length) * 100}%`,
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 16 }}>
            {categorizedCount} / {transactions.length} categorized
            {categorizing && <span style={{ marginLeft: 10, color: 'var(--accent-primary)' }}>AI categorizing...</span>}
          </p>

          {uploadMeta && (
            <div className="alert alert-info" style={{ marginBottom: 16 }}>
              Uploaded on {fmtDate(uploadMeta.uploadedAt || new Date())}. Showing only distinct transactions from the PDF.
              {uploadMeta.skippedExisting > 0 && ` ${uploadMeta.skippedExisting} already-uploaded transactions skipped.`}
              {uploadMeta.skippedDuplicateInUpload > 0 && ` ${uploadMeta.skippedDuplicateInUpload} duplicate rows inside this upload skipped.`}
            </div>
          )}

          <div className="card mb-4">
            <div className="flex items-center justify-between gap-4" style={{ flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 4 }}>
                  Current Net Balance
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Enter your current balance to add a balancing income entry with this upload.
                </p>
              </div>
              <div style={{ minWidth: 260 }}>
                <input
                  className="form-input"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter current net balance"
                  value={currentNetBalance}
                  onChange={(e) => setCurrentNetBalance(e.target.value)}
                />
              </div>
            </div>
            {balanceIncomeToAdd > 0 && (
              <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                On save, Finsight will add {fmt(balanceIncomeToAdd)} as income so this upload's net balance becomes {fmt(currentNetBalanceNumber)}.
              </p>
            )}
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Transaction Date</th>
                    <th>Merchant</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Category <span style={{ color: 'var(--accent-red)' }}>*</span></th>
                    <th className="apply-same-heading">Apply to same name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t, i) => (
                    <tr key={i}>
                      <td style={{ color: 'var(--text-muted)', width: 40 }}>{i + 1}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>{fmtDate(t.date)}</td>
                      <td style={{ fontWeight: 500, color: 'var(--text-primary)', maxWidth: 200 }}>
                        <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.merchant}</span>
                      </td>
                      <td>
                        <span className={`badge ${t.type === 'Credit' ? 'badge-credit' : 'badge-debit'}`}>{t.type}</span>
                      </td>
                      <td
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          color: t.type === 'Credit' ? 'var(--accent-green)' : 'var(--accent-red)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t.type === 'Credit' ? '+' : '-'}{fmt(t.amount)}
                      </td>
                      <td style={{ minWidth: 180 }}>
                        <CategorySelect
                          value={t.category}
                          onChange={updateCategory}
                          index={i}
                          applyToSameBelow={Boolean(applyToSameRows[i])}
                        />
                      </td>
                      <td className="apply-same-cell">
                        <label className={`apply-same-toggle ${applyToSameRows[i] ? 'is-active' : ''}`}>
                          <input
                            type="checkbox"
                            checked={Boolean(applyToSameRows[i])}
                            onChange={() => toggleApplyToSame(i)}
                            aria-label={`Apply row ${i + 1} category to same merchant names below`}
                          />
                        </label>
                      </td>
                      <td>
                        <button
                          onClick={() => removeTransaction(i)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 4 }}
                          title="Remove"
                        >
                          <X size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            <button className="btn btn-primary btn-lg" onClick={handleSave} disabled={!allCategorized || saving}>
              {saving ? <><span className="loader" style={{ width: 16, height: 16 }} /> Saving…</> : <><CheckCircle size={16} /> Save {transactions.length} Transactions</>}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .drop-zone { border: 2px dashed var(--border-strong); cursor: pointer; transition: all 0.2s; text-align: center; }
        .drop-zone:hover:not(.has-file) { border-color: var(--accent-primary); background: rgba(79,142,247,0.04); }
        .drop-zone.drag-over { border-color: var(--accent-primary); background: rgba(79,142,247,0.08); transform: scale(1.01); }
        .drop-zone.has-file { cursor: default; }
        .drop-content { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; }
        .drop-icon { width: 64px; height: 64px; border-radius: 20px; background: rgba(79,142,247,0.1); border: 1px solid rgba(79,142,247,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .file-selected { display: flex; align-items: center; gap: 16px; padding: 24px; flex-wrap: wrap; justify-content: center; }
        .apply-same-heading { min-width: 128px; text-align: center; white-space: nowrap; }
        .apply-same-cell { text-align: center; }
        .apply-same-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 28px;
          border: 1px solid var(--border-subtle);
          border-radius: 999px;
          background: var(--bg-elevated);
          color: var(--text-muted);
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .apply-same-toggle:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .apply-same-toggle input {
          width: 13px;
          height: 13px;
          margin: 0;
          accent-color: var(--accent-primary);
          cursor: pointer;
        }
        .apply-same-toggle.is-active {
          border-color: rgba(79,142,247,0.55);
          background: rgba(79,142,247,0.12);
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  );
}

