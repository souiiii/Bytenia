import React from 'react';
import './VdsSupportBanner.css';

const VdsSupportBanner = () => {
  return (
    <section className="vds-contact-banner section">
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="vds-contact-card">
          <div className="vds-contact-overlay"></div>
          <img 
            src="/contact_sales_bg.png" 
            alt="Virtual Dedicated Support Team" 
            className="vds-contact-bg-img" 
          />

          <div className="vds-contact-content text-center">
            <h2 className="vds-contact-title" style={{color: '#fff', fontSize: '3rem', lineHeight: '1.2'}}>
              <strong style={{fontWeight: 800}}>Need Help</strong><br/>
              <span style={{fontWeight: 300}}>Choosing the Right Plan?</span>
            </h2>
            <p className="vds-contact-desc text-gray">
              <strong style={{fontWeight: 800, color: '#fff'}}>Our experts can help you</strong> select the best configuration based on your workload and growth plans.
            </p>
            <button className="btn-outline vds-contact-btn" style={{borderColor: 'rgba(255,255,255,0.6)', color: '#fff', padding: '12px 32px', borderRadius: '50px', fontSize: '0.9rem', backgroundColor: 'transparent'}}>
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VdsSupportBanner;
