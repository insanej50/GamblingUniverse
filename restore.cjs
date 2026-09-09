const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

// Remove imports
code = code.replace("import { casinosList, sportsbooksList } from './offersData';\n", "");
code = code.replace("import { OfferCard } from './OfferCard';\n", "");

// Remove state
code = code.replace("  const [visibleCasinos, setVisibleCasinos] = useState(4);\n  const [visibleSportsbooks, setVisibleSportsbooks] = useState(4);\n", "");

// Restore casinos HTML
const casinosHtml = `<div className="offer-stack">
            <article className="offer-card">
              <div className="offer-rank offer-logo logo-light bet365-logo-box"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Bet365_Logo.svg" alt="bet365 logo" /></div>
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
              <div className="offer-rank offer-logo logo-light bitstarz-logo-box"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/BitStarz_Logo.svg" alt="BitStarz logo" /></div>
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
              <div className="offer-rank offer-logo logo-light mbit-logo-box"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/MBit_Casino_logo.svg" alt="mBit logo" /></div>
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
              <div className="offer-rank offer-logo logo-light bcgame-logo-box"><img src="https://upload.wikimedia.org/wikipedia/commons/0/07/BC.Game_logo.svg" alt="BC.Game logo" /></div>
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
          </div>`;

const casinosStart = code.indexOf('<div className="offer-stack">');
const casinosEnd = code.indexOf('<div className="view-all-wrap">', casinosStart);
code = code.substring(0, casinosStart) + casinosHtml + '\n          ' + code.substring(casinosEnd);

// Restore sportsbooks HTML
const sportsbooksHtml = `<div className="offer-stack">
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
          </div>`;

const sportsStart = code.indexOf('<div className="offer-stack">', code.indexOf('id="sportsbooks"'));
const sportsEnd = code.indexOf('<div className="view-all-wrap">', sportsStart);
code = code.substring(0, sportsStart) + sportsbooksHtml + '\n          ' + code.substring(sportsEnd);

// Restore view all buttons
code = code.replace(/\{visibleCasinos < casinosList\.length && \([\s\S]*?\}\)/g, '<button className="view-all-btn" type="button">VIEW ALL</button>');
code = code.replace(/\{visibleSportsbooks < sportsbooksList\.length && \([\s\S]*?\}\)/g, '<button className="view-all-btn" type="button">VIEW ALL</button>');

fs.writeFileSync('src/MainSite.tsx', code);
