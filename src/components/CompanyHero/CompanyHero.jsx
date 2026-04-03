import React from 'react';
import './CompanyHero.css';

const CompanyHero = () => {
  return (
    <section className="company-hero">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="company-hero-card">
          <h1 className="h1 text-white">
            Engineered by<br/>Infrastructure Experts.
          </h1>
          <p className="subtitle text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            High-performance network powered by the best server hardware with unmatched stability and routing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
