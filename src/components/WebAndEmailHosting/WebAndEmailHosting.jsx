import React from 'react';
import { Boxes, AppWindow, Link as LinkIcon } from 'lucide-react';
import web2Img from '../../assets/web2.png';
import './WebAndEmailHosting.css';

const hostingFeaturesData = [
  {
    icon: <Boxes size={20} color="#111827" strokeWidth={2.5} />,
    title: 'High Availability',
    desc: 'Stable hosting architecture designed for reliable uptime and consistent business performance.'
  },
  {
    icon: <AppWindow size={20} color="#111827" strokeWidth={2.5} />,
    title: 'Enterprise Web Performance',
    desc: 'Optimized infrastructure for fast-loading websites, portals and production web applications.'
  },
  {
    icon: <LinkIcon size={20} color="#111827" strokeWidth={2.5} />,
    title: 'Predictable Infrastructure Costs',
    desc: 'Transparent pricing without unexpected scaling or usage costs.'
  }
];

const WebAndEmailHosting = () => {
  return (
    <section className="web-email-hosting section">
      <div className="container">
        <div className="hosting-wrapper">
          <div className="hosting-image-container">
            <img src={web2Img} alt="Business Website Hosting" className="hosting-image" />
          </div>
          <div className="hosting-content">
            <h2 className="hosting-title">Business Website Hosting</h2>
            <p className="hosting-subtitle">
              Deploy professional business websites and web applications on secure,<br />dedicated infrastructure. Our servers are engineered for uptime, stability and<br />predictable performance.
            </p>

            <div className="hosting-features">
              {hostingFeaturesData.map((item, idx) => (
                <div key={idx} className="hosting-feature-item">
                  <div className="hosting-feature-icon">
                    {item.icon}
                  </div>
                  <div className="hosting-feature-text">
                    <h4 className="hosting-feature-title">{item.title}</h4>
                    <p className="hosting-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAndEmailHosting;
