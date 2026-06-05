import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessApplicationsHero.css';

const BusinessApplicationsHero = () => {
  return (
    <header className="biz-app-hero section">
      <div className="container">
        <div className="biz-app-hero-card">
          <div className="biz-app-hero-content">
            <h1 className="hero-title h1">Dedicated Infrastructure for Business-Critical Applications</h1>
            <p className="hero-description">
              Deploy business-critical applications on high-performance dedicated infrastructure engineered for reliability, scalability and predictable performance.
            </p>
            <div className="hero-actions">
              <Link to="/locations" className="biz-app-hero-btn-primary">View Network Map</Link>
              <Link to="/connect" className="biz-app-hero-btn-outline">Contact Our Experts</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BusinessApplicationsHero;
