import { useEffect, useRef } from 'react';

type View = 'casinos' | 'sportsbooks' | 'terms' | 'contact';

export const GalaxyHero = ({ activeView, onSelect }: { activeView: View, onSelect: (view: View) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
       videoRef.current.playbackRate = 0.50;
    }
  }, []);

  return (
    <section className="galaxy-hero" id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        poster="/hero-nebula-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-nebula-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
        <source src="/hero-nebula-desktop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-kicker">YOUR GUIDE TO CRYPTO CASINOS &amp; SPORTSBOOKS</span>
        <h1 className="hero-title">
          <span className="hero-title-a">GAMBLING</span> <span className="hero-title-b">UNIVERSE</span>
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
