import React from 'react';
import { Mail, Layers, Shield } from 'lucide-react';
import web1Img from '../../assets/web1.png';
import './WebAndEmailCorporate.css';

const featuresData = [
  {
    icon: <Mail size={20} color="#111827" strokeWidth={2.5} />,
    title: 'Secure Email Delivery',
    desc: 'Enterprise-grade infrastructure optimized for reliable outbound and inbound business communications.'
  },
  {
    icon: <Layers size={20} color="#111827" strokeWidth={2.5} />,
    title: 'Redundant Mail Infrastructure',
    desc: 'High-availability systems engineered to maintain stable email services and minimize downtime.'
  },
  {
    icon: <Shield size={20} color="#111827" strokeWidth={2.5} />,
    title: 'Compliance & Security Standards',
    desc: 'Protected infrastructure with advanced security layers, backup policies and enterprise-grade reliability.'
  }
];

const WebAndEmailCorporate = () => {
  return (
    <section className="web-email-corporate section">
      <div className="container">
        <div className="corporate-wrapper">
          <div className="corporate-content">
            <h2 className="corporate-title">Secure Corporate Email</h2>
            <p className="corporate-subtitle">
              Reliable email infrastructure designed for secure business communications,<br />stable delivery and enterprise-grade protection.
            </p>

            <div className="corporate-features">
              {featuresData.map((item, idx) => (
                <div key={idx} className="corporate-feature-item">
                  <div className="corporate-feature-icon">
                    {item.icon}
                  </div>
                  <div className="corporate-feature-text">
                    <h4 className="corporate-feature-title">{item.title}</h4>
                    <p className="corporate-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="corporate-image-container">
            <img src={web1Img} alt="Secure Corporate Email Interface" className="corporate-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAndEmailCorporate;
