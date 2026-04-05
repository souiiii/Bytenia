import React from 'react';
import shapeSvg from '../../assets/shape.svg';
import './DistributedArchitectureBanner.css';

const DistributedArchitectureBanner = () => {
  return (
    <section className="architecture-banner section">
      <div className="container">
        <div className="architecture-card">
          
          <div className="architecture-graphic">
            <img src={shapeSvg} alt="Distributed Architecture Shape" className="architecture-shape" />
          </div>

          <div className="architecture-content">
            <h3 className="architecture-title text-white">
              <span style={{fontWeight: 800}}>DESIGNED</span> FOR DISTRIBUTED ARCHITECTURE
            </h3>
            <p className="architecture-desc text-gray">
              Deploy in a single region or build geographically distributed infrastructure across continents. <span style={{ color: '#fff', fontWeight: 600}}>Our locations support:</span>
            </p>
            
            <ul className="architecture-list">
              <li>Active-active deployments</li>
              <li>Disaster recovery environments</li>
              <li>Regional traffic segmentation</li>
              <li>Edge-focused application scaling</li>
            </ul>

            <button className="btn-outline" style={{borderColor: 'rgba(255,255,255,0.5)', paddingLeft: '32px', paddingRight: '32px', color: '#fff', fontSize: '0.9rem'}}>
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributedArchitectureBanner;
