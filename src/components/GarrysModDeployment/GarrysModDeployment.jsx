import React from 'react';
import './GarrysModDeployment.css';
import garry1 from '../../assets/garry1.png';

const GarrysModDeployment = () => {
  return (
    <section className="garrys-deploy-section section">
      <div className="container">
        <div className="garrys-deploy-wrapper">
          {/* Left Column */}
          <div className="garrys-deploy-col left-col">
            <h2 className="garrys-deploy-title">
              DEPLOYMENT<br />FLEXIBILITY
            </h2>

            <div className="garrys-deploy-feature">
              <span className="garrys-feat-eyebrow">01 / HIGH PERFORMANCE COMPUTE</span>
              <h3 className="garrys-feat-title">CONSISTENT PROCESSING POWER</h3>
              <p className="garrys-feat-desc">
                High-frequency CPUs designed for stable performance under demanding workloads and sustained usage.
              </p>
            </div>

            <div className="garrys-deploy-feature">
              <span className="garrys-feat-eyebrow">02 / RELIABLE STORAGE</span>
              <h3 className="garrys-feat-title">HIGH SPEED DATA ACCESS</h3>
              <p className="garrys-feat-desc">
                NVMe storage ensures fast data access, low latency, and consistent performance for any workload.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="garrys-deploy-col right-col">
            <div className="garrys-deploy-feature">
              <span className="garrys-feat-eyebrow">03 / FULL CONTROL</span>
              <h3 className="garrys-feat-title">CUSTOM SERVER ENVIRONMENT</h3>
              <p className="garrys-feat-desc">
                Configure your server exactly how you need with full root access and complete flexibility.
              </p>
            </div>

            <div className="garrys-deploy-image-wrapper">
              <img 
                src={garry1} 
                alt="Garry's Mod Custom Server Environment" 
                className="garrys-deploy-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarrysModDeployment;
