import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { guideData } from './guideData';
import { TermsView } from './TermsView';
import { ContactView } from './ContactView';
import { ResponsibleGamblingView } from './ResponsibleGamblingView';
import { AboutView } from './AboutView';
import { FAQView } from './FAQView';
import { BonusesView } from './BonusesView';
import { PaymentsView } from './PaymentsView';
import { GamesView } from './GamesView';
import { GalaxyHero } from './GalaxyHero';
import { BrandPage } from './BrandPage';
import { NewsletterModal } from './NewsletterModal';
import { casinoGuideOrder, extraCasinos, extraSportsbooks, operatorInitials, sportsGuideOrder, type ExtraOperator } from './operators';
import './site.css';

type ViewKey = 'home' | 'casinos' | 'sportsbooks' | 'terms' | 'contact' | 'responsible' | 'about' | 'faq' | 'bonuses' | 'payments' | 'games';

const VIEW_KEYS: ViewKey[] = ['home', 'casinos', 'sportsbooks', 'terms', 'contact', 'responsible', 'about', 'faq', 'bonuses', 'payments', 'games'];

const GENERIC_OFFER_LINE = 'Offers vary by location. Check the operator’s terms before you sign up.';

const brandAccentStyle = (key: string): React.CSSProperties => (
  { '--guide-accent': guideData[key]?.accent } as React.CSSProperties
);

const brandDisplayName = (key: string, fallback: string): string => (
  (guideData[key]?.name as string | undefined) || fallback
);

function OfferCardCopy({ guideKey }: { guideKey?: string }) {
  const guide = guideKey ? guideData[guideKey] : undefined;
  const hook = guide?.cardHook || GENERIC_OFFER_LINE;
  return <p className="offer-bonus">{hook}</p>;
}

const pathForState = (view: ViewKey, guide: string | null): string => {
  if (guide) return `/guide/${guide}`;
  return view === 'home' ? '/' : `/${view}`;
};

const stateForPath = (pathname: string, fallback: ViewKey): { view: ViewKey; guide: string | null } => {
  const guideMatch = pathname.match(/^\/guide\/([^/]+)\/?$/);
  if (guideMatch && guideData[guideMatch[1]]) {
    return { view: fallback, guide: guideMatch[1] };
  }
  const key = pathname.replace(/^\/|\/$/g, '');
  if ((VIEW_KEYS as string[]).includes(key)) {
    return { view: key as ViewKey, guide: null };
  }
  return { view: fallback, guide: null };
};

function OfferCtaSlot({ children }: { children: React.ReactNode }) {
  return <div className="offer-cta">{children}</div>;
}

function ExtraOperatorCard({ operator, onSelectGuide }: { operator: ExtraOperator; onSelectGuide?: (key: string) => void }) {
  const comingSoon = operator.url === '#';
  const openInternal = Boolean(operator.key && onSelectGuide);
  const guide = operator.key ? guideData[operator.key] : undefined;
  const displayName = (guide?.name as string | undefined) || operator.name;
  const stakeLogo = operator.key === 'stake' ? '/brands/stake/logo.png' : null;
  const cloudbetLogo = operator.key === 'cloudbet' ? '/brands/cloudbet/logo.svg' : null;
  const vaveLogo = operator.key === 'vave' ? '/brands/vave/logo.png' : null;
  const jackbitLogo = operator.key === 'jackbit' ? '/brands/jackbit/logo.svg' : null;
  const gamdomLogo = operator.key === 'gamdom' ? '/brands/gamdom/logo.svg' : null;
  const rakebitLogo = operator.key === 'rakebit' ? '/brands/rakebit/logo.svg' : null;
  const betfuryLogo = operator.key === 'betfury' ? '/brands/betfury/logo.png' : null;
  const spinbetterLogo = operator.key === 'spinbetter' ? '/brands/spinbetter/logo.png' : null;
  const wildioLogo = operator.key === 'wildio' || operator.key === 'wild.io' ? '/brands/wild/logo.png' : null;
  const bitzLogo = operator.key === 'bitz' || operator.key === 'bitzio' || operator.key === 'bitz.io' ? '/brands/bitz/logo.png' : null;
  const hyperluckyLogo = operator.key === 'hyperlucky' || operator.key === 'hyper lucky' ? '/brands/hyperlucky/logo.png' : null;
  const megapariLogo = operator.key === 'megapari' ? '/brands/megapari/logo.svg' : null;
  const coinsgameLogo = operator.key === 'coinsgame' || operator.key === 'coins.game' || operator.key === 'CoinsGame' ? '/brands/coinsgame/logo.png' : null;
  const betsioLogo = operator.key === 'betsio' || operator.key === 'bets.io' ? '/brands/betsio/logo.png' : null;
  const cocobetLogo = operator.key === 'cocobet' ? '/brands/cocobet/logo.png' : null;
  const bet25Logo = operator.key === 'bet25' ? '/brands/bet25/logo.png' : null;
  const rxcasinoLogo = operator.key === 'rxcasino' || operator.key === 'RX Casino' ? '/brands/rxcasino/logo.png' : null;
  const goldenplayLogo = operator.key === 'goldenplay' ? '/brands/goldenplay/logo.png' : null;
  const wildrollLogo = operator.key === 'wildroll' || operator.key === 'WildRoll' ? '/brands/wildroll/logo.png' : null;
  const betpandaLogo = operator.key === 'betpanda' ? '/brands/betpanda/logo.png' : null;
  const epicbetLogo = operator.key === 'epicbet' ? '/brands/epicbet/logo.png' : null;
  const cybetLogo = operator.key === 'cybet' ? '/brands/cybet/logo.png' : null;
  const vavadaLogo = operator.key === 'vavada' ? '/brands/vavada/logo.png' : null;
  const rainbetLogo = operator.key === 'rainbet' ? '/brands/rainbet/logo.png' : null;
  const citobetLogo = operator.key === 'citobet' ? '/brands/citobet/logo.png' : null;
  const ggbetLogo = operator.key === 'ggbet' || operator.key === 'GG.Bet' ? '/brands/ggbet/logo.png' : null;
  const n1betLogo = operator.key === 'n1bet' || operator.key === 'N1Bet' ? '/brands/n1bet/logo.png' : null;
  const rollxoLogo = operator.key === 'rollxo' ? '/brands/rollxo/logo.png' : null;
  const mybookieLogo = operator.key === 'mybookie' || operator.key === 'MyBookie Sports' ? '/brands/mybookie/logo.png' : null;
  const everygameLogo = operator.key === 'everygame' || operator.key === 'Everygame Sports' ? '/brands/everygame/logo.png' : null;
  const betwhaleLogo = operator.key === 'betwhale' ? '/brands/betwhale/logo.png' : null;
  const bet365Logo = operator.key === 'bet365' ? '/brands/bet365/logo.png' : null;
  const bcgameLogo = operator.key === 'bcgame' ? '/brands/bcgame/logo.png' : null;
  const cardLogo = stakeLogo
    ? { src: stakeLogo, box: 'stake-logo-box', alt: 'Stake logo' }
    : cloudbetLogo
      ? { src: cloudbetLogo, box: 'cloudbet-logo-box', alt: 'Cloudbet logo' }
      : vaveLogo
        ? { src: vaveLogo, box: 'vave-logo-box', alt: 'Vave logo' }
        : jackbitLogo
          ? { src: jackbitLogo, box: 'jackbit-logo-box', alt: 'Jackbit logo' }
          : gamdomLogo
            ? { src: gamdomLogo, box: 'gamdom-logo-box', alt: 'Gamdom logo' }
            : rakebitLogo
              ? { src: rakebitLogo, box: 'rakebit-logo-box', alt: 'Rakebit logo' }
              : betfuryLogo
                ? { src: betfuryLogo, box: 'betfury-logo-box', alt: 'BetFury logo' }
                : spinbetterLogo
                  ? { src: spinbetterLogo, box: 'spinbetter-logo-box', alt: 'SpinBetter logo' }
                  : wildioLogo
                    ? { src: wildioLogo, box: 'wildio-logo-box', alt: 'Wild.io logo' }
                    : bitzLogo
                      ? { src: bitzLogo, box: 'bitz-logo-box', alt: 'Bitz.io logo' }
                    : hyperluckyLogo
                      ? { src: hyperluckyLogo, box: 'hyperlucky-logo-box', alt: 'Hyper Lucky logo' }
                    : bet365Logo
                      ? { src: bet365Logo, box: 'bet365-logo-box', alt: 'bet365 logo' }
                      : bcgameLogo
                        ? { src: bcgameLogo, box: 'bcgame-logo-box', alt: 'BC.Game logo' }
                        : megapariLogo
                          ? { src: megapariLogo, box: 'megapari-logo-box', alt: 'MegaPari logo' }
                          : coinsgameLogo
                            ? { src: coinsgameLogo, box: 'coinsgame-logo-box', alt: 'Coins.Game logo' }
                          : betsioLogo
                            ? { src: betsioLogo, box: 'betsio-logo-box', alt: 'Bets.io logo' }
                            : cocobetLogo
                              ? { src: cocobetLogo, box: 'cocobet-logo-box', alt: 'Cocobet logo' }
                              : bet25Logo
                                ? { src: bet25Logo, box: 'bet25-logo-box', alt: 'Bet25 logo' }
                              : rxcasinoLogo
                                ? { src: rxcasinoLogo, box: 'rxcasino-logo-box', alt: 'RX Casino logo' }
                              : goldenplayLogo
                                ? { src: goldenplayLogo, box: 'goldenplay-logo-box', alt: 'GoldenPlay logo' }
                              : wildrollLogo
                                ? { src: wildrollLogo, box: 'wildroll-logo-box', alt: 'WildRoll logo' }
                              : betpandaLogo
                                ? { src: betpandaLogo, box: 'betpanda-logo-box', alt: 'Betpanda logo' }
                              : epicbetLogo
                                ? { src: epicbetLogo, box: 'epicbet-logo-box', alt: 'EpicBet logo' }
                              : cybetLogo
                                ? { src: cybetLogo, box: 'cybet-logo-box', alt: 'Cybet logo' }
                              : vavadaLogo
                                ? { src: vavadaLogo, box: 'vavada-logo-box', alt: 'Vavada logo' }
                              : rainbetLogo
                                ? { src: rainbetLogo, box: 'rainbet-logo-box', alt: 'Rainbet logo' }
                              : citobetLogo
                                ? { src: citobetLogo, box: 'citobet-logo-box', alt: 'Citobet logo' }
                              : ggbetLogo
                                ? { src: ggbetLogo, box: 'ggbet-logo-box', alt: 'GG.Bet logo' }
                              : n1betLogo
                                ? { src: n1betLogo, box: 'n1bet-logo-box', alt: 'N1Bet logo' }
                              : rollxoLogo
                                ? { src: rollxoLogo, box: 'rollxo-logo-box', alt: 'RollXO logo' }
                              : mybookieLogo
                                ? { src: mybookieLogo, box: 'mybookie-logo-box', alt: 'MyBookie logo' }
                              : everygameLogo
                                ? { src: everygameLogo, box: 'everygame-logo-box', alt: 'Everygame logo' }
                              : betwhaleLogo
                                ? { src: betwhaleLogo, box: 'betwhale-logo-box', alt: 'Betwhale logo' }
                              : null;
  return (
    <article className="offer-card" style={operator.key ? brandAccentStyle(operator.key) : undefined}>
      {cardLogo ? (
        <div className={`offer-rank offer-logo ${cardLogo.box}`}>
          <img src={cardLogo.src} alt={cardLogo.alt} />
        </div>
      ) : (
        <div className="offer-rank offer-logo offer-logo-placeholder" aria-hidden="true">
          <span>{operatorInitials(displayName)}</span>
        </div>
      )}
      <div className="offer-body">
        <div className="offer-top-row">
          <span className="offer-name name-glow">{displayName}</span>
        </div>
        <OfferCardCopy guideKey={operator.key} />
      </div>
      <OfferCtaSlot>
        {openInternal ? (
          <button type="button" onClick={() => onSelectGuide!(operator.key!)} className="offer-btn">VIEW OFFER</button>
        ) : comingSoon ? (
          <a className="offer-btn" href="#" onClick={(e) => e.preventDefault()}>Coming soon</a>
        ) : (
          <a className="offer-btn" href={operator.url} target="_blank" rel="noopener noreferrer">VIEW OFFER</a>
        )}
      </OfferCtaSlot>
    </article>
  );
}

export const MainSite = ({ defaultView }: { defaultView: ViewKey }) => {
  const [activeView, setActiveView] = useState<ViewKey>(() => stateForPath(window.location.pathname, defaultView).view);
  const [activeGuide, setActiveGuide] = useState<string | null>(() => stateForPath(window.location.pathname, defaultView).guide);
  const [showAllCasinos, setShowAllCasinos] = useState(false);
  const [showAllSportsbooks, setShowAllSportsbooks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isPopStateRef = useRef(false);
  const listScrollYRef = useRef(0);

  useEffect(() => {
    const onPopState = () => {
      const next = stateForPath(window.location.pathname, defaultView);
      isPopStateRef.current = true;
      setActiveGuide(next.guide);
      setActiveView(next.view);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [defaultView]);

  useEffect(() => {
    if (isPopStateRef.current) {
      isPopStateRef.current = false;
      return;
    }
    const path = pathForState(activeView, activeGuide);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [activeView, activeGuide]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Smooth scroll to top on mount if needed
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Make sure we have our global body class for the site content
    document.body.classList.add('site-active');
    return () => document.body.classList.remove('site-active');
  }, []);

  const isHomeView = !activeGuide && activeView === 'home';

  useEffect(() => {
    document.body.classList.toggle('secondary-bg', !isHomeView);
    return () => document.body.classList.remove('secondary-bg');
  }, [isHomeView]);

  const openGuide = (key: string) => {
    listScrollYRef.current = window.scrollY;
    setActiveGuide(key);
    window.scrollTo(0, 0);
  };

  const closeGuide = () => {
    setActiveGuide(null);
  };

  const goToGuide = (key: string) => {
    setActiveGuide(key);
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    if (activeGuide) return;
    window.scrollTo(0, listScrollYRef.current);
  }, [activeGuide]);

  const siteNav = !isHomeView ? (
    <nav id="site-nav" className={isScrolled ? 'scrolled' : ''} aria-label="Primary">
      <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('home'); window.scrollTo(0, 0); }}>
        <span className="half-a">GAMBLING</span>&nbsp;<span className="half-b">UNIVERSE</span>
      </a>
      <div className="nav-tabs">
        <button
          type="button"
          className={`nav-tab ${!activeGuide && activeView === 'casinos' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('casinos'); }}
        >
          Casinos
        </button>
        <button
          type="button"
          className={`nav-tab ${!activeGuide && activeView === 'sportsbooks' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('sportsbooks'); }}
        >
          Sportsbooks
        </button>
        <button
          type="button"
          className={`nav-tab ${!activeGuide && activeView === 'bonuses' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('bonuses'); window.scrollTo(0, 0); }}
        >
          Bonuses
        </button>
      </div>
    </nav>
  ) : null;

  const siteFooter = (
      <footer id="site-footer">
        <div className="footer-row">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('home'); window.scrollTo(0, 0); }}>
                <span className="half-a">GAMBLING</span>&nbsp;<span className="half-b">UNIVERSE</span>
              </a>
              <p>An independent guide to crypto casinos and sportsbooks. We test the bonuses, terms, and payout speed so you don't have to.</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>EXPLORE</h4>
                <ul>
                  <li><a href="#casinos" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('casinos'); }}>Casinos</a></li>
                  <li><a href="#sportsbooks" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('sportsbooks'); }}>Sportsbooks</a></li>
                  <li><a href="#bonuses" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('bonuses'); window.scrollTo(0, 0); }}>Bonuses</a></li>
                  <li><a href="#payments" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('payments'); window.scrollTo(0, 0); }}>Crypto Guides</a></li>
                  <li><a href="#games" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('games'); window.scrollTo(0, 0); }}>Games</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>SUPPORT</h4>
                <ul>
                  <li><a href="#terms" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('terms'); window.scrollTo(0, 0); }}>Terms and Conditions</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('contact'); window.scrollTo(0, 0); }}>Contact us</a></li>
                  <li><a href="#responsible" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('responsible'); window.scrollTo(0, 0); }}>Responsible Gambling</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>COMPANY</h4>
                <ul>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('about'); window.scrollTo(0, 0); }}>About Us</a></li>
                  <li><a href="#faq" onClick={(e) => { e.preventDefault(); setActiveGuide(null); setActiveView('faq'); window.scrollTo(0, 0); }}>FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-disclaimer">
            <div className="footer-badges">
              <span className="footer-badge">18+ ONLY</span>
              <span className="footer-badge">PLAY RESPONSIBLY</span>
              <span className="footer-badge">INDEPENDENT REVIEWS</span>
            </div>
            <p className="footer-legal">GamblingUniverse is an independent affiliate site — we may earn a commission when you sign up through our links, at no extra cost to you. This never affects our rankings. Offers, odds, and terms change often; always confirm details on the operator's site before depositing. Gambling involves risk — only wager what you can afford to lose. If it stops being fun, that's the signal to stop. In the US, the National Council on Problem Gambling helpline is 1-800-522-4700.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GamblingUniverse. Not affiliated with any operator listed.</span>
        </div>
      </footer>
  );

  if (activeGuide && guideData[activeGuide]) {
    const guide = guideData[activeGuide];
    const isSportsGuide = guide.kind === 'sports';
    const noClaimUrl = !guide.claim || guide.claim === '#';

    if (guide.page) {
      const ranking = isSportsGuide ? sportsGuideOrder : casinoGuideOrder;
      const rankIndex = ranking.indexOf(activeGuide);
      const prevGuideKey = rankIndex > 0 ? ranking[rankIndex - 1] : undefined;
      const nextGuideKey =
        rankIndex >= 0 && rankIndex < ranking.length - 1
          ? ranking[rankIndex + 1]
          : undefined;
      const prevGuide =
        typeof prevGuideKey === 'string' && guideData[prevGuideKey]
          ? prevGuideKey
          : undefined;
      const nextGuide =
        typeof nextGuideKey === 'string' && guideData[nextGuideKey]
          ? nextGuideKey
          : undefined;
      const prevBrandName = prevGuide
        ? brandDisplayName(prevGuide, prevGuide).toUpperCase()
        : undefined;

      return (
        <>
          {siteNav}
          <BrandPage
            guideKey={activeGuide}
            guide={guide}
            onBack={closeGuide}
            onPrev={prevGuide ? () => goToGuide(prevGuide) : undefined}
            prevBrandName={prevBrandName}
            onNext={nextGuide ? () => goToGuide(nextGuide) : undefined}
          />
          {siteFooter}
        </>
      );
    }
    
    return (
      <>
      {siteNav}
      <main id="casinoGuide" className="guide-panel" style={{ '--guide-accent': guide.accent } as React.CSSProperties}>
        <div className="guide-window">
          <div className="guide-inner">
            <div className="guide-topbar">
              <button className="guide-back" onClick={closeGuide}>
                {isSportsGuide ? '← BACK TO SPORTS PICKS' : '← BACK TO TOP PICKS'}
              </button>
            </div>
            <div className="mbit-guide-header" data-brand={activeGuide}>
              <div className="mbit-guide-card">
                <div className="mbit-guide-logo">
                  {guide.logo ? (
                    <img src={guide.logo} alt={`${guide.name} logo`} />
                  ) : (
                    <span className="guide-logo-placeholder">{operatorInitials(guide.name)}</span>
                  )}
                </div>
                <div className="mbit-guide-copy">
                  <h1 id="guideTitle" className="guide-title">{guide.name}</h1>
                  <p id="guideSummary" className="guide-summary">{guide.summary}</p>
                  <p className="guide-checked">LAST CHECKED: 04 SEP 2026</p>
                </div>
                <a
                  className="mbit-guide-claim"
                  href={noClaimUrl ? '#' : guide.claim}
                  target={noClaimUrl ? undefined : '_blank'}
                  rel={noClaimUrl ? undefined : 'noopener noreferrer'}
                  onClick={noClaimUrl ? (e) => e.preventDefault() : undefined}
                >
                  {noClaimUrl ? 'Check official site' : isSportsGuide ? 'VISIT SPORTSBOOK' : 'CLAIM OFFER'}
                </a>
              </div>
            </div>
            <div id="guideSections">
              {guide.sections.map((section: any, idx: number) => (
                <section key={idx} className="guide-section">
                  <h2>{section[0]}</h2>
                  <p dangerouslySetInnerHTML={{ __html: section[1] }}></p>
                </section>
              ))}
            </div>
            <p className="guide-notice"><strong>ACCURACY / 18+ NOTICE</strong><br/>Information is a concise guide to checked operator pages, not a promise of availability or an offer. Terms, eligibility and payments can change. Only gamble if you are 18+ (or the legal age where you are), in a lawful location, and can afford to stop.</p>
            <a
              id="guideClaim"
              className="guide-claim"
              href={noClaimUrl ? '#' : guide.claim}
              target={noClaimUrl ? undefined : '_blank'}
              rel={noClaimUrl ? undefined : 'noopener noreferrer'}
              onClick={noClaimUrl ? (e) => e.preventDefault() : undefined}
            >
              {noClaimUrl ? 'Check official site' : isSportsGuide ? 'VISIT SPORTSBOOK ↗' : 'CLAIM OFFER ↗'}
            </a>
          </div>
        </div>
        <NewsletterModal pageKey={`guide-${activeGuide}`} />
      </main>
      </>
    );
  }

  return (
    <>
      {siteNav}

      {activeView === 'home' && (
        <div className="home-shell">
          <GalaxyHero activeView="home" onSelect={(view) => { setActiveView(view); window.scrollTo(0, 0); }} />
        </div>
      )}

      {activeView === 'casinos' && (
        <section id="casinos" className="listing-section">
          <div className="section-head">
            <span className="section-eyebrow">CASINOS</span>
            <h2 className="section-title listing-heading">Crypto casinos worth your first deposit</h2>
            <p className="section-copy">We compare published welcome offers, game selection, crypto support and bonus terms. Availability varies by country and promotions change, so always confirm the operator’s latest terms.</p>
          </div>

          <div className="offer-stack">
            <article className="offer-card offer-card-top-pick" style={brandAccentStyle('sports-duelbits')}>
              <span className="offer-featured-tag">TOP PICK</span>
              <div className="offer-rank offer-logo duelbits-logo-box"><img src="/brands/duelbits/logo.png" alt="Duelbits logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('sports-duelbits', 'Duelbits')}</span>
                </div>
                <OfferCardCopy guideKey="sports-duelbits" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('sports-duelbits')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>

            <article className="offer-card" style={brandAccentStyle('spinbetter')}>
              <div className="offer-rank offer-logo spinbetter-logo-box"><img src="/brands/spinbetter/logo.png" alt="SpinBetter logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('spinbetter', 'SpinBetter')}</span>
                </div>
                <OfferCardCopy guideKey="spinbetter" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('spinbetter')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>

            <article className="offer-card" style={brandAccentStyle('hyperlucky')}>
              <div className="offer-rank offer-logo hyperlucky-logo-box"><img src="/brands/hyperlucky/logo.png" alt="Hyper Lucky logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('hyperlucky', 'Hyper Lucky')}</span>
                </div>
                <OfferCardCopy guideKey="hyperlucky" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('hyperlucky')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>

            <article className="offer-card" style={brandAccentStyle('mbit')}>
              <div className="offer-rank offer-logo mbit-logo-box"><img src="/brands/mbit/logo.png" alt="mBit logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('mbit', 'mBit')}</span>
                </div>
                <OfferCardCopy guideKey="mbit" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('mbit')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>
            {showAllCasinos && extraCasinos.map((operator) => (
              <React.Fragment key={operator.name}>
                <ExtraOperatorCard operator={operator} onSelectGuide={openGuide} />
              </React.Fragment>
            ))}
          </div>
          {!showAllCasinos && (
            <div className="view-all-wrap">
              <button className="view-all-btn" type="button" onClick={() => setShowAllCasinos(true)}>VIEW ALL</button>
            </div>
          )}
        </section>
      )}

      {activeView === 'sportsbooks' && (
        <section id="sportsbooks" className="listing-section">
          <div className="section-head">
            <span className="section-eyebrow">SPORTSBOOKS</span>
            <h2 className="section-title listing-heading">Established sportsbooks worth comparing</h2>
            <p className="section-copy">We compare widely recognized regulated operators, live-betting tools, market depth and published promotions. Availability and offers vary sharply by location, so always confirm the local operator terms.</p>
          </div>

          <div className="offer-stack">
            <article className="offer-card offer-card-top-pick" style={brandAccentStyle('bitstarz')}>
              <span className="offer-featured-tag">TOP PICK</span>
              <div className="offer-rank offer-logo bitstarz-logo-box"><img src="https://www.bitstarz.com/header/bitstarz-logo.svg" alt="Bitstarz logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('bitstarz', 'Bitstarz')}</span>
                </div>
                <OfferCardCopy guideKey="bitstarz" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('bitstarz')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>
            <article className="offer-card" style={brandAccentStyle('vavada')}>
              <div className="offer-rank offer-logo vavada-logo-box"><img src="/brands/vavada/logo.png" alt="Vavada logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('vavada', 'Vavada')}</span>
                </div>
                <OfferCardCopy guideKey="vavada" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('vavada')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>
            <article className="offer-card" style={brandAccentStyle('megapari')}>
              <div className="offer-rank offer-logo megapari-logo-box"><img src="/brands/megapari/logo.svg" alt="MegaPari logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('megapari', 'MegaPari')}</span>
                </div>
                <OfferCardCopy guideKey="megapari" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('megapari')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>
            <article className="offer-card" style={brandAccentStyle('sports-thunderpick')}>
              <div className="offer-rank offer-logo thunderpick-logo-box"><img src="/brands/thunderpick/logo.png" alt="Thunderpick logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name name-glow">{brandDisplayName('sports-thunderpick', 'Thunderpick')}</span>
                </div>
                <OfferCardCopy guideKey="sports-thunderpick" />
              </div>
              <OfferCtaSlot>
                <button onClick={() => openGuide('sports-thunderpick')} className="offer-btn">VIEW OFFER</button>
              </OfferCtaSlot>
            </article>
            {showAllSportsbooks && extraSportsbooks.map((operator) => (
              <React.Fragment key={operator.name}>
                <ExtraOperatorCard operator={operator} onSelectGuide={openGuide} />
              </React.Fragment>
            ))}
          </div>
          {!showAllSportsbooks && (
            <div className="view-all-wrap">
              <button className="view-all-btn" type="button" onClick={() => setShowAllSportsbooks(true)}>VIEW ALL</button>
            </div>
          )}
        </section>
      )}

      {activeView === 'bonuses' && (
        <BonusesView onSelectGuide={openGuide} />
      )}

      {activeView === 'payments' && (
        <PaymentsView onSelectGuide={openGuide} />
      )}

      {activeView === 'games' && (
        <GamesView onExplore={() => { setActiveView('bonuses'); window.scrollTo(0, 0); }} />
      )}

      {activeView === 'terms' && (
        <TermsView />
      )}

      {activeView === 'contact' && (
        <ContactView />
      )}

      {activeView === 'responsible' && (
        <ResponsibleGamblingView />
      )}

      {activeView === 'about' && (
        <AboutView />
      )}

      {activeView === 'faq' && (
        <FAQView />
      )}

      {activeView !== 'home' && siteFooter}

      <NewsletterModal pageKey={activeView} />
    </>
  );
};
