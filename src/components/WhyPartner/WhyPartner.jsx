import React from 'react';
import './WhyPartner.css';

const features = [
  {
    title: "Enterprise-Grade Infrastructure",
    desc: "High-performance dedicated servers deployed across 14+ global points of presence. Built for reliability, scale, and enterprise-grade performance."
  },
  {
    title: "Global Reach",
    desc: "Low-latency network coverage across North America, Europe, and Asia, enabling partners to serve customers worldwide without operational complexity."
  },
  {
    title: "Security-First Architecture",
    desc: "Always-on DDoS protection, network redundancy, and proactive monitoring designed to protect mission-critical services."
  },
  {
    title: "Scalable Revenue Model",
    desc: "Tier-based margins structured for long-term growth, increasing discounts as your volume expands. Win-win."
  }
];

const WhyPartner = () => {
  return (
    <section className="why-partner section text-center">
      <div className="container">
        <h2 className="why-title">
          Why Partner With Byteania?
        </h2>
        
        <div className="why-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="why-card">
              <h4 className="why-card-title">{feat.title}</h4>
              <p className="why-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
