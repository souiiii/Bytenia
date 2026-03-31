import React from 'react';
import { Activity, Terminal, Layers, ShieldCheck, MapPin, Network, Shield, Cpu, Clock, Headset } from 'lucide-react';
import './EnterpriseFeatures.css';

const builtForData = [
  {
    icon: <Activity size={24} />,
    title: 'Unmatched Performance & Uptime',
    desc: 'Bypass virtualization overhead and access 100% of your bare metal resources instantly.'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Exclusive Root Access',
    desc: 'Install custom software, tweak kernel parameters, and configure precisely to your needs.'
  },
  {
    icon: <Layers size={24} />,
    title: 'On-Demand Scalability',
    desc: 'Upgrade resources and add nodes seamlessly as your infrastructure footprint expands.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Enterprise-Grade Security',
    desc: 'Physically isolated hardware blocks cross-tenant vulnerabilities and side-channel attacks.'
  }
];

const trustData = [
  { icon: <MapPin size={20} />, text: '12 Global Data Centers' },
  { icon: <Network size={20} />, text: 'Redundant 10Gbps Network' },
  { icon: <Shield size={20} />, text: 'Included DDoS Protection' },
  { icon: <Cpu size={20} />, text: 'Latest CPU Architectures' },
  { icon: <Clock size={20} />, text: '99.99% Uptime SLA' },
  { icon: <Headset size={20} />, text: '24/7 Priority Support' }
];

const EnterpriseFeatures = () => {
  return (
    <div className="enterprise-features-wrapper">
      
      {/* 1. Built For Organizations */}
      <section className="built-for section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="h2" style={{marginBottom: '16px'}}>Built for Organizations<br/><span style={{fontWeight: 400}}>That Can't Afford Downtime</span></h2>
            <p className="subtitle" style={{maxWidth: '700px', margin: '0 auto'}}>
              When your business relies entirely on stable, rapid, and uncompromised digital infrastructure, our bare-metal solutions deliver the exact ecosystem you need.
            </p>
          </div>

          <div className="built-grid">
            {builtForData.map((item, idx) => (
              <div key={idx} className="built-card">
                <div className="built-icon">{item.icon}</div>
                <h4 className="built-title">{item.title}</h4>
                <p className="built-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Trust */}
      <section className="why-trust section">
        <div className="container" style={{maxWidth: '900px'}}>
          <div className="text-center section-header">
            <h3 className="h3">Why Enterprises Trust<br/><span style={{fontWeight: 400, color: 'var(--text-muted)'}}>Our Infrastructure</span></h3>
          </div>

          <div className="trust-grid">
            {trustData.map((item, idx) => (
              <div key={idx} className="trust-pill">
                <span className="trust-icon">{item.icon}</span>
                <span className="trust-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EnterpriseFeatures;
