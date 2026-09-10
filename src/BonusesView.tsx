import React, { useState } from 'react';
import { guideData } from './guideData';

type FilterKey = 'all' | 'casino' | 'sports';

const bonusItems = Object.entries(guideData).map(([key, guide]: [string, any]) => ({
  key,
  name: guide.name,
  logo: guide.logo,
  accent: guide.accent,
  summary: guide.summary,
  kind: guide.kind === 'sports' ? 'sports' : 'casino',
}));

const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: '10px 22px',
  borderRadius: '999px',
  border: `2px solid ${active ? 'var(--nova-violet)' : 'rgba(139,92,246,0.25)'}`,
  background: active ? 'rgba(139,92,246,0.18)' : 'transparent',
  color: active ? 'white' : 'rgba(255,255,255,0.65)',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '13px',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
});

export const BonusesView = ({ onSelectGuide }: { onSelectGuide: (key: string) => void }) => {
  const [filter, setFilter] = useState<FilterKey>('all');
  const visible = bonusItems.filter((item) => filter === 'all' || item.kind === filter);

  return (
    <section id="bonuses" className="listing-section" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head">
        <span className="section-eyebrow">BONUSES</span>
        <h2 className="section-title">Every welcome bonus in one place</h2>
        <p className="section-copy">
          All the casino and sportsbook offers we track, side by side. Bonus amounts, wagering requirements and
          eligibility vary by country and account — open a card for the full breakdown before you claim anything.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '28px 0 32px', flexWrap: 'wrap' }}>
        <button type="button" style={tabStyle(filter === 'all')} onClick={() => setFilter('all')}>All Offers</button>
        <button type="button" style={tabStyle(filter === 'casino')} onClick={() => setFilter('casino')}>Casino</button>
        <button type="button" style={tabStyle(filter === 'sports')} onClick={() => setFilter('sports')}>Sportsbook</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {visible.map((item) => (
          <div key={item.key} style={{ background: 'rgba(255,255,255,0.03)', border: `2px solid ${item.accent}33`, borderRadius: '12px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                <img src={item.logo} alt={`${item.name} logo`} style={{ maxHeight: '36px', maxWidth: '140px', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.5px', color: item.kind === 'sports' ? 'var(--nova-blue)' : 'var(--nova-magenta)', border: `1px solid ${item.kind === 'sports' ? 'var(--nova-blue)' : 'var(--nova-magenta)'}55`, borderRadius: '999px', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                {item.kind === 'sports' ? 'SPORTSBOOK' : 'CASINO'}
              </span>
            </div>
            <h3 style={{ margin: 0, color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', letterSpacing: '0.5px' }}>{item.name}</h3>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', flexGrow: 1 }}>{item.summary}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '4px' }}>
              <button type="button" className="offer-btn" onClick={() => onSelectGuide(item.key)}>VIEW OFFER</button>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>18+ · T&amp;Cs apply</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
