import React from 'react';
import { Link } from 'react-router-dom';
import './RustServersPage.css';
import rustBg from '../assets/Rust.png';
import shapeSvg from '../assets/shape.svg';

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
    </div>
  );
};

export default RustServersPage;
