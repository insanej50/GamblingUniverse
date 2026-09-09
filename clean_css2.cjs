const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

const pulseIndex = css.indexOf('@keyframes pulse {');
if (pulseIndex !== -1) {
  css = css.substring(0, pulseIndex);
  fs.writeFileSync('src/site.css', css);
}
