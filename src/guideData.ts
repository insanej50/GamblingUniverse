import { casinoGuideOrder, sportsGuideOrder } from './operators';
import { brandPage } from './BrandPage';

const unorderedGuideData: Record<string, any> = {
  bet365: {
    name: "Bet365",
    claim: "https://casino.bet365.com/promos/en-gb/casino",
    accent: "#f7df1e",
    banner: "https://de1.sportal365images.com/process/smp-bet365-images/news.nj.bet365.com-us-en/20082025/394a800f-6b9d-4a49-80e9-87bc6a8bc1f4.jpg",
    logo: "/brands/bet365/logo.png",
    cardHook: "Global sports + casino",
    cardBullets: ["Live betting", "Regulated markets"],
    cardTag: "GLOBAL CASINO",
    summary: "New-customer casino offers vary by regulated market; verify the terms shown for your location.",
    sections: [
      ["AVAILABLE GEOS", "Selected regulated markets only. Verified examples include Great Britain, Ontario, New Jersey, Pennsylvania and Michigan. Physical location and account verification apply; bet365 does not publish a global allowed-country list. See the <a href='https://casino.bet365.com/promos/en-gb/casino' target='_blank' rel='noopener noreferrer'>official casino promotions</a>."],
      ["BONUS & WAGERING", "Offer terms differ by market. Ontario visible terms show minimum C$10 lifetime deposits, claim within 30 days, 30x bonus wagering and 10 Spins reveals within 20 days. UK visible promo states minimum £10 lifetime deposits, claim in 30 days, 10 reveals within 20 days and a maximum 50 spins per reveal; the visible page does not state wagering requirements. <a href='https://casino.on.bet365.ca/promotions' target='_blank' rel='noopener noreferrer'>Ontario source</a>."],
      ["DEPOSITS / WITHDRAWALS", "Cashier options are market-specific. US help lists debit cards, Apple Pay, Trustly online banking, Venmo, PayPal and PayNearMe; UK help lists debit cards, Apple Pay, Pay by Bank, Google Pay, PayPal, paysafecard and bank transfer. Withdrawals generally return to the original method where possible. <a href='https://help.bet365.com/s/en-us/payments/deposit-methods' target='_blank' rel='noopener noreferrer'>US payments</a> · <a href='https://help.bet365.com/s/en-gb/payments/deposit-methods' target='_blank' rel='noopener noreferrer'>UK payments</a>."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#6e7f32",
      accentDeep: "#3a451c",
      accentSoft: "#b4c36a",
      eyebrow: "SPORTS + CASINO",
      sloganA: "Every Sport.",
      sloganB: "One Book.",
      hook: "Global sports + casino",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Live betting", note: "Slots, live casino & more" },
        { label: "Regulated markets", note: "Play where licensed" }
      ],
      payments: ["VISA", "MASTERCARD", "PAYPAL", "GOOGLE PAY", "BANK TRANSFER"],
      restricted: "Not available in: France, Turkey, Belgium, Romania, Russia, China, Philippines, Singapore, North Korea, Indonesia, Vietnam, USA, UAE, Saudi Arabia, Iran, Iraq, Israel, Kuwait, Qatar, Egypt, Nigeria, Kenya, Ghana and other restricted jurisdictions."
    })
  },
  bitstarz: {
    kind: "sports",
    name: "Bitstarz",
    claim: "https://www.bitstarz.com/bonuses",
    accent: "#e31351",
    banner: "https://www.bitstarz.com/home/hero/hero-background-logged-out.jpg",
    logo: "https://www.bitstarz.com/header/bitstarz-logo.svg",
    cardHook: "Up to 5 BTC + 180 free spins",
    cardBullets: ["Award-winning crypto casino", "Fast cashouts"],
    cardTag: "AWARD WINNING",
    summary: "Welcome package headline: up to 5 BTC + 180 free spins. Check eligibility and full terms before depositing.",
    sections: [
      ["AVAILABLE GEOS", "This is not a positive global availability list. Terms block many markets, including the US/Puerto Rico, UK/territories, France/territories, Spain, Netherlands, Belgium, Israel, Ukraine, Brazil and Russia, among others. Consult the <a href='https://www.bitstarz.com/terms' target='_blank' rel='noopener noreferrer'>full official restricted list</a> and local law; never use a VPN."],
      ["BONUS & WAGERING", "First deposit: 100% + 180 FS; the next three deposits are up to €400 or 4 BTC total. Bonus and FS winnings carry 40x wagering unless stated otherwise; welcome components expire after 7 days. First-deposit spins are 20 initially, then 20 daily for 8 days. Maximum active-bonus bet is €/$/CAD/AUD/NZD/USDT 5 or equivalent; game weighting and restrictions apply. <a href='https://www.bitstarz.com/bonus-terms-and-conditions' target='_blank' rel='noopener noreferrer'>Official bonus terms</a>."],
      ["DEPOSITS / WITHDRAWALS", "Methods shown depend on session and region. The public page confirms BTC and Bitcoin Lightning deposits and BTC withdrawals. Account currencies include BTC, LTC, BCH, ETH, XRP, DOGE, ADA, BNB, TRX, USDT, SOL, USDC and fiat, but currencies do not guarantee cashier methods. <a href='https://www.bitstarz.com/payments' target='_blank' rel='noopener noreferrer'>Official payments</a>."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff2d4f",
      accentDeep: "#d1003a",
      accentSoft: "#ff93a4",
      accentGlow: "#a855f7",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Play Among the",
      sloganB: "Starz.",
      hook: "Up to 5 BTC + 180 free spins",
      features: [
        { label: "Fast cashouts", note: "Get paid without the wait" },
        { label: "Award winning", note: "A trusted crypto casino" },
        { label: "Huge game library", note: "Slots, live casino & more" },
        { label: "Crypto & fiat", note: "Play in your currency" }
      ],
      payments: ["BTC", "ETH", "LTC", "USDT", "VISA", "MASTERCARD"],
      restricted: "Not available in: Aruba, Belgium, Bonaire/Saba/Sint Eustatius, Curaçao, France, French Guiana, French Polynesia, Gibraltar, Greece, Guadeloupe, Israel, Jersey, Lithuania, Martinique, Mayotte, Netherlands, New Caledonia, Saint Martin, Sint Maarten, Slovakia, Spain, Sweden, United Kingdom, United States and other restricted jurisdictions."
    })
  },
  mbit: {
    name: "mBit",
    claim: "https://www.mbitcasino.io/promotions/crypto-welcome-bonus",
    accent: "#ffba2a",
    banner: "/brands/mbit/banner.jpg",
    logo: "/brands/mbit/logo.png",
    cardHook: "Up to 4 BTC + 325 free spins",
    cardBullets: ["3-deposit crypto pack", "10,000+ games"],
    cardTag: "CRYPTO CASINO",
    summary: "Crypto welcome package: 325% total up to 4 BTC + 325 free spins, subject to the published terms.",
    sections: [
      ["AVAILABLE GEOS", "Access is only for people 18+ where lawful. The long restricted list includes the US, UK, France, Netherlands, Spain, Ukraine, Brazil, India, Japan, China, much of Europe and many others. Review the <a href='https://www.mbitcasino.io/terms/player-terms' target='_blank' rel='noopener noreferrer'>full official list</a>; IP/location, KYC and provider restrictions apply. Do not use a VPN."],
      ["BONUS & WAGERING", "Deposits are 100% up to 1 BTC +100 FS, 100% up to 1.5 BTC +100 FS, then 125% up to 1.5 BTC +125 FS; minimum is 30 USDT equivalent. Each deposit bonus is 40x bonus and FS winnings are 40x unless stated. Slots only; listed table/live games are 0%. Bonuses normally expire in 1 day and max bets are currency-specific. Dedicated second/third-deposit pages say 1.5 mBTC while the aggregate says 1.5 BTC—confirm in cashier/support. <a href='https://www.mbitcasino.io/terms/bonus-terms' target='_blank' rel='noopener noreferrer'>Official bonus terms</a>."],
      ["DEPOSITS / WITHDRAWALS", "Crypto-only: BTC, BCH, LTC, ETH, USDT, XRP, TRX, BNB and ADA. ETH/USDT use ERC-20, BNB uses BSC, and TRX uses Tron. KYC/checks and withdrawal limits apply; confirm network and limits in the cashier."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffba2a",
      accentDeep: "#d48900",
      accentSoft: "#ffd978",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Stack Sats.",
      sloganB: "Spin More.",
      hook: "Up to 4 BTC + 325 free spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "10,000+ games", note: "Slots, live casino & more" },
        { label: "3-deposit pack", note: "Crypto welcome bonus" }
      ],
      payments: ["BTC", "ETH", "USDT", "BCH", "LTC", "XRP", "TRX", "BNB", "ADA"],
      restricted: "Not available in: Afghanistan, Albania, Algeria, Angola, Australia, Bahamas, Botswana, Belgium, Bulgaria, Colombia, Croatia, Czech Republic, Denmark, Estonia, Ecuador, Ethiopia, France, Ghana, Guyana, Hong Kong, Italy, Iran, Iraq, Israel, Kuwait, Latvia, Lithuania, Mexico, Namibia, Nicaragua, North Korea, Pakistan, Panama, Philippines, Portugal, Romania, Singapore, Spain, Sweden, Switzerland, Sudan, Syria, Taiwan, Trinidad and Tobago, Tunisia, Uganda, United Kingdom, United States of America, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  bcgame: {
    name: "BC.Game",
    claim: "https://bc.game/en/bonus-welcome",
    accent: "#24ee89",
    logo: "/brands/bcgame/logo.png",
    cardHook: "180–360% + rakeback",
    cardBullets: ["Crypto casino", "Welcome + rakeback"],
    cardTag: "CRYPTO CASINO",
    summary: "Welcome terms are account- and location-specific; exact logged-in offer terms control.",
    sections: [
      ["AVAILABLE GEOS", "Terms expressly blacklist China, Netherlands, Dutch Caribbean Islands, Hungary, Australia, Ontario, Curaçao, France, the US, plus anywhere unlawful. Account, IP, KYC and geolocation controls apply; do not use a VPN. <a href='https://whitepaper.bc.game/bc-white-paper/appendix/general-terms-and-conditions/user-agreement' target='_blank' rel='noopener noreferrer'>Official user agreement</a>."],
      ["BONUS & WAGERING", "No universal verified public welcome amount or wagering requirement was available from checked operator pages; exact logged-in offer terms control. A deposit bonus can lock the original deposit until applicable wagering is met; a breach can forfeit bonuses and winnings. <a href='https://bc.game/en/help/bonus' target='_blank' rel='noopener noreferrer'>Official bonus help</a>."],
      ["DEPOSITS / WITHDRAWALS", "Crypto deposits and withdrawals are supported. Exact coin/network, fiat or local methods, limits, fees and withdrawal route are account- and region-specific in the cashier. <a href='https://bc.game/en/help/passcurrency' target='_blank' rel='noopener noreferrer'>Official currency help</a>."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#12a864",
      accentSoft: "#e8fff4",
      accentGlow: "#24ee89",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Play the Game.",
      sloganB: "Take the Rake.",
      hook: "180–360% + rakeback",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto casino", note: "Slots, live casino & more" },
        { label: "Welcome + rakeback", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "ALTCOINS", "BANK CARD", "REVOLUT PAY", "APPLE PAY", "GOOGLE PAY", "PAYPAL"],
      restricted: "Not available in: Australia, Austria, France and its territories, Germany, Netherlands, Spain, the Union of the Comoros, UK, China, Hong Kong SAR, Macau SAR, USA, FATF-blacklisted countries and other restricted jurisdictions."
    })
  },
  "sports-thunderpick": {
    kind: "sports",
    name: "Thunderpick",
    claim: "https://thunderpick.io/",
    accent: "#f7c900",
    logo: "/brands/thunderpick/logo.png",
    cardHook: "100% up to $500–$2,000",
    cardBullets: ["Esports-first markets", "Crypto deposits"],
    cardTag: "CRYPTO + ESPORTS",
    summary: "A crypto-focused sportsbook built around esports and live markets, with traditional sports also available where permitted.",
    sections: [
      ["AVAILABLE GEOS", "Thunderpick is available only to adults in locations where its service and online wagering are permitted. Country restrictions, identity checks and product access can change; confirm eligibility in the official terms and never use a VPN or other tool to bypass location controls."],
      ["PROMOTIONS & BETTING", "Esports coverage is central to the platform, alongside traditional sports and live markets. Welcome promotions, odds boosts and other rewards are account- and location-specific. Review minimum odds, qualifying stake, rollover, expiry and excluded-market rules before opting in."],
      ["DEPOSITS / WITHDRAWALS", "The cashier supports selected cryptocurrencies, but available assets, networks, minimums, limits and processing requirements can vary. Confirm the destination network carefully and review any verification requirements before depositing or requesting a withdrawal."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#9adfff",
      accentDeep: "#4aa8d8",
      accentSoft: "#d4f2ff",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "CS to NFL.",
      sloganB: "One Book.",
      hook: "100% up to $500–$2,000",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Esports-first markets", note: "Slots, live casino & more" },
        { label: "Crypto deposits", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "SOL", "TRX", "XRP", "BNB", "ADA", "BCH", "VISA", "MASTERCARD", "PAYPAL", "APPLE PAY", "GOOGLE PAY", "ALIPAY", "PAYSAFECARD", "KLARNA"],
      restricted: "Thunderpick doesn’t clearly list its supported and restricted countries."
    })
  },
  "sports-duelbits": {
    kind: "casino",
    name: "Duelbits",
    claim: "https://duelbits.com/en/sportsbook",
    restrictedListUrl: "https://help.duelbits.com/en/articles/4789953-region-blocked-or-restricted-why-s-that",
    accent: "#31c777",
    logo: "/brands/duelbits/logo.png",
    cardHook: "500 FS + $100 free bet",
    cardBullets: ["Esports + live markets", "Crypto sportsbook"],
    cardTag: "CRYPTO SPORTSBOOK",
    layout: "sheet",
    // Verified GEO chips. Empty list shows the fallback strip.
    geos: [],
    tiles: [
      { label: "Welcome", value: "500 FS + $100 free bet" },
      { label: "Min deposit", value: "check operator" },
      { label: "Payout", value: "crypto, typically fast" },
      { label: "Wagering", value: "sports free bet 5x" }
    ],
    why: "Esports coverage with traditional sports, live markets, and a crypto cashier.",
    payments: [
      "Crypto first — coins and networks are shown in the cashier.",
      "Other methods, if offered, depend on your account."
    ],
    finePrint: "18+. Short guide, not an offer. Terms, eligibility and payments can change. Only gamble if you are 18+ (or the legal age where you are), in a lawful location, and can afford to stop.",
    // Renders on the BrandPage template. A brand needs only this block plus
    // claim (offer URL), restrictedListUrl, logo and name. See BrandPage.tsx.
    page: brandPage({
      // Duelbits keeps its original neon set; other brands can pass `accent` alone.
      accent: "#3ff09a",
      accentDeep: "#25c476",
      accentSoft: "#9dffd0",
      sloganA: "Play Bigger.",
      sloganB: "Win More.",
      hook: "500 FS + $100 free bet",
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Thousands of games", note: "Slots, live casino & more" },
        { label: "Global access", note: "Play from 180+ countries" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "BNB", "VISA", "MASTERCARD"],
      restricted: "Not available in: USA, United Kingdom, France, Netherlands, Belgium, Australia and other restricted jurisdictions."
    })
  },
  stake: {
    kind: "casino",
    name: "Stake",
    claim: "https://stake.com",
    accent: "#1aff80",
    logo: "/brands/stake/logo.png",
    cardHook: "Global sports + casino",
    cardBullets: ["Originals + slots", "Crypto deposits"],
    cardTag: "GLOBAL CASINO",
    summary: "A well-known crypto casino with original games, slots, live tables and sports betting where the product is permitted. Welcome offers and limits are account-specific.",
    sections: [
      ["AVAILABLE GEOS", "Stake is available only to adults in locations where its casino products and online gambling are lawful. Restricted countries, identity checks and product access can change. Confirm eligibility in the official terms and never use a VPN or other tool to bypass location controls."],
      ["PROMOTIONS & GAMES", "The lobby typically includes original titles, slots, live casino and sports markets where offered. Welcome packages, rakeback, races and other rewards are location- and account-specific. Review wagering, game weighting, expiry and max-bet rules on the official promotions page before opting in — this guide does not quote a bonus amount."],
      ["DEPOSITS / WITHDRAWALS", "Crypto is the primary cashier path; available coins, networks, minimums, limits and verification requirements can vary. Confirm the destination network in the cashier and complete any KYC requested before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#b9f5ee",
      accentDeep: "#6ebdb3",
      accentSoft: "#ffffff",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Own it.",
      sloganB: "Stake it.",
      hook: "Global sports + casino",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Originals + slots", note: "Slots, live casino & more" },
        { label: "Crypto deposits", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "SOL", "DOGE", "BCH", "XRP", "TRX", "ALTCOINS", "BANK CARD"],
      restricted: "Not available in: Belgium, Bulgaria, Colombia, Croatia, Czech Republic, Denmark, Estonia, France, Italy, Latvia, Lithuania, Mexico, Portugal, Romania, Spain, Sweden, Switzerland, UK, USA and other restricted jurisdictions."
    })
  },
  cloudbet: {
    kind: "casino",
    name: "Cloudbet",
    claim: "https://www.cloudbet.com",
    accent: "#3d8bfd",
    logo: "/brands/cloudbet/logo.svg",
    cardHook: "Up to $2,500 welcome pack",
    cardBullets: ["Casino + sportsbook", "Crypto cashier"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto-focused casino and sportsbook. Published promotions, game lists and cashier options depend on your account and location.",
    sections: [
      ["AVAILABLE GEOS", "Access is limited to adults where Cloudbet’s services are permitted. Country restrictions, KYC and geolocation can apply. Check the official terms for the current restricted list and do not use a VPN to appear in another region."],
      ["PROMOTIONS & GAMES", "Casino, live dealer and sports products may be available depending on your session. Bonuses, reload offers and loyalty rewards vary and are not guaranteed. Read the in-account promotion terms for wagering, eligible games and expiry before depositing."],
      ["DEPOSITS / WITHDRAWALS", "The cashier is built around cryptocurrency. Supported assets, networks, fees, minimums and processing times are shown in your account and can change. Always match the network listed on the deposit screen."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff6b00",
      accentDeep: "#c44f00",
      accentSoft: "#ffb066",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Sharp Odds.",
      sloganB: "Fast Crypto.",
      hook: "Up to $2,500 welcome pack",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Casino + sportsbook", note: "Slots, live casino & more" },
        { label: "Crypto cashier", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "USDe", "USDP", "LTC", "BCH", "ALTCOINS", "BANK CARD", "EXCHANGE", "WALLET"],
      restricted: "Not available in: Australia, Austria, Belgium, China, Curaçao, Cuba, France, Germany, Iran, Lithuania, Malta, Myanmar, Netherlands, North Korea, Singapore, Syria, Spain, USA, UK, Ukraine and other restricted jurisdictions."
    })
  },
  betpanda: {
    kind: "casino",
    name: "Betpanda",
    claim: "https://betpanda.io",
    accent: "#22c55e",
    logo: "/brands/betpanda/logo.png",
    cardHook: "100% up to 1 BTC",
    cardBullets: ["Crypto casino", "Slots + live tables"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino listing slots, live tables and related products where permitted. Offers and payment options should be confirmed on the operator site.",
    sections: [
      ["AVAILABLE GEOS", "Betpanda serves adults only where online casino play is legal for them. Restricted markets, IP checks and account verification can apply. Review the official terms; never bypass location controls."],
      ["PROMOTIONS & GAMES", "The catalogue typically covers slots, table games and live casino from third-party studios. Welcome or ongoing promotions are account- and location-specific. Do not assume a published headline elsewhere still applies — check wagering and game restrictions on the official promotions page."],
      ["DEPOSITS / WITHDRAWALS", "Crypto deposits and withdrawals are commonly used. Exact coins, networks, limits and processing rules appear in the cashier. Identity or source-of-funds checks may delay withdrawals."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#39ff14",
      accentDeep: "#1a9e3f",
      accentSoft: "#b8ff8a",
      accentGlow: "#c6ff00",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Panda Pack.",
      sloganB: "Bamboo Green.",
      hook: "100% up to 1 BTC",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Slots + live tables", note: "Slots, live casino & more" },
        { label: "Crypto casino", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "BNB", "XRP", "DOGE", "TRX", "SHIB", "SOL", "TON"],
      restricted: "Not available in: Angola, Bangladesh, Benin, Bhutan, Botswana, Brunei, Burkina Faso, Burundi, Cabo Verde, Cameroon, Africa, Chad, Comoros, Congo, Djibouti, Equatorial Guinea, Eritrea, Eswatini, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Kazakhstan, Kenya, Kyrgyzstan, Lesotho, Liberia, Libya, Madagascar, Malawi, Mali, Mauritania, Mauritius, Mongolia, Mozambique, Namibia, Nepal, Niger, Nigeria, Pakistan, Rwanda, São Tomé and Príncipe, Senegal, Seychelles, Sierra Leone, Somalia, South Sudan, Sudan, Tajikistan, Tanzania, Togo, Tunisia, Turkmenistan, Uganda, Uzbekistan, Zambia, Zimbabwe, Costa Rica, Cuba, Cyprus, Iran, North Korea, Syria, United States, Venezuela, Australia and other restricted jurisdictions."
    })
  },
  coinsgame: {
    kind: "casino",
    name: "Coins.Game",
    claim: "https://coins.game",
    accent: "#f59e0b",
    logo: "/brands/coinsgame/logo.png",
    cardHook: "Weekly cashback up to 20%",
    cardBullets: ["Original-style games", "Crypto cashier"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino known for original-style games alongside a wider slots and live offering. Terms and availability vary by player location.",
    sections: [
      ["AVAILABLE GEOS", "Coins.Game is for adults in jurisdictions where its product is allowed. Restricted countries and verification requirements can change. Confirm eligibility in the official terms and do not use a VPN to circumvent blocks."],
      ["PROMOTIONS & GAMES", "Expect a mix of original games, slots and live casino where those products are enabled. Promotions, rakeback or vault-style rewards — if shown — are not universal. Opt in only after reading the official wagering, expiry and eligible-game rules."],
      ["DEPOSITS / WITHDRAWALS", "Funding is typically crypto-based. Supported assets, networks, minimums and limits are cashier-specific. Confirm the network and any pending verification before you send funds or request a cashout."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#c9a227",
      accentSoft: "#fff4cc",
      accentGlow: "#ffcc33",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Coins In.",
      sloganB: "Coins Out.",
      hook: "Weekly cashback up to 20%",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Original-style games", note: "Slots, live casino & more" },
        { label: "Crypto cashier", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "BNB", "LTC", "TRX", "ADA", "BCH", "DOGE", "DOT", "POL", "SHIB", "SOL", "TON", "XRP", "VISA", "MASTERCARD", "REVOLUT"],
      restricted: "Not available in: Aruba, Bonaire, Curaçao, Costa Rica, France, Netherlands, Saba, Statia, St Martin, USA and other restricted jurisdictions."
    })
  },
  rakebit: {
    kind: "casino",
    name: "Rakebit",
    claim: "https://rakebit.com",
    accent: "#e11d48",
    logo: "/brands/rakebit/logo.svg",
    cardHook: "100% rakeback on first $1,000",
    cardBullets: ["Crypto-first", "Slots + live casino"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino with slots, live games and promotions that depend on your account. Always verify current terms on the official site.",
    sections: [
      ["AVAILABLE GEOS", "Play is restricted to adults where Rakebit’s services are lawful. Country blocks, KYC and provider-level restrictions can apply. See the official terms for the restricted list and never use a VPN to bypass it."],
      ["PROMOTIONS & GAMES", "The lobby typically includes slots, table games and live casino. Welcome or reload offers, if any, vary by location and account. This page does not list bonus amounts; check official promotion terms for wagering, weighting and expiry."],
      ["DEPOSITS / WITHDRAWALS", "Crypto cashier options, networks, fees and processing times can differ by session. Match the deposit network exactly and allow for verification or responsible-gaming limits on withdrawals."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffcc33",
      accentDeep: "#d97706",
      accentSoft: "#ffe08a",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Bit by Bit.",
      sloganB: "Rake it Back.",
      hook: "100% rakeback on first $1,000",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto-first", note: "Deposit in popular coins" },
        { label: "Slots + live casino", note: "Slots, live casino & more" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "SOL", "LTC", "XRP", "TRX", "BNB", "ZEC", "XMR", "XLM", "SUI", "PEPE", "DOGE", "SHIB", "ADA", "POL", "LINK", "BCH", "CSC", "GRAM"],
      restricted: "Not available in: Cambodia, China, Costa Rica, Indonesia, Portugal, Russia, Saudi Arabia, Singapore, Thailand, Ukraine, UK, USA, Yemen and other restricted jurisdictions."
    })
  },
  vave: {
    kind: "casino",
    name: "Vave",
    claim: "https://vave.com",
    accent: "#a855f7",
    logo: "/brands/vave/logo.png",
    cardHook: "100% welcome cashback",
    cardBullets: ["Casino + sports", "Fast cashouts"],
    cardTag: "CRYPTO CASINO",
    summary: "A casino brand that may also offer sports in some markets. Games, bonuses and payments are location-specific.",
    sections: [
      ["AVAILABLE GEOS", "Vave is available only to adults in permitted locations. Restricted countries, age rules and geolocation checks apply. Confirm the official terms before registering and do not use a VPN to change your apparent location."],
      ["PROMOTIONS & GAMES", "Slots, live casino and other products may appear depending on your market. Welcome or ongoing promotions are not guaranteed and can differ by country. Review official wagering, game contribution and expiry rules before claiming anything."],
      ["DEPOSITS / WITHDRAWALS", "Available methods can include crypto and, in some sessions, other cashier options. Limits, fees, networks and processing times are shown in your account. Verification may be required before withdrawal."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#00e5ff",
      accentDeep: "#0077e6",
      accentSoft: "#7af6ff",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Ride The Vave.",
      sloganB: "Get Paid.",
      hook: "100% welcome cashback",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Casino + sports", note: "Slots, live casino & more" },
        { label: "Fast cashouts", note: "Get paid without the wait" }
      ],
      payments: ["BTC", "ETH", "USDT", "BNB", "XRP", "DOGE", "TON", "ADA", "LTC", "TRX", "BCH", "CHANGELLY", "MOONPAY", "BANXO", "ALTCOINS"],
      restricted: "Not available in: Belarus, Curaçao, Estonia, Israel, Latvia, Lithuania, UK, USA, Cyprus, France, Turkey, Netherlands and other restricted jurisdictions."
    })
  },
  betsio: {
    kind: "casino",
    name: "Bets.io",
    claim: "https://www.bets.io",
    accent: "#06b6d4",
    logo: "/brands/betsio/logo.png",
    cardHook: "225% + 225 free spins",
    cardBullets: ["Crypto casino", "Slots + live tables"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino with slots, live tables and related products where permitted. Confirm offers and cashier details on the official site.",
    sections: [
      ["AVAILABLE GEOS", "Bets.io serves adults only where online gambling is allowed. Restricted markets and identity checks can apply. Read the official terms for current country rules and do not use a VPN to bypass them."],
      ["PROMOTIONS & GAMES", "The catalogue typically includes slots, live casino and table games from multiple studios. Promotions, if offered, are account- and location-specific. Check official bonus terms rather than third-party headlines for wagering and eligible games."],
      ["DEPOSITS / WITHDRAWALS", "Crypto is commonly supported. Coins, networks, minimums, limits and processing times appear in the cashier and can change. Confirm the network and complete any requested checks before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#12a864",
      accentSoft: "#e8fff4",
      accentGlow: "#24ee89",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Bets In.",
      sloganB: "Spins On.",
      hook: "225% + 225 free spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto casino", note: "Slots, live casino & more" },
        { label: "Slots + live tables", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "SOL", "BANK TRANSFER", "VISA", "MASTERCARD", "NETELLER", "MIFINITY", "JETONBANK", "SKRILL", "BYBITPAY"],
      restricted: "Not available in: Angola, Barbados, Belgium, Burkina Faso, Central African Republic, Comoros, Costa Rica, Cuba, Curaçao, Cyprus, Congo, Dutch West Indies, Eritrea, Ethiopia, Haiti, Iran, Iraq, Israel, Jamaica, Jersey, Lebanon, Liberia, Libya, Mali, Myanmar, Nicaragua, North Korea, Panama, Russia, Rwanda, Saba, Sierra Leone, Somalia, South Sudan, Statia, St. Maarten, Sudan, Syria, Uganda, Ukraine, USA, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  jackbit: {
    kind: "casino",
    name: "Jackbit",
    claim: "https://jackbit.co",
    accent: "#f97316",
    logo: "/brands/jackbit/logo.svg",
    cardHook: "100 free spins on first $50 deposit",
    cardBullets: ["Code WELCOME", "Sports first-bet cover"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino listing slots and live games where the product is available. Bonus values are not guaranteed and should be checked in-account.",
    sections: [
      ["AVAILABLE GEOS", "Jackbit is for adults in lawful locations only. Restricted countries, IP controls and KYC can apply. See the official terms; never use a VPN or similar tool to appear elsewhere."],
      ["PROMOTIONS & GAMES", "Expect slots, table games and live casino where enabled. Welcome or reload promotions vary and may not appear for every visitor. Review official wagering, max-bet and expiry rules before opting in."],
      ["DEPOSITS / WITHDRAWALS", "The cashier typically supports selected cryptocurrencies. Assets, networks, fees and limits are account-specific. Send funds only to the address and network shown for that deposit."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#00EC66",
      accentDeep: "#00b34d",
      accentSoft: "#7affb0",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Hit Jack.",
      sloganB: "Cash Out.",
      hook: "100 free spins on first $50 deposit",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Code WELCOME", note: "Free spins on first deposit" },
        { label: "Sports first-bet cover", note: "Cover on your opening bet" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "SOL", "XRP", "TRX", "LTC"],
      restricted: "Not available in: Russia, Belarus, Lithuania, Georgia, Ukraine, Latvia, Moldova and other restricted jurisdictions."
    })
  },
  bet25: {
    kind: "casino",
    name: "Bet25",
    claim: "https://bet25.com",
    accent: "#84cc16",
    logo: "/brands/bet25/logo.png",
    cardHook: "20% daily cashback for 7 days",
    cardBullets: ["Daily cashback", "Slots + live casino"],
    cardTag: "CRYPTO CASINO",
    summary: "An online casino whose games, promotions and payments depend on your location. Confirm current terms on the operator site before depositing.",
    sections: [
      ["AVAILABLE GEOS", "Bet25 is available only to adults where its services are permitted. Country restrictions and verification requirements can change. Check the official terms and do not bypass location controls."],
      ["PROMOTIONS & GAMES", "Slots, live casino and table games may be listed depending on your session. Any welcome or ongoing offer is location-specific. This guide does not invent bonus amounts — use the official promotions page for wagering and eligibility."],
      ["DEPOSITS / WITHDRAWALS", "Available deposit and withdrawal methods, including crypto or other options, are shown in the cashier. Limits, fees and processing times vary. Identity checks may apply before a payout."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#2e1065",
      accentSoft: "#e9d5ff",
      accentGlow: "#6d28d9",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Play 25.",
      sloganB: "Get 20.",
      hook: "20% daily cashback for 7 days",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Daily cashback", note: "Slots, live casino & more" },
        { label: "Crypto casino", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "SOL", "LTC", "TRX", "BNB", "DOGE", "GRAM", "POL", "ARB", "XRP", "VISA", "MASTERCARD", "APPLE PAY", "GOOGLE PAY", "BANK TRANSFER"],
      restricted: "Not available in: USA, UK, France, Denmark, Latvia, Netherlands, Ukraine, Belgium, Bulgaria, Australia, Iran, Iraq, Syria, North Korea, Cuba, China and other restricted jurisdictions."
    })
  },
  gamdom: {
    kind: "casino",
    name: "Gamdom",
    claim: "https://gamdom.com",
    accent: "#ef4444",
    logo: "/brands/gamdom/logo.svg",
    cardHook: "15% rakeback for 7 days",
    cardBullets: ["Community rewards", "Crypto casino"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino with community features, slots and original-style games where permitted. Rewards and cashier rules are account-specific.",
    sections: [
      ["AVAILABLE GEOS", "Gamdom is limited to adults in locations where its product is legal. Restricted countries, KYC and provider blocks can apply. Confirm eligibility in the official terms and never use a VPN to circumvent them."],
      ["PROMOTIONS & GAMES", "The lobby typically mixes slots, live casino and original games. Community rewards, races or other promotions — if shown — vary by account and location. Read official wagering and eligibility rules before participating."],
      ["DEPOSITS / WITHDRAWALS", "Crypto deposits and withdrawals are commonly used. Supported coins, networks, minimums and limits appear in the cashier. Network mismatches can result in lost funds; verification can delay cashouts."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff2e88",
      accentDeep: "#c4005e",
      accentSoft: "#ff8fb8",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Rake It Back.",
      sloganB: "Play On.",
      hook: "15% rakeback for 7 days",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Community rewards", note: "Rewards on your play" },
        { label: "Crypto casino", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "TRX", "BINANCE", "COINBASE", "VISA", "MASTERCARD", "APPLE PAY", "GOOGLE PAY", "BANK TRANSFER", "CS2 SKINS", "GIFT CARDS"],
      restricted: "Not available in: Aruba, Austria, Australia, Belgium, Bonaire, Curaçao, Denmark, France, French Guiana, French Polynesia, Germany, Guernsey, Gibraltar, Greece, Hungary, Isle of Man, Iran, Jersey, Lithuania, Liechtenstein, Luxembourg, Malta, Martinique, Mayotte, Myanmar, North Korea, Netherlands, Portugal, Puerto Rico, Réunion, Serbia, Slovakia, Slovenia, Spain, Sweden, USA, UK and other restricted jurisdictions."
    })
  },
  bitzio: {
    kind: "casino",
    name: "Bitz.io",
    claim: "https://bitz.io/",
    accent: "#3b82f6",
    logo: "/brands/bitz/logo.png",
    cardHook: "100% up to 3,000 USDT",
    cardBullets: ["Crypto casino", "Slots + live tables"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino listing slots, live tables and related products where permitted. Offers and cashier options should be confirmed on the operator site.",
    sections: [
      ["AVAILABLE GEOS", "Bitz.io is available only to adults where online casino play is permitted. Restricted markets and identity or location checks can apply. Review the official terms and do not use a VPN to bypass restrictions."],
      ["PROMOTIONS & GAMES", "The lobby typically includes slots, table games and live casino where those products are enabled. Welcome or ongoing promotions, if shown, are account- and location-specific. Check official promotion terms for wagering, eligible titles and expiry rather than assuming a headline still applies."],
      ["DEPOSITS / WITHDRAWALS", "Crypto deposits and withdrawals are commonly used. Coins, networks, limits and processing times appear in the cashier and can change. Confirm the network and complete any requested verification before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#c4001a",
      accentSoft: "#ffe8ec",
      accentGlow: "#ff2d4f",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Bitz In.",
      sloganB: "Double Up.",
      hook: "100% up to 3,000 USDT",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto casino", note: "Slots, live casino & more" },
        { label: "Slots + live tables", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "BNB", "LTC", "TRX", "POL", "SOL", "TON", "VISA", "MASTERCARD"],
      restricted: "Not available in: Austria, France, Germany, Netherlands, Spain, Comoros, UK, USA and other restricted jurisdictions."
    })
  },
  spinbetter: {
    kind: "casino",
    name: "SpinBetter",
    claim: "https://spinbetter.com",
    accent: "#eab308",
    logo: "/brands/spinbetter/logo.png",
    cardHook: "Up to €1,500 + 150 free spins",
    cardBullets: ["Casino + sportsbook", "Opt-in welcome pack"],
    cardTag: "CRYPTO CASINO",
    summary: "An online casino with slots and live games where offered. Promotions and payment methods should be confirmed on the official site.",
    sections: [
      ["AVAILABLE GEOS", "SpinBetter serves adults only in permitted locations. Restricted countries, age rules and geolocation can apply. See the official terms and never use a VPN to change your apparent location."],
      ["PROMOTIONS & GAMES", "The catalogue typically includes slots, table games and live casino. Welcome or ongoing promotions vary by market and account. Do not rely on third-party bonus figures; use the official terms for wagering and game restrictions."],
      ["DEPOSITS / WITHDRAWALS", "Cashier options can include crypto and other methods depending on session. Limits, fees, networks and processing times are account-specific. Verification may be required before a withdrawal is released."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#d3e512",
      accentDeep: "#a8b80a",
      accentSoft: "#e8f56a",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Spin Better.",
      sloganB: "Win Faster.",
      hook: "Up to €1,500 + 150 free spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Casino + sports", note: "Slots, live casino & more" },
        { label: "Crypto friendly", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "VISA", "MASTERCARD"],
      restricted: "Not available in: United States, United Kingdom, France, Netherlands, Australia, Spain, Italy, Portugal and other restricted jurisdictions."
    })
  },
  rxcasino: {
    kind: "casino",
    name: "RX Casino",
    claim: "https://rx.casino/",
    accent: "#ffcc33",
    logo: "/brands/rxcasino/logo.png",
    cardHook: "150–200% + Free Spins",
    cardBullets: ["Welcome + free spins", "Check official terms"],
    cardTag: "CRYPTO CASINO",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Availability, age limits and restricted countries must be confirmed on the operator’s official site and terms. Only play if you are 18+ (or the local legal age) and in a lawful location. Do not use a VPN to bypass blocks."],
      ["PROMOTIONS & GAMES", "Game catalogue and promotions are not verified here. Any welcome offer, wagering rule or game list should be read on the official promotions and terms pages. This guide does not quote bonus amounts."],
      ["DEPOSITS / WITHDRAWALS", "Payment methods, networks, limits and processing times should be checked in the official cashier. Do not send funds until you have confirmed the destination, network and any verification requirements."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffcc33",
      accentDeep: "#d97706",
      accentSoft: "#ffe08a",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Prescription:",
      sloganB: "Free Spins.",
      hook: "150–200% + Free Spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Welcome + free spins", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "TRX", "DOGE", "ALTCOINS", "JETONBANK"],
      restricted: "Not available in: Austria, France, Germany, Netherlands, Spain, Comoros, UK, USA and other restricted jurisdictions."
    })
  },
  goldenplay: {
    kind: "casino",
    name: "GoldenPlay",
    claim: "https://goldenplay.com/",
    accent: "#d4af37",
    logo: "/brands/goldenplay/logo.png",
    cardHook: "100% up to €555 + 100 Free Spins",
    cardBullets: ["Welcome + free spins", "Check official terms"],
    cardTag: "CRYPTO CASINO",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Country access, age rules and identity checks must be confirmed on the operator’s official terms. Only adults in lawful locations should play. Never use a VPN or similar tool to appear in another region."],
      ["PROMOTIONS & GAMES", "Slots, live casino or other products — and any promotions attached to them — should be verified on the official site. This page does not invent bonus amounts, wagering figures or guaranteed game lists."],
      ["DEPOSITS / WITHDRAWALS", "Cashier methods, crypto networks, fees and limits are not confirmed here. Use the official cashier and terms, and complete any requested checks before depositing or withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffcc33",
      accentDeep: "#d4af37",
      accentSoft: "#ffe08a",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Golden Bets.",
      sloganB: "Golden Spins.",
      hook: "100% up to €555 + 100 Free Spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Welcome + free spins", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "VISA", "MASTERCARD", "BANK TRANSFER", "POSTEPAY", "REVOLUT", "FLEXPIN", "CASHLIB", "SKRILL", "MIFINITY", "PSCRD", "NETELLER"],
      restricted: "Not available in: Afghanistan, Algeria, Australia, Belgium, Bulgaria, New Brunswick (Canada), Africa, China, Cuba, Cyprus, Congo, Haiti, Iran, Iraq, Israel, Libya, Lithuania, Malta, Myanmar, Netherlands, North Korea, Pakistan, Russia, Somalia, South Sudan, Syria, UK, USA, Venezuela, Yemen and other restricted jurisdictions."
    })
  },
  cocobet: {
    kind: "casino",
    name: "Cocobet",
    claim: "https://kokobet.com/",
    accent: "#fb7185",
    logo: "/brands/cocobet/logo.png",
    cardHook: "50% up to $100 Free Bet",
    cardBullets: ["Free bet welcome", "Check official terms"],
    cardTag: "CRYPTO CASINO",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Restricted countries, legal age and product access must be confirmed in the operator’s official terms. Only gamble where it is lawful for you. Do not use a VPN to circumvent restrictions."],
      ["PROMOTIONS & GAMES", "Any welcome package, reload or loyalty offer should be read on the official promotions page. Game availability can also vary by location. This guide does not list bonus amounts."],
      ["DEPOSITS / WITHDRAWALS", "Deposit and withdrawal options, including crypto, are cashier-specific. Confirm methods, networks, limits and verification requirements on the official site before sending funds."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffe566",
      accentDeep: "#e0b000",
      accentSoft: "#fff4a8",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Coco In",
      sloganB: "Free Bet.",
      hook: "50% up to $100 Free Bet",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Free bet welcome", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "DOGE", "XRP", "TRX", "BNB", "POL", "SOL", "BINANCE", "SKRILL"],
      restricted: "Not available in: Afghanistan, Albania, Algeria, Angola, Australia, Bahamas, Botswana, Cambodia, Ecuador, Ethiopia, Ghana, Guyana, Hong Kong, Iran, Iraq, Israel, Kuwait, Laos, Myanmar, Namibia, Nicaragua, North Korea, Pakistan, Panama, Papua New Guinea, Philippines, Singapore, Sri Lanka, Sudan, Syria, Taiwan, Trinidad and Tobago, Tunisia, Uganda, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  betfury: {
    kind: "casino",
    name: "BetFury",
    claim: "https://betfury.com",
    accent: "#38bdf8",
    logo: "/brands/betfury/logo.png",
    cardHook: "Up to 590% + 225 free spins",
    cardBullets: ["Crypto casino", "Slots + live games"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino that also promotes token and bonus mechanics on its own site. Offers, games and payments depend on your account and location.",
    sections: [
      ["AVAILABLE GEOS", "BetFury is for adults in locations where its casino products are permitted. Restricted countries, KYC and geolocation can apply. Confirm the official terms and never use a VPN to bypass blocks."],
      ["PROMOTIONS & GAMES", "The lobby typically includes slots, live casino and additional on-site features that may change. Token, staking or bonus mechanics advertised elsewhere are not a promise of a welcome amount. Read official promotion terms for wagering, eligibility and expiry."],
      ["DEPOSITS / WITHDRAWALS", "Crypto is commonly used for deposits and withdrawals. Coins, networks, minimums, limits and processing times appear in the cashier. Confirm the network and complete any requested verification before cashing out."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#c4001a",
      accentSoft: "#ffe8ec",
      accentGlow: "#ff2d4f",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Fury Play.",
      sloganB: "Fury Wins.",
      hook: "Up to 590% + 225 free spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto casino", note: "Slots, live casino & more" },
        { label: "Slots + live games", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "ALTCOINS", "SKRILL", "REVOLUT", "BANK TRANSFER", "NETELLER", "PAYDO", "VISA", "MASTERCARD", "APPLE PAY", "GOOGLE PAY", "PAYPAL"],
      restricted: "Not available in: Afghanistan, Aruba, Algeria, Antigua & Barbuda, Australia, Austria, Belarus, Bahrain, Belgium, Bhutan, Brunei, Central African Republic, Chad, Côte d'Ivoire, Croatia, Cuba, Czech Republic, North Korea, Congo, Denmark, Estonia, France, Germany, Greece, Guinea-Bissau, Hungary, Iran, Iraq, Iceland, Israel, Italy, Jordan, Kuwait, Latvia, Lebanon, Liberia, Lithuania, Mali, Malta, Myanmar, Netherlands, Netherlands Antilles, Norway, Oman, Palestine, Pakistan, Poland, Portugal, Qatar, Romania, Russia, Saba, Saint Martin, Saudi Arabia, Serbia, Slovenia, Somalia, Spain, Statia, Switzerland, Syria, Sudan, Trinidad and Tobago, Turkey, Ukraine, UK, UAE, USA, Vanuatu, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  wildroll: {
    kind: "casino",
    name: "WildRoll",
    claim: "https://wildroll.com/",
    accent: "#4ade80",
    logo: "/brands/wildroll/logo.png",
    cardHook: "200% + 50 Free Spins",
    cardBullets: ["Welcome + free spins", "Check official terms"],
    cardTag: "CRYPTO CASINO",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Availability is not confirmed here. Check the operator’s official terms for restricted countries, age limits and location rules. Only play if you are 18+ (or the local legal age) and in a lawful market."],
      ["PROMOTIONS & GAMES", "Game selection and promotions should be verified on the official site. This page does not invent bonus amounts, free-spin counts or wagering requirements."],
      ["DEPOSITS / WITHDRAWALS", "Payment methods and processing times must be confirmed in the official cashier. Do not send crypto or fiat until the destination address, network and any KYC steps are clear."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#39ff14",
      accentDeep: "#22c55e",
      accentSoft: "#9dff9a",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Roll Wild.",
      sloganB: "Cash Fast.",
      hook: "200% + 50 Free Spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Welcome + free spins", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "BNB", "SOL", "POL", "TRX", "ALTCOINS", "INTERAC"],
      restricted: "Not available in: Austria, Bangladesh, Bulgaria, France, Georgia, Germany, Greece, India, Iran, Netherlands, Nigeria, Pakistan, Spain, Comoros, UK, USA and other restricted jurisdictions."
    })
  },
  stealthbet: {
    kind: "casino",
    name: "STEALTHBET",
    claim: "https://play.stealthbet.world/en",
    accent: "#94a3b8",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Country access and age requirements must be taken from the operator’s official terms. Play only where lawful. Do not use a VPN or other tool to bypass location controls."],
      ["PROMOTIONS & GAMES", "Slots, live casino or other products — and any attached promotions — should be confirmed on the official site. Wagering, game weighting and expiry rules on that site control."],
      ["DEPOSITS / WITHDRAWALS", "Cashier options, limits and verification are not verified here. Use the official payments pages and cashier before depositing or requesting a withdrawal."]
    ]
  },
  wildio: {
    kind: "casino",
    name: "Wild.io",
    claim: "https://wild.io",
    accent: "#34d399",
    logo: "/brands/wild/logo.png",
    cardHook: "350% + 200 free spins",
    cardBullets: ["Code WILD", "3-deposit pack"],
    cardTag: "CRYPTO CASINO",
    summary: "A crypto casino with original-style games plus slots and live tables where permitted. Terms and offers are account-specific.",
    sections: [
      ["AVAILABLE GEOS", "Wild.io is available only to adults in permitted locations. Restricted countries, identity checks and provider blocks can apply. Review the official terms and do not use a VPN to circumvent them."],
      ["PROMOTIONS & GAMES", "The lobby typically includes original games, slots and live casino where enabled. Rakeback, vault or other rewards — if shown — vary by account and location. Check official promotion terms rather than assuming a bonus amount."],
      ["DEPOSITS / WITHDRAWALS", "Funding is typically crypto-based. Supported assets, networks, minimums and limits are shown in the cashier. Confirm the network and complete any requested checks before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#00ff9d",
      accentDeep: "#00c77a",
      accentSoft: "#7affc8",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Wild Play.",
      sloganB: "Wild Wins.",
      hook: "350% + 200 free spins",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Code WILD", note: "Use at signup" },
        { label: "3-deposit pack", note: "Crypto welcome bonus" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "SOL", "DOGE", "XRP", "TRX", "BCH", "BNB", "ADA", "GRAM"],
      restricted: "Not available in: USA, UK, Portugal, Slovakia, Spain, Israel, France and its overseas territories, Lithuania, Dutch West Indies, Curaçao, Belgium, Romania, Kenya, Vietnam, Ukraine, Pakistan, Indonesia, China, Hong Kong, Malta, Netherlands, Wallis and Futuna, Russia, Saint Pierre and Miquelon, Sint Maarten, Mauritius, Isle of Man, Costa Rica, Comoros, Australia, Belize, Antigua and Barbuda, Georgia, Iran, North Korea, Syria, Cuba, Venezuela, Greece and other restricted jurisdictions."
    })
  },
  hyperlucky: {
    kind: "casino",
    name: "Hyper Lucky",
    claim: "https://lobby.hyperlucky.com/en/",
    accent: "#f472b6",
    logo: "/brands/hyperlucky/logo.png",
    cardHook: "Up to 100 free spins · no wagering",
    cardBullets: ["Crypto-only", "Daily cashback"],
    cardTag: "CRYPTO CASINO",
    summary: "Listing placeholder: confirm the operator’s official site, games and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Restricted countries, legal age and product access must be confirmed on the operator’s official terms. Only play if you are 18+ (or the local legal age) and in a lawful location. Do not bypass geolocation controls."],
      ["PROMOTIONS & GAMES", "Promotions and game availability are not independently verified here. Check the official site for any welcome offer, wagering rules, eligible games and expiry."],
      ["DEPOSITS / WITHDRAWALS", "Deposit and withdrawal methods, including any crypto networks, should be confirmed in the official cashier. Do not send funds until destination, network and verification requirements are clear."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#00e5ff",
      accentDeep: "#0099c7",
      accentSoft: "#7af6ff",
      eyebrow: "CRYPTO CASINO",
      sloganA: "Small Bets.",
      sloganB: "Hyper Luck.",
      hook: "Up to 100 free spins · no wagering",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Crypto-only", note: "Deposit in popular coins" },
        { label: "Daily cashback", note: "Rewards on your play" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "SOL", "LTC", "TRX", "DOGE", "BNB"],
      restricted: "Not available in: Afghanistan, Burundi, Canadian Province of New Brunswick, China, Ethiopia, France, Guatemala, Guinea, Guinea-Bissau, Haiti, Iran, Iraq, Israel, Libya, Mali, Myanmar, Netherlands, Nicaragua, North Korea, Russia, Somalia, South Sudan, Spain, Sweden, Syria, USA, Yemen."
    })
  },
  megapari: {
    kind: "sports",
    name: "MegaPari",
    claim: "https://megapari.com",
    accent: "#e11d48",
    logo: "/brands/megapari/logo.svg",
    cardHook: "200% up to $200",
    cardBullets: ["Major sports + live", "International sportsbook"],
    summary: "An international sportsbook that may also list casino products depending on your session. Markets, promotions and payments should be confirmed on the official site.",
    sections: [
      ["AVAILABLE GEOS", "MegaPari is available only to adults in locations where its sportsbook and related products are lawful. Restricted countries, identity checks and product access can change. Confirm eligibility in the official terms and never use a VPN or other tool to bypass location controls."],
      ["PROMOTIONS & BETTING", "Coverage typically includes major sports and live markets where the product is enabled. Welcome offers, odds boosts and other rewards — if shown — are account- and location-specific. This guide does not quote bonus amounts or boost figures; review qualifying odds, excluded events, rollover and expiry on the official promotions page before opting in."],
      ["DEPOSITS / WITHDRAWALS", "Cashier options can include crypto and other methods depending on session. Limits, fees, networks and processing times are shown in your account and can change. Complete any requested verification before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#1B9DD9",
      accentDeep: "#0d6f9e",
      accentSoft: "#7ad4f5",
      accentGlow: "#E6352B",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Sports First.",
      sloganB: "Casino After.",
      hook: "200% up to $200",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Major sports + live", note: "Slots, live casino & more" },
        { label: "International sportsbook", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "ALTCOINS", "VISA", "MASTERCARD", "BANK TRANSFER"],
      restricted: "Not available in: Bulgaria, France, Cyprus, Hungary, Curaçao, Netherlands, UK, USA and other restricted jurisdictions."
    })
  },
  powbet: {
    kind: "sports",
    name: "POWBET",
    claim: "https://powbet.com",
    accent: "#f97316",
    summary: "An online sportsbook whose markets, promotions and cashier options depend on your location and account.",
    sections: [
      ["AVAILABLE GEOS", "Powbet serves adults only where online sports betting is permitted. Country restrictions, age rules and geolocation can apply. Read the official terms for the current restricted list and do not use a VPN to appear in another region."],
      ["PROMOTIONS & BETTING", "Sport, esports and live markets may be listed depending on your session. Promotions are not guaranteed and can differ by country. Check official terms for qualifying wagers, minimum odds, settlement rules and expiry rather than relying on third-party headlines."],
      ["DEPOSITS / WITHDRAWALS", "Available deposit and withdrawal methods, including crypto or other options, appear in the cashier. Limits, processing times and verification requirements vary. Confirm the destination and network before sending funds."]
    ]
  },
  epicbet: {
    kind: "sports",
    name: "EpicBet",
    claim: "https://epicbet.com",
    accent: "#8b5cf6",
    logo: "/brands/epicbet/logo.png",
    cardHook: "100% up to $100",
    cardBullets: ["Live + pre-match", "Check official terms"],
    summary: "A sportsbook brand with live and pre-match markets where offered. Offers and payment options should be checked in-account.",
    sections: [
      ["AVAILABLE GEOS", "EpicBet is for adults in lawful locations only. Restricted countries, IP controls and KYC can apply. See the official terms; never use a VPN or similar tool to appear elsewhere."],
      ["PROMOTIONS & BETTING", "Expect pre-match and in-play markets where the sportsbook is enabled. Welcome or reload promotions, if any, vary by location and account. This page does not list odds boosts or bonus amounts — use the official offer terms for wagering, excluded markets and expiry."],
      ["DEPOSITS / WITHDRAWALS", "The cashier may support crypto and other methods depending on your session. Assets, networks, fees and limits are account-specific. Send funds only to the address and network shown for that deposit."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#39ff14",
      accentDeep: "#22c55e",
      accentSoft: "#9dff9a",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Epic Odds.",
      sloganB: "Epic Payouts.",
      hook: "100% up to $100",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Live + pre-match", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "DOGE", "SOL", "XRP", "TRX", "BNB"],
      restricted: "Not available in: Afghanistan, Australia, Austria, Belarus, Belgium, Cuba, Curaçao, North Korea, Congo, Estonia, Finland, France, Germany, Iran, Iraq, Lebanon, Lithuania, Malta, Myanmar, Netherlands, Palestine, Russian Federation, Saint Kitts and Nevis, Serbia, Singapore, Somalia, South Sudan, Sweden, Spain, Sudan, Syria, Turkey, Ukraine, Comoros, USA, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  cybet: {
    kind: "sports",
    name: "Cybet",
    claim: "https://cybet.com",
    accent: "#06b6d4",
    logo: "/brands/cybet/logo.png",
    cardHook: "Boosted odds + acca boosts",
    cardBullets: ["Live betting", "Check official terms"],
    summary: "A sportsbook listing whose markets, rewards and payments depend on local rules and your account.",
    sections: [
      ["AVAILABLE GEOS", "Cybet is available only to adults where its service is permitted. Restricted markets, identity checks and product access can change. Confirm the official terms and do not bypass location controls."],
      ["PROMOTIONS & BETTING", "Major sports, live betting and related markets may appear depending on your session. Eligible promotions are location- and account-specific. Review opt-in requirements, qualifying odds and expiry on the official site before participating."],
      ["DEPOSITS / WITHDRAWALS", "Supported methods, limits, fees and processing times are cashier-specific. Identity or source-of-funds checks may delay withdrawals. Confirm details in your account before depositing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#39ff14",
      accentDeep: "#1a9e3f",
      accentSoft: "#b8ff8a",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Cyber Bets.",
      sloganB: "Super Odds.",
      hook: "Boosted odds + acca boosts",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Live betting", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "SOL", "LTC", "BNB", "TRX", "POL", "XRP", "XLM", "DOGE"],
      restricted: "Not available in: Austria, France, Germany, Netherlands, Spain, UK, USA, Comoros and other restricted jurisdictions."
    })
  },
  vavada: {
    kind: "sports",
    name: "Vavada",
    claim: "https://vavada.com",
    accent: "#22c55e",
    logo: "/brands/vavada/logo.png",
    cardHook: "100% + Free Spins + Cashback",
    cardBullets: ["Sports + casino", "Check official terms"],
    summary: "A brand that may offer sports betting alongside casino products depending on your market. Terms and availability vary.",
    sections: [
      ["AVAILABLE GEOS", "Vavada is limited to adults in locations where its products are legal. Restricted countries, KYC and provider or sportsbook blocks can apply. Review the official terms and never use a VPN to circumvent them."],
      ["PROMOTIONS & BETTING", "Sports markets, if enabled for your session, sit alongside other products the operator may list. Welcome or ongoing promotions are not universal. Check official wagering, qualifying-bet and expiry rules before opting in — this guide does not invent bonus amounts."],
      ["DEPOSITS / WITHDRAWALS", "Crypto and other cashier options may be shown depending on session. Coins, networks, minimums and limits appear in the cashier. Match the network exactly and complete any requested checks before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffffff",
      accentDeep: "#c4005e",
      accentSoft: "#ffe0f0",
      accentGlow: "#ff2e88",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Welcome Match.",
      sloganB: "Weekly Back.",
      hook: "100% + Free Spins + Cashback",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Sports + casino", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "LTC", "TON", "TRX", "BNB", "SOL", "XRP", "DOGE", "POL", "BCH", "ADA", "ARB", "AVAX", "BINANCE", "BYBIT", "SKRILL", "NETELLER", "JETON", "VISA", "MASTERCARD", "APPLE PAY"],
      restricted: "Not available in: Abkhazia, Afghanistan, American Samoa, Austria, Barbados, Belgium, Botswana, Burundi, Cambodia, Cameroon, Bonaire, Saba, St. Maarten, St. Eustatius, Aruba, Central African Republic, Chad, Crimea, Cuba, Curaçao, Democratic Republic of the Congo, Eritrea, Ethiopia, Fiji, France, Gabon, Georgia, Germany, Great Britain, Guam, Iran, Lebanon, Libya, Lithuania, Mali, Mozambique, Myanmar, Netherlands, Nicaragua, Nigeria, North Korea, Pakistan, Palau, Palestine, Portugal, Cyprus, Samoa, Senegal, Slovakia, Slovenia, Somalia, South Ossetia, South Sudan, Sudan, Sweden, Switzerland, Syria, Transnistria, Trinidad and Tobago, USA, Uganda, Venezuela, Yemen, Zimbabwe and other restricted jurisdictions."
    })
  },
  rainbet: {
    kind: "sports",
    name: "Rainbet",
    claim: "https://rainbet.com",
    accent: "#38bdf8",
    logo: "/brands/rainbet/logo.png",
    cardHook: "250% up to $2,100",
    cardBullets: ["Crypto sportsbook", "Live markets"],
    summary: "A crypto sportsbook whose coverage, promotions and cashier rules are account- and location-specific.",
    sections: [
      ["AVAILABLE GEOS", "Rainbet serves adults only where online wagering is allowed. Restricted markets and verification requirements can apply. See the official terms; never use a VPN to change your apparent location."],
      ["PROMOTIONS & BETTING", "The sportsbook may list major sports, live markets and related products depending on your session. Promotions are not guaranteed. Use the official offer page for qualifying stake, odds, rollover and expiry — this page does not quote amounts."],
      ["DEPOSITS / WITHDRAWALS", "Crypto deposits and withdrawals are commonly used. Exact coins, networks, limits and processing rules appear in the cashier. Network mismatches can result in lost funds; KYC can delay cashouts."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#38bdf8",
      accentDeep: "#0ea5e9",
      accentSoft: "#bae6fd",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Forecast:",
      sloganB: "Raining Profits.",
      hook: "250% up to $2,100",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Live markets", note: "Slots, live casino & more" },
        { label: "Crypto sportsbook", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "BCH", "LTC", "DOGE", "BNB", "XRP", "ADA", "SOL", "POL", "TRX", "AVAX", "LINK", "DOT", "SHIB"],
      restricted: "Not available in: USA, France, Netherlands, Australia and other restricted jurisdictions."
    })
  },
  citobet: {
    kind: "sports",
    name: "Citobet",
    claim: "https://www.citobet.com/sportsbook",
    accent: "#ff6b00",
    logo: "/brands/citobet/logo.png",
    cardHook: "100% up to $500",
    cardBullets: ["Sportsbook markets", "Check official terms"],
    summary: "Listing placeholder: confirm the operator’s official site, sportsbook markets and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Availability, age limits and restricted countries must be confirmed on the operator’s official site and terms. Only bet if you are 18+ (or the local legal age) and in a lawful location. Do not use a VPN to bypass blocks."],
      ["PROMOTIONS & BETTING", "Markets and promotions are not verified here. Any welcome offer, odds boost or loyalty reward should be read on the official promotions and terms pages. This guide does not quote bonus amounts or boost figures."],
      ["DEPOSITS / WITHDRAWALS", "Payment methods, networks, limits and processing times should be checked in the official cashier. Do not send funds until you have confirmed the destination, network and any verification requirements."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff6b00",
      accentDeep: "#c44f00",
      accentSoft: "#ffb066",
      eyebrow: "SPORTSBOOK",
      sloganA: "Hundred Match.",
      sloganB: "Five Hundred.",
      hook: "100% up to $500",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Sportsbook markets", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["REVOLUT", "VISA", "MASTERCARD"],
      restricted: "Not available in: Australia, Austria, Comoros, Denmark, France, Germany, Netherlands, Spain, United Kingdom, USA and other restricted jurisdictions."
    })
  },
  n1bet: {
    kind: "sports",
    name: "N1Bet",
    claim: "https://n1bet.com",
    accent: "#a855f7",
    logo: "/brands/n1bet/logo.png",
    cardHook: "50% free bet up to $1,000",
    cardBullets: ["Live + pre-match", "Check official terms"],
    summary: "An online sportsbook whose leagues, live markets and promotions depend on your location. Confirm current terms before depositing.",
    sections: [
      ["AVAILABLE GEOS", "N1Bet is available only to adults where its sportsbook is permitted. Country restrictions and verification can change. Check the official terms and do not bypass location controls."],
      ["PROMOTIONS & BETTING", "Pre-match, live and other markets may be listed depending on your session. Welcome or ongoing offers are location-specific. This guide does not invent bonus amounts — use the official promotions page for qualifying bets, excluded markets and expiry."],
      ["DEPOSITS / WITHDRAWALS", "Cashier methods, including crypto or other options, are shown in-account. Limits, fees and processing times vary. Identity checks may apply before a payout."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff2d4f",
      accentDeep: "#d1003a",
      accentSoft: "#ff93a4",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Be The.",
      sloganB: "N1",
      hook: "50% free bet up to $1,000",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Live + pre-match", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "LTC", "VISA", "MASTERCARD", "NETELLER", "SKRILL", "iDEBIT", "MUCHBETTER"],
      restricted: "Not available in: France, Netherlands, Ontario, UK, USA and other restricted jurisdictions."
    })
  },
  ggbet: {
    kind: "sports",
    name: "GG.Bet",
    claim: "https://gg.bet",
    accent: "#f59e0b",
    logo: "/brands/ggbet/logo.png",
    cardHook: "Up to 200% + $100 free bet",
    cardBullets: ["Esports coverage", "Traditional sports + live"],
    summary: "A sportsbook known for esports coverage alongside traditional sports where offered. Promotions and payments vary by account.",
    sections: [
      ["AVAILABLE GEOS", "GG.Bet is limited to adults in locations where its product is legal. Restricted countries, KYC and geolocation can apply. Confirm eligibility in the official terms and never use a VPN to circumvent them."],
      ["PROMOTIONS & BETTING", "Esports is often a focus, with traditional sports and live markets where enabled. Welcome offers, boosts or loyalty rewards are not guaranteed for every player. Check official terms for qualifying odds, excluded events, wagering and expiry."],
      ["DEPOSITS / WITHDRAWALS", "The cashier may support crypto and other methods depending on session. Coins, networks, limits and processing times are shown in your account. Confirm the network and complete any requested verification before withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#f5c518",
      accentDeep: "#d4a017",
      accentSoft: "#ffe066",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Two Hundred.",
      sloganB: "Hundred Free.",
      hook: "Up to 200% + $100 free bet",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Esports coverage", note: "Slots, live casino & more" },
        { label: "Traditional sports + live", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "LTC", "TON", "BINANCE"],
      restricted: "Not available in: Afghanistan, New Brunswick, Ontario, China, Cuba, Central African Republic, Democratic Republic of Congo, Haiti, Iran, Iraq, Israel, Libya, Myanmar, North Korea, Russia, Somalia, South Sudan, Syria, Ukraine, UK, USA, Yemen, Venezuela and other restricted jurisdictions."
    })
  },
  rollxo: {
    kind: "sports",
    name: "RollXO",
    claim: "https://www.rollxo.com/",
    accent: "#ffcc33",
    logo: "/brands/rollxo/logo.png",
    cardHook: "100% up to $2,000",
    cardBullets: ["Sportsbook markets", "Check official terms"],
    summary: "Listing placeholder: confirm the operator’s official site, sportsbook markets and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Country access, age rules and identity checks must be confirmed on the operator’s official terms. Only adults in lawful locations should bet. Never use a VPN or similar tool to appear in another region."],
      ["PROMOTIONS & BETTING", "Sports markets and any promotions attached to them should be verified on the official site. This page does not invent bonus amounts, odds boosts or guaranteed league lists."],
      ["DEPOSITS / WITHDRAWALS", "Cashier methods, crypto networks, fees and limits are not confirmed here. Use the official cashier and terms, and complete any requested checks before depositing or withdrawing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffe566",
      accentDeep: "#e6b800",
      accentSoft: "#fff4a8",
      eyebrow: "CRYPTO SPORTSBOOK",
      sloganA: "Roll Roll Roll.",
      sloganB: "XO XO XO",
      hook: "100% up to $2,000",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Sportsbook markets", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "USDT", "USDC", "VISA", "MASTERCARD"],
      restricted: "Not available in: Afghanistan, Albania, Algeria, American Samoa, Andorra, Angola, Anguilla, Antarctica, Antigua and Barbuda, Argentina, Armenia, Aruba, Azerbaijan, Bahamas, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bonaire, Botswana, Brunei, Bulgaria, Burkina Faso, Burundi, Cape Verde, Cambodia, Cameroon, Cayman Islands, Central African Republic, Chad, Chile, China, Christmas Island, Colombia, Comoros, Congo, Cook Islands, Costa Rica, Dominican Republic, Dominica, Croatia, Cuba, Curaçao, Czech Republic, Djibouti, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Ethiopia, Falkland Islands, Maldives, Faroe Islands, Fiji, France, Gabon, Gambia, Georgia, Ghana, Gibraltar, Greece, Greenland, Grenada, Guadeloupe, Guam, Guatemala, Guernsey, Guinea, Guinea-Bissau, Papua New Guinea, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Isle of Man, Israel, Jamaica, Jersey, Jordan, Kenya, Kiribati, Kyrgyzstan, Latvia, Lithuania, North Macedonia, Macao, Madagascar, Malawi, Malaysia, Mali, Marshall Islands, Martinique, Mauritania, Mauritius, Mayotte, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Myanmar, Namibia, Nauru, Netherlands, Nepal, New Caledonia, Nicaragua, Niger, Nigeria, Niue, Norfolk Island, Korea, Oman, Pakistan, Panama, Paraguay, Peru, Philippines, Pitcairn, Poland, Portugal, Puerto Rico, Réunion, Romania, Rwanda, Samoa, San Marino, Sao Tome and Principe, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Solomon Islands, Somalia, South Sudan, Spain, Sri Lanka, Suriname, Svalbard and Jan Mayen, Eswatini, Sweden, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tokelau, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Turks and Caicos, Tuvalu, Uganda, Ukraine, UK, USA, Uruguay, Uzbekistan, Vanuatu, Venezuela, Wallis and Futuna, Yemen, Zimbabwe, Zambia and other restricted jurisdictions."
    })
  },
  mybookie: {
    kind: "sports",
    name: "MyBookie",
    claim: "https://www.mybookie.ag",
    accent: "#ff6b00",
    logo: "/brands/mybookie/logo.png",
    cardHook: "$500 bet-back",
    cardBullets: ["US sports markets", "Live betting"],
    summary: "A sportsbook listing US and other sports markets where the product is available. Local eligibility and promotions should be confirmed on the official site.",
    sections: [
      ["AVAILABLE GEOS", "MyBookie is available only to adults in locations where its sportsbook is lawful. Restricted jurisdictions, age rules and account verification can apply. Confirm the official terms before registering and do not use a VPN to change your apparent location."],
      ["PROMOTIONS & BETTING", "League coverage, live betting and related markets vary by session. Welcome or ongoing promotions are account- and location-specific. Review qualifying wagers, minimum odds, settlement rules and expiry on the official promotions page — this guide does not quote bonus amounts."],
      ["DEPOSITS / WITHDRAWALS", "Available methods, limits and processing times are shown in the cashier and can differ from third-party summaries. Verification or responsible-gaming controls may affect withdrawals. Confirm details in your account before depositing."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff6b00",
      accentDeep: "#c44f00",
      accentSoft: "#ffb066",
      eyebrow: "SPORTSBOOK",
      sloganA: "Your Odds.",
      sloganB: "Your Bookie",
      hook: "$500 bet-back",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "US sports markets", note: "Slots, live casino & more" },
        { label: "Live betting", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "VISA", "MASTERCARD"],
      restricted: "Not available in: Afghanistan, Albania, Algeria, Anguilla, Antigua and Barbuda, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahrain, Bangladesh, Belarus, Belgium, Bhutan, Bonaire, Sint Eustatius and Saba, Bouvet Island, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cayman Islands, Central African Republic, China, Comoros, Congo, Costa Rica, Cuba, Curaçao, Cyprus, Denmark, Djibouti, Dominican Republic, Eritrea, Estonia, Ethiopia, Fiji, Finland, France, French Guiana, French Polynesia, French Southern Territories, Gambia, Gibraltar, Guadeloupe, Guernsey, Greece, Guinea-Bissau, Vatican City, Hungary, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Jersey, Kazakhstan, Kyrgyzstan, Latvia, Lebanon, Liberia, Libya, Maldives, Mali, Malta, Martinique, Mauritania, Mauritius, Mayotte, Montenegro, Montserrat, Morocco, Nauru, Nepal, Netherlands, New Caledonia, Niger, North Korea, Oman, Pakistan, Palestine, Papua New Guinea, Pitcairn, Poland, Réunion, Romania, Russian Federation, Rwanda, Saint Helena, Saint Martin, Saint Pierre and Miquelon, Sao Tome and Principe, Saudi Arabia, Serbia, Seychelles, Sierra Leone, Somalia, South Korea, South Sudan, Spain, Sudan, Svalbard and Jan Mayen, Syria, Tajikistan, Turkey, Turkmenistan, Tuvalu, United Kingdom, Uganda, Ukraine, United Arab Emirates, Uzbekistan, Vanuatu, Vietnam, Wallis and Futuna, Yemen and other restricted jurisdictions."
    })
  },
  everygame: {
    kind: "sports",
    name: "Everygame",
    claim: "https://www.everygame.eu",
    accent: "#ff2d4f",
    logo: "/brands/everygame/logo.png",
    cardHook: "50% up to $200",
    cardBullets: ["Pre-match + live", "Check official terms"],
    summary: "A sportsbook brand with pre-match and live markets where offered. Offers and cashier options should be checked on the operator site.",
    sections: [
      ["AVAILABLE GEOS", "Everygame serves adults only in permitted locations. Restricted countries, identity checks and product access can change. Read the official terms and do not use a VPN to bypass restrictions."],
      ["PROMOTIONS & BETTING", "Sports markets and live betting may be available depending on your session. Promotions, if offered, are not universal. Check official terms for qualifying bets, excluded markets, rollover and expiry rather than assuming a published headline still applies."],
      ["DEPOSITS / WITHDRAWALS", "Cashier options, limits, fees and processing times are account-specific. Complete any requested verification before withdrawing, and confirm the method shown in the official cashier."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ff2d4f",
      accentDeep: "#d1003a",
      accentSoft: "#ff93a4",
      eyebrow: "SPORTSBOOK",
      sloganA: "Every Game.",
      sloganB: "One Platform.",
      hook: "50% up to $200",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Pre-match + live", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "BCH", "LTC", "VISA", "MASTERCARD", "APPLE PAY", "GOOGLE PAY", "BETTEREFT", "CARDPAY", "PAYSAFE", "INTERAC", "NEOSURF", "EZEEWALLET"],
      restricted: "Not available in: Albania, Argentina, Azerbaijan, Bosnia and Herzegovina, Bulgaria, China, Croatia, Czech Republic, Greece, Hungary, Israel, Italy, Kazakhstan, Latvia, Lithuania, North Macedonia, Mauritius, Moldova, Montenegro, Nigeria, Peru, Philippines, Poland, Portugal, Romania, Slovenia, Spain, Thailand, Ukraine and other restricted jurisdictions."
    })
  },
  betwhale: {
    kind: "sports",
    name: "Betwhale",
    claim: "https://betwhale.ag/",
    accent: "#0ea5e9",
    logo: "/brands/betwhale/logo.png",
    cardHook: "200% up to $6,000",
    cardBullets: ["Sportsbook markets", "Check official terms"],
    summary: "Listing placeholder: confirm the operator’s official site, sportsbook markets and terms before you register or deposit.",
    sections: [
      ["AVAILABLE GEOS", "Eligibility depends on local law and the operator’s restricted-country list, which must be read on the official site. Bet only if you meet the applicable age and location rules. Do not bypass geolocation controls."],
      ["PROMOTIONS & BETTING", "Promotions and market availability are not independently verified on this page. Check official bonus terms for wagering, qualifying odds and expiry before opting in."],
      ["DEPOSITS / WITHDRAWALS", "Supported payment methods and processing rules should be confirmed in the official cashier. Match any crypto network exactly and expect possible KYC before withdrawals."]
    ],
    // Renders on the BrandPage template, same layout as "sports-duelbits". See BrandPage.tsx.
    page: brandPage({
      accent: "#ffe566",
      accentDeep: "#e6b800",
      accentSoft: "#fff4a8",
      eyebrow: "SPORTSBOOK",
      sloganA: "Bet Like A.",
      sloganB: "Whale.",
      hook: "200% up to $6,000",
      topPick: false,
      features: [
        { label: "Fast payouts", note: "Get your wins quickly" },
        { label: "Secure & trusted", note: "Play with confidence" },
        { label: "Sportsbook markets", note: "Slots, live casino & more" },
        { label: "Check official terms", note: "Deposit in popular coins" }
      ],
      payments: ["BTC", "ETH", "SOL", "LTC", "VISA", "MASTERCARD", "FLEXEPIN"],
      restricted: "Not available in: Georgia, Israel, Netherlands, Russia, Ukraine, United Kingdom, Louisiana, Michigan, Mississippi, Tennessee, Minnesota and other restricted jurisdictions."
    })
  }
};

unorderedGuideData['bets.io'] = unorderedGuideData.betsio;

const orderedCasinoEntries = casinoGuideOrder
  .filter((key) => unorderedGuideData[key])
  .map((key) => [key, unorderedGuideData[key]] as const);

const leftoverEntries = Object.entries(unorderedGuideData).filter(([key, guide]) => {
  if (casinoGuideOrder.includes(key)) return false;
  if (sportsGuideOrder.includes(key)) return false;
  return guide.kind !== 'sports';
});

const orderedSportsEntries = sportsGuideOrder
  .filter((key) => unorderedGuideData[key])
  .map((key) => [key, unorderedGuideData[key]] as const);

export const guideData: Record<string, any> = Object.fromEntries([
  ...orderedCasinoEntries,
  ...leftoverEntries,
  ...orderedSportsEntries,
]);

