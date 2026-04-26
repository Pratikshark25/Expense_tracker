export default function SummaryCard({ title, value, subtitle, icon: Icon, color = 'blue', trend }) {
  const colorMap = {
    blue: { bg: 'rgba(79,142,247,0.1)', border: 'rgba(79,142,247,0.2)', icon: '#4f8ef7', text: '#4f8ef7' },
    green: { bg: 'rgba(34,211,165,0.1)', border: 'rgba(34,211,165,0.2)', icon: '#22d3a5', text: '#22d3a5' },
    red: { bg: 'rgba(247,95,95,0.1)', border: 'rgba(247,95,95,0.2)', icon: '#f75f5f', text: '#f75f5f' },
    amber: { bg: 'rgba(247,184,79,0.1)', border: 'rgba(247,184,79,0.2)', icon: '#f7b84f', text: '#f7b84f' },
    purple: { bg: 'rgba(124,106,247,0.1)', border: 'rgba(124,106,247,0.2)', icon: '#7c6af7', text: '#7c6af7' },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="summary-card card fade-in">
      <div className="summary-card-header">
        <p className="summary-card-title">{title}</p>
        {Icon && (
          <div className="summary-card-icon" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
            <Icon size={16} color={c.icon} />
          </div>
        )}
      </div>
      <p className="summary-card-value" style={{ color: c.text }}>{value}</p>
      {subtitle && <p className="summary-card-sub">{subtitle}</p>}
      {trend !== undefined && (
        <div className={`summary-card-trend ${trend >= 0 ? 'up' : 'down'}`}>
          {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}

      <style>{`
        .summary-card { position: relative; overflow: hidden; }
        .summary-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: ${c.bg};
          border-radius: 50%;
          pointer-events: none;
        }
        .summary-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .summary-card-title {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .summary-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .summary-card-value {
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 6px;
        }
        .summary-card-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .summary-card-trend {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 99px;
        }
        .summary-card-trend.up {
          background: rgba(34,211,165,0.1);
          color: var(--accent-green);
        }
        .summary-card-trend.down {
          background: rgba(247,95,95,0.1);
          color: var(--accent-red);
        }
      `}</style>
    </div>
  );
}