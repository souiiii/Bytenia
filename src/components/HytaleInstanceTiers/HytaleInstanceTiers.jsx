import React from 'react';
import './HytaleInstanceTiers.css';

const tiers = [
  {
    id: 1,
    cpu: 'EPYC™ 7763 - 16 vCores',
    location: 'North America (East)',
    ramStorage: '64GB ECC / 1TB NVMe',
    port: '10Gbps Dedicated',
    price: '$149'
  },
  {
    id: 2,
    cpu: 'Xeon® Gold 6330 - 32 vCores',
    location: 'Europe (Central)',
    ramStorage: '128GB ECC / 2x 1TB NVMe',
    port: '10Gbps Dedicated',
    price: '$289'
  },
  {
    id: 3,
    cpu: 'Ryzen™ 9 5950X - 16 Cores',
    location: 'Asia (Pacific)',
    ramStorage: '64GB DDR4 / 500GB NVMe',
    port: '1Gbps Burstable',
    price: '$99'
  }
];

const HytaleInstanceTiers = () => {
  return (
    <section className="hytale-tiers-section">
      <div className="container">
        <div className="hytale-tiers-header">
          <h2 className="hytale-tiers-title">Infrastructure Tiers</h2>
        </div>

        <div className="hytale-tiers-list">
          {tiers.map((tier) => (
            <div className="hytale-tier-card" key={tier.id}>
              <div className="hytale-tier-specs">
                <div className="hytale-spec-block">
                  <span className="hytale-spec-label">CPU Specs</span>
                  <span className="hytale-spec-val">{tier.cpu}</span>
                </div>
                <div className="hytale-spec-block">
                  <span className="hytale-spec-label">Location</span>
                  <span className="hytale-spec-val">{tier.location}</span>
                </div>
                <div className="hytale-spec-block">
                  <span className="hytale-spec-label">RAM / Storage</span>
                  <span className="hytale-spec-val">{tier.ramStorage}</span>
                </div>
                <div className="hytale-spec-block">
                  <span className="hytale-spec-label">Port Speed</span>
                  <span className="hytale-spec-val">{tier.port}</span>
                </div>
              </div>

              <div className="hytale-tier-pricing-deploy">
                <div className="hytale-tier-pricing">
                  <span className="hytale-price-val">{tier.price}</span>
                  <span className="hytale-price-period">/mo</span>
                </div>
                <button className="hytale-deploy-btn">Configure</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HytaleInstanceTiers;
