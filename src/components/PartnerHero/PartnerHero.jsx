import React from 'react';
import './PartnerHero.css';

const PartnerHero = () => {
  return (
    <section className="partner-hero section">
      <div className="container">
        <div className="partner-hero-card">
          <h1 className="h1 text-white" style={{ marginBottom: '24px' }}>
            Partner Program
          </h1>
          <p className="subtitle text-gray" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6', fontWeight: 300 }}>
            Byteania's Partner Program is designed for infrastructure providers, resellers, and strategic operators looking to leverage predictable margins, enterprise-grade hardware, and global deployment capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
