import React from 'react';
import './HytaleAdvantage.css';

const HytaleAdvantage = () => {
  return (
    <section className="hytale-advantage-section">
      <div className="container">
        <div className="hytale-advantage-content">
          <span className="hytale-advantage-eyebrow">THE BARE-METAL ADVANTAGE</span>
          <p className="hytale-advantage-text">
            Hytale’s dynamic world-states and complex physics<br />
            require more than shared cloud hosting. We provide<br />
            the persistent hardware affinity needed for massive<br />
            player counts and stable 60Hz tick rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HytaleAdvantage;
