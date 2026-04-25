import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import './FiveMHero.css';

const FiveMHero = () => {
  return (
    <section className="fivem-hero">
      <div className="fivem-hero-bg"></div>
      <div className="container">
        <div className="fivem-hero-content">
          <div className="fivem-badge">
            STATUS: HIGH_CLOCK_READY
          </div>
          <h1 className="fivem-title">
            BUILT FOR FIVEM<br />
            PERFORMANCE
          </h1>
          <p className="fivem-description">
            High-performance infrastructure designed to run demanding FiveM servers with ease.
          </p>
          <div className="fivem-actions">
            <button className="fivem-btn-primary">
              PROVISION ENVIRONMENT <ArrowRight size={18} weight="bold" />
            </button>
            <div className="fivem-stat-box">
              <span className="stat-label">LATENCY_CORE:</span>
              <span className="stat-value">0.8MS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveMHero;
