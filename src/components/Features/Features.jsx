import React from 'react';
import { Terminal, Shield, HardDrive, Headphones } from 'lucide-react';
import './Features.css';

const features = [
  {
    title: 'Full Root Access',
    desc: 'Get complete control over your server environment and configurations.',
    icon: <Terminal size={24} />
  },
  {
    title: 'DDoS Protection',
    desc: 'Enterprise-grade mitigation to ensure maximum server uptime.',
    icon: <Shield size={24} />
  },
  {
    title: 'Backup & Storage Options',
    desc: 'Keep your data safe with automated and secure backup options.',
    icon: <HardDrive size={24} />
  },
  {
    title: '24/7 Expert Support',
    desc: 'Our experts are available around the clock to assist you directly.',
    icon: <Headphones size={24} />
  }
];

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="h2" style={{marginBottom: '16px'}}>Included</h2>
          <p className="subtitle">with Every Server</p>
        </div>

        <div className="features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-card-icon">{item.icon}</div>
              <h4 className="feature-card-title">{item.title}</h4>
              <p className="feature-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
