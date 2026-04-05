import React from 'react';
import { Timer, ClipboardList, Globe2, Activity, RotateCw, FileCheck } from 'lucide-react';
import planetBg from '../../assets/hightech_planet_bg.png';
import './WhyLocationMatters.css';

const reasons = [
  {
    icon: <Timer size={24} strokeWidth={1.5} />,
    title: "REDUCE LATENCY FOR REGIONAL USERS"
  },
  {
    icon: <ClipboardList size={24} strokeWidth={1.5} />,
    title: "MEET DATA RESIDENCY REQUIREMENTS"
  },
  {
    icon: <Globe2 size={24} strokeWidth={1.5} />,
    title: "BUILD MULTI-REGION FAILOVER ARCHITECTURE"
  },
  {
    icon: <Activity size={24} strokeWidth={1.5} />,
    title: "ENSURE CONSISTENT PERFORMANCE"
  },
  {
    icon: <RotateCw size={24} strokeWidth={1.5} />,
    title: "OPTIMIZE DISASTER RECOVERY STRATEGIES"
  },
  {
    icon: <FileCheck size={24} strokeWidth={1.5} />,
    title: "ENSURE REGIONAL COMPLIANCE"
  }
];

const WhyLocationMatters = () => {
  return (
    <section className="why-location-section section">
      <div 
        className="why-location-bg-overlay" 
        style={{ backgroundImage: `url(${planetBg})` }}
      ></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}>
        
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 className="h2" style={{ color: '#0f172a', fontSize: '2.5rem', letterSpacing: '-0.02em', fontWeight: 700 }}>Why Location Matters</h2>
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
