import React from 'react';

const faqs: [string, string][] = [
  ['Is GamblingUniverse a casino or sportsbook?', "No. We're an independent comparison and information site. We don't accept bets, hold funds, or operate any gambling product ourselves — we review and link to third-party operators."],
  ['How do you make money?', "We're an affiliate site. When you sign up with an operator through a link on our site, we may earn a commission at no extra cost to you. This never affects our rankings — see our About page for how we actually review operators."],
  ['Are the casinos and sportsbooks you list licensed?', "We only list operators that hold a recognized gambling license. Licensing can vary by country though, so always confirm an operator is licensed to serve your specific location before signing up."],
  ['Is online gambling legal where I live?', "It depends entirely on your country, state, or province — laws vary widely and change over time. It's your responsibility to check local laws before playing. We don't provide legal advice."],
  ["Why do the bonuses on your site sometimes differ from what I see on the operator's site?", "Operators frequently update offers, and promotions often vary by country, currency, or account status. Always treat the operator's own site as the final source of truth before you deposit."],
  ['What is a wagering requirement?', "It's the multiple of a bonus amount you must bet before you can withdraw winnings from it (e.g. a 30x wagering requirement on a $100 bonus means $3,000 in total bets). We call this out in our guides because it's the detail most likely to catch new players out."],
  ['Do you accept payment to rank an operator higher?', 'No. Commission is paid on signups, not for placement. Our comparisons are based on our own review criteria — see the About page for what we check.'],
  ['What should I do if I think I have a gambling problem?', "Stop and reach out for help — it's free and confidential. Our Responsible Gambling page has warning signs, self-exclusion tools, and helpline numbers by country."],
];

const detailsStyle: React.CSSProperties = { background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(139,92,246,0.2)', borderRadius: '10px', padding: '18px 22px' };
const summaryStyle: React.CSSProperties = { cursor: 'pointer', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', letterSpacing: '0.3px', listStyle: 'none' };

export const FAQView = () => {
  return (
    <section id="faq" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="section-eyebrow">FAQ</span>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Frequently Asked Questions</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          The questions we get most from players, answered straight.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {faqs.map(([q, a], idx) => (
          <details key={idx} style={detailsStyle}>
            <summary style={summaryStyle}>{q}</summary>
            <p style={{ marginTop: '14px', marginBottom: 0, fontSize: '16px', lineHeight: '1.7' }}>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
