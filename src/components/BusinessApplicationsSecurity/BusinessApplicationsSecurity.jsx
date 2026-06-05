import React from 'react';
import { Smartphone, Cloud, Network, Shield } from 'lucide-react';
import business1Img from '../../assets/business1.png';
import './BusinessApplicationsSecurity.css';

const securityList = [
  {
    icon: <Smartphone size={20} strokeWidth={2} color="#111827" />,
    text: "Advanced Enterprise Firewall Protection"
  },
  {
    icon: <Cloud size={20} strokeWidth={2} color="#111827" />,
    text: "Automated Daily Backup systems"
  },
  {
    icon: <Network size={20} strokeWidth={2} color="#111827" />,
    text: "Fully Redundant networking architecture"
  }
];

const BusinessApplicationsSecurity = () => {
  return (
    <section className="biz-app-security section">
      <div className="container">
        <div className="security-grid">
          
          <div className="security-text-col">
            <h2 className="security-title">Security & Business Continuity</h2>
            <p className="security-desc">
              Safe for production workloads. We provide multi-layer protection and disaster recovery planning to keep your business running 24/7.
            </p>
            
            <div className="security-list">
              {securityList.map((item, idx) => (
                <div key={idx} className="security-list-item">
                  <div className="security-list-icon">
                    {item.icon}
                  </div>
                  <span className="security-list-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="security-image-col">
            <div className="security-image-wrapper">
              <img src={business1Img} alt="Security and Business Continuity" className="security-img" />
              <div className="security-shield-badge">
                <Shield size={32} strokeWidth={1.5} color="#000" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsSecurity;
