const fs = require('fs');
let code = fs.readFileSync('src/MainSite.tsx', 'utf8');

code = code.replace(
`          <div className="view-all-wrap">
            {visibleCasinos < casinosList.length && (
              <button className="view-all-btn" type="button" onClick={() => setVisibleCasinos(prev => prev + 4)}>LOAD MORE</button>
            )}
          </div>`,
`          <div className="view-all-wrap">
            <button className="view-all-btn" type="button">VIEW ALL</button>
          </div>`
);

code = code.replace(
`          <div className="view-all-wrap">
            {visibleSportsbooks < sportsbooksList.length && (
              <button className="view-all-btn" type="button" onClick={() => setVisibleSportsbooks(prev => prev + 4)}>LOAD MORE</button>
            )}
          </div>`,
`          <div className="view-all-wrap">
            <button className="view-all-btn" type="button">VIEW ALL</button>
          </div>`
);

fs.writeFileSync('src/MainSite.tsx', code);
