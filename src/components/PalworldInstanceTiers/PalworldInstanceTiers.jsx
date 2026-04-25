import React from 'react';
import './PalworldInstanceTiers.css';

const tiers = [
  {
    id: 1,
    name: 'CORE-01',
    processor: 'Ryzen 9 5950X',
    memory: '64GB DDR4',
    storage: '2x 1TB NVMe',
    port: '1 Gbps',
    price: '$129'
  },
  {
    id: 2,
    name: 'CORE-02',
    processor: 'Ryzen 9 7950X',
    memory: '128GB DDR5',
    storage: '2x 2TB NVMe',
    port: '2.5 Gbps',
    price: '$189'
  },
  {
    id: 3,
    name: 'EPYC-MAX',
    processor: 'EPYC 7763 64C',
    memory: '256GB DDR4',
    storage: '4x 2TB NVMe',
    port: '10 Gbps',
    price: '$349'
  }
];

const PalworldInstanceTiers = () => {
  return (
    <section className="palworld-tiers-section">
      <div className="container">
        <div className="palworld-tiers-header">
          <h2 className="palworld-tiers-title">INFRASTRUCTURE TIERS</h2>
          <p className="palworld-tiers-subtitle">SELECT YOUR HARDWARE PROFILE</p>
        </div>

        <div className="palworld-tiers-list">
          {tiers.map((tier) => (
            <div className="palworld-tier-card" key={tier.id}>
              
              <div className="palworld-tier-name">{tier.name}</div>
              
              <div className="palworld-tier-specs">
                <div className="palworld-spec-block">
                  <span className="palworld-spec-label">PROCESSOR</span>
                  <span className="palworld-spec-val">{tier.processor}</span>
                </div>
                <div className="palworld-spec-block">
                  <span className="palworld-spec-label">MEMORY</span>
                  <span className="palworld-spec-val">{tier.memory}</span>
                </div>
                <div className="palworld-spec-block">
                  <span className="palworld-spec-label">STORAGE</span>
                  <span className="palworld-spec-val">{tier.storage}</span>
                </div>
                <div className="palworld-spec-block">
                  <span className="palworld-spec-label">PORT SPEED</span>
                  <span className="palworld-spec-val">{tier.port}</span>
                </div>
              </div>

              <div className="palworld-tier-pricing-deploy">
                <div className="palworld-tier-pricing">
                  <span className="palworld-price-val">{tier.price}</span>
                  <span className="palworld-price-period">/mo</span>
                </div>
                <button className="palworld-deploy-btn">DEPLOY</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PalworldInstanceTiers;
