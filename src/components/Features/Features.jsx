import React from 'react';
import { Network, Shield, HardDrive, Globe } from 'lucide-react';
import './Features.css';

const features = [
  {
    title: 'Guaranteed Dedicated Bandwidth',
    desc: 'Unmetered bandwidth allocation with consistent throughput and no resource sharing.',
    icon: <Network size={32} strokeWidth={1.5} />
  },
  {
    title: 'DDoS Protection',
    desc: 'Always-on DDoS mitigation to protect your services from network attacks.',
    icon: <Shield size={32} strokeWidth={1.5} />
  },
  {
    title: 'Backup Storage Options',
    desc: 'Optional backup storage solutions to secure and recover critical data.',
    icon: <HardDrive size={32} strokeWidth={1.5} />
  },
  {
    title: 'IPv4 & IPv6 Support',
    desc: 'Native support for both IPv4 and IPv6 addresses to ensure full network compatibility.',
    icon: <Globe size={32} strokeWidth={1.5} />
  }
];

const Features = () => {
  const renderCards = () => (
    features.map((item, idx) => (
      <div key={`card-${idx}`} className="feature-card">
        <div className="feature-card-icon">{item.icon}</div>
        <h4 className="feature-card-title">{item.title}</h4>
        <p className="feature-card-desc">{item.desc}</p>
      </div>
    ))
  );

  return (
    <section className="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title-main h2" style={{marginBottom: '8px'}}>Included</h2>
          <p className="features-subtitle">with Every Server</p>
        </div>
      </div>
      
      {/* Edge-to-edge Marquee Wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee-group">
          {renderCards()}
        </div>
        {/* Exact Duplicate for Seamless Infinite CSS Loop */}
        <div className="marquee-group" aria-hidden="true">
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default Features;
