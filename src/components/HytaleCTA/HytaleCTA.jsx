import React from 'react';
import './HytaleCTA.css';

const HytaleCTA = () => {
  return (
    <section className="hytale-cta-section">
      <div className="container">
        <div className="hytale-cta-content">
          <h2 className="hytale-cta-title">Provision Your Infrastructure</h2>
          <button className="hytale-cta-btn">Start Deployment</button>
          <p className="hytale-cta-subtext">
            Avg. Provisioning Time: 14m 22s across all regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HytaleCTA;
