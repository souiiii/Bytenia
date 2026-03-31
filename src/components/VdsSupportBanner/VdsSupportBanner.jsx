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
            <h2 className="h2 text-white vds-contact-title">
              <span style={{fontWeight: 800}}>Need Help</span><br/>
              <span style={{fontWeight: 300}}>Choosing the Right Plan?</span>
            </h2>
            <p className="vds-contact-desc text-gray">
              Our support engineers can help you find exactly what you need based on your tech-stack and project needs.
            </p>
            <button className="btn-outline vds-contact-btn" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
              Get In Touch Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VdsSupportBanner;
