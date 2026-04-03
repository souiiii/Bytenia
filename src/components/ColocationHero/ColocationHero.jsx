import React from 'react';
import './ColocationHero.css';

const ColocationHero = () => {
  return (
    <section className="colocation-hero section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="colocation-hero-card">
          <h1 className="h1 text-white" style={{ marginBottom: '24px' }}>
            Colocation
          </h1>
          <p className="subtitle text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            We provide the datacenter space, cooling, power, and internet connection. You provide the server hardware. Your power house for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColocationHero;
