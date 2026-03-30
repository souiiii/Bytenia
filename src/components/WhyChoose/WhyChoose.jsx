import React from 'react';
import { Zap, Activity, Globe, Lock } from 'lucide-react';
import './WhyChoose.css';

const reasons = [
  { text: 'High Performance', icon: <Zap size={20} /> },
  { text: '99.9% Uptime', icon: <Activity size={20} /> },
  { text: 'Global Network', icon: <Globe size={20} /> },
  { text: 'Secure Network', icon: <Lock size={20} /> }
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-bg">
        <div className="why-choose-overlay"></div>
        <img 
          src="/server_room_bg.png" 
          alt="Server Room Background" 
          className="why-choose-img" 
        />
      </div>
      
      <div className="container why-choose-content">
        <h2 className="h2 text-white text-center why-choose-title">
          Why Choose<br/>Bytenia Dedicated Servers
        </h2>
        
        <div className="why-choose-pills">
          {reasons.map((reason, idx) => (
            <div key={idx} className="why-choose-pill">
              <span className="pill-icon">{reason.icon}</span>
              <span className="pill-text">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
