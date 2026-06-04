import React from 'react';
import { Link } from 'react-router-dom';
import './RustServersPage.css';
import rustBg from '../assets/Rust.png';
import shapeSvg from '../assets/shape.svg';
import RustServersList from '../components/RustServersList/RustServersList';
import RustAdvancedFeatures from '../components/RustAdvancedFeatures/RustAdvancedFeatures';

const RustServersPage = () => {
  return (
    <div className="rust-page">
      <section className="rust-hero-section">
        <div className="rust-hero-container">
          <img src={rustBg} alt="Rust Background" className="rust-hero-bg" />
          <div className="rust-hero-overlay"></div>
          
          <div className="rust-hero-content">
            <h1 className="rust-hero-title">
              POWERING NEXT-GEN RUST<br />COMMUNITIES
            </h1>
            <p className="rust-hero-description">
              High-performance dedicated servers engineered for demanding Rust environments. Large player<br />
              bases and hosting providers requiring reliable infrastructure and premium global connectivity.
            </p>
            <div className="rust-hero-buttons">
              <button className="btn-primary">Start project</button>
              <Link to="/connect" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Talk to Sales</Link>
            </div>
          </div>

          <div className="rust-hero-graphic">
            <img src={shapeSvg} alt="Tempest Shape" className="rust-hero-logo-graphic" />
          </div>
        </div>
      </section>

      <section className="rust-features-section">
        <div className="rust-features-header">
          <h2 className="rust-features-title">Boost your business with a high-performance dedicated server.</h2>
          <p className="rust-features-subtitle">Power up your server with Tempest, specialists in dedicated servers for game servers.</p>
        </div>
        
        <div className="rust-features-grid">
          <div className="rust-feature-card">
            <h3 className="rust-feature-card-title">Low Latency Network</h3>
            <div className="rust-feature-card-value">
              <span className="value-large">01</span>
              <span className="value-small">/ms</span>
            </div>
            <p className="rust-feature-card-desc">
              Optimized connectivity designed to deliver fast response times and a smooth experience.
            </p>
          </div>

          <div className="rust-feature-card">
            <h3 className="rust-feature-card-title">Expert Support</h3>
            <div className="rust-feature-card-value">
              <span className="value-large">24/7</span>
              <span className="value-small">SUP</span>
            </div>
            <p className="rust-feature-card-desc">
              A specialized team ready to help you with setup, management, and optimization.
            </p>
          </div>

          <div className="rust-feature-card">
            <h3 className="rust-feature-card-title">Advanced Protection</h3>
            <div className="rust-feature-card-value">
              <span className="value-large">24</span>
              <span className="value-small">Hours</span>
            </div>
            <p className="rust-feature-card-desc">
              Enterprise-grade security and DDoS protection to keep your project online at all times.
            </p>
          </div>

          <div className="rust-feature-card">
            <h3 className="rust-feature-card-title">High-End Hardware</h3>
            <div className="rust-feature-card-value">
              <span className="value-large">Ryzen</span>
              <span className="value-small">9</span>
            </div>
            <p className="rust-feature-card-desc">
              Powerful processors, NVMe storage, and optimized networking for maximum performance.
            </p>
          </div>
        </div>
      </section>

      <RustServersList />
      <RustAdvancedFeatures />
    </div>
  );
};

export default RustServersPage;
