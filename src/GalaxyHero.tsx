import { useEffect, useState } from 'react';

const randomShadows = (count: number, color: string, sizeVariance = false) => {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const size = sizeVariance ? `${(Math.random() * 1.5 + 0.5).toFixed(2)}px` : '';
    shadows.push(`${Math.random() * 100}% ${Math.random() * 100}% ${size} ${color}`.trim());
  }
  return shadows.join(', ');
};

const Starfield = () => {
  const [small, setSmall] = useState('');
  const [medium, setMedium] = useState('');

  useEffect(() => {
    setSmall(randomShadows(120, 'rgba(255,255,255,0.85)'));
    setMedium(randomShadows(40, 'rgba(167,139,250,0.9)'));
  }, []);

  return (
    <div className="hero-starfield" aria-hidden="true">
      {small && <div className="hero-star hero-star-sm" style={{ boxShadow: small }} />}
      {medium && <div className="hero-star hero-star-md" style={{ boxShadow: medium }} />}
    </div>
  );
};

type View = 'casinos' | 'sportsbooks' | 'terms' | 'contact';

export const GalaxyHero = ({ activeView, onSelect }: { activeView: View, onSelect: (view: View) => void }) => {
  return (
    <section className="galaxy-hero" id="hero" aria-hidden={false}>
      <Starfield />
      <div className="hero-nebula hero-nebula-a" aria-hidden="true" />
      <div className="hero-nebula hero-nebula-b" aria-hidden="true" />
      <div className="hero-planet" aria-hidden="true">
        <div className="hero-planet-ring" />
      </div>

      <div className="hero-content">
        <span className="hero-kicker">WELCOME TO THE GAMBLING UNIVERSE</span>
        <h1 className="hero-title">
          <span className="hero-title-a">8BIT</span><span className="hero-title-b">BET</span>
        </h1>
        <p className="hero-tagline">
          We chart the crypto casinos and sportsbooks worth your first deposit — bonuses, terms and payout speed, compared in plain language.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className={`hero-cta hero-cta-casinos ${activeView === 'casinos' ? 'active' : ''}`}
            onClick={() => onSelect('casinos')}
          >
            Browse Casinos
          </button>
          <button
            type="button"
            className={`hero-cta hero-cta-sportsbooks ${activeView === 'sportsbooks' ? 'active' : ''}`}
            onClick={() => onSelect('sportsbooks')}
          >
            Browse Sportsbooks
          </button>
        </div>
      </div>
    </section>
  );
};
