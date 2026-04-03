import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServerChoiceBanner.css';

const ServerChoiceBanner = () => {
  return (
    <section className="server-choice-banner section">
      <div className="container" style={{maxWidth: '1000px'}}>
        <div className="choice-card">
          
          <div className="choice-graphic">
            {/* Custom Isometric Stack SVG mapping to branding requirements */}
            <svg width="180" height="220" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
              <polygon points="50 15, 85 30, 50 45, 15 30" fill="rgba(255,255,255,0.1)" />
              <polyline points="15 42, 50 57, 85 42" stroke="rgba(255,255,255,0.5)" />
              <polyline points="15 54, 50 69, 85 54" stroke="rgba(255,255,255,0.4)" />
              <polyline points="15 66, 50 81, 85 66" stroke="rgba(255,255,255,0.3)" />
              <path d="M 15 30 L 15 66" stroke="rgba(255,255,255,0.2)" />
              <path d="M 85 30 L 85 66" stroke="rgba(255,255,255,0.2)" />
              <path d="M 50 45 L 50 81" stroke="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          <div className="choice-content">
            <h3 className="choice-title text-white">
              <span style={{fontWeight: 300}}>NOT SURE </span> WHICH SERVER <span style={{fontWeight: 300}}>TO CHOOSE?</span>
            </h3>
            
            <p className="choice-desc text-white" style={{opacity: 0.9}}>
              Our experts are ready to help you specificy the exact hardware for your workload and budget.
            </p>
            
            <button className="btn-outline" style={{borderColor: 'rgba(255,255,255,0.2)', paddingLeft: '32px', paddingRight: '32px', color: '#fff'}}>
              Contact Our Experts
              <ArrowRight size={18} style={{marginLeft: '12px'}} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServerChoiceBanner;
