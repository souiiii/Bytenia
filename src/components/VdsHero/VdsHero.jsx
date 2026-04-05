import React from 'react';
import './VdsHero.css';

const VdsHero = () => {
  return (
    <header className="vds-hero section">
      <div className="container">
        <div className="vds-hero-card">
          <div className="vds-hero-content">
            <h1 className="hero-title h1 text-white">Virtual Dedicated Servers</h1>
            <p className="hero-description text-gray">
              Virtual servers with dedicated CPU and RAM, designed for businesses that need reliable performance, scalability, and versatility.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VdsHero;
