import { useEffect, useRef } from 'react';

type View = 'home' | 'casinos' | 'sportsbooks';

export const GalaxyHero = ({ activeView, onSelect }: { activeView: View, onSelect: (view: 'casinos' | 'sportsbooks') => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHome = activeView === 'home';
  const tagline = 'We chart the crypto casinos and sportsbooks worth your first deposit — bonuses, terms and payout speed, compared in plain language.';

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className={`galaxy-hero${activeView === 'home' ? ' galaxy-hero--home' : ''}`} id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        poster="/hero-slowloop-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-slowloop-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
        <source src="/hero-slowloop-4k.mp4" media="(min-width: 2560px)" type="video/mp4" />
        <source src="/hero-slowloop-desktop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        {isHome ? (
          <span className="hero-kicker hero-kicker--welcome">
            <span className="hero-title-a">WELCOME</span>{' '}
            <span className="hero-title-b">TO</span>
          </span>
        ) : (
          <span className="hero-kicker">YOUR GUIDE TO CRYPTO CASINOS & SPORTSBOOKS</span>
        )}
        <h1 className={`hero-title${isHome ? ' hero-title--home' : ''}`}>
          <span className="hero-title-a">GAMBLING</span> <span className="hero-title-b">UNIVERSE</span>
        </h1>
        {!isHome && <p className="hero-tagline">{tagline}</p>}
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
      {isHome && <p className="hero-tagline hero-tagline--bottom">{tagline}</p>}
    </section>
  );
};
