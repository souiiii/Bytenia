import React from 'react';
import './MinecraftCTA.css';

const MinecraftCTA = () => {
  return (
    <section className="mc-cta section">
      <div className="container">
        <div className="mc-cta-content">
          <div className="mc-cta-text">
            <h2 className="mc-cta-title">Ready to<br/>Initialize?</h2>
            <p className="mc-cta-subtitle">Deploy your instance in less than 60 seconds.</p>
          </div>
          <div className="mc-cta-action">
            <button className="mc-cta-btn">Deploy Server</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftCTA;
