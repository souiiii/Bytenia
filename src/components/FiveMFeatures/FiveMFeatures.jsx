import React from 'react';
import { Cpu, HardDrives, Globe } from '@phosphor-icons/react';
import './FiveMFeatures.css';

const FiveMFeatures = () => {
  return (
    <section className="fivem-features">
      <div className="container">
        <div className="fivem-features-grid">
          
          <div className="fivem-feat-card left">
            <Cpu size={32} weight="regular" className="fivem-feat-icon" />
            <h3 className="fivem-feat-title">Ryzen 9 7950X</h3>
            <p className="fivem-feat-desc">
              The gold standard for FiveM. Zen 4 architecture ensures no stutter during high-population script execution.
            </p>
          </div>

          <div className="fivem-feat-card center">
            <HardDrives size={32} weight="regular" className="fivem-feat-icon" />
            <h3 className="fivem-feat-title">NVMe RAID 1</h3>
            <p className="fivem-feat-desc">
              Zero-latency SQL queries. We use enterprise-grade Gen5 NVMe drives in RAID 1 for absolute data redundancy and speed.
            </p>
          </div>

          <div className="fivem-feat-card right">
            <Globe size={32} weight="regular" className="fivem-feat-icon" />
            <h3 className="fivem-feat-title">Global Fiber</h3>
            <p className="fivem-feat-desc">
              Anycast network with Tier-1 providers. Minimized hops for global player access.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FiveMFeatures;
