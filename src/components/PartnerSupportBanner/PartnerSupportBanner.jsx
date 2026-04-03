import React from 'react';
import './PartnerSupportBanner.css';

const PartnerSupportBanner = () => {
  return (
    <section className="partner-support-banner section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="support-banner-card">
          <h2 className="support-title text-white">
            <strong>We Support You</strong><br/>
            <span style={{ fontWeight: 300, fontSize: '1.75rem' }}>Beyond Provisioning</span>
          </h2>
          
          <p className="support-desc text-white" style={{ opacity: 0.9 }}>
            Whether you're deploying custom solutions or standard servers, we have top-tier infrastructure architects ready to handle it natively.
          </p>

          <div className="support-inline-list">
            <span>Consulting Agencies</span>
            <span>Community and growth</span>
            <span>System performance reviews</span>
          </div>

          <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', padding: '12px 32px' }}>
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportBanner;
