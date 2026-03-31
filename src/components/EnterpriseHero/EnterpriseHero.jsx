import React from 'react';
import './EnterpriseHero.css';

const EnterpriseHero = () => {
  return (
    <header className="ent-hero section">
      <div className="container">
        <div className="ent-hero-card">
          <div className="ent-hero-content">
            <h1 className="hero-title h1 text-white">Enterprise Dedicated Servers</h1>
            <p className="hero-description text-gray">
              Uncompromised performance, full control, and isolated resources tailored for mission-critical enterprise workloads.
            </p>
            <div className="hero-actions">
              <button className="btn-outline hero-btn-outline" style={{borderColor: 'rgba(255,255,255,0.2)'}}>Talk to Sales</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnterpriseHero;
