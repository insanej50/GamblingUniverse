const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

// just in case they have logo-light, let's remove it for the top 4
code = code.replace(/offer-logo logo-light bet365-logo-box/g, 'offer-logo bet365-logo-box');
code = code.replace(/offer-logo logo-light bitstarz-logo-box/g, 'offer-logo bitstarz-logo-box');
code = code.replace(/offer-logo logo-light mbit-logo-box/g, 'offer-logo mbit-logo-box');
code = code.replace(/offer-logo mbit-logo-box/g, 'offer-logo mbit-logo-box'); // already removed
code = code.replace(/offer-logo logo-light bcgame-logo-box/g, 'offer-logo bcgame-logo-box');

fs.writeFileSync('src/MainSite.tsx', code);
