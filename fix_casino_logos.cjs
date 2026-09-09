const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

const bet365Logo = 'https://static.cdnlogo.com/logos/b/40/bet365_800.png';
const bitstarzLogo = 'https://www.bitstarz.com/header/bitstarz-logo.svg';
const mbitLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAoCAMAAABEgm29AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAA5UExURf////u6LP7RN/+5KvzJVv+0M/rJSvfOS//ZSfxRUf/hXP24OfzZXP3fc/sqK/tAQPs6OvxfX/ySfJq5Nm0AAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+oJBAw4J0L2l5YAAAAQY2FOdgAAAGUAAABkAAAABgAAACD1S0shAAACk0lEQVRIx81Wi5KbMAzEL4HIFUj//2NrWZIlE9L2Jkynmlywsb27Wilw0/Q/RYgxpnrN9RrLzeCKCTSAG4EzwEyYAXLDjvlm1UOE+6RDfI3wsmt+t/D7mC/A4/wmve/mtCjgwsGT06YcL2//0RUP2RmW6/TeCgcAP9aWmAUcaYLhDfiVK6FFbeAcUm+DXJLriZXBpFJZsKvnjySHce0p+WqIUwAlGrV1B5grCwwmkfDEmx793rCx4yTfBm5Car+GM47KSrh67PXs1Lsg8LUGHfqqZfjBw2XNVsJ5wkH4bMKtE9p1mMSlqoJ1EUDTxudlO/mo+ay+nrN2LkyPaON+P5grPvHZGdRcQGHG4efhGkHBodV5kYJWY1PSqvRqlFaLliATrSe7XXWyEmkj5cSBU5FRKBRJw7aAdetgilZ5lqaUYzUEpQpMncYvJD8SoprHK7g8nWUz/1S6KtHXn3XQIUPnH4nMFSdWNmfvih1TTUFXzDjTMrz8PHn25JaFusLPmWxcXiz4sxr+YPHkfUEp+SES+oyFxZMrvhGvXOYn39nYcyCxUmMOrliGJ1eGzGzhHfZYQlvp77grl8uYBaT4Ch1eSmhrcOWKErWsHtYrMZ7QQ0GfKHYk13dDL5vL4ZRFKeqQDLRkhQusQh/1fQDgX2RTzn/xv40mBObCbYGaUBGSbdtIfvujIfK4zbZvghd1rvCbFitcxdh3QqPLMdFnpxkeH2ayt890VIJNZvtBY1L9XeXn4PP7E5mEMjmeE88+xd7Z3ueTxthu1AnuRHIT+P6zXQ/2vaJvtID4CXLDou8dG3iVTp+J8thucbzKO0gq2UDIZPreuvEGVw62ghsF2/VAYf3MldbODaj2NKKYcQjlP4pfm+sfOTgXD6gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDktMDRUMTI6NTY6MTIrMDA6MDCuMHSnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTA5LTA0VDEyOjU2OjEyKzAwOjAw323MGwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNi0wOS0wNFQxMjo1NjozOSswMDowMMhavkMAAAAASUVORK5CYII=';
const bcgameLogo = 'https://betting.bc.game/wp-content/themes/bettbcg/images/banner-upd/banner-left.avif';

// Replace bet365
code = code.replace(
  /<div className="offer-rank offer-logo logo-light bet365-logo-box"><img src="[^"]*" alt="bet365 logo" \/><\/div>/,
  `<div className="offer-rank offer-logo logo-light bet365-logo-box"><img src="${bet365Logo}" alt="bet365 logo" /></div>`
);

// Replace BitStarz
code = code.replace(
  /<div className="offer-rank offer-logo logo-light bitstarz-logo-box"><img src="[^"]*" alt="BitStarz logo" \/><\/div>/,
  `<div className="offer-rank offer-logo logo-light bitstarz-logo-box"><img src="${bitstarzLogo}" alt="BitStarz logo" /></div>`
);

// Replace mBit
code = code.replace(
  /<div className="offer-rank offer-logo logo-light mbit-logo-box"><img src="[^"]*" alt="mBit logo" \/><\/div>/,
  `<div className="offer-rank offer-logo logo-light mbit-logo-box"><img src="${mbitLogo}" alt="mBit logo" /></div>`
);

// Replace BC.GAME
code = code.replace(
  /<div className="offer-rank offer-logo logo-light bcgame-logo-box"><img src="[^"]*" alt="BC.Game logo" \/><\/div>/,
  `<div className="offer-rank offer-logo logo-light bcgame-logo-box"><img src="${bcgameLogo}" alt="BC.Game logo" /></div>`
);

fs.writeFileSync('src/MainSite.tsx', code);
