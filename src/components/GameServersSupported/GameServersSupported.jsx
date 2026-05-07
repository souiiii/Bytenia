import React from 'react';
import './GameServersSupported.css';

import gamesBg from '../../assets/games.png';

// Import all 12 game logo frames
import frame1 from '../../assets/Frame 514153.png';
import frame2 from '../../assets/Frame 514153-1.png';
import frame3 from '../../assets/Frame 514153-2.png';
import frame4 from '../../assets/Frame 514154.png';
import frame5 from '../../assets/Frame 514154-1.png';
import frame6 from '../../assets/Frame 514154-2.png';
import frame7 from '../../assets/Frame 514155.png';
import frame8 from '../../assets/Frame 514155-1.png';
import frame9 from '../../assets/Frame 514155-2.png';
import frame10 from '../../assets/Frame 514156.png';
import frame11 from '../../assets/Frame 514156-1.png';
import frame12 from '../../assets/Frame 514156-2.png';

const GameServersSupported = () => {
  const logos = [
    frame1, frame2, frame3, frame4,
    frame5, frame6, frame7, frame8,
    frame9, frame10, frame11, frame12
  ];

  return (
    <section className="game-servers-supported-section">
      <div className="container">
        <div 
          className="game-servers-supported-card"
          style={{ backgroundImage: `url(${gamesBg})` }}
        >
          <h2 className="game-servers-supported-title">
            Games Supported on <strong>Tempest</strong>
          </h2>
          
          <div className="game-servers-supported-grid">
            {logos.map((logo, index) => (
              <div key={index} className="game-servers-logo-item">
                <img src={logo} alt={`Supported Game ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <p className="game-servers-supported-footer">plus many more...</p>
        </div>
      </div>
    </section>
  );
};

export default GameServersSupported;
