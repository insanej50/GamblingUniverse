const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

css = css.replace(
  /\.bet365-logo-box img,\s*\.bitstarz-logo-box img,\s*\.mbit-logo-box img,\s*\.bcgame-logo-box img\s*\{\s*object-fit: contain;\s*padding: 12px;\s*\}/,
  `.bitstarz-logo-box img,
.mbit-logo-box img,
.bcgame-logo-box img {
  object-fit: contain;
  padding: 12px;
}

.offer-rank.offer-logo.bet365-logo-box img {
  width: 160%;
  height: 260%;
  max-width: none;
  object-fit: cover;
  padding: 0;
}`
);

fs.writeFileSync('src/site.css', css);
