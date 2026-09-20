import React from 'react';

const heading: React.CSSProperties = { color: 'white', fontSize: '18px', marginBottom: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' };

export const AboutView = () => {
  return (
    <section id="about" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="section-eyebrow">ABOUT US</span>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Who We Are</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          GamblingUniverse is an independent guide to crypto casinos and sportsbooks — built for players who want
          the bonus terms and payout speed checked before they deposit, not after.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '17px', lineHeight: '1.7' }}>
        <div>
          <h3 style={heading}>What We Do</h3>
          <p>
            We compare crypto casinos and sportsbooks the way a player actually experiences them: what's the real
            welcome offer, which cryptocurrencies are accepted, how fast are withdrawals, and what's buried in the
            terms. We're not a casino or a sportsbook ourselves — we don't take bets or hold funds. We're a
            comparison and information site.
          </p>
        </div>

        <div>
          <h3 style={heading}>How We Review</h3>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Licensing &amp; legitimacy</strong> — we check that an operator holds a recognized license before it's listed.</li>
            <li><strong>Bonus terms</strong> — we read the wagering requirements, max cashout, and game-weighting rules, not just the headline number.</li>
            <li><strong>Crypto support</strong> — which coins are accepted, and how deposits/withdrawals actually work.</li>
            <li><strong>Payout speed</strong> — published withdrawal timelines and any KYC steps that can slow them down.</li>
            <li><strong>Game &amp; market selection</strong> — breadth of slots, live dealer, and sportsbook markets.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Offers, odds, and terms change frequently and vary by country — we do our best to keep listings current,
            but the operator's own site is always the source of truth before you deposit.
          </p>
        </div>

        <div>
          <h3 style={heading}>How We Make Money</h3>
          <p>
            GamblingUniverse is an affiliate site. When you sign up with an operator through a link on our site, we
            may earn a commission — at no extra cost to you. This funds the site, but it does not buy placement:
            our rankings reflect our own comparison criteria, not who pays the most. See our{' '}
            <strong>Terms and Conditions</strong> for the full affiliate disclosure.
          </p>
        </div>

        <div>
          <h3 style={heading}>18+ &amp; Responsible Gambling</h3>
          <p>
            Everything on this site is intended for adults of legal gambling age, in jurisdictions where online
            gambling is legal. Gambling carries real financial risk. See our{' '}
            <strong>Responsible Gambling</strong> page for tools, warning signs, and free support resources.
          </p>
        </div>
      </div>
    </section>
  );
};
