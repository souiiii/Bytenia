import React from 'react';
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
            <h2 className="h2 text-white support-title">We Support You<br/>Beyond Provisioning</h2>
            <p className="support-desc text-gray">
              Our enterprise support engineers are available 24/7 to assist with complex network configurations, 
              hardware optimizations, and specialized operational needs.
            </p>
            <button className="btn-outline support-btn" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
