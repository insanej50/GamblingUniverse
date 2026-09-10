import React, { useState, useEffect, useRef } from 'react';
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
import { NewsletterModal } from './NewsletterModal';
import './site.css';

type ViewKey = 'casinos' | 'sportsbooks' | 'terms' | 'contact' | 'responsible' | 'about' | 'faq' | 'bonuses' | 'payments' | 'games';

const VIEW_KEYS: ViewKey[] = ['casinos', 'sportsbooks', 'terms', 'contact', 'responsible', 'about', 'faq', 'bonuses', 'payments', 'games'];

const pathForState = (view: ViewKey, guide: string | null): string => {
  if (guide) return `/guide/${guide}`;
  return view === 'casinos' ? '/' : `/${view}`;
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

export const MainSite = ({ defaultView }: { defaultView: ViewKey }) => {
  const [activeView, setActiveView] = useState<ViewKey>(() => stateForPath(window.location.pathname, defaultView).view);
  const [activeGuide, setActiveGuide] = useState<string | null>(() => stateForPath(window.location.pathname, defaultView).guide);
  const [isScrolled, setIsScrolled] = useState(false);
  const isPopStateRef = useRef(false);

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

  const isHomeView = !activeGuide && (activeView === 'casinos' || activeView === 'sportsbooks');

  useEffect(() => {
    document.body.classList.toggle('secondary-bg', !isHomeView);
    return () => document.body.classList.remove('secondary-bg');
  }, [isHomeView]);

  const openGuide = (key: string) => {
    setActiveGuide(key);
    window.scrollTo(0, 0);
  };

  const closeGuide = () => {
    setActiveGuide(null);
    window.scrollTo(0, 0);
  };

  if (activeGuide && guideData[activeGuide]) {
    const guide = guideData[activeGuide];
    const isSportsGuide = guide.kind === 'sports';
    
    return (
      <main id="casinoGuide" className="guide-panel" style={{ '--guide-accent': guide.accent } as React.CSSProperties}>
        <div className="guide-window">
          <div className="guide-inner">
            <div className="guide-topbar">
              <button className="guide-back" onClick={closeGuide}>
                {isSportsGuide ? '← BACK TO SPORTS PICKS' : '← BACK TO TOP PICKS'}
              </button>
            </div>
            <div id="guideBrandHero" className="guide-brand-hero" data-brand={activeGuide}>
              <img id="guideBanner" className="guide-banner" src={guide.banner || 'https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/6928c6322a7bcde162962242_announce-homepage-article.webp'} alt={`${guide.name} promotional banner`} />
              <div id="guideLogoCard" className="guide-logo-card" data-brand={activeGuide}>
                <img id="guideLogo" className="guide-logo" src={guide.logo || 'https://duelbits.com/logo.svg'} alt={`${guide.name} logo`} />
              </div>
            </div>
            <h1 id="guideTitle" className="guide-title">{guide.name}</h1>
            <p id="guideSummary" className="guide-summary">{guide.summary}</p>
            <p className="guide-checked">LAST CHECKED: 04 SEP 2026</p>
            <div id="guideSections">
              {guide.sections.map((section: any, idx: number) => (
                <section key={idx} className="guide-section">
                  <h2>{section[0]}</h2>
                  <p dangerouslySetInnerHTML={{ __html: section[1] }}></p>
                </section>
              ))}
            </div>
            <p className="guide-notice"><strong>ACCURACY / 18+ NOTICE</strong><br/>Information is a concise guide to checked operator pages, not a promise of availability or an offer. Terms, eligibility and payments can change. Only gamble if you are 18+ (or the legal age where you are), in a lawful location, and can afford to stop.</p>
            <a id="guideClaim" className="guide-claim" href={guide.claim} target="_blank" rel="noopener noreferrer">
              {isSportsGuide ? 'VISIT SPORTSBOOK ↗' : 'CLAIM OFFER ↗'}
            </a>
          </div>
        </div>
        <NewsletterModal pageKey={`guide-${activeGuide}`} />
      </main>
    );
  }

  return (
    <>
      <nav id="site-nav" className={isScrolled ? 'scrolled' : ''} aria-label="Primary">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); setActiveView('casinos'); window.scrollTo(0, 0); }}>
          <span className="half-a">GAMBLING</span>&nbsp;<span className="half-b">UNIVERSE</span>
        </a>
        <div className="nav-tabs">
          <button
            type="button"
            className={`nav-tab ${activeView === 'casinos' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('casinos'); }}
          >
            Casinos
          </button>
          <button
            type="button"
            className={`nav-tab ${activeView === 'sportsbooks' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('sportsbooks'); }}
          >
            Sportsbooks
          </button>
          <button
            type="button"
            className={`nav-tab ${activeView === 'bonuses' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveView('bonuses'); window.scrollTo(0, 0); }}
          >
            Bonuses
          </button>
        </div>
      </nav>

      {(activeView === 'casinos' || activeView === 'sportsbooks') && (
        <GalaxyHero activeView={activeView} onSelect={setActiveView} />
      )}

      {activeView === 'casinos' && (
        <section id="casinos" className="listing-section">
          <div className="section-head">
            <span className="section-eyebrow">CASINOS</span>
            <h2 className="section-title">Crypto casinos worth your first deposit</h2>
            <p className="section-copy">We compare published welcome offers, game selection, crypto support and bonus terms. Availability varies by country and promotions change, so always confirm the operator’s latest terms.</p>
          </div>

          <span className="top-picks-mark">OUR TOP PICKS</span>
          <div className="offer-stack">
            <article className="offer-card">
              <div className="offer-rank offer-logo bet365-logo-box"><img src="https://static.cdnlogo.com/logos/b/40/bet365_800.png" alt="bet365 logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">BET365</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>GLOBAL CASINO</small></span>
                </div>
                <p className="offer-bonus">New player offers vary depending on your location</p>
                <ul className="offer-features">
                  <li>Massive global reputation</li>
                  <li>Integrated sportsbook and casino</li>
                  <li>Wide variety of live dealer games</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('bet365')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>

            <article className="offer-card">
              <div className="offer-rank offer-logo bitstarz-logo-box"><img src="https://www.bitstarz.com/header/bitstarz-logo.svg" alt="BitStarz logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">BITSTARZ</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>AWARD WINNING</small></span>
                </div>
                <p className="offer-bonus">Tiered deposit bonuses and free spins for new accounts</p>
                <ul className="offer-features">
                  <li>Multi-award winning crypto casino</li>
                  <li>Lightning fast 10-minute cashouts</li>
                  <li>Fiat and crypto both accepted</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('bitstarz')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>

            <article className="offer-card">
              <div className="offer-rank offer-logo mbit-logo-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAoCAMAAABEgm29AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAA5UExURf////u6LP7RN/+5KvzJVv+0M/rJSvfOS//ZSfxRUf/hXP24OfzZXP3fc/sqK/tAQPs6OvxfX/ySfJq5Nm0AAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+oJBAw4J0L2l5YAAAAQY2FOdgAAAGUAAABkAAAABgAAACD1S0shAAACk0lEQVRIx81Wi5KbMAzEL4HIFUj//2NrWZIlE9L2Jkynmlywsb27Wilw0/Q/RYgxpnrN9RrLzeCKCTSAG4EzwEyYAXLDjvlm1UOE+6RDfI3wsmt+t/D7mC/A4/wmve/mtCjgwsGT06YcL2//0RUP2RmW6/TeCgcAP9aWmAUcaYLhDfiVK6FFbeAcUm+DXJLriZXBpFJZsKvnjySHce0p+WqIUwAlGrV1B5grCwwmkfDEmx793rCx4yTfBm5Car+GM47KSrh67PXs1Lsg8LUGHfqqZfjBw2XNVsJ5wkH4bMKtE9p1mMSlqoJ1EUDTxudlO/mo+ay+nrN2LkyPaON+P5grPvHZGdRcQGHG4efhGkHBodV5kYJWY1PSqvRqlFaLliATrSe7XXWyEmkj5cSBU5FRKBRJw7aAdetgilZ5lqaUYzUEpQpMncYvJD8SoprHK7g8nWUz/1S6KtHXn3XQIUPnH4nMFSdWNmfvih1TTUFXzDjTMrz8PHn25JaFusLPmWxcXiz4sxr+YPHkfUEp+SES+oyFxZMrvhGvXOYn39nYcyCxUmMOrliGJ1eGzGzhHfZYQlvp77grl8uYBaT4Ch1eSmhrcOWKErWsHtYrMZ7QQ0GfKHYk13dDL5vL4ZRFKeqQDLRkhQusQh/1fQDgX2RTzn/xv40mBObCbYGaUBGSbdtIfvujIfK4zbZvghd1rvCbFitcxdh3QqPLMdFnpxkeH2ayt890VIJNZvtBY1L9XeXn4PP7E5mEMjmeE88+xd7Z3ueTxthu1AnuRHIT+P6zXQ/2vaJvtID4CXLDou8dG3iVTp+J8thucbzKO0gq2UDIZPreuvEGVw62ghsF2/VAYf3MldbODaj2NKKYcQjlP4pfm+sfOTgXD6gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDktMDRUMTI6NTY6MTIrMDA6MDCuMHSnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTA5LTA0VDEyOjU2OjEyKzAwOjAw323MGwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNi0wOS0wNFQxMjo1NjozOSswMDowMMhavkMAAAAASUVORK5CYII=" alt="mBit logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">MBIT</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>CRYPTO CASINO</small></span>
                </div>
                <p className="offer-bonus">Generous deposit bonuses and daily promotions</p>
                <ul className="offer-features">
                  <li>Over 2000 crypto casino games</li>
                  <li>VIP program with daily cashback</li>
                  <li>Fast and anonymous registration</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('mbit')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>

            <article className="offer-card">
              <div className="offer-rank offer-logo bcgame-logo-box"><img src="https://betting.bc.game/wp-content/themes/bettbcg/images/banner-upd/banner-left.avif" alt="BC.Game logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">BC.GAME</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>CRYPTO CASINO</small></span>
                </div>
                <p className="offer-bonus">Vast array of deposit matches and lucky spins</p>
                <ul className="offer-features">
                  <li>Over 8000 games and live dealers</li>
                  <li>Huge variety of accepted cryptocurrencies</li>
                  <li>Vibrant chat and community features</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('bcgame')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>
          </div>
          <div className="view-all-wrap">
            <button className="view-all-btn" type="button">VIEW ALL</button>
          </div>
        </section>
      )}

      {activeView === 'sportsbooks' && (
        <section id="sportsbooks" className="listing-section">
          <div className="section-head">
            <span className="section-eyebrow">SPORTSBOOKS</span>
            <h2 className="section-title">Established sportsbooks worth comparing</h2>
            <p className="section-copy">We compare widely recognized regulated operators, live-betting tools, market depth and published promotions. Availability and offers vary sharply by location, so always confirm the local operator terms.</p>
          </div>

          <span className="top-picks-mark">OUR TOP PICKS</span>
          <div className="offer-stack">
            <article className="offer-card">
              <div className="offer-rank offer-logo thunderpick-logo-box"><img src="https://ml.globenewswire.com/Resource/Download/2b20ef3e-4360-42bf-84f9-d151d02fd6c7?size=3" alt="Thunderpick logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">THUNDERPICK</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>CRYPTO + ESPORTS</small></span>
                </div>
                <p className="offer-bonus">Crypto sportsbook offers vary by location and account</p>
                <ul className="offer-features">
                  <li>Esports-first markets and live betting</li>
                  <li>Traditional sports alongside competitive gaming</li>
                  <li>Crypto deposits and withdrawals</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('sports-thunderpick')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>
            <article className="offer-card">
              <div className="offer-rank offer-logo logo-light draftkings-logo-box"><img src="/draftkingslogo2.png" alt="DraftKings Sportsbook logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">DRAFTKINGS</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>US + ONTARIO</small></span>
                </div>
                <p className="offer-bonus">Local welcome promotions depend on state or province</p>
                <ul className="offer-features">
                  <li>Large US league and player-prop selection</li>
                  <li>Same-game parlays and live betting</li>
                  <li>Strong fantasy-sports ecosystem</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('sports-draftkings')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>
            <article className="offer-card">
              <div className="offer-rank offer-logo logo-light fanduel-logo-box"><img src="https://logotyp.us/file/fanduel.svg" alt="FanDuel logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">FANDUEL</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>US + ONTARIO</small></span>
                </div>
                <p className="offer-bonus">Eligible-customer offers differ by location and account</p>
                <ul className="offer-features">
                  <li>Polished mobile live-betting interface</li>
                  <li>Same-game parlays and cash-out tools</li>
                  <li>Broad major-league market coverage</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('sports-fanduel')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>
            <article className="offer-card">
              <div className="offer-rank offer-logo duelbits-logo-box"><img src="/DuelbitsLogo2.png" alt="Duelbits logo" /></div>
              <div className="offer-body">
                <div className="offer-top-row">
                  <span className="offer-name">DUELBITS</span>
                  <span className="offer-featured-tag">TOP PICK</span>
                  <span className="offer-rating"><small>CRYPTO SPORTSBOOK</small></span>
                </div>
                <p className="offer-bonus">Sportsbook promotions vary by account and jurisdiction</p>
                <ul className="offer-features">
                  <li>Esports, football and major global sports</li>
                  <li>Live betting and broad market coverage</li>
                  <li>Crypto-friendly deposits and withdrawals</li>
                </ul>
              </div>
              <div className="offer-cta">
                <button onClick={() => openGuide('sports-duelbits')} className="offer-btn">VIEW OFFER</button>
                <span className="offer-terms">18+ · T&amp;Cs apply</span>
              </div>
            </article>
          </div>
          <div className="view-all-wrap">
            <button className="view-all-btn" type="button">VIEW ALL</button>
          </div>
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

      <footer id="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
              <span className="half-a">GAMBLING</span>&nbsp;<span className="half-b">UNIVERSE</span>
            </a>
            <p>An independent guide to crypto casinos and sportsbooks. We test the bonuses, terms, and payout speed so you don't have to.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>EXPLORE</h4>
              <ul>
                <li><a href="#casinos" onClick={(e) => { e.preventDefault(); setActiveView('casinos'); }}>Casinos</a></li>
                <li><a href="#sportsbooks" onClick={(e) => { e.preventDefault(); setActiveView('sportsbooks'); }}>Sportsbooks</a></li>
                <li><a href="#bonuses" onClick={(e) => { e.preventDefault(); setActiveView('bonuses'); window.scrollTo(0, 0); }}>Bonuses</a></li>
                <li><a href="#payments" onClick={(e) => { e.preventDefault(); setActiveView('payments'); window.scrollTo(0, 0); }}>Crypto Guides</a></li>
                <li><a href="#games" onClick={(e) => { e.preventDefault(); setActiveView('games'); window.scrollTo(0, 0); }}>Games</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>SUPPORT</h4>
              <ul>
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); setActiveView('terms'); window.scrollTo(0, 0); }}>Terms and Conditions</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); setActiveView('contact'); window.scrollTo(0, 0); }}>Contact us</a></li>
                <li><a href="#responsible" onClick={(e) => { e.preventDefault(); setActiveView('responsible'); window.scrollTo(0, 0); }}>Responsible Gambling</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setActiveView('about'); window.scrollTo(0, 0); }}>About Us</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); setActiveView('faq'); window.scrollTo(0, 0); }}>FAQ</a></li>
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
          <div className="footer-bottom">
            <span>© 2026 GamblingUniverse. Not affiliated with any operator listed.</span>
            <span>Built for players who grew up on cartridges.</span>
          </div>
        </div>
      </footer>

      <NewsletterModal pageKey={activeView} />
    </>
  );
};
