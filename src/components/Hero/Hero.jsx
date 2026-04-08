import React from 'react';
import { Link } from 'react-router-dom';
import ShapeGraphic from '../../assets/shape.svg';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <h1 className="hero-title h1 text-white">Dedicated Servers</h1>
            <p className="hero-subtitle">BUILT FOR MISSION-CRITICAL WORKLOADS</p>
            <div className="hero-divider"></div>
            <p className="hero-description text-gray">
              Tempest delivers enterprise-grade dedicated servers with predictable performance, full hardware control, and scalable infrastructure. Designed for businesses that require stability, security, and long-term reliability.
            </p>
            <div className="hero-actions">
              <Link to="/enterprise" className="btn-primary hero-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Discover Our Servers</Link>
              <Link to="/connect" className="btn-outline hero-btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Contact Our Experts</Link>
            </div>
          </div>
          <div className="hero-graphic">
            <img src={ShapeGraphic} alt="Tempest Shape" className="hero-logo-graphic" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
