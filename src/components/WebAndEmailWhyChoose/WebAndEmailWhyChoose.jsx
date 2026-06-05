import React from 'react';
import { Cpu, Database, Network } from 'lucide-react';
import './WebAndEmailWhyChoose.css';

const featuresData = [
  {
    icon: <Cpu size={24} color="#000" strokeWidth={2} />,
    title: 'Reliable Infrastructure',
    desc: 'Enterprise-grade dedicated infrastructure engineered for stable uptime and consistent long-term performance.',
    bullets: [
      'High Availability Architecture',
      'Redundant Infrastructure Systems'
    ]
  },
  {
    icon: <Database size={24} color="#000" strokeWidth={2} />,
    title: 'Enterprise Networking',
    desc: 'Low-latency global connectivity designed for business applications, websites and corporate services.',
    bullets: [
      'Optimized Network Routing',
      'Stable Global Connectivity'
    ]
  },
  {
    icon: <Network size={24} color="#000" strokeWidth={2} />,
    title: 'DDoS Protection',
    desc: 'Advanced DDoS mitigation and intelligent filtering built to protect production business workloads.',
    bullets: [
      'Multi-Tbps Protection Capacity',
      'Enterprise Firewall Filtering'
    ]
  }
];

const WebAndEmailWhyChoose = () => {
  return (
    <section className="web-email-why-choose section">
      <div className="container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">
            <strong>Why Businesses</strong> choose Tempest
          </h2>
          <p className="why-choose-subtitle">
            We're built for reliability, security and predictable performance across business-critical web and email infrastructure.<br />
            Our servers are ready to deploy into any environment, <strong>no matter the size or scale of your project.</strong>
          </p>
        </div>

        <div className="why-choose-grid">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="why-choose-card">
              <div className="why-choose-icon">
                {feature.icon}
              </div>
              <h4 className="why-choose-card-title">{feature.title}</h4>
              <p className="why-choose-card-desc">{feature.desc}</p>
              <ul className="why-choose-card-bullets">
                {feature.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAndEmailWhyChoose;
