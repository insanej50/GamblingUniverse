import { useEffect, useRef, useState } from 'react';

const randomShadows = (count: number, color: string) => {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.random() * 100}% ${Math.random() * 100}% ${color}`);
  }
  return shadows.join(', ');
};

const Starfield = ({ parallax }: { parallax: { x: number, y: number } }) => {
  const [far, setFar] = useState('');
  const [mid, setMid] = useState('');
  const [near, setNear] = useState('');

  useEffect(() => {
    setFar(randomShadows(90, 'rgba(255,255,255,0.55)'));
    setMid(randomShadows(55, 'rgba(200,190,255,0.8)'));
    setNear(randomShadows(28, 'rgba(255,255,255,0.95)'));
  }, []);

  return (
    <div className="hero-starfield" aria-hidden="true">
      {far && <div className="hero-star hero-star-far" style={{ boxShadow: far }} />}
      {mid && <div className="hero-star hero-star-mid" style={{ boxShadow: mid }} />}
      {near && (
        <div
          className="hero-star hero-star-near"
          style={{ boxShadow: near, transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        />
      )}
    </div>
  );
};

type View = 'casinos' | 'sportsbooks' | 'terms' | 'contact';

export const GalaxyHero = ({ activeView, onSelect }: { activeView: View, onSelect: (view: View) => void }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const el = heroRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: relX * -18, y: relY * -14 });
    };
    const handleLeave = () => setParallax({ x: 0, y: 0 });

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="galaxy-hero" id="hero" ref={heroRef}>
      <Starfield parallax={parallax} />
      <div className="hero-nebula hero-nebula-a" aria-hidden="true" />
      <div className="hero-nebula hero-nebula-b" aria-hidden="true" />
      <div className="hero-comet hero-comet-1" aria-hidden="true" />
      <div className="hero-comet hero-comet-2" aria-hidden="true" />
      <div className="hero-comet hero-comet-3" aria-hidden="true" />

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
