import React from 'react';

export const ContactView = () => {
  return (
    <section id="contact" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-body)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Contact Us</h2>
        <p className="section-copy" style={{ fontSize: '20px' }}>
          Have a question, feedback, or a business inquiry? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '19px', lineHeight: '1.7' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', border: '2px solid rgba(139,92,246,0.2)', borderRadius: '10px' }}>
            <h3 style={{ color: 'var(--nova-blue)', fontSize: '16px', marginBottom: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>General Support</h3>
            <p style={{ marginBottom: '0', fontSize: '17px' }}>For general questions, feedback, or issues with our site.</p>
            <a href="mailto:support@8bitbet.com" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', marginTop: '12px', display: 'inline-block' }}>support@8bitbet.com</a>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', border: '2px solid rgba(139,92,246,0.2)', borderRadius: '10px' }}>
            <h3 style={{ color: 'var(--nova-magenta)', fontSize: '16px', marginBottom: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase' }}>Partnerships</h3>
            <p style={{ marginBottom: '0', fontSize: '17px' }}>For affiliate programs, advertising, and business inquiries.</p>
            <a href="mailto:partners@8bitbet.com" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', marginTop: '12px', display: 'inline-block' }}>partners@8bitbet.com</a>
          </div>
        </div>

        <div style={{ marginTop: '16px', background: 'rgba(0,0,0,0.2)', padding: '32px', border: '2px solid rgba(139,92,246,0.12)', borderRadius: '10px' }}>
            <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '24px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Send a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out! We will get back to you soon.'); (e.target as HTMLFormElement).reset(); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Name</label>
                    <input type="text" required placeholder="Player One" style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '16px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Email</label>
                    <input type="email" required placeholder="player@example.com" style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '16px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.6)', fontWeight: 'bold' }}>Message</label>
                    <textarea required rows={5} placeholder="How can we help?" style={{ background: 'rgba(0,0,0,0.3)', border: '2px solid rgba(139,92,246,0.25)', borderRadius: '8px', padding: '16px', color: 'white', outline: 'none', fontFamily: 'inherit', resize: 'vertical', fontSize: '16px' }}></textarea>
                </div>
                <button type="submit" style={{ background: 'var(--nova-gold)', color: '#1a1025', border: 'none', borderRadius: '8px', padding: '16px', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', marginTop: '8px', fontSize: '14px', letterSpacing: '1px' }}>
                    SUBMIT
                </button>
            </form>
        </div>

      </div>
    </section>
  );
};
