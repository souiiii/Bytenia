import React from 'react';
import './PartnerHero.css';

const PartnerHero = () => {
  return (
    <section className="partner-hero section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="partner-hero-card">
          <h1 className="h1 text-white" style={{ marginBottom: '24px' }}>
            Partner Program
          </h1>
          <p className="subtitle text-gray" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Join the Bytenia Partner Program to deliver powerful infrastructure solutions while adding continuous revenue streams. Expand your product offerings with our stable, scalable cloud services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
