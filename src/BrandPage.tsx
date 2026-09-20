import React from 'react';
import { NewsletterModal } from './NewsletterModal';
import { operatorInitials } from './operators';

/* ================= BRAND PAGE TEMPLATE =================
   The layout, icons, section titles and legal lines below are shared by every brand.
   A brand opts in by adding a `page` block to its guideData entry; the reference
   entry is "sports-duelbits" in guideData.ts. Nothing here should be edited to add
   a brand — only the data. */

export type BrandPageFeature = {
  label: string;
  note: string;
};

export type BrandPageData = {
  /** Page accent: slogan line 2, CTA gradient, glows and hairlines. Defaults to the guide accent. */
  accent?: string;
  /** Darker/lighter CTA gradient stops. Derived from the accent when omitted. */
  accentDeep?: string;
  accentSoft?: string;
  /** Halo color behind slogan line 2 when it should differ from the accent. Falls back to accent. */
  accentGlow?: string;
  /** Logo for this page only. Defaults to the guide logo. */
  logo?: string;
  /** Small caps line above the slogan. Defaults to BRAND_PAGE_EYEBROW. */
  eyebrow?: string;
  sloganA: string;
  sloganB: string;
  /** List-card hook under the slogan (same string as Casinos / Sportsbooks / Bonuses). */
  hook: string;
  /** Exactly four lines; icons are fixed by position. */
  features: [BrandPageFeature, BrandPageFeature, BrandPageFeature, BrandPageFeature];
  /** Payment labels, in display order. */
  payments: string[];
  restricted: string;
  /** Show the TOP PICK badge. Defaults to true. */
  topPick?: boolean;
  /** Optional logo sheet crop: image width in logo-box widths, then visible box
      width. Omit both to show the full logo.png / logo.svg. */
  logoFrames?: number;
  logoBox?: number;
};

/** Typechecks a guideData `page` block, since guideData itself is untyped. */
export const brandPage = (data: BrandPageData): BrandPageData => data;

export const BRAND_PAGE_EYEBROW = 'CRYPTO CASINO & SPORTSBOOK';

const TOP_PICK_LABEL = 'TOP PICK';
const CTA_LABEL = 'PLAY NOW';
const PAYMENTS_TITLE = 'ACCEPTED PAYMENTS';
const RESTRICTED_TITLE = 'RESTRICTED COUNTRIES';
const RESTRICTED_LINK_LABEL = 'VIEW FULL LIST';
const AGE_LINE_A = 'Gamble responsibly. Play for fun.';
const AGE_LINE_B = 'Terms and conditions apply.';

const FEATURE_ICONS: React.ReactNode[] = [
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.4 2 4.6 13.8h4.9L8.9 22l8.8-11.8h-4.9L13.4 2Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.6 4.9 5.3v5.2c0 4.5 2.9 8.6 7.1 10.1 4.2-1.5 7.1-5.6 7.1-10.1V5.3L12 2.6Z" />
    <path d="M9 11.8l2.4 2.4 4-4.2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.8 7h8.4a5.6 5.6 0 0 1 5.6 5.6v.4a3.7 3.7 0 0 1-6.9 1.9l-.4-.7H9.5l-.4.7A3.7 3.7 0 0 1 2.2 13v-.4A5.6 5.6 0 0 1 7.8 7Z" />
    <path d="M7.4 10.6v2.5M6.1 11.9h2.6" />
    <path d="M15.9 11.4h.01M17.9 13.1h.01" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.3 9.4h17.4M3.3 14.6h17.4" />
    <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" />
  </svg>,
];

const brandPageStyle = (guide: any, page: BrandPageData): React.CSSProperties => {
  const accent = page.accent || guide.accent;
  // Halo for slogan line 2: keep an explicit accentGlow when set; otherwise use the page accent.
  const headlineGlow = page.accentGlow || accent;
  return {
    '--guide-accent': guide.accent,
    '--db-neon': accent,
    '--db-neon-deep': page.accentDeep || `color-mix(in srgb, ${accent} 78%, #000)`,
    '--db-neon-soft': page.accentSoft || `color-mix(in srgb, ${accent} 55%, #fff)`,
    '--db-headline-glow':
      `0 0 22px color-mix(in srgb, ${headlineGlow} 85%, transparent),` +
      ` 0 0 58px color-mix(in srgb, ${headlineGlow} 70%, transparent)`,
    '--db-logo-frames': String(page.logoFrames ?? 1),
    '--db-logo-box': String(page.logoBox ?? 1),
  } as React.CSSProperties;
};

export function BrandPage({
  guideKey,
  guide,
  onBack,
  onPrev,
  prevBrandName,
  onNext,
}: {
  guideKey: string;
  guide: any;
  onBack: () => void;
  onPrev?: () => void;
  prevBrandName?: string;
  onNext?: () => void;
}) {
  const page = guide.page as BrandPageData;
  const logo = page.logo || guide.logo;
  const noOfferUrl = !guide.claim || guide.claim === '#';
  const offerLink = noOfferUrl
    ? { href: '#', onClick: (e: React.MouseEvent) => e.preventDefault() }
    : { href: guide.claim as string, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <main
      id="casinoGuide"
      className="guide-panel brand-page"
      style={brandPageStyle(guide, page)}
    >
      <div className="guide-window">
        <div className="guide-inner db-inner">
          <div className="db-nav">
            <div className="db-nav-start">
              <button type="button" className="guide-back db-back" onClick={onBack}>← BACK</button>
              {onPrev && prevBrandName ? (
                <button type="button" className="guide-back db-back db-prev" onClick={onPrev}>
                  BACK TO {prevBrandName}
                </button>
              ) : null}
            </div>
            {onNext ? (
              <button type="button" className="guide-back db-back db-next" onClick={onNext}>NEXT →</button>
            ) : null}
          </div>

          <div className="db-stack">
            {page.topPick !== false ? (
              <span className="offer-featured-tag db-top-pick">{TOP_PICK_LABEL}</span>
            ) : null}

            <div className="db-brand">
              <span className={`db-logo-mark${page.logoFrames ? ' db-logo-mark--crop' : ''}`}>
                {logo ? (
                  <img src={logo} alt={`${guide.name} logo`} />
                ) : (
                  <span className="guide-logo-placeholder">{operatorInitials(guide.name)}</span>
                )}
              </span>
            </div>

            <p className="db-eyebrow">{page.eyebrow || BRAND_PAGE_EYEBROW}</p>

            <h1 id="guideTitle" className="db-headline">
              <span className="db-headline-a">{page.sloganA}</span>
              <span className="db-headline-b">{page.sloganB}</span>
            </h1>

            <p className="db-sub">{guide.cardHook || page.hook}</p>

            <ul className="db-features">
              {page.features.map((feature, idx) => (
                <li key={feature.label} className="db-feature">
                  <span className="db-feature-icon" aria-hidden="true">{FEATURE_ICONS[idx]}</span>
                  <span className="db-feature-label">{feature.label}</span>
                  <span className="db-feature-note">{feature.note}</span>
                </li>
              ))}
            </ul>

            <a id="guideClaim" className="db-cta" {...offerLink}>
              {CTA_LABEL} <span aria-hidden="true">→</span>
            </a>

            <section className="db-block" aria-labelledby="dbPaymentsTitle">
              <h2 id="dbPaymentsTitle" className="db-block-title">{PAYMENTS_TITLE}</h2>
              <ul className="db-pay">
                {page.payments.map((method) => (
                  <li key={method} className="db-pay-item">
                    <span className="db-pay-label">{method}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="db-block" aria-labelledby="dbRestrictedTitle">
              <h2 id="dbRestrictedTitle" className="db-block-title">{RESTRICTED_TITLE}</h2>
              <p className="db-restricted">
                <span className="db-restricted-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M5.6 5.6l12.8 12.8" />
                  </svg>
                </span>
                <span>{page.restricted}</span>
              </p>
              {guide.restrictedListUrl ? (
                <p className="db-restricted-more">
                  <a href={guide.restrictedListUrl} target="_blank" rel="noopener noreferrer">{RESTRICTED_LINK_LABEL}</a>
                </p>
              ) : null}
            </section>

            <p className="db-age">
              <span className="db-age-badge" aria-hidden="true">18+</span>
              <span>{AGE_LINE_A}<br />{AGE_LINE_B}</span>
            </p>
          </div>
        </div>
      </div>
      <NewsletterModal pageKey={`guide-${guideKey}`} />
    </main>
  );
}
