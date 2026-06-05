import React from 'react';
import { Link } from 'react-router-dom';
import './WebAndEmailCTA.css';
import shapeSvg from '../../assets/shape.svg';

const WebAndEmailCTA = () => {
  return (
    <section className="web-email-cta-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="web-email-cta-banner">
          <div className="web-email-cta-left">
            <img src={shapeSvg} alt="Cloud Architecture Shape" className="web-email-cta-shape" />
          </div>
          <div className="web-email-cta-right">
            <h2>
              RELIABLE INFRASTRUCTURE FOR MODERN<br />BUSINESSE
            </h2>
            <p>Deploy secure dedicated infrastructure engineered for business- critical websites,<br />email systems and enterprise applications.</p>
            <Link to="/connect" className="web-email-btn-cta">Contact Our Experts</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAndEmailCTA;
