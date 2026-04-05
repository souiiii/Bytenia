import React from 'react';
import './VdsBenefits.css';

const benefitsData = [
  {
    title: "Dedicated Resources",
    desc: "Guaranteed CPU and RAM allocated exclusively to your virtual server. Stable and predictable performance under load."
  },
  {
    title: "Strong Isolation",
    desc: "Virtualization ensures workload isolation from other tenants. Improved security and consistent performance."
  },
  {
    title: "Full Control & Customization",
    desc: "Root access, OS choice, and full environment control, giving you the freedom to configure the server to your exact needs."
  }
];

const useCasesPills = [
  "SAAS & WEB APPLICATIONS",
  "SMALL & MEDIUM BUSINESSES",
  "DATA & ANALYTICS",
  "DIGITAL AGENCIES"
];

const VdsBenefits = () => {
  return (
    <section className="vds-benefits section">
      <div className="container" style={{maxWidth: '1200px'}}>
        
        <div className="text-center" style={{marginBottom: '48px'}}>
          <h2 className="h2"><span style={{fontWeight: 800}}>Key</span> <span style={{fontWeight: 300}}>Benefits</span></h2>
        </div>

        <div className="vds-benefits-grid">
          {benefitsData.map((b, idx) => (
            <div key={idx} className="vds-benefit-card">
              <h4 className="vds-benefit-title">{b.title}</h4>
              <p className="vds-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{margin: '60px 0 32px'}}>
          <span className="vds-use-cases-label">IDEAL USE CASES</span>
        </div>

        <div className="vds-use-cases-pills">
          {useCasesPills.map((pill, idx) => (
            <span key={idx} className="vds-uc-pill">{pill}</span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VdsBenefits;
