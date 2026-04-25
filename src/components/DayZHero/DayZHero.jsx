import React from 'react';
import './DayZHero.css';

const DayZHero = () => {
  return (
    <section className="dayz-hero">
      <div className="dayz-hero-bg"></div>
      <div className="container">
        <div className="dayz-hero-content">
          <div className="dayz-hero-badge">HIGH PERFORMANCE DAYZ SERVERS</div>
          <h1 className="dayz-hero-title">
            HIGH PERFORMANCE<br />
            DEDICATED SERVERS<br />
            FOR DAYZ
          </h1>
          <p className="dayz-hero-desc">
            Run your DayZ servers on high-performance dedicated infrastructure with full control, low latency, and reliable performance.
          </p>
          <div className="dayz-hero-actions">
            <button className="dayz-btn-primary">EXPLORE PLANS</button>
            <button className="dayz-btn-outline">DEPLOY SERVER</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayZHero;
