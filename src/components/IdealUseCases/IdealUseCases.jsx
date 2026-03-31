import React from 'react';
import './IdealUseCases.css';

const useCasesPills = [
  "Continuous CI/CD",
  "VPNs & Secure Environments",
  "Web & Database Infrastructure",
  "AI & Machine Learning"
];

const benefits = [
  {
    title: "Fast Setup & Easy Scaling",
    desc: "Deploy new servers in minutes and scale laterally seamlessly as your traffic requirements grow over time."
  },
  {
    title: "Lower Infrastructure Costs",
    desc: "Get incredible compute density and network speed for a fraction of the cost of traditional public clouds."
  },
  {
    title: "Simple Management",
    desc: "Monitor resources, reboot hardware, and manage firewalls through our intuitive unified panel."
  }
];

const IdealUseCases = () => {
  return (
    <section className="use-cases section">
      <div className="use-cases-overlay"></div>
      <img src="/use_cases_bg.png" alt="Clean Servers Background" className="use-cases-bg" />
      
      <div className="container" style={{position: 'relative', zIndex: 3, maxWidth: '1000px'}}>
        
        <div className="text-center" style={{marginBottom: '32px'}}>
          <h2 className="h2" style={{marginBottom: '24px'}}>Ideal Use Cases</h2>
          
          <div className="use-cases-pills">
            {useCasesPills.map((pill, idx) => (
              <span key={idx} className="uc-pill">{pill}</span>
            ))}
          </div>
        </div>

        <div className="text-center" style={{margin: '60px 0 32px'}}>
          <span className="key-benefits-label">KEY BENEFITS</span>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IdealUseCases;
