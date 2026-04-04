import React from 'react';
import { Settings, TrendingUp, Maximize, Cloud } from 'lucide-react';
import './WhyCostOptimized.css';

const reasons = [
  { icon: <Settings size={32} strokeWidth={1.5} />, text: "SIMPLE, LOW-MAINTENANCE CONFIGURATIONS" },
  { icon: <TrendingUp size={32} strokeWidth={1.5} />, text: "OPTIMIZED FOR PRICE-TO-PERFORMANCE" },
  { icon: <Maximize size={32} strokeWidth={1.5} />, text: "FAST DEPLOYMENT AND EASY SCALING" },
  { icon: <Cloud size={32} strokeWidth={1.5} />, text: "IDEAL FOR NON-CRITICAL AND GROWING WORKLOADS" }
];

const WhyCostOptimized = () => {
  return (
    <section className="why-co section">
      <div className="container" style={{maxWidth: '850px'}}>
        
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="h2" style={{marginBottom: '40px'}}>Why <span style={{fontWeight: 300}}>Cost-Optimized Servers?</span></h2>
          <p className="subtitle" style={{margin: '0 auto', fontSize: '0.95rem', fontWeight: 700, color: '#111827', marginBottom: '20px'}}>
            Not every project needs enterprise-grade hardware.
          </p>
          <p className="subtitle" style={{margin: '0 auto', fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6'}}>
            Cost-Optimized Servers are built for workloads that require reliable performance at the lowest possible cost.<br/>
            They are ideal for early-stage products, development environments, and applications with predictable or moderate traffic.
          </p>
        </div>

        <div className="text-center" style={{margin: '80px 0 40px'}}>
          <h3 className="co-label">COST-EFFICIENT SERVERS FOR GROWING PROJECTS</h3>
        </div>

        <div className="reasons-list">
          {reasons.map((item, idx) => (
            <div key={idx} className="reason-row-card">
              <span className="reason-icon">{item.icon}</span>
              <span className="reason-text">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyCostOptimized;
