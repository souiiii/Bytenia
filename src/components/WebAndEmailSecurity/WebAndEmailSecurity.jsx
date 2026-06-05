import React from 'react';
import { Target, Server, ShieldAlert } from 'lucide-react';
import web3Img from '../../assets/web3.png';
import './WebAndEmailSecurity.css';

const securityFeaturesData = [
  {
    icon: <Target size={18} color="#111827" strokeWidth={2.5} />,
    title: '12Tbps+ DDoS Mitigation'
  },
  {
    icon: <Server size={18} color="#111827" strokeWidth={2.5} />,
    title: 'Secure Networking'
  },
  {
    icon: <ShieldAlert size={18} color="#111827" strokeWidth={2.5} />,
    title: 'Firewall Protection'
  }
];

const WebAndEmailSecurity = () => {
  return (
    <section className="web-email-security section">
      <div className="container">
        <div className="security-wrapper">
          <div className="security-content">
            <h2 className="security-title">Advanced Security &<br />Infrastructure Protection</h2>
            <p className="security-subtitle">
              Protect business-critical infrastructure with enterprise-<br />grade DDoS mitigation, intelligent firewall systems and<br />secure redundant networking.
            </p>

            <div className="security-features">
              {securityFeaturesData.map((item, idx) => (
                <div key={idx} className="security-feature-item">
                  <div className="security-feature-icon">
                    {item.icon}
                  </div>
                  <h4 className="security-feature-title">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="security-image-container">
            <img src={web3Img} alt="Advanced Security" className="security-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAndEmailSecurity;
