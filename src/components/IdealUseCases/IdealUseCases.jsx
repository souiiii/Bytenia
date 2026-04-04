import React from 'react';
import './IdealUseCases.css';

const useCasesPills = [
  "STARTUPS & MVPS",
  "SMALL E-COMMERCE STORES",
  "WEB STUDIOS & FREELANCERS",
  "DEVELOPMENT & TESTING"
];

const benefits = [
  {
    title: "Fast Setup & Easy Scaling",
    desc: "Get started quickly and upgrade as your project grows. No over-investment at the early stage."
  },
  {
    title: "Lower Infrastructure Costs",
    desc: "Optimized hardware configurations focused on essential resources. Reduce monthly expenses without sacrificing stability."
  },
  {
    title: "Simple Management",
    desc: "Straightforward configurations without unnecessary complexity."
  }
];

const IdealUseCases = () => {
  return (
    <section className="use-cases section">
      <div className="use-cases-overlay"></div>
      <img src="/laptop_bg.png" alt="Clean Servers Background" className="use-cases-bg" />
      
      <div className="container" style={{position: 'relative', zIndex: 3, maxWidth: '1000px'}}>
        
        <div className="text-center" style={{marginBottom: '32px'}}>
          <h2 className="h2" style={{marginBottom: '24px'}}>Ideal Use Cases</h2>
          
          <div className="use-cases-pills">
            {useCasesPills.map((pill, idx) => (
              <span key={idx} className="uc-pill">{pill}</span>
            ))}
          </div>
        </div>

        <div className="text-center" style={{margin: '60px 0 40px'}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: 600, color: '#111827', textTransform: 'uppercase', margin: 0, letterSpacing: '0.02em'}}>KEY BENEFITS</h3>
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
