import React from 'react';
import { Link } from 'react-router-dom';
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

          <Link to="/connect" className="btn-outline partner-btn">
            Contact Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportBanner;
