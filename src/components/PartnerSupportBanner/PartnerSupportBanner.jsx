import React from 'react';
import './PartnerSupportBanner.css';

const PartnerSupportBanner = () => {
  return (
    <section className="partner-support-banner section">
      <div className="container">
        <div className="support-banner-card">
          <h2 className="support-title text-white">
            <strong>We Support You</strong><br/>
            <span style={{ fontWeight: 300 }}>Beyond Provisioning</span>
          </h2>
          
          <p className="support-desc text-white" style={{ opacity: 0.9 }}>
            <strong>Whether you're migrating</strong> from cloud, upgrading existing infrastructure, or scaling globally, our team helps:
          </p>

          <div className="support-inline-list">
            <span>Choose the right configuration</span>
            <span className="list-sep">|</span>
            <span>Plan capacity and growth</span>
            <span className="list-sep">|</span>
            <span>Optimize performance and cost</span>
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
