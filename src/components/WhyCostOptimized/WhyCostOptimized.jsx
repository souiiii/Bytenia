import React from 'react';
import { Cpu, TrendingUp, Server, ShieldCheck } from 'lucide-react';
import './WhyCostOptimized.css';

const reasons = [
  { icon: <Cpu size={24} />, text: "INTEL XEON & AMD EPYC SUPPORT" },
  { icon: <TrendingUp size={24} />, text: "OPTIMIZED PRICING TO PERFORMANCE" },
  { icon: <Server size={24} />, text: "ENTERPRISE-GRADE INFRASTRUCTURE" },
  { icon: <ShieldCheck size={24} />, text: "GUARANTEED 99.9% NETWORK UPTIME SLA" }
];

const WhyCostOptimized = () => {
  return (
    <section className="why-co section">
      <div className="container" style={{maxWidth: '850px'}}>
        
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="h2" style={{marginBottom: '16px'}}>Why <span style={{fontWeight: 300}}>Cost-Optimized Servers?</span></h2>
          <p className="subtitle" style={{margin: '0 auto'}}>
            We know you care about price-to-performance. That's why we've designed these bare-metal servers to provide maximum power without the enterprise price tag. Perfectly suited for scale-out architecture.
          </p>
        </div>

        <div className="text-center" style={{marginBottom: '32px'}}>
          <span className="co-label">COST-EFFICIENT SERVERS FOR GROWING PROJECTS</span>
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
