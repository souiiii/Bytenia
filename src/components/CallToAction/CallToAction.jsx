import React from 'react';
import { Layers } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-graphic">
            <Layers size={100} strokeWidth={0.5} color="rgba(255,255,255,0.3)" />
          </div>
          <div className="cta-content">
            <h3 className="cta-title">NOT SURE WHICH SERVER IS RIGHT FOR YOU?</h3>
            <p className="cta-description">
              Consult with our experts to find the perfect hosting configuration for your business needs.
            </p>
            <button className="btn-outline cta-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
