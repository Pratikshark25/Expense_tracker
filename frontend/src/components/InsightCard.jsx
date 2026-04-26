import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
  info: Info,
};

const colorMap = {
  warning: { bg: 'rgba(247,184,79,0.08)', border: 'rgba(247,184,79,0.2)', color: '#f7b84f' },
  success: { bg: 'rgba(34,211,165,0.08)', border: 'rgba(34,211,165,0.2)', color: '#22d3a5' },
  info:    { bg: 'rgba(79,142,247,0.08)', border: 'rgba(79,142,247,0.2)', color: '#4f8ef7' },
};

export default function InsightCard({ insights = [] }) {
  if (!insights.length) return null;

  return (
    <div className="card mb-6">
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: 16 }}>
        💡 Smart Insights
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {insights.map((insight, i) => {
          const Icon = iconMap[insight.type] || Info;
          const c = colorMap[insight.type] || colorMap.info;
          return (
            <div
              key={i}
              className="fade-in"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                padding: '10px 14px',
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 'var(--radius-sm)',
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <Icon size={15} color={c.color} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {insight.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}