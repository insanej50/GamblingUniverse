const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

code = code.replace(
  /<div className="offer-rank offer-logo logo-light mbit-logo-box"><img src="data:image\/svg\+xml;charset=utf-8.*?alt="mBit logo" \/><\/div>/,
  `<div className="offer-rank offer-logo logo-light mbit-logo-box"><img src="/assets/mbit_logo.jpg" alt="mBit logo" /></div>`
);

fs.writeFileSync('src/MainSite.tsx', code);
