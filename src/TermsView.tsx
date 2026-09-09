import React from 'react';

export const TermsView = () => {
  return (
    <section id="terms" className="listing-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="section-head" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ maxWidth: '100%', marginBottom: '24px' }}>Terms and Conditions</h2>
        <p className="section-copy" style={{ fontSize: '18px' }}>
          Last updated: September 2026
        </p>
      </div>

      <div className="terms-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '17px', lineHeight: '1.7' }}>
        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>1. Introduction</h3>
          <p>
            Welcome to 8BITBET ("we", "us", "our"). These Terms and Conditions govern your access to and use of our website. 
            By accessing or using our site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, 
            you must not use our website.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>2. Nature of the Website</h3>
          <p>
            8BITBET is an independent informational and comparison platform. We are <strong>not</strong> an online casino, 
            sportsbook, or gambling operator. We do not accept wagers, process transactions, or hold funds. All reviews, 
            rankings, and promotional offers displayed on this site are for informational purposes only.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>3. Age and Legal Compliance</h3>
          <p>
            You must be at least 18 years of age (or the legal age for gambling in your jurisdiction, such as 21+ in many US states) 
            to use our services or follow any links to third-party operators. It is solely your responsibility to check and comply with 
            the laws and regulations regarding online gambling in your local jurisdiction before playing at any recommended site.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>4. Affiliate Disclosure</h3>
          <p>
            We operate as an affiliate website. This means that we may receive financial compensation or commissions from the 
            third-party operators linked on this site if you click on our links, open an account, or deposit funds. This compensation 
            does not affect the neutrality of our reviews, but it sustains our ability to run this platform.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>5. Third-Party Links & Offers</h3>
          <p>
            All bonuses, promotions, and odds listed on 8BITBET are subject to the terms and conditions of the respective third-party 
            operators. We do our best to keep this information accurate and up-to-date, but terms can change without notice. We accept 
            no liability for any discrepancies, expired offers, or issues that arise between you and the operator. Always verify the 
            terms directly on the operator's official website.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>6. Limitation of Liability</h3>
          <p>
            You engage in gambling at your own risk. 8BITBET, its owners, and its employees will not be held liable for any financial 
            losses, damages, or disputes arising from your use of third-party gambling websites. By using this site, you acknowledge 
            that gambling involves risk and that you should only wager funds you can afford to lose.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '12px', fontFamily: "'Press Start 2P', monospace", textTransform: 'uppercase', letterSpacing: '2px' }}>7. Responsible Gambling</h3>
          <p>
            We are committed to promoting responsible gambling. If you feel you may have a gambling problem, we strongly urge you 
            to seek help. Do not chase losses, and establish strict limits for your playtime and budget. Professional help is available 
            worldwide (e.g., NCPG in the USA: 1-800-522-4700).
          </p>
        </div>
      </div>
    </section>
  );
};
