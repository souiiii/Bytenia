import React from 'react';
import palworld1 from '../../assets/palworld1.png';
import './PalworldHero.css';

const PalworldHero = () => {
  return (
    <section className="palworld-hero">
      <div className="palworld-hero-bg"></div>
      <div className="container">
        <div className="palworld-hero-grid">
          
          <div className="palworld-hero-content">
            <div className="palworld-hero-eyebrow">
              <span className="eyebrow-square"></span>
              ARCHITECTURAL SCALE DEPLOYMENT
            </div>
            <h1 className="palworld-hero-title">
              Enterprise<br />
              Infrastructure<br />
              for Palworld
            </h1>
            <p className="palworld-hero-desc">
              Precision-engineered bare metal infrastructure designed for massive world persistence, low-latency node synchronization, and total administrative control.
            </p>
            <div className="palworld-hero-actions">
              <button className="palworld-btn-primary">INITIALIZE DEPLOYMENT</button>
              <button className="palworld-btn-outline">TECHNICAL SPECS</button>
            </div>
          </div>

          <div className="palworld-hero-image-wrapper">
            <img src={palworld1} alt="Palworld Server Gameplay" className="palworld-hero-image" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PalworldHero;
