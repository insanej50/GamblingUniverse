import React from 'react';

const heading: React.CSSProperties = { color: 'white', fontSize: '17px', marginBottom: '10px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' };

type Category = {
  key: string;
  name: string;
  accent: string;
  blurb: string;
  providers: string[];
  knowThis: string;
};

const categories: Category[] = [
  {
    key: 'slots',
    name: 'Slots',
    accent: '#e879f9',
    blurb: 'The largest category at any online casino by far — thousands of titles ranging from classic 3-reel fruit machines to elaborate bonus-round video slots and Megaways games with tens of thousands of ways to win.',
    providers: ['Pragmatic Play', "Play'n GO", 'NetEnt', 'Hacksaw Gaming', 'Nolimit City', 'Relax Gaming'],
    knowThis: "Two numbers matter more than the theme: RTP (return to player — the long-run payback percentage, typically 94–97%) and volatility (how often and how big wins land). High-volatility slots pay less often but bigger; low-volatility slots pay more often but smaller. Both are usually listed in the game's info screen.",
  },
  {
    key: 'table',
    name: 'Table Games',
    accent: '#38bdf8',
    blurb: 'Digital versions of casino classics — blackjack, roulette, baccarat, and video poker — playable against a random-number generator (RNG), so hands resolve instantly with no dealer or other players involved.',
    providers: ['Pragmatic Play', 'Evolution', 'NetEnt', 'Play\'n GO'],
    knowThis: 'RNG table games have a fixed house edge that varies by the exact ruleset — European roulette (single zero) has a lower house edge than American roulette (double zero), and blackjack payout rules (like 3:2 vs 6:5 on a natural blackjack) meaningfully change your odds. Check the rules screen before you play, not just the game title.',
  },
  {
    key: 'live',
    name: 'Live Dealer',
    accent: '#fbbf24',
    blurb: 'Real dealers running real tables — blackjack, roulette, baccarat, game shows like Crazy Time or Monopoly Live — streamed to you in real time from a studio, so you play against an actual person and often alongside other real players.',
    providers: ['Evolution', 'Pragmatic Play Live', 'Ezugi'],
    knowThis: "Live tables run on a real schedule with real betting windows, so there's no pausing mid-round the way there is with an RNG game. Minimum and maximum bets are usually higher than RNG tables, and a strong, stable internet connection matters — a dropped stream can affect how a round is settled, so check the game's fair-play/malfunction rules.",
  },
  {
    key: 'jackpots',
    name: 'Jackpots',
    accent: '#8b5cf6',
    blurb: "Slots and occasionally table games linked into a shared, growing prize pool — a small percentage of every bet placed across the network feeds the jackpot, which keeps climbing until someone hits it.",
    providers: ['Pragmatic Play', "Play'n GO", 'Big Time Gaming'],
    knowThis: 'Progressive jackpots almost always carry a lower base RTP than the non-jackpot version of the same game, since part of every bet is siphoned into the pool — that trade-off is the price of a shot at a life-changing win. Some jackpots require a maximum bet to be eligible; check before you spin.',
  },
];

export const GamesView = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section id="games" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="section-eyebrow">GAMES</span>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Slots, Table Games & Live Dealer, Explained</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          Every crypto casino markets "thousands of games" — here's what's actually behind that number, and what's
          worth knowing about each category before you play.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {categories.map((cat) => (
          <details key={cat.key} style={{ background: 'rgba(255,255,255,0.03)', border: `2px solid ${cat.accent}44`, borderRadius: '10px', padding: '20px 24px' }}>
            <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.accent, flexShrink: 0 }} />
              <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', letterSpacing: '0.3px' }}>{cat.name}</span>
            </summary>

            <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px', lineHeight: '1.7' }}>
              <p style={{ margin: 0 }}>{cat.blurb}</p>

              <div>
                <h4 style={heading}>Major Providers</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {cat.providers.map((p) => (
                    <span key={p} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '5px 14px', fontSize: '13px' }}>{p}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', border: `1px solid ${cat.accent}55`, borderRadius: '8px', padding: '14px 16px' }}>
                <strong style={{ color: cat.accent }}>Worth knowing:</strong> {cat.knowThis}
              </div>
            </div>
          </details>
        ))}
      </div>

      <div style={{ marginTop: '36px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '12px', padding: '32px 24px' }}>
        <h3 style={{ margin: '0 0 10px', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', letterSpacing: '0.3px' }}>Ready to play?</h3>
        <p style={{ margin: '0 0 20px', fontSize: '15px' }}>Game libraries and providers vary by casino — compare our top-rated operators and their welcome offers.</p>
        <button type="button" className="offer-btn" onClick={onExplore}>COMPARE CASINOS</button>
      </div>
    </section>
  );
};
