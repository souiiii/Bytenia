import React from 'react';
import './ServerHostSpecs.css';

const ServerHostSpecs = () => {
  return (
    <section className="sh-specs-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Connectivity Block */}
        <div className="sh-specs-block">
          <div className="text-center sh-specs-header">
            <h2><strong>Unstoppable</strong> <span>Global Connectivity</span></h2>
            <p>Every server comes with enterprise-grade DDoS mitigation out of box.<br/>We filter malicious traffic at the edge, ensuring your customers never experience downtime.</p>
          </div>
          
          <div className="sh-specs-grid">
            <div className="sh-spec-card">
              <div className="sh-spec-huge">12Tbps+</div>
              <div className="sh-spec-label">MITIGATION CAPACITY</div>
            </div>
            <div className="sh-spec-card">
              <div className="sh-spec-huge">&lt;10ms</div>
              <div className="sh-spec-label">AVERAGE LATENCY</div>
            </div>
            <div className="sh-spec-card">
              <div className="sh-spec-huge">45+</div>
              <div className="sh-spec-label">EDGE LOCATIONS</div>
            </div>
            <div className="sh-spec-card">
              <div className="sh-spec-huge">100%</div>
              <div className="sh-spec-label">SLA GUARANTEED</div>
            </div>
          </div>
        </div>

        {/* Components Block */}
        <div className="sh-specs-block" style={{ marginTop: '80px' }}>
          <div className="text-center sh-specs-header">
            <h2><strong>Precision-Selected</strong> <span>Components</span></h2>
            <p>We don't cut corners.<br/>Every component is selected for maximum throughput and longevity.</p>
          </div>
          
          <div className="sh-specs-grid">
            <div className="sh-spec-card sh-comp-card">
              <div className="sh-comp-label">PROCESSING POWER</div>
              <h3>AMD EPYC™ 9554</h3>
              <p>64 Cores / 128 Threads<br/>Genoa Architecture</p>
            </div>
            <div className="sh-spec-card sh-comp-card">
              <div className="sh-comp-label">MEMORY STACK</div>
              <h3>768GB DDR5 ECC</h3>
              <p>4800MHz Technical Grade<br/>Fault-Tolerant ECC</p>
            </div>
            <div className="sh-spec-card sh-comp-card">
              <div className="sh-comp-label">STORAGE FABRIC</div>
              <h3>3.84TB NVMe<br/>Gen4</h3>
              <p>Samsung PM1733 Enterprise<br/>7,000MB/s Reads</p>
            </div>
            <div className="sh-spec-card sh-comp-card">
              <div className="sh-comp-label">PORT SPEED</div>
              <h3>10Gbps Dedicated</h3>
              <p>Fiber Uplink per Node<br/>Private LAN Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServerHostSpecs;
