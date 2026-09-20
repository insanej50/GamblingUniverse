export type ExtraOperator = {
  name: string;
  url: string;
  key?: string;
};

export const casinoOperators: ExtraOperator[] = [
  { key: 'sports-duelbits', name: 'Duelbits', url: 'https://duelbits.com/en/sportsbook' },
  { key: 'spinbetter', name: 'SpinBetter', url: 'https://spinbetter.com' },
  { key: 'hyperlucky', name: 'Hyper Lucky', url: 'https://lobby.hyperlucky.com/en/' },
  { key: 'mbit', name: 'mBit', url: 'https://www.mbitcasino.io' },
  { key: 'jackbit', name: 'Jackbit', url: 'https://jackbit.co' },
  { key: 'wildio', name: 'Wild.io', url: 'https://wild.io' },
  { key: 'gamdom', name: 'Gamdom', url: 'https://gamdom.com' },
  { key: 'vave', name: 'Vave', url: 'https://vave.com' },
  { key: 'rakebit', name: 'Rakebit', url: 'https://rakebit.com' },
  { key: 'cloudbet', name: 'Cloudbet', url: 'https://www.cloudbet.com' },
  { key: 'stake', name: 'Stake', url: 'https://stake.com' },
  { key: 'bet365', name: 'Bet365', url: 'https://casino.bet365.com' },
  { key: 'bcgame', name: 'BC.Game', url: 'https://bc.game' },
  { key: 'betfury', name: 'BetFury', url: 'https://betfury.com' },
  { key: 'coinsgame', name: 'Coins.Game', url: 'https://coins.game' },
  { key: 'betsio', name: 'Bets.io', url: 'https://www.bets.io' },
  { key: 'bet25', name: 'Bet25', url: 'https://bet25.com' },
  { key: 'bitzio', name: 'Bitz.io', url: 'https://bitz.io/' },
  { key: 'rxcasino', name: 'RX Casino', url: 'https://rx.casino/' },
  { key: 'goldenplay', name: 'GoldenPlay', url: 'https://goldenplay.com/' },
  { key: 'cocobet', name: 'Cocobet', url: 'https://kokobet.com/' },
  { key: 'wildroll', name: 'WildRoll', url: 'https://wildroll.com/' },
  { key: 'betpanda', name: 'Betpanda', url: 'https://betpanda.io' },
];

export const casinoGuideOrder = casinoOperators.map((operator) => operator.key);

export const extraCasinos: ExtraOperator[] = casinoOperators.slice(4);

export const sportsOperators: ExtraOperator[] = [
  { key: 'bitstarz', name: 'Bitstarz', url: 'https://www.bitstarz.com' },
  { key: 'vavada', name: 'Vavada', url: 'https://vavada.com' },
  { key: 'megapari', name: 'MegaPari', url: 'https://megapari.com' },
  { key: 'sports-thunderpick', name: 'Thunderpick', url: 'https://thunderpick.io/' },
  { key: 'epicbet', name: 'EpicBet', url: 'https://epicbet.com' },
  { key: 'cybet', name: 'Cybet', url: 'https://cybet.com' },
  { key: 'rainbet', name: 'Rainbet', url: 'https://rainbet.com' },
  { key: 'citobet', name: 'Citobet', url: 'https://www.citobet.com/sportsbook' },
  { key: 'ggbet', name: 'GG.Bet', url: 'https://gg.bet' },
  { key: 'n1bet', name: 'N1Bet', url: 'https://n1bet.com' },
  { key: 'rollxo', name: 'RollXO', url: 'https://www.rollxo.com/' },
  { key: 'mybookie', name: 'MyBookie', url: 'https://www.mybookie.ag' },
  { key: 'everygame', name: 'Everygame', url: 'https://www.everygame.eu' },
  { key: 'betwhale', name: 'Betwhale', url: 'https://betwhale.ag/' },
];

export const sportsGuideOrder = sportsOperators.map((operator) => operator.key);

export const extraSportsbooks: ExtraOperator[] = sportsOperators.slice(4);

export const operatorInitials = (name: string): string => {
  const parts = name.replace(/[.]/g, ' ').split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};
