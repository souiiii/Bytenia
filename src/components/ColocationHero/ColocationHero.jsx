import React from 'react';
import './ColocationHero.css';

const ColocationHero = () => {
  return (
    <section className="colocation-hero section">
      <div className="container">
        <div className="colocation-hero-card">
          <div className="colocation-hero-content">
            <h1 className="hero-title h1 text-white">Colocation</h1>
            <p className="hero-description text-gray">
              We provide the datacenter space, cooling, power, and internet connection.<br />
              You provide the server horsepower for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColocationHero;
