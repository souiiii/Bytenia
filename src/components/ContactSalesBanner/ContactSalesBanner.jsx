import React from 'react';
import './ContactSalesBanner.css';

const ContactSalesBanner = () => {
  return (
    <section className="contact-banner section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-overlay"></div>
          <img 
            src="/contact_sales_bg.png" 
            alt="Enterprise IT Sales Team" 
            className="contact-bg-img" 
          />

          <div className="contact-content text-center">
            <h2 className="h2 text-white contact-title">Not Sure<br/>Which Plan to Choose?</h2>
            <p className="contact-desc text-gray">
              Our team of engineers can help you find exactly what you need based on technical requirements and budget limit.
            </p>
            <button className="btn-outline contact-btn" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesBanner;
