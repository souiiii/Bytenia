import React from 'react';
import './CompanyHero.css';

const CompanyHero = () => {
  return (
    <section className="company-hero">
      <div className="container">
        <div className="company-hero-card">
          <h1 className="h1 text-white">
            Engineered by<br/>Infrastructure Experts.
          </h1>
          <p className="subtitle text-gray" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6', fontWeight: 300 }}>
            High-performance servers strategically located around the world to serve your business needs with speed, reliability, and flexibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
