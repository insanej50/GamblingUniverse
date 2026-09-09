const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

css = css.replace(
  /\.offer-rank\.offer-logo\.mbit-logo-box \{\s*background: #000000;\s*\}/g,
  '.offer-rank.offer-logo.mbit-logo-box {\n  background: #0b0711;\n}'
);

css = css.replace(
  /\.offer-rank\.offer-logo\.bcgame-logo-box \{\s*background: #34b46c; \/\* Or dark grey\? Let's check bcgame \*\/\s*\}/g,
  '.offer-rank.offer-logo.bcgame-logo-box {\n  background: #0b0711;\n}'
);

fs.writeFileSync('src/site.css', css);
