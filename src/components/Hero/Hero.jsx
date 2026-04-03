import React from 'react';
import ShapeGraphic from '../../assets/shape.svg';
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
            <img src={ShapeGraphic} alt="Byteania Shape" className="hero-logo-graphic" style={{ width: '300px', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
