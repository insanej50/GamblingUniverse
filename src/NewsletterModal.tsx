import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'gu_newsletter_dismissed';

export const NewsletterModal = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, '1');
    window.setTimeout(() => setOpen(false), 1800);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
      onClick={dismiss}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(5,4,15,0.82)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '440px',
          background: 'linear-gradient(180deg, #170030 0%, #0c0a24 100%)',
          border: '2px solid rgba(139,92,246,0.35)',
          borderRadius: '14px',
          boxShadow: '0 0 60px rgba(139,92,246,0.25)',
          padding: '32px',
          position: 'relative',
          fontFamily: 'var(--font-body)',
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'none', border: 'none', color: 'var(--nova-muted)',
            fontSize: '22px', lineHeight: 1, cursor: 'pointer', padding: '4px',
          }}
        >
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h3 style={{ color: 'var(--nova-gold)', fontFamily: 'var(--font-display)', fontSize: '20px', textTransform: 'uppercase', marginBottom: '12px' }}>You're in!</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px' }}>Keep an eye on your inbox for exclusive promotions and bonus alerts.</p>
          </div>
        ) : (
          <>
            <h3 style={{
              color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(18px,3vw,22px)', textTransform: 'uppercase',
              letterSpacing: '1px', marginBottom: '10px', paddingRight: '24px',
            }}>
              Receive Exclusive Promotions
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Sign up to receive exclusive promotions, top bonus alerts and expert casino reviews delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Full Name *</label>
                <input
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '13px 14px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '15px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Email Address *</label>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '13px 14px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '15px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Phone Number (optional)</label>
                <input
                  type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="123-456-7890"
                  style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '13px 14px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '15px' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--nova-gold)', color: '#1a1025', border: 'none',
                  borderRadius: '8px', padding: '15px', fontFamily: 'var(--font-display)',
                  fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer',
                  marginTop: '4px', fontSize: '14px', letterSpacing: '1px',
                }}
              >
                Subscribe Now
              </button>
              <button
                type="button" onClick={dismiss}
                style={{
                  background: 'transparent', color: 'rgba(255,255,255,0.6)',
                  border: '2px solid rgba(255,255,255,0.15)', borderRadius: '8px',
                  padding: '13px', fontFamily: 'var(--font-body)', fontWeight: 600,
                  cursor: 'pointer', fontSize: '14px',
                }}
              >
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
