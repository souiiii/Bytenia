import React from 'react';
import './GlobalHighlights.css';

const highlightData = [
  {
    title: "Multiple strategic regions (US, EU, APAC)",
    text: "Deploy infrastructure across key global markets to support regional performance and expansion strategies."
  },
  {
    title: "Enterprise-grade facilities",
    text: "Infrastructure designed to support production workloads with high operational standards."
  },
  {
    title: "High-capacity backbone connectivity",
    text: "Robust network infrastructure ensuring reliable data transfer and regional accessibility."
  },
  {
    title: "Scalable multi-region deployment",
    text: "Flexible architecture allowing expansion across locations as business requirements grow."
  }
];

const GlobalHighlights = () => {
  return (
    <section className="global-highlights-section section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="h2" style={{ color: 'var(--text-dark)' }}>
            <span style={{ fontWeight: 800 }}>Global</span><br/>
            <span style={{ fontWeight: 300, color: '#475569', fontSize: '0.9em' }}>Infrastructure Highlights</span>
          </h2>
        </div>

        <div className="highlights-grid">
          {highlightData.map((h, idx) => (
            <div key={idx} className="highlight-card">
              <h4 className="highlight-title">{h.title}</h4>
              <p className="highlight-text">{h.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalHighlights;
