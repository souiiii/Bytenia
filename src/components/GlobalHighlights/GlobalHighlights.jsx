import React from 'react';
import './GlobalHighlights.css';

const highlightData = [
  {
    title: "Multiple strategic regions (US, EU, APAC)",
    text: "Deploy in carefully selected locations featuring low latency routing and high availability."
  },
  {
    title: "Enterprise-grade facilities",
    text: "Advanced cooling, 24/7 physical security, and redundant N+1 power setups standard."
  },
  {
    title: "High-capacity backbone connectivity",
    text: "Tier-1 network blend with multi-gigabit connections ensuring high-speed access globally."
  },
  {
    title: "Scalable multi-region deployment",
    text: "Flexible architecture allows you to easily expand to new data centers as you grow."
  }
];

const GlobalHighlights = () => {
  return (
    <section className="global-highlights-section section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="h2" style={{ color: 'var(--text-dark)' }}>
            <span style={{ fontWeight: 800 }}>Global</span><br/>
            <span style={{ fontWeight: 300 }}>Infrastructure Highlights</span>
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
