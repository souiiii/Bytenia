import React from 'react';
import { Cpu, HardDrives, Shield, Globe } from '@phosphor-icons/react';
import './DayZFeatures.css';

const DayZFeatures = () => {
  return (
    <section className="dayz-features-section">
      <div className="container">
        <div className="dayz-features-grid">
          
          <div className="dayz-feature-card">
            <Cpu size={32} weight="regular" className="dayz-feature-icon" />
            <h3 className="dayz-feature-title">HIGH FREQUENCY CPUS</h3>
            <p className="dayz-feature-desc">
              Utilizing AMD Ryzen 9 7950X processors with 5.7GHz boost clocks for unparalleled single-thread performance.
            </p>
          </div>

          <div className="dayz-feature-card">
            <HardDrives size={32} weight="regular" className="dayz-feature-icon" />
            <h3 className="dayz-feature-title">NVME STORAGE</h3>
            <p className="dayz-feature-desc">
              PCIe 4.0 NVMe drives providing massive IOPS to prevent world-save stuttering and database lag.
            </p>
          </div>

          <div className="dayz-feature-card">
            <Shield size={32} weight="regular" className="dayz-feature-icon" />
            <h3 className="dayz-feature-title">DDOS PROTECTION</h3>
            <p className="dayz-feature-desc">
              Multi-layered 12Tbps anycast mitigation specifically tuned for DayZ's UDP and TCP protocol signatures.
            </p>
          </div>

          <div className="dayz-feature-card">
            <Globe size={32} weight="regular" className="dayz-feature-icon" />
            <h3 className="dayz-feature-title">GLOBAL NETWORK</h3>
            <p className="dayz-feature-desc">
              Strategically located points of presence in Amsterdam, Dallas, Miami, and Tokyo for global reach.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DayZFeatures;
