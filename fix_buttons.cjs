const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

code = code.replace(/\{visibleCasinos < casinosList\.length && \([\s\S]*?\}\)/g, '');
code = code.replace(/\{visibleSportsbooks < sportsbooksList\.length && \([\s\S]*?\}\)/g, '');

fs.writeFileSync('src/MainSite.tsx', code);
