import React from 'react';

const heading: React.CSSProperties = { color: 'white', fontSize: '18px', marginBottom: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' };

const resourceCard = (color: string) => ({ background: 'rgba(255,255,255,0.03)', padding: '20px', border: `2px solid ${color}33`, borderRadius: '10px' } as React.CSSProperties);

export const ResponsibleGamblingView = () => {
  return (
    <section id="responsible" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="section-eyebrow">18+ ONLY</span>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Play Responsibly</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          Gambling should stay fun. This page exists to help you keep it that way — and to point you toward
          real help if it stops being fun.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '17px', lineHeight: '1.7' }}>
        <div>
          <h3 style={heading}>Know the Warning Signs</h3>
          <p>
            Gambling can become a problem when it stops being entertainment. Common warning signs include chasing
            losses, gambling with money meant for bills or essentials, hiding your gambling from friends or family,
            feeling anxious or irritable when you try to stop, and spending more time or money than you planned.
            If any of this sounds familiar — to you or someone you know — it's worth taking seriously.
          </p>
        </div>

        <div>
          <h3 style={heading}>Tools to Stay in Control</h3>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Deposit and loss limits</strong> — most licensed operators let you cap how much you deposit or lose daily, weekly, or monthly.</li>
            <li><strong>Time-out / cool-off periods</strong> — temporarily lock your account for a set period.</li>
            <li><strong>Self-exclusion</strong> — permanently or long-term block yourself from an operator, or from all licensed operators in your country via a national scheme.</li>
            <li><strong>Reality checks</strong> — pop-up reminders of how long you've been playing and how much you've spent.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            These tools are offered directly by the operators, not by GamblingUniverse — look for them in each
            site's account or responsible-gambling settings.
          </p>
        </div>

        <div>
          <h3 style={heading}>Blocking Software</h3>
          <p>
            If you want a tool that blocks gambling sites at the device or network level, independent of any single
            operator, options include <strong>Gamban</strong>, <strong>BetBlocker</strong>, and <strong>Gamstop</strong> (UK).
            We don't have any commercial relationship with these tools — they're listed here purely as resources.
          </p>
        </div>

        <div>
          <h3 style={heading}>Get Help</h3>
          <p style={{ marginBottom: '16px' }}>
            If gambling has stopped being fun, free and confidential support is available. You are not alone, and
            reaching out is a sign of strength, not weakness.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={resourceCard('#38bdf8')}>
              <h4 style={{ color: 'var(--nova-blue)', fontSize: '15px', marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>United States</h4>
              <p style={{ margin: 0, fontSize: '16px' }}>National Council on Problem Gambling<br /><strong>1-800-522-4700</strong> · 24/7, free, confidential<br /><a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>ncpgambling.org</a></p>
            </div>
            <div style={resourceCard('#e879f9')}>
              <h4 style={{ color: 'var(--nova-magenta)', fontSize: '15px', marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>United Kingdom</h4>
              <p style={{ margin: 0, fontSize: '16px' }}>GamCare<br /><strong>0808 8020 133</strong> · 24/7 helpline<br /><a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>gamcare.org.uk</a></p>
            </div>
            <div style={resourceCard('#fbbf24')}>
              <h4 style={{ color: 'var(--nova-gold)', fontSize: '15px', marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>Canada</h4>
              <p style={{ margin: 0, fontSize: '16px' }}>Responsible Gambling Council<br /><strong>1-888-230-3505</strong><br /><a href="https://www.responsiblegambling.org" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>responsiblegambling.org</a></p>
            </div>
            <div style={resourceCard('#8b5cf6')}>
              <h4 style={{ color: 'var(--nova-violet)', fontSize: '15px', marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>Worldwide</h4>
              <p style={{ margin: 0, fontSize: '16px' }}>Gamblers Anonymous<br />In-person and online meetings<br /><a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>gamblersanonymous.org</a></p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={heading}>Our Commitment</h3>
          <p>
            GamblingUniverse only covers operators intended for adults of legal gambling age in a jurisdiction where
            online gambling is lawful. We do not knowingly promote gambling to anyone under 18 (or the legal age
            where they are), and we encourage every reader to gamble only with money they can afford to lose. If
            it ever stops being fun, that's the signal to stop.
          </p>
        </div>
      </div>
    </section>
  );
};
