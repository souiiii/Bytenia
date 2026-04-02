import React from 'react';
import { ArrowRight } from 'lucide-react';
import './DistributedArchitectureBanner.css';

const DistributedArchitectureBanner = () => {
  return (
    <section className="architecture-banner section">
      <div className="container" style={{maxWidth: '1000px'}}>
        <div className="architecture-card">
          
          <div className="architecture-graphic">
            {/* Custom Isometric Stack SVG to mimic the exact branding logo from mockup */}
            <svg width="180" height="220" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
              {/* Top Face */}
              <polygon points="50 15, 85 30, 50 45, 15 30" fill="rgba(255,255,255,0.1)" />
              {/* Layer 2 */}
              <polyline points="15 42, 50 57, 85 42" stroke="rgba(255,255,255,0.5)" />
              {/* Layer 3 */}
              <polyline points="15 54, 50 69, 85 54" stroke="rgba(255,255,255,0.4)" />
              {/* Layer 4 */}
              <polyline points="15 66, 50 81, 85 66" stroke="rgba(255,255,255,0.3)" />
              {/* Bottom Edge Vents */}
              <path d="M 15 30 L 15 66" stroke="rgba(255,255,255,0.2)" />
              <path d="M 85 30 L 85 66" stroke="rgba(255,255,255,0.2)" />
              <path d="M 50 45 L 50 81" stroke="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          <div className="architecture-content">
            <h3 className="architecture-title text-white">
              <span style={{fontWeight: 800}}>DESIGNED</span> FOR DISTRIBUTED ARCHITECTURE
            </h3>
            <p className="architecture-desc text-gray">
              Deploy in a single region or build a geographically distributed architecture with ease using our robust network.
            </p>
            
            <ul className="architecture-list">
              <li>Active-active deployments</li>
              <li>Cross-region data replication</li>
              <li>Regional load balancing ready</li>
              <li>Global disaster recovery planning</li>
            </ul>

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

export default DistributedArchitectureBanner;
