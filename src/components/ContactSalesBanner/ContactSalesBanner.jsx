import React from 'react';
import { Link } from 'react-router-dom';
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
            <h2 className="contact-title" style={{color: '#fff', fontSize: '3rem', lineHeight: '1.2'}}>
              <strong style={{fontWeight: 700}}>Not Sure</strong><br/>
              <span style={{fontWeight: 300}}>Which Plan to Choose?</span>
            </h2>
            <p className="contact-desc text-gray">
              <strong style={{fontWeight: 700, color: '#fff'}}>Our team will help you</strong> select the most cost-effective server for your project and growth stage.
            </p>
            <Link to="/connect" className="btn-outline contact-btn">
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesBanner;
