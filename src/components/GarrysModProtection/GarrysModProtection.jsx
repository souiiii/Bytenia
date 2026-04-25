import React from 'react';
import './GarrysModProtection.css';

const GarrysModProtection = () => {
  return (
    <section className="garrys-protection-section">
      <div className="container">
        <div className="garrys-protection-content">
          <span className="garrys-prot-eyebrow">L7_UDP_SCRUBBING_NODE</span>
          <h2 className="garrys-prot-title">
            TITAN-GRADE UDP<br />PROTECTION
          </h2>
          <p className="garrys-prot-desc">
            Garry's Mod is notoriously vulnerable to UDP reflection and query floods. Our L7 scrubbing filter understands Source Engine packets natively, dropping malicious traffic at the edge before it hits your VCore.
          </p>
          
          <div className="garrys-prot-stats">
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">12TBPS</span>
              <span class="prot-stat-label">GLOBAL_CAPACITY</span>
            </div>
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">&lt;10MS</span>
              <span className="prot-stat-label">FILTERING_LATENCY</span>
            </div>
            <div className="garrys-prot-stat">
              <span className="prot-stat-val">ANYCAST</span>
              <span className="prot-stat-label">NETWORK_STRATEGY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarrysModProtection;
