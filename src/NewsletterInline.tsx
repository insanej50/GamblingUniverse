import React, { useState } from 'react';

export const NewsletterInline = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        width: '100%', maxWidth: '640px',
        background: 'rgba(12,10,36,0.55)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(139,92,246,0.35)',
        borderRadius: '14px',
        padding: 'clamp(16px,3vw,24px)',
        marginTop: '10px',
      }}
    >
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '4px 0' }}>
          <p style={{ color: 'var(--nova-gold)', fontFamily: 'var(--font-display)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>You're in!</p>
          <p style={{ color: 'var(--nova-muted)', fontSize: '14px', margin: 0 }}>Keep an eye on your inbox for exclusive promotions.</p>
        </div>
      ) : (
        <>
          <p style={{
            fontFamily: 'var(--font-display)', color: '#fff', fontWeight: 700,
            fontSize: 'clamp(13px,2vw,15px)', textTransform: 'uppercase',
            letterSpacing: '1px', marginBottom: '6px',
          }}>
            Receive Exclusive Promotions
          </p>
          <p style={{ color: 'var(--nova-muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '14px' }}>
            Get top bonus alerts and expert casino reviews delivered straight to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'stretch' }}
          >
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              style={{ flex: '1 1 140px', minWidth: 0, background: 'rgba(0,0,0,0.35)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '12px 14px', color: 'white', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px' }}
            />
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{ flex: '1 1 160px', minWidth: 0, background: 'rgba(0,0,0,0.35)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '12px 14px', color: 'white', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px' }}
            />
            <input
              type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone (optional)"
              style={{ flex: '1 1 140px', minWidth: 0, background: 'rgba(0,0,0,0.35)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '12px 14px', color: 'white', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px' }}
            />
            <button
              type="submit"
              style={{
                flex: '1 1 140px', background: 'var(--nova-gold)', color: '#1a1025', border: 'none',
                borderRadius: '8px', padding: '12px 18px', fontFamily: 'var(--font-display)',
                fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer',
                fontSize: '13px', letterSpacing: '1px', whiteSpace: 'nowrap',
              }}
            >
              Subscribe Now
            </button>
          </form>
        </>
      )}
    </div>
  );
};
