const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

css = css.replace(
  /\.offer-rank\.offer-logo\.bet365-logo-box img \{\s*width: 160%;\s*height: 260%;\s*max-width: none;\s*object-fit: cover;\s*padding: 0;\s*\}/,
  `.offer-rank.offer-logo.bet365-logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
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
