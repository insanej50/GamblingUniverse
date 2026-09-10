import React from 'react';
import { guideData } from './guideData';

const heading: React.CSSProperties = { color: 'white', fontSize: '17px', marginBottom: '10px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' };

type Coin = {
  ticker: string;
  name: string;
  accent: string;
  blurb: string;
  steps: string[];
  watchFor: string;
  acceptedAt: string[];
};

const coins: Coin[] = [
  {
    ticker: 'BTC',
    name: 'Bitcoin',
    accent: '#f7931a',
    blurb: 'The original cryptocurrency, and the most widely accepted deposit method at crypto casinos. Transactions are public and irreversible once confirmed.',
    steps: [
      'Buy BTC on an exchange (or already hold some in a personal wallet).',
      "Open the casino's cashier and select Bitcoin as your deposit method — it will show you a unique BTC deposit address (and often a QR code).",
      'Send the exact amount from your wallet or exchange to that address.',
      'Wait for network confirmations — most casinos credit your balance after 1–3 confirmations, which can take anywhere from a few minutes to over an hour depending on network congestion and the fee paid.',
    ],
    watchFor: "Double-check you're sending native BTC, not Bitcoin Lightning or a wrapped token, unless the casino's deposit page specifically asks for that — sending on the wrong network can mean permanently lost funds.",
    acceptedAt: ['bitstarz', 'mbit'],
  },
  {
    ticker: 'ETH',
    name: 'Ethereum',
    accent: '#627eea',
    blurb: "Faster and generally cheaper to move than Bitcoin, and the base network for a lot of USDT/USDC transfers. Widely accepted at crypto casinos.",
    steps: [
      'Buy or hold ETH on the Ethereum mainnet.',
      "Select Ethereum in the casino's cashier to get your unique deposit address.",
      'Send ETH to that address from your wallet or exchange.',
      'Deposits are usually credited after a handful of block confirmations — typically a few minutes.',
    ],
    watchFor: 'Gas fees on Ethereum can spike during busy periods — check the estimated network fee before confirming your withdrawal to the casino, especially for smaller deposit amounts.',
    acceptedAt: ['bitstarz', 'mbit'],
  },
  {
    ticker: 'USDT',
    name: 'Tether',
    accent: '#26a17b',
    blurb: 'A dollar-pegged stablecoin, useful if you want to move crypto without the price swings of BTC or ETH. Issued on several different networks.',
    steps: [
      "Check which network the casino's USDT deposit uses (commonly ERC-20 on Ethereum, or TRC-20 on Tron).",
      'Withdraw USDT from your exchange or wallet on that exact same network.',
      "Send to the casino's provided deposit address.",
      'Confirmation times depend on the network — TRC-20 is typically faster and cheaper than ERC-20.',
    ],
    watchFor: 'This is the single biggest way crypto deposits go wrong: sending ERC-20 USDT to a TRC-20 address (or vice versa) usually results in permanently lost funds. Always match the network on both ends.',
    acceptedAt: ['bitstarz', 'mbit'],
  },
  {
    ticker: 'LTC',
    name: 'Litecoin',
    accent: '#345d9d',
    blurb: 'Built on the same model as Bitcoin but with faster block times, so deposits typically confirm quicker and for a lower fee.',
    steps: [
      'Buy or hold LTC on the Litecoin network.',
      "Select Litecoin in the casino's cashier for your deposit address.",
      'Send the LTC from your wallet or exchange.',
      'Confirmations are generally faster than Bitcoin thanks to Litecoin\'s shorter block time.',
    ],
    watchFor: "Make sure you're sending native LTC and not a wrapped or exchange-only token that shares the ticker — the casino's deposit page will specify the correct network.",
    acceptedAt: ['bitstarz', 'mbit'],
  },
  {
    ticker: 'DOGE',
    name: 'Dogecoin',
    accent: '#c2a633',
    blurb: 'Originally a meme coin, now accepted as a genuine low-fee deposit option at several crypto casinos.',
    steps: [
      'Buy or hold DOGE on the Dogecoin network.',
      "Select Dogecoin in the casino's cashier for your deposit address.",
      'Send DOGE from your wallet or exchange to that address.',
      'Dogecoin has fast block times, so deposits usually confirm quickly.',
    ],
    watchFor: 'Not every crypto casino accepts DOGE — check the cashier before you buy, so you\'re not stuck holding a coin you can\'t deposit.',
    acceptedAt: ['bitstarz'],
  },
];

export const PaymentsView = ({ onSelectGuide }: { onSelectGuide: (key: string) => void }) => {
  return (
    <section id="payments" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <span className="section-eyebrow">CRYPTO GUIDES</span>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>How to Deposit with Crypto</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          Depositing crypto at a casino is simple once you've done it — but sending on the wrong network is the
          most common way people lose funds by accident. Here's how each coin works and what to double-check.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {coins.map((coin) => (
          <details key={coin.ticker} style={{ background: 'rgba(255,255,255,0.03)', border: `2px solid ${coin.accent}44`, borderRadius: '10px', padding: '20px 24px' }}>
            <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', background: `${coin.accent}22`, border: `2px solid ${coin.accent}`, color: coin.accent, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', flexShrink: 0 }}>
                {coin.ticker.slice(0, 3)}
              </span>
              <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', letterSpacing: '0.3px' }}>{coin.name} ({coin.ticker})</span>
            </summary>

            <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '16px', lineHeight: '1.7' }}>
              <p style={{ margin: 0 }}>{coin.blurb}</p>

              <div>
                <h4 style={heading}>Depositing, Step by Step</h4>
                <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0 }}>
                  {coin.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.25)', border: `1px solid ${coin.accent}55`, borderRadius: '8px', padding: '14px 16px' }}>
                <strong style={{ color: coin.accent }}>Watch out:</strong> {coin.watchFor}
              </div>

              {coin.acceptedAt.length > 0 && (
                <div>
                  <h4 style={heading}>Accepted At</h4>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {coin.acceptedAt.map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => onSelectGuide(key)}
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', color: 'white', fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.3px', cursor: 'pointer' }}
                      >
                        {guideData[key]?.name ?? key}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      <p style={{ marginTop: '32px', fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>
        Coin support and networks change over time — always confirm the accepted network directly in the casino's
        cashier before sending funds.
      </p>
    </section>
  );
};
