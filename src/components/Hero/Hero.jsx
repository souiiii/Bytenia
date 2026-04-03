import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <h1 className="hero-title h1 text-white">Dedicated Servers</h1>
            <p className="hero-subtitle">BUILT FOR MISSION-CRITICAL WORKLOADS</p>
            <div className="hero-divider"></div>
            <p className="hero-description text-gray">
              Byteania delivers enterprise-grade dedicated servers with predictable performance, full hardware control, and scalable infrastructure. Designed for businesses that require stability, security, and long-term reliability.
            </p>
            <div className="hero-actions">
              <button className="btn-primary hero-btn">Discover Our Servers</button>
              <button className="btn-outline hero-btn-outline">Contact Our Experts</button>
            </div>
          </div>
          <div className="hero-graphic">
            <svg width="340" height="340" viewBox="0 0 100 100" fill="none" stroke="url(#hero-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="hero-logo-graphic">
              <defs>
                <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
              <polyline points="15,30 50,50 85,30" />
              <polyline points="15,50 50,70 85,50" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
