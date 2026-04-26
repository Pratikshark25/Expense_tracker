import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { TrendingUp, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    const result = await register(form.name, form.email, form.password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <div className="auth-logo-icon">
            <TrendingUp size={22} color="#4f8ef7" />
          </div>
          <span>Finsight</span>
        </Link>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Start tracking your expenses today</p>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-icon-wrap">
              <User size={15} className="input-icon" />
              <input
                type="text"
                className="form-input input-with-icon"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email address</label>
            <div className="input-icon-wrap">
              <Mail size={15} className="input-icon" />
              <input
                type="email"
                className="form-input input-with-icon"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-icon-wrap">
              <Lock size={15} className="input-icon" />
              <input
                type="password"
                className="form-input input-with-icon"
                placeholder="Min. 6 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
            {loading ? <span className="loader" /> : (
              <>Create Account <ArrowRight size={16} /></>
            )}
          </button>
        </form>

        <p className="auth-link">
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </p>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: var(--bg-base);
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(124,106,247,0.06) 0%, transparent 50%);
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 40px;
          box-shadow: var(--shadow-card);
          animation: fadeInUp 0.4s ease;
        }
        .auth-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .auth-logo-icon {
          width: 38px;
          height: 38px;
          background: rgba(79,142,247,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(79,142,247,0.2);
        }
        .auth-title { font-size: 1.6rem; margin-bottom: 6px; }
        .auth-subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 28px; }
        .input-icon-wrap { position: relative; }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-with-icon { padding-left: 38px !important; }
        .auth-submit { width: 100%; justify-content: center; margin-top: 4px; }
        .auth-link {
          text-align: center;
          margin-top: 20px;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .auth-link a { color: var(--accent-primary); text-decoration: none; font-weight: 500; }
        .auth-link a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}
