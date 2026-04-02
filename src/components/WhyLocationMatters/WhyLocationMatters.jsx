import React from 'react';
import { Gauge, Database, Globe2, Rocket, RotateCw, ShieldCheck } from 'lucide-react';
import './WhyLocationMatters.css';

const reasons = [
  {
    icon: <Gauge size={20} />,
    title: "REDUCE LATENCY FOR GLOBAL USERS"
  },
  {
    icon: <Database size={20} />,
    title: "MEET DATA RESIDENCY REQUIREMENTS"
  },
  {
    icon: <Globe2 size={20} />,
    title: "BUILD MULTI-REGION HA ARCHITECTURE"
  },
  {
    icon: <Rocket size={20} />,
    title: "IMPROVE CONTENT DELIVERY RATES"
  },
  {
    icon: <RotateCw size={20} />,
    title: "IMPLEMENT DISASTER RECOVERY STRATEGIES"
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "ENSURE REGULATORY COMPLIANCE"
  }
];

const WhyLocationMatters = () => {
  return (
    <section className="why-location-section section">
      <div className="why-location-bg-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}>
        
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="h2" style={{ color: 'var(--bg-dark)' }}>Why Location Matters</h2>
        </div>

        <div className="why-location-grid">
          {reasons.map((r, idx) => (
            <div key={idx} className="location-reason-pill">
              <div className="location-reason-icon">
                {r.icon}
              </div>
              <span className="location-reason-text">{r.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyLocationMatters;
