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

          <ul className="support-inline-list">
            <li>Choose the right configuration</li>
            <li>Plan capacity and growth</li>
            <li>Optimize performance and cost</li>
          </ul>

          <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', padding: '12px 32px' }}>
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportBanner;
