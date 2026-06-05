import React from 'react';
import { Cpu, Microchip, Server, Building2, Gauge, Zap } from 'lucide-react';
import './BusinessApplicationsInfrastructure.css';

const infrastructureData = [
  {
    icon: <Cpu size={20} color="white" />,
    title: 'Ryzen & EPYC CPUs',
    desc: 'Up to 128 Cores of raw compute power.'
  },
  {
    icon: <Microchip size={20} color="white" />,
    title: 'DDR5 ECC Memory',
    desc: 'High-speed error correcting memory for stability.'
  },
  {
    icon: <Server size={20} color="white" />,
    title: 'NVMe Gen4 Storage',
    desc: 'Extreme IOPs for data-intensive apps.'
  },
  {
    icon: <Building2 size={20} color="white" />,
    title: 'Tier Datacenter',
    desc: 'Certified enterprise-grade facilities.'
  },
  {
    icon: <Gauge size={20} color="white" />,
    title: 'High-speed Networking',
    desc: 'Dual 10Gbps+ uplinks as standard.'
  },
  {
    icon: <Zap size={20} color="white" />,
    title: 'Redundant Power',
    desc: 'A+B power feeds in every rack.'
  }
];

const BusinessApplicationsInfrastructure = () => {
  return (
    <section className="biz-app-infrastructure section">
      <div className="container">
        <div className="infrastructure-wrapper">
          <h2 className="infrastructure-title">INFRASTRUCTURE SPECIFICATIONS</h2>
          <div className="infrastructure-grid">
            {infrastructureData.map((item, idx) => (
              <div key={idx} className="infrastructure-card">
                <div className="infrastructure-icon">
                  {item.icon}
                </div>
                <h4 className="infrastructure-card-title">{item.title}</h4>
                <p className="infrastructure-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsInfrastructure;
