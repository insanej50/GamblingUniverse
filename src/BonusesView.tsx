import React, { useState } from 'react';
import { guideData } from './guideData';
import { casinoGuideOrder, sportsGuideOrder, operatorInitials } from './operators';

type FilterKey = 'all' | 'casino' | 'sports';

const bonusByKey = Object.fromEntries(
  Object.entries(guideData).map(([key, guide]: [string, any]) => [key, {
    key,
    name: guide.name,
    logo: guide.logo,
    accent: guide.accent,
    summary: guide.summary,
    cardHook: guide.cardHook as string | undefined,
    kind: guide.kind === 'sports' ? 'sports' : 'casino',
  }])
);

const casinoBonusItems = casinoGuideOrder.map((key) => bonusByKey[key]).filter(Boolean);
const sportsBonusItems = sportsGuideOrder.map((key) => bonusByKey[key]).filter(Boolean);
const casinoTopPickKey = casinoGuideOrder[0];
const sportsTopPickKey = sportsGuideOrder[0];

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
  const visible = filter === 'casino'
    ? casinoBonusItems
    : filter === 'sports'
      ? sportsBonusItems
      : [...casinoBonusItems, ...sportsBonusItems];

  return (
    <section id="bonuses" className="listing-section" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head">
        <span className="section-eyebrow">BONUSES</span>
        <h2 className="section-title listing-heading">Every welcome bonus in one place</h2>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', paddingTop: '14px' }}>
        {visible.map((item) => {
          const isTopPick = item.key === casinoTopPickKey || item.key === sportsTopPickKey;
          return (
          <div key={item.key} className={`bonus-card${isTopPick ? ' bonus-card-top-pick' : ''}`} style={{ background: 'rgba(255,255,255,0.03)', border: `2px solid ${item.accent}33`, borderRadius: '12px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px', '--guide-accent': item.accent } as React.CSSProperties}>
            {isTopPick && <span className="offer-featured-tag">TOP PICK</span>}
            <span className={`bonus-card-kind ${item.kind === 'sports' ? 'bonus-card-kind--sports' : 'bonus-card-kind--casino'}`}>
              {item.kind === 'sports' ? 'SPORTSBOOK' : 'CASINO'}
            </span>
            <div className="bonus-card-logo" style={{ padding: item.key === 'mbit' || item.key === 'bet365' || item.key === 'betfury' || item.key === 'spinbetter' || item.key === 'sports-duelbits' || item.key === 'sports-thunderpick' || item.key === 'megapari' || item.key === 'hyperlucky' || item.key === 'hyper lucky' || item.key === 'bitz' || item.key === 'bitzio' || item.key === 'bitz.io' || item.key === 'coinsgame' || item.key === 'coins.game' || item.key === 'CoinsGame' || item.key === 'betsio' || item.key === 'bets.io' || item.key === 'cocobet' || item.key === 'bet25' || item.key === 'rxcasino' || item.key === 'RX Casino' || item.key === 'goldenplay' || item.key === 'wildroll' || item.key === 'WildRoll' || item.key === 'betpanda' || item.key === 'epicbet' || item.key === 'cybet' || item.key === 'vavada' || item.key === 'rainbet' || item.key === 'citobet' || item.key === 'n1bet' || item.key === 'N1Bet' || item.key === 'rollxo' || item.key === 'everygame' || item.key === 'Everygame Sports' || item.key === 'betwhale' || item.key === 'bcgame' ? 0 : undefined, background: item.key === 'mbit' || item.key === 'bet365' || item.key === 'stake' || item.key === 'cloudbet' || item.key === 'vave' || item.key === 'gamdom' || item.key === 'betfury' || item.key === 'spinbetter' || item.key === 'sports-duelbits' || item.key === 'sports-thunderpick' || item.key === 'megapari' || item.key === 'hyperlucky' || item.key === 'hyper lucky' || item.key === 'bitz' || item.key === 'bitzio' || item.key === 'bitz.io' || item.key === 'coinsgame' || item.key === 'coins.game' || item.key === 'CoinsGame' || item.key === 'betsio' || item.key === 'bets.io' || item.key === 'cocobet' || item.key === 'bet25' || item.key === 'rxcasino' || item.key === 'RX Casino' || item.key === 'goldenplay' || item.key === 'wildroll' || item.key === 'WildRoll' || item.key === 'betpanda' || item.key === 'epicbet' || item.key === 'cybet' || item.key === 'vavada' || item.key === 'rainbet' || item.key === 'citobet' || item.key === 'n1bet' || item.key === 'N1Bet' || item.key === 'rollxo' || item.key === 'everygame' || item.key === 'Everygame Sports' || item.key === 'betwhale' || item.key === 'bcgame' ? 'transparent' : undefined }}>
              {item.logo ? (
                <img src={item.logo} alt={`${item.name} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', mixBlendMode: item.key === 'vave' ? 'screen' : undefined, transform: item.key === 'hyperlucky' || item.key === 'hyper lucky' ? 'scale(1.34)' : undefined }} />
              ) : (
                <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '1.5px', color: 'white' }}>{operatorInitials(item.name)}</span>
              )}
            </div>
            <h3 className="bonus-card-name name-glow">{item.name}</h3>
            <p className="bonus-card-hook" style={{ flexGrow: 1 }}>{item.cardHook || item.summary}</p>
            <div className={`offer-cta ${item.kind === 'sports' ? 'offer-cta--sports' : ''}`} style={{ marginTop: '4px' }}>
              <button type="button" className={`offer-btn ${item.kind === 'sports' ? 'offer-btn--sports' : 'offer-btn--casino'}`} onClick={() => onSelectGuide(item.key)}>VIEW OFFER</button>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};
