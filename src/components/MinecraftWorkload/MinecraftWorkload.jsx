import React from 'react';
import { PottedPlant, CompassTool } from '@phosphor-icons/react';
import './MinecraftWorkload.css';

const MinecraftWorkload = () => {
  return (
    <section className="mc-workload section">
      <div className="container">
        <h2 className="mc-workload-title">Built for Any Workload</h2>
        
        <div className="mc-workload-grid">
          {/* Left Column */}
          <div className="mc-workload-card mc-workload-featured">
            <PottedPlant className="mc-workload-plant-icon" size={80} weight="regular" />
            
            <div className="mc-workload-featured-content">
              <h3 className="mc-workload-card-heading large">Full Control</h3>
              <p className="mc-workload-card-desc">
                Complete root access to configure your<br />server exactly how you need.
              </p>
            </div>
            
            <span className="mc-workload-card-label">MAXIMUM FLEXIBILITY</span>
          </div>

          {/* Right Column */}
          <div className="mc-workload-right-col">
            {/* Top Row for Right Column */}
            <div className="mc-workload-right-top">
              <div className="mc-workload-card">
                <h3 className="mc-workload-card-heading">Low Latency</h3>
                <span className="mc-workload-card-label">OPTIMIZED NETWORK PERFORMANCE</span>
              </div>
              <div className="mc-workload-card">
                <h3 className="mc-workload-card-heading">Dedicated Resources</h3>
                <span className="mc-workload-card-label">NO SHARED PERFORMANCE</span>
              </div>
            </div>

            {/* Bottom Row for Right Column */}
            <div className="mc-workload-card mc-workload-dark">
              <div className="mc-workload-dark-content">
                <h3 className="mc-workload-card-heading light">Scalable</h3>
                <p className="mc-workload-card-desc light">
                  Easily upgrade resources as your needs grow.
                </p>
              </div>
              <CompassTool className="mc-workload-compass-icon" size={32} weight="regular" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftWorkload;
