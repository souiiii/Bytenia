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
              Enterprise-grade dedicated servers designed for organizations that require full control, predictable performance, and uncompromising reliability. <strong>100% dedicated hardware. Enterprise SLA & high availability. Full data and infrastructure control.</strong>
            </p>
            <div className="hero-actions">
              <button className="btn-outline hero-btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: '#fff'}}>Contact Our Experts</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnterpriseHero;
