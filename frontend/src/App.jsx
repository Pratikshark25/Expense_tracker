import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Transactions from './pages/Transactions';
import History from './pages/History';
import AccountDetail from './pages/AccountDetail';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : children;
}

function AppLayout({ children, theme, onToggleTheme }) {
  return (
    <div className="app-layout">
      <Sidebar theme={theme} onToggleTheme={onToggleTheme} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

function AppRoutes({ theme, onToggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={
        <PublicRoute><Login /></PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute><Register /></PublicRoute>
      } />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <AppLayout theme={theme} onToggleTheme={onToggleTheme}><Dashboard /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/upload" element={
        <PrivateRoute>
          <AppLayout theme={theme} onToggleTheme={onToggleTheme}><Upload /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/transactions" element={
        <PrivateRoute>
          <AppLayout theme={theme} onToggleTheme={onToggleTheme}><Transactions /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/accounts/:merchant" element={
        <PrivateRoute>
          <AppLayout theme={theme} onToggleTheme={onToggleTheme}><AccountDetail /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/history" element={
        <PrivateRoute>
          <AppLayout theme={theme} onToggleTheme={onToggleTheme}><History /></AppLayout>
        </PrivateRoute>
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes theme={theme} onToggleTheme={toggleTheme} />
      </AuthProvider>
    </BrowserRouter>
  );
}
