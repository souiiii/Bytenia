import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessApplicationsCTA.css';
import shapeSvg from '../../assets/shape.svg';

const BusinessApplicationsCTA = () => {
  return (
    <section className="biz-cta-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="biz-cta-banner">
          <div className="biz-cta-left">
            <img src={shapeSvg} alt="Cloud Architecture Shape" className="biz-cta-shape" />
          </div>
          <div className="biz-cta-right">
            <h2>
              POWER YOUR BUSINESS APPLICATIONS<br />WITH CONFIDENCE
            </h2>
            <p>Ready to deploy? Our infrastructure experts are standing by to help you design the perfect environment for your workloads.</p>
            <Link to="/connect" className="biz-btn-cta">Contact Our Experts</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsCTA;
