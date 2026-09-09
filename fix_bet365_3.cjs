const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

// The first time I replaced it, it worked. Let's make sure display flex is correctly applied.
// Let's completely clean up .bet365-logo-box definitions

// Let's replace the one around line 305
css = css.replace(
  /\.offer-rank\.offer-logo\.bet365-logo-box\{\n\s*padding:0;\n\s*overflow:hidden;\n\s*background:#027b5b;\n\}\n\.offer-rank\.offer-logo\.bet365-logo-box img\{\n\s*width:100%;\n\s*height:100%;\n\s*max-width:none;\n\s*object-fit:cover;\n\s*object-position:center;\n\}/g,
  `.offer-rank.offer-logo.bet365-logo-box{
  padding:0;
  overflow:hidden;
  background:#087b5b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.offer-rank.offer-logo.bet365-logo-box img{
  width:160%;
  height:260%;
  max-width:none;
  object-fit:cover;
  object-position:center;
}`
);

fs.writeFileSync('src/site.css', css);
