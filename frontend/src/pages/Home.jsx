import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  FileText,
  LockKeyhole,
  Repeat,
  Search,
  Sparkles,
  TrendingUp,
  Upload,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const features = [
  {
    icon: Upload,
    title: 'Statement upload',
    text: 'Upload a PhonePe or bank PDF statement, or paste copied statement text when a PDF is difficult to read.',
  },
  {
    icon: Sparkles,
    title: 'AI extraction',
    text: 'Finsight reads transactions, identifies dates, merchants, credit or debit type, and prepares them for review.',
  },
  {
    icon: BarChart3,
    title: 'Visual dashboard',
    text: 'Income, expenses, category totals, latest transactions, trends, and month comparisons are shown in one place.',
  },
  {
    icon: Bot,
    title: 'Finance assistant',
    text: 'Ask questions about your spending, top merchants, categories, savings trend, and subscriptions.',
  },
];

const steps = [
  'Upload a PDF statement or paste statement text.',
  'Review extracted transactions and adjust categories.',
  'Save clean records under your secure account.',
  'Explore dashboards, history, subscriptions, and AI insights.',
];

export default function Home() {
  const { user } = useAuth();
  const primaryPath = user ? '/dashboard' : '/register';
  const secondaryPath = user ? '/upload' : '/login';

  return (
    <div className="home-page fade-in">
      <header className="home-nav">
        <Link to="/" className="home-brand">
          <span className="home-brand-icon">
            <TrendingUp size={20} />
          </span>
          <span>Finsight</span>
        </Link>
        <nav className="home-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#security">Security</a>
          <Link to={secondaryPath}>{user ? 'Upload' : 'Login'}</Link>
          <Link to={primaryPath} className="btn btn-primary btn-sm">
            {user ? 'Dashboard' : 'Get Started'}
          </Link>
        </nav>
      </header>

      <main>
        <section className="home-hero">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
            alt="Financial documents and calculator on a desk"
            className="home-hero-image"
          />
          <div className="home-hero-overlay" />
          <div className="home-hero-content">
            <p className="home-eyebrow">AI-powered expense tracking</p>
            <h1>Turn messy statements into clear financial insight.</h1>
            <p>
              Finsight helps you upload payment or bank statements, extract transactions, categorize spending,
              track subscriptions, and understand your money through charts and AI insights.
            </p>
            <div className="home-hero-actions">
              <Link to={primaryPath} className="btn btn-primary btn-lg">
                {user ? 'Open Dashboard' : 'Create Account'} <ArrowRight size={17} />
              </Link>
              <Link to={secondaryPath} className="btn btn-secondary btn-lg">
                {user ? 'Upload Statement' : 'Sign In'}
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section home-intro">
          <div>
            <p className="home-eyebrow">What it does</p>
            <h2>Personal finance without manual data entry.</h2>
          </div>
          <p>
            Instead of typing every expense into a notebook or spreadsheet, upload a statement and let Finsight
            organize your income, expenses, merchants, categories, charts, snapshots, and AI answers under your account.
          </p>
        </section>

        <section className="home-section" id="features">
          <div className="home-section-heading">
            <p className="home-eyebrow">Core features</p>
            <h2>Everything needed to review spending clearly.</h2>
          </div>
          <div className="home-feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="home-feature-card" key={title}>
                <span>
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-split" id="workflow">
          <div>
            <p className="home-eyebrow">How it works</p>
            <h2>From upload to dashboard in four simple steps.</h2>
            <div className="home-step-list">
              {steps.map((step, index) => (
                <div className="home-step" key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="home-preview" aria-label="Finsight dashboard preview">
            <div className="home-preview-top">
              <span />
              <span />
              <span />
            </div>
            <div className="home-preview-stats">
              <div>
                <p>Total Income</p>
                <strong>INR 84,500</strong>
              </div>
              <div>
                <p>Expenses</p>
                <strong>INR 38,420</strong>
              </div>
              <div>
                <p>Net Balance</p>
                <strong>INR 46,080</strong>
              </div>
            </div>
            <div className="home-preview-chart">
              <span style={{ height: '42%' }} />
              <span style={{ height: '64%' }} />
              <span style={{ height: '36%' }} />
              <span style={{ height: '78%' }} />
              <span style={{ height: '51%' }} />
              <span style={{ height: '70%' }} />
            </div>
            <div className="home-preview-list">
              <p><FileText size={14} /> PhonePe statement extracted</p>
              <p><Repeat size={14} /> 3 subscriptions detected</p>
              <p><Search size={14} /> Merchant history ready</p>
            </div>
          </div>
        </section>

        <section className="home-section home-security" id="security">
          <div>
            <LockKeyhole size={28} />
            <h2>Your financial records stay connected to your account.</h2>
          </div>
          <p>
            Passwords are hashed, private routes require JWT authentication, uploaded files are temporary, and each
            transaction or saved summary is stored with the logged-in user's ID.
          </p>
        </section>
      </main>

      <style>{`
        .home-page {
          min-height: 100vh;
          background: var(--bg-base);
          color: var(--text-primary);
        }

        .home-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 36px;
          background: rgba(8, 12, 20, 0.84);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(16px);
        }

        [data-theme='light'] .home-nav {
          background: rgba(244, 247, 252, 0.86);
        }

        .home-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          text-decoration: none;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.18rem;
        }

        .home-brand-icon {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--accent-primary);
          background: rgba(79,142,247,0.12);
          border: 1px solid rgba(79,142,247,0.22);
        }

        .home-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .home-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .home-links a:hover {
          color: var(--text-primary);
        }

        .home-hero {
          position: relative;
          min-height: 82vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 116px 36px 64px;
        }

        .home-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(8,12,20,0.96) 0%, rgba(8,12,20,0.78) 48%, rgba(8,12,20,0.26) 100%),
            linear-gradient(0deg, rgba(8,12,20,0.82) 0%, rgba(8,12,20,0.12) 45%);
        }

        [data-theme='light'] .home-hero-overlay {
          background:
            linear-gradient(90deg, rgba(244,247,252,0.96) 0%, rgba(244,247,252,0.78) 50%, rgba(244,247,252,0.26) 100%),
            linear-gradient(0deg, rgba(244,247,252,0.82) 0%, rgba(244,247,252,0.1) 45%);
        }

        .home-hero-content {
          position: relative;
          width: min(720px, 100%);
          z-index: 1;
        }

        .home-eyebrow {
          color: var(--accent-green);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .home-hero h1 {
          font-size: clamp(2.1rem, 4.8vw, 4.4rem);
          line-height: 1.08;
          max-width: 760px;
          margin-bottom: 22px;
          letter-spacing: 0;
        }

        .home-hero p:not(.home-eyebrow) {
          max-width: 620px;
          color: var(--text-secondary);
          font-size: 1.06rem;
        }

        .home-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .home-section {
          padding: 72px 36px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .home-intro {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 44px;
          align-items: start;
        }

        .home-section h2 {
          font-size: clamp(1.7rem, 3vw, 3rem);
          letter-spacing: 0;
          max-width: 680px;
        }

        .home-section p {
          color: var(--text-secondary);
        }

        .home-section-heading {
          margin-bottom: 28px;
        }

        .home-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .home-feature-card {
          min-height: 220px;
          padding: 22px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }

        .home-feature-card span {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--accent-primary);
          background: rgba(79,142,247,0.12);
          border: 1px solid rgba(79,142,247,0.2);
          margin-bottom: 20px;
        }

        .home-feature-card h3 {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .home-feature-card p {
          font-size: 0.92rem;
        }

        .home-split {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 36px;
          align-items: center;
        }

        .home-step-list {
          margin-top: 28px;
          display: grid;
          gap: 12px;
        }

        .home-step {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .home-step span {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          color: var(--accent-primary);
          font-family: var(--font-display);
          font-weight: 800;
        }

        .home-preview {
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }

        .home-preview-top {
          display: flex;
          gap: 7px;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-elevated);
        }

        .home-preview-top span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .home-preview-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 18px;
        }

        .home-preview-stats div {
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
        }

        .home-preview-stats p {
          font-size: 0.76rem;
          margin-bottom: 4px;
        }

        .home-preview-stats strong {
          font-family: var(--font-display);
          font-size: 1.04rem;
        }

        .home-preview-chart {
          height: 170px;
          display: flex;
          align-items: end;
          gap: 12px;
          padding: 18px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .home-preview-chart span {
          flex: 1;
          min-width: 24px;
          border-radius: 6px 6px 0 0;
          background: var(--accent-primary);
        }

        .home-preview-chart span:nth-child(2n) { background: var(--accent-green); }
        .home-preview-chart span:nth-child(3n) { background: var(--accent-amber); }

        .home-preview-list {
          display: grid;
          gap: 8px;
          padding: 18px;
        }

        .home-preview-list p {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .home-security {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          border-top: 1px solid var(--border);
        }

        .home-security svg {
          color: var(--accent-green);
          margin-bottom: 16px;
        }

        @media (max-width: 900px) {
          .home-nav {
            position: sticky;
            padding: 0 16px;
          }

          .home-links a[href^="#"] {
            display: none;
          }

          .home-hero {
            min-height: 78vh;
            padding: 80px 16px 44px;
          }

          .home-section {
            padding: 52px 16px;
          }

          .home-intro,
          .home-split,
          .home-security {
            grid-template-columns: 1fr;
          }

          .home-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .home-nav {
            height: auto;
            padding: 12px 16px;
            align-items: flex-start;
          }

          .home-brand {
            padding-top: 2px;
          }

          .home-links {
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 10px;
          }

          .home-links a:not(.btn):not(:last-child) {
            display: none;
          }

          .home-hero h1 {
            font-size: 2rem;
          }

          .home-feature-grid,
          .home-preview-stats {
            grid-template-columns: 1fr;
          }

          .home-feature-card {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}
