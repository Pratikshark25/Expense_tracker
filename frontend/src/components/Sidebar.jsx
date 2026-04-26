import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Home,
  LayoutDashboard,
  Upload,
  List,
  History,
  LogOut,
  TrendingUp,
  ChevronRight,
  Moon,
  Sun,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/upload', icon: Upload, label: 'Upload PDF' },
  { to: '/transactions', icon: List, label: 'Transactions' },
  { to: '/history', icon: History, label: 'History' },
];

export default function Sidebar({ theme = 'dark', onToggleTheme }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <TrendingUp size={18} color="var(--accent-primary)" />
        </div>
        <span className="sidebar-logo-text">Finsight</span>
      </div>
      <nav className="sidebar-nav">
        <p className="sidebar-section-label">Menu</p>
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' active' : ''}`
            }
          >
            <Icon size={17} />
            <span>{label}</span>
            <ChevronRight size={14} className="sidebar-link-arrow" />
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">{user?.name}</p>
            <p className="sidebar-user-email">{user?.email}</p>
          </div>
        </div>
        <button className="sidebar-logout" onClick={handleLogout}>
          <LogOut size={15} />
          <span>Logout</span>
        </button>
        <button className="sidebar-theme" onClick={onToggleTheme}>
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-surface);
          border-right: 1px solid var(--border);
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 20px 12px;
          z-index: 100;
          transition: transform 0.28s ease;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px 24px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }

        .sidebar-logo-icon {
          width: 34px;
          height: 34px;
          background: rgba(79,142,247,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(79,142,247,0.2);
        }

        .sidebar-logo-text {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .sidebar-section-label {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          padding: 0 12px;
          margin-bottom: 6px;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.18s ease;
          position: relative;
        }

        .sidebar-link:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
        }

        .sidebar-link.active {
          background: rgba(79,142,247,0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(79,142,247,0.18);
        }

        .sidebar-link-arrow {
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.18s;
        }

        .sidebar-link:hover .sidebar-link-arrow,
        .sidebar-link.active .sidebar-link-arrow {
          opacity: 1;
        }

        .sidebar-footer {
          border-top: 1px solid var(--border);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
        }

        .sidebar-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .sidebar-user-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sidebar-user-email {
          font-size: 0.7rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sidebar-user-info { flex: 1; min-width: 0; }

        .sidebar-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          font-family: var(--font-body);
          width: 100%;
        }

        .sidebar-logout:hover {
          background: rgba(247,95,95,0.08);
          color: var(--accent-red);
          border-color: rgba(247,95,95,0.2);
        }

        .sidebar-theme {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          font-family: var(--font-body);
          width: 100%;
        }

        .sidebar-theme:hover {
          background: var(--bg-hover);
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
      `}</style>
    </aside>
  );
}
