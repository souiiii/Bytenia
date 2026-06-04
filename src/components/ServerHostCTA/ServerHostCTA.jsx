import React from 'react';
import { Link } from 'react-router-dom';
import './ServerHostCTA.css';
import shapeSvg from '../../assets/shape.svg';

const ServerHostCTA = () => {
  return (
    <section className="sh-cta-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="sh-cta-banner">
          <div className="sh-cta-left">
            <img src={shapeSvg} alt="Tempest Cloud Shape" className="sh-cta-shape" />
          </div>
          <div className="sh-cta-right">
            <h2>
              <span className="sh-cta-title-dim">SCALE YOUR HOSTING</span><br /><span className="sh-cta-title-bright">INFRASTRUCTURE WITH CONFIDENCE</span>
            </h2>
            <p>Experience the power of Tempest. Deploy your first enterprise dedicated server in minutes or talk to our solutions team for custom bulk pricing.</p>
            <Link to="/connect" className="btn-cta" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Contact Our Experts</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerHostCTA;
