import React from 'react';
import { Link } from 'react-router-dom';
import './SupportBanner.css';

const SupportBanner = () => {
  return (
    <section className="support-banner section">
      <div className="container">
        <div className="support-card">
          <div className="support-overlay"></div>
          <img 
            src="/support_banner_bg.png" 
            alt="Enterprise IT Support" 
            className="support-bg-img" 
          />

          <div className="support-content text-center">
            <h2 className="support-title">
              <strong>We Support You</strong><br/>
              <span>Beyond Provisioning</span>
            </h2>
            <p className="support-desc">
              <strong>Whether you're migrating</strong> from cloud, upgrading existing infrastructure, or scaling globally, our team helps:
            </p>

            <div className="support-features">
              <strong>Choose the right configuration</strong> <span className="feat-div">|</span> 
              <strong>Plan capacity and growth</strong> <span className="feat-div">|</span> 
              <strong>Optimize performance and cost</strong>
            </div>

            <Link to="/connect" className="btn-outline support-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
