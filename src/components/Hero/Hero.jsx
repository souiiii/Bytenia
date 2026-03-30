import React from 'react';
import { Layers } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <h1 className="hero-title h1 text-white">Dedicated Servers</h1>
            <p className="hero-subtitle">HIGH-PERFORMANCE BARE METAL CLOUD</p>
            <p className="hero-description text-gray">
              Supercharge your business with premium bare-metal servers. 
              Maximize speed, reliability, and control for mission-critical workloads.
            </p>
            <div className="hero-actions">
              <button className="btn-primary hero-btn">View Servers</button>
              <button className="btn-outline hero-btn-outline">Host with us</button>
            </div>
          </div>
          <div className="hero-graphic">
            <Layers size={140} strokeWidth={0.5} color="rgba(255,255,255,0.4)" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
