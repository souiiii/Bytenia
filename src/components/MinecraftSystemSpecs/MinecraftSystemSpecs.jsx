import React from 'react';
import { Gauge, Server, Shield, Globe } from '@phosphor-icons/react';
import './MinecraftSystemSpecs.css';

const MinecraftSystemSpecs = () => {
  const specs = [
    {
      icon: <Gauge size={32} weight="bold" color="#111" />,
      title: "HIGH FREQUENCY CPUS",
      description: "Single-thread performance optimized for 20 TPS stability even under extreme world-gen workloads."
    },
    {
      icon: <Server size={32} weight="bold" color="#111" />,
      title: "NVME STORAGE",
      description: "RAID 1 Enterprise NVMe arrays. Ultra-low seek times for instantaneous chunk loading and player data R/W."
    },
    {
      icon: <Shield size={32} weight="duotone" color="#111" />,
      title: "DDOS PROTECTION",
      description: "12Tbps persistent scrubbing layer. Automated filtering for Minecraft-specific protocol exploits."
    },
    {
      icon: <Globe size={32} weight="bold" color="#111" />,
      title: "GLOBAL NETWORK",
      description: "Direct peering with major ISPs. Tier-1 transit via Lumen, GTT, and NTT for sub-20ms global routing."
    }
  ];

  return (
    <section className="mc-system-specs section">
      <div className="container">
        <div className="mc-system-specs-header">
          <h2 className="mc-specs-title">SYSTEM SPECIFICATIONS</h2>
          <span className="mc-specs-subtitle">LAYER 0 // BARE METAL ARCHITECTURE</span>
        </div>

        <div className="mc-specs-grid">
          {specs.map((spec, index) => (
            <div className="mc-spec-card" key={index}>
              <div className="mc-spec-icon">{spec.icon}</div>
              <h3 className="mc-spec-card-title">{spec.title}</h3>
              <p className="mc-spec-card-desc">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinecraftSystemSpecs;
