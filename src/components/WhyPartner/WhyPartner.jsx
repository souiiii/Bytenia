import React from 'react';
import './WhyPartner.css';

const features = [
  {
    title: "Enterprise-Grade Infrastructure",
    desc: "High-performance bare-metal and compute networks to power your clients' most demanding workloads."
  },
  {
    title: "Global Reach",
    desc: "Expand into emerging markets with established European networks and global edge networks reaching more customers instantly."
  },
  {
    title: "Security-First Architecture",
    desc: "Advanced DDoS protection, rigid compliance standards, and robust physical and network access mitigation."
  },
  {
    title: "Scalable Revenue Model",
    desc: "Tiered volume discounting providing long-term predictable margin realization allowing you to scale profitably."
  }
];

const WhyPartner = () => {
  return (
    <section className="why-partner section text-center">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="why-title">
          Why <strong>Partner</strong> With Byteania?
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
