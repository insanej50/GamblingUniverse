import { useState, useEffect } from 'react';
import { MainSite } from './MainSite';

// Pixel Art Sprite Helper
// 0: transparent, 1: white, 2: red, 3: yellow, 4: blue
const PixelSprite = ({ data, scale = 4, flip = false }: { data: string[], scale?: number, flip?: boolean }) => {
  const colors: Record<string, string> = {
    '0': 'transparent',
    '1': '#ffffff',
    '2': '#ff0000',
    '3': '#ffff00',
    '4': '#00ffff',
    '5': '#00ff00',
    '6': '#8b0000',
    '7': '#a855f7',
    '8': '#09090b'
  };

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${data[0].length}, ${scale}px)`,
        gridTemplateRows: `repeat(${data.length}, ${scale}px)`,
        transform: flip ? 'scaleX(-1)' : 'none'
      }}
    >
      {data.map((row, y) => 
        row.split('').map((pixel, x) => (
          <div key={`${x}-${y}`} style={{ backgroundColor: colors[pixel] }} />
        ))
      )}
    </div>
  );
};

// Character Sprites (12x12 grid)
const spritePlayer1 = [
  "0002222000",
  "0022222200",
  "0224224220",
  "0222222220",
  "0022222200",
  "0012222100",
  "0111221110",
  "0111111110",
  "0002222000",
  "0022002200",
  "0222002220"
];

const spritePlayer2 = [
  "0005555000",
  "0055555500",
  "0558558550",
  "0555555550",
  "0055555500",
  "0075555700",
  "0777557770",
  "0777777770",
  "0005555000",
  "0055005500",
  "0555005550"
];

const spriteAnomaly = [
  "00000777700000",
  "00077444477000",
  "00744111144700",
  "07411888811470",
  "07418888881470",
  "74188000088147",
  "74188000088147",
  "74188000088147",
  "74188000088147",
  "07418888881470",
  "07411888811470",
  "00744111144700",
  "00077444477000",
  "00000777700000"
];

const spriteShip = [
  "00000000100000",
  "00000001100000",
  "00000011110000",
  "02211111111000",
  "23311114441111",
  "02211111111000",
  "00000011110000",
  "00000001100000",
  "00000000100000"
];

const spriteExplosion = [
  "00200000200",
  "02320002320",
  "23132023132",
  "02313331320",
  "00231113200",
  "02311111320",
  "00231113200",
  "02313331320",
  "23132023132",
  "02320002320",
  "00200000200"
];

const spriteStar = [
  "0003000",
  "0033300",
  "0331330",
  "3311133",
  "0331330",
  "0033300",
  "0003000",
];

const Spacecraft = ({ delay, top, scale, reverse = false, speed = 25, onHit }: { delay: number, top: string, scale: number, reverse?: boolean, speed?: number, onHit: () => void }) => {
  const [shipState, setShipState] = useState<'flying' | 'exploding' | 'hidden'>('flying');

  const handleShipClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shipState === 'flying') {
      onHit();
      setShipState('exploding');
      setTimeout(() => {
        setShipState('hidden');
        setTimeout(() => {
          setShipState('flying');
        }, 3000 + Math.random() * 2000); // reappear after 3-5 seconds
      }, 500); // 500ms explosion duration
    }
  };

  return (
    <div 
      className={`absolute left-0 z-0 pointer-events-auto cursor-crosshair ${reverse ? 'animate-fly-across-reverse' : 'animate-fly-across'}`}
      onClick={handleShipClick}
      style={{ 
        top,
        animationPlayState: shipState === 'exploding' ? 'paused' : 'running',
        opacity: shipState === 'hidden' ? 0 : 0.9,
        transition: 'opacity 0.2s ease-in-out',
        animationDelay: `${delay}s`,
        animationDuration: `${speed}s`,
      }}
    >
      {shipState === 'exploding' ? (
        <PixelSprite data={spriteExplosion} scale={scale + 1} />
      ) : (
        <PixelSprite data={spriteShip} scale={scale} flip={reverse} />
      )}
    </div>
  );
};

const SpaceBackground = ({ onHit, onMiss }: { onHit: () => void, onMiss: () => void }) => {
  const [starsSm, setStarsSm] = useState('');
  const [starsMd, setStarsMd] = useState('');
  const [starsLg, setStarsLg] = useState('');
  const [milkyWay, setMilkyWay] = useState('');
  
  const [anomalyClicks, setAnomalyClicks] = useState(0);
  const [anomalyFlash, setAnomalyFlash] = useState(false);

  const handleAnomalyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newClicks = anomalyClicks + 1;
    if (newClicks >= 4) {
      setAnomalyFlash(true);
      setAnomalyClicks(0);
      setTimeout(() => {
        setAnomalyFlash(false);
      }, 1000);
    } else {
      setAnomalyClicks(newClicks);
    }
  };

  useEffect(() => {
    const generate = (count: number, color: string) => {
      let shadows = [];
      for (let i = 0; i < count; i++) {
        shadows.push(`${Math.floor(Math.random() * 100)}vw ${Math.floor(Math.random() * 100)}vh ${color}`);
      }
      return shadows.join(', ');
    };
    
    const generateMilkyWay = () => {
       let shadows = [];
       for (let i = 0; i < 400; i++) {
         const x = Math.random() * 100;
         const spread = (Math.random() - 0.5) * 50;
         let y = x + spread;
         if (y < 0) y += 100;
         if (y > 100) y -= 100;
         shadows.push(`${x}vw ${y}vh rgba(255, 255, 255, ${Math.random() * 0.3})`);
       }
       return shadows.join(', ');
    };

    setStarsSm(generate(200, '#ffffff'));
    setStarsMd(generate(80, '#aaddff'));
    setStarsLg(generate(30, '#ffcc00'));
    setMilkyWay(generateMilkyWay());
  }, []);

  return (
    <>
      {/* Full screen supernova flash effect */}
      <div 
        className={`fixed inset-0 bg-white z-[100] pointer-events-none transition-opacity duration-1000 ${
          anomalyFlash ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
        <div className="absolute inset-0 pointer-events-auto cursor-crosshair" onClick={onMiss} />

        {starsSm && <div className="absolute top-0 left-0 w-[1px] h-[1px] rounded-none animate-blink-slow pointer-events-none" style={{ boxShadow: starsSm }} />}
        {starsMd && <div className="absolute top-0 left-0 w-[2px] h-[2px] rounded-none animate-blink pointer-events-none" style={{ boxShadow: starsMd }} />}
        {starsLg && <div className="absolute top-0 left-0 w-[3px] h-[3px] rounded-none pointer-events-none" style={{ boxShadow: starsLg }} />}
        {milkyWay && <div className="absolute top-0 left-0 w-[2px] h-[2px] rounded-none pointer-events-none" style={{ boxShadow: milkyWay }} />}
        
        <Spacecraft delay={0} top="20%" scale={4} speed={25} onHit={onHit} />
        <Spacecraft delay={-8} top="65%" scale={3} speed={30} reverse onHit={onHit} />
        <Spacecraft delay={-15} top="35%" scale={2} speed={35} onHit={onHit} />
        <Spacecraft delay={-5} top="15%" scale={5} speed={20} reverse onHit={onHit} />
        <Spacecraft delay={-22} top="80%" scale={3} speed={28} onHit={onHit} />
        
        {/* Interactive Anomaly (Black Hole) */}
        <div 
          className="absolute bottom-[20%] left-[10%] opacity-90 pointer-events-auto cursor-pointer"
          onClick={handleAnomalyClick}
          style={{
            transform: `scale(${1 + anomalyClicks * 0.5})`,
            transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.5s',
            filter: `hue-rotate(${anomalyClicks * 45}deg) brightness(${1 + anomalyClicks * 0.2})`
          }}
        >
          <div className="animate-spin-slow">
            <PixelSprite data={spriteAnomaly} scale={3} />
          </div>
        </div>

        <div className="absolute top-[40%] left-[20%] opacity-90 animate-blink-medium">
          <PixelSprite data={spriteStar} scale={2} />
        </div>
        <div className="absolute bottom-[10%] right-[30%] opacity-70 animate-blink">
          <PixelSprite data={spriteStar} scale={2} />
        </div>
      </div>
    </>
  );
};

type GameState = 'ATTRACT' | 'SELECT' | 'LOADING' | 'SITE';
type CharacterIndex = 0 | 1;

export default function App() {
  const [gameState, setGameState] = useState<GameState>('ATTRACT');
  const [selectedChar, setSelectedChar] = useState<CharacterIndex>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('arcade_high_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const handleHit = () => {
    setCurrentScore(prev => {
      const next = prev + 1;
      if (next > highScore) {
        setHighScore(next);
        localStorage.setItem('arcade_high_score', next.toString());
      }
      return next;
    });
  };

  const handleMiss = () => {
    setCurrentScore(0);
  };

  // Handle Keyboard Interactions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'ATTRACT') {
        if (e.code === 'Enter' || e.code === 'Space') {
          handleInsertCoin();
        }
      } else if (gameState === 'SELECT') {
        if (e.code === 'ArrowLeft') {
          setSelectedChar(0);
        } else if (e.code === 'ArrowRight') {
          setSelectedChar(1);
        } else if (e.code === 'Enter' || e.code === 'Space') {
          handleSelectPlayer();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  // Loading animation logic
  useEffect(() => {
    if (gameState === 'LOADING') {
      const interval = setInterval(() => {
        setLoadingDots(prev => prev.length >= 5 ? '' : prev + '.');
      }, 500);
      const timeout = setTimeout(() => {
        setGameState('SITE');
      }, 2500);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [gameState]);

  const handleInsertCoin = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState('SELECT');
      setIsTransitioning(false);
    }, 500);
  };

  const handleSelectPlayer = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState('LOADING');
      setIsTransitioning(false);
    }, 500);
  };

  if (gameState === 'SITE') {
    return <MainSite defaultView={selectedChar === 0 ? 'casinos' : 'sportsbooks'} />;
  }

  return (
    <div className={`relative min-h-screen overflow-hidden flex flex-col font-pixel crt bg-arcade-black transition-colors duration-75`}>
      <SpaceBackground onHit={handleHit} onMiss={handleMiss} />
      
      {/* Top Status Bar (Score & Credits) */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-arcade-red z-10 select-none px-4">
        <div className="flex flex-col">
          <div className="animate-blink-slow">1UP</div>
          <div>{currentScore.toString().padStart(4, '0')}</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-arcade-yellow">HIGH SCORE</div>
          <div>{highScore.toString().padStart(4, '0')}</div>
        </div>
        <div className="flex flex-col text-right">
          <div>CREDIT 0</div>
          {gameState === 'ATTRACT' && <div className="animate-blink">INSERT CRYPTO</div>}
        </div>
      </div>

      <div className={`flex-1 flex flex-col items-center justify-center z-10 transition-opacity duration-500 pointer-events-none ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {gameState === 'ATTRACT' && (
          <div className="text-center">
            <h1 className="text-[10rem] leading-none mb-12 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-500" style={{ textShadow: '6px 6px 0px #ff0000' }}>
              8BITBET
            </h1>
            <div 
              className="text-3xl text-white cursor-pointer animate-blink tracking-widest hover:text-arcade-yellow transition-colors pointer-events-auto"
              onClick={handleInsertCoin}
            >
              INSERT CRYPTO TO PLAY
            </div>
          </div>
        )}

        {gameState === 'SELECT' && (
          <div className="text-center w-full max-w-4xl px-4">
            <div className="text-3xl text-arcade-yellow mb-16 animate-blink tracking-widest">
              CHOOSE YOUR PLAYER
            </div>
            
            <div className="flex flex-row justify-center items-end gap-16 md:gap-32 mb-16 pointer-events-auto">
              {/* Player 1: Casino / High Roller */}
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${selectedChar === 0 ? 'scale-125' : 'scale-100 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
                onClick={() => setSelectedChar(0)}
              >
                <div className={`text-xl mb-4 ${selectedChar === 0 ? 'text-arcade-red animate-blink' : 'text-transparent'}`}>P1</div>
                <PixelSprite data={spritePlayer1} scale={selectedChar === 0 ? 8 : 6} />
                <div className="mt-8 text-2xl text-white">THE HIGH ROLLER</div>
                <div className="mt-2 text-sm text-arcade-red tracking-widest">CASINO EXPERT</div>
              </div>

              {/* Player 2: Sports / Bookie */}
              <div 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${selectedChar === 1 ? 'scale-125' : 'scale-100 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
                onClick={() => setSelectedChar(1)}
              >
                <div className={`text-xl mb-4 ${selectedChar === 1 ? 'text-arcade-blue animate-blink' : 'text-transparent'}`}>P2</div>
                <PixelSprite data={spritePlayer2} scale={selectedChar === 1 ? 8 : 6} />
                <div className="mt-8 text-2xl text-white">THE BOOKIE</div>
                <div className="mt-2 text-sm text-arcade-blue tracking-widest">SPORTS SPECIALIST</div>
              </div>
            </div>

            <div 
              className="mt-8 text-2xl text-white cursor-pointer animate-blink hover:text-arcade-green transition-colors pointer-events-auto"
              onClick={handleSelectPlayer}
            >
              CONFIRM SELECTION
            </div>
          </div>
        )}

        {gameState === 'LOADING' && (
          <div className="text-center">
            <div className="text-4xl text-white tracking-widest">
              LOADING{loadingDots}
            </div>
            <div className="mt-8 text-xl text-arcade-yellow animate-blink">
              PREPARING {selectedChar === 0 ? 'CASINO' : 'SPORTSBOOK'} DATA...
            </div>
          </div>
        )}
      </div>
      
      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20" />
    </div>
  );
}
