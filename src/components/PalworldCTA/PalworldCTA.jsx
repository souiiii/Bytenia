import React from 'react';
import './PalworldCTA.css';

const PalworldCTA = () => {
  return (
    <section className="palworld-cta-section">
      <div className="container">
        <div className="palworld-cta-content">
          <h2 className="palworld-cta-title">Ready to Deploy?</h2>
          <p className="palworld-cta-subtitle">
            Provision your dedicated instance in under 15 minutes. Select your location and<br />
            operating system to begin the deployment protocol.
          </p>
          <button className="palworld-cta-btn">PROVISION YOUR SERVER</button>
        </div>
      </div>
    </section>
  );
};

export default PalworldCTA;
