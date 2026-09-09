const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');
code = code.replace(
  'className="offer-rank offer-logo logo-light mbit-logo-box"',
  'className="offer-rank offer-logo mbit-logo-box"'
);
fs.writeFileSync('src/MainSite.tsx', code);
