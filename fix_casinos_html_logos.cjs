const fs = require('fs');

const createSvg = (text, bg, fg) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="100%" height="100%" style="background-color:${bg};">
    <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="monospace, sans-serif" font-weight="900" font-size="42" letter-spacing="2" fill="${fg}">${text}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};

let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

code = code.replace(
  /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/d\/d4\/Bet365_Logo\.svg"/g,
  `"${createSvg('BET365', '#027b5b', '#ffffff')}"`
);

code = code.replace(
  /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/1\/1a\/BitStarz_Logo\.svg"/g,
  `"${createSvg('BITSTARZ', '#1a1a24', '#ffffff')}"`
);

code = code.replace(
  /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/2\/23\/MBit_Casino_logo\.svg"/g,
  `"${createSvg('MBIT', '#000000', '#ffffff')}"`
);

code = code.replace(
  /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/0\/07\/BC\.Game_logo\.svg"/g,
  `"${createSvg('BC.GAME', '#34b46c', '#ffffff')}"`
);

fs.writeFileSync('src/MainSite.tsx', code);
