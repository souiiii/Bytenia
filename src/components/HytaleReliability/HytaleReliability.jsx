import React from 'react';
import { Timer, Shield, Globe } from '@phosphor-icons/react';
import './HytaleReliability.css';

const HytaleReliability = () => {
  return (
    <section className="hytale-reliability-section">
      <div className="container">
        <div className="hytale-reliability-eyebrow">
          03 // RELIABILITY_ENGINEERING
        </div>
        <div className="hytale-reliability-grid">
          <div className="hytale-reliability-card">
            <Timer size={32} weight="regular" className="hytale-reliability-icon" />
            <h3 className="hytale-reliability-title">99.99% UPTIME SLA</h3>
            <p className="hytale-reliability-desc">
              Redundant power delivery and enterprise-grade hardware components ensure your Hytale world stays online 24/7/365.
            </p>
          </div>
          <div className="hytale-reliability-card">
            <Shield size={32} weight="regular" className="hytale-reliability-icon" />
            <h3 className="hytale-reliability-title">DDOS PROTECTION</h3>
            <p className="hytale-reliability-desc">
              Multilayered mitigation scrubbing centers across the globe. We filter out attacks before they reach your instances.
            </p>
          </div>
          <div className="hytale-reliability-card">
            <Globe size={32} weight="regular" className="hytale-reliability-icon" />
            <h3 className="hytale-reliability-title">ANYCAST NETWORK</h3>
            <p className="hytale-reliability-desc">
              Broadcast your IP from multiple locations simultaneously to ensure players always connect to the closest edge node.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HytaleReliability;
