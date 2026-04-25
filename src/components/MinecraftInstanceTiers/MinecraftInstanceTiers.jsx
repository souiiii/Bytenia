import React from 'react';
import { MapPin, Cpu, Database, Gauge } from '@phosphor-icons/react';
import './MinecraftInstanceTiers.css';

const MinecraftInstanceTiers = () => {
  const tiers = [
    {
      id: 1,
      name: 'AMD RYZEN 9 5950X',
      specs: '16C / 32T @ 3.4GHZ / 4.9GHZ',
      score: 'Scored 45,900 on a CPU benchmark',
      location: 'AMSTERDAM',
      locationSub: 'NETHERLANDS',
      memory: '64GB DDR4',
      memorySub: 'MEMORY',
      storage: '2X 2TB NVME SSD',
      storageSub: 'STORAGE',
      network: '1 GBIT',
      networkSub: 'PORT SPEED',
      price: '$79.99'
    },
    {
      id: 2,
      name: 'INTEL CORE I9-13900K',
      specs: '24C / 32T @ 3.0GHZ / 5.8GHZ',
      score: 'Scored 60,000 on a CPU benchmark',
      location: 'FRANKFURT',
      locationSub: 'GERMANY',
      memory: '128GB DDR5',
      memorySub: 'MEMORY',
      storage: '2X 4TB NVME SSD',
      storageSub: 'STORAGE',
      network: '10 GBIT',
      networkSub: 'PORT SPEED',
      price: '$129.99'
    },
    {
      id: 3,
      name: 'AMD RYZEN 7 5800X3D',
      specs: '8C / 16T @ 3.4GHZ / 4.5GHZ',
      score: 'Scored 32,500 on a CPU benchmark',
      location: 'LONDON',
      locationSub: 'UNITED KINGDOM',
      memory: '32GB DDR4',
      memorySub: 'MEMORY',
      storage: '1TB NVME SSD',
      storageSub: 'STORAGE',
      network: '1 GBIT',
      networkSub: 'PORT SPEED',
      price: '$49.99'
    }
  ];

  return (
    <section className="mc-tiers section">
      <div className="container">
        <div className="mc-tiers-header">
          <h2 className="mc-tiers-title">INSTANCE TIERS</h2>
          <span className="mc-tiers-subtitle">FIXED MONTHLY RATES // NO HIDDEN EGRESS COSTS</span>
        </div>

        <div className="mc-tiers-list">
          {tiers.map(tier => (
            <div className="mc-tier-card" key={tier.id}>
              <div className="mc-tier-info">
                <div className="mc-tier-info-header">
                  <h3 className="mc-tier-name">{tier.name}</h3>
                  <span className="mc-tier-specs-sep">|</span>
                  <span className="mc-tier-specs">{tier.specs}</span>
                </div>
                <div className="mc-tier-score">{tier.score}</div>

                <div className="mc-tier-features">
                  <div className="mc-tier-feature">
                    <MapPin size={20} weight="regular" className="mc-tier-icon" />
                    <div className="mc-tier-feature-text">
                      <span className="feature-main">{tier.location}</span>
                      <span className="feature-sub">{tier.locationSub}</span>
                    </div>
                  </div>
                  <div className="mc-tier-feature">
                    <Cpu size={20} weight="regular" className="mc-tier-icon" />
                    <div className="mc-tier-feature-text">
                      <span className="feature-main">{tier.memory}</span>
                      <span className="feature-sub">{tier.memorySub}</span>
                    </div>
                  </div>
                  <div className="mc-tier-feature">
                    <Database size={20} weight="regular" className="mc-tier-icon" />
                    <div className="mc-tier-feature-text">
                      <span className="feature-main">{tier.storage}</span>
                      <span className="feature-sub">{tier.storageSub}</span>
                    </div>
                  </div>
                  <div className="mc-tier-feature">
                    <Gauge size={20} weight="regular" className="mc-tier-icon" />
                    <div className="mc-tier-feature-text">
                      <span className="feature-main">{tier.network}</span>
                      <span className="feature-sub">{tier.networkSub}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mc-tier-pricing">
                <div className="mc-tier-price">
                  <span className="price-amount">{tier.price}</span>
                  <span className="price-period">/ MONTH</span>
                </div>
                <button className="mc-tier-btn">CONFIGURE SERVER</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinecraftInstanceTiers;
