import React from 'react';
import './HytaleHero.css';

const HytaleHero = () => {
  return (
    <section className="hytale-hero">
      <div className="hytale-hero-bg"></div>
      <div className="container">
        <div className="hytale-hero-content">
          <span className="hytale-hero-eyebrow">HIGH PERFORMANCE HYTALE SERVERS</span>
          <h1 className="hytale-hero-title">
            INFRASTRUCTURE<br />
            OPTIMIZED FOR HYTALE
          </h1>
          <p className="hytale-hero-desc">
            Unleash raw compute power with dedicated bare-metal resources.<br />
            Total environment control for high-concurrency world states.
          </p>
          <div className="hytale-hero-actions">
            <button className="hytale-btn-primary">GET STARTED</button>
            <button className="hytale-btn-outline">VIEW PLANS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HytaleHero;
