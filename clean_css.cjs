const fs = require('fs');
let css = fs.readFileSync('src/site.css', 'utf8');

css = css.replace(/@keyframes pulse \{[\s\S]*?\}\n/g, '');
css = css.replace(/@keyframes arcadeSnap \{[\s\S]*?\}\n/g, '');
css = css.replace(/\.arcade-loading-box \{[\s\S]*?\}\n/g, '');
css = css.replace(/\.arcade-loaded-snap \{[\s\S]*?\}\n/g, '');

fs.writeFileSync('src/site.css', css);
