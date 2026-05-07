import React from 'react';
import './GarrysModProtection.css';

const GarrysModProtection = () => {
  return (
    <section className="garrys-protection-section">
      <div className="container">
        <div className="garrys-protection-content">
          <span className="garrys-prot-eyebrow">L7 UDP SCRUBBING NODE</span>
          <h2 className="garrys-prot-title">
            Titan-Grade UDP<br />Protection
          </h2>
          <p className="garrys-prot-desc">
            Garry's Mod is notoriously vulnerable to UDP reflection and query floods. Our L7 scrubbing filter understands Source Engine packets natively, dropping malicious traffic at the edge before it hits your VCore.
          </p>
          
          <div className="garrys-prot-stats">
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">12Tbps</span>
              <span className="prot-stat-label">Global Capacity</span>
            </div>
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">&lt;10ms</span>
              <span className="prot-stat-label">Filtering Latency</span>
            </div>
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">Anycast</span>
              <span className="prot-stat-label">Network Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarrysModProtection;
