import React from 'react';
import { MapPin } from '@phosphor-icons/react';
import './DayZInstanceTiers.css';

const tiers = [
  {
    id: 1,
    badge: 'Starter Node',
    location: 'Amsterdam / Dallas / Miami',
    cpu: 'AMD Ryzen 9 5950X',
    cores: '2 vCores',
    memory: '16GB DDR4 ECC',
    storage: '100GB NVMe',
    port: '1 Gbps',
    price: '$32.00'
  },
  {
    id: 2,
    badge: 'Advanced Node',
    location: 'Amsterdam / Dallas / Miami',
    cpu: 'Intel Core i9-13900K',
    cores: '4 vCores',
    memory: '32GB DDR5',
    storage: '250GB NVMe',
    port: '1 Gbps',
    price: '$64.00'
  },
  {
    id: 3,
    badge: 'Enterprise Node',
    location: 'Amsterdam / Dallas / Miami',
    cpu: 'AMD Ryzen 9 7950X3D',
    cores: '8 vCores',
    memory: '64GB DDR5',
    storage: '500GB Gen4 NVMe',
    port: '10 Gbps',
    price: '$119.00'
  }
];

const DayZInstanceTiers = () => {
  return (
    <section className="dayz-tiers-section">
      <div className="container">
        <div className="dayz-tiers-header">
          <h2 className="dayz-tiers-title">Instance Tiers</h2>
          <p className="dayz-tiers-subtitle">Selected Configurations for Optimal Workloads</p>
        </div>

        <div className="dayz-tiers-list">
          {tiers.map((tier) => (
            <div className="dayz-tier-card" key={tier.id}>
              
              <div className="dayz-tier-info">
                <div className="dayz-tier-meta">
                  <span className="dayz-tier-badge">{tier.badge}</span>
                  <div className="dayz-tier-location">
                    <MapPin size={14} weight="bold" />
                    <span>{tier.location}</span>
                  </div>
                </div>
                
                <h3 className="dayz-tier-cpu">{tier.cpu}</h3>
                
                <div className="dayz-tier-specs">
                  <div className="dayz-spec">
                    <span className="dayz-spec-label">Cores</span>
                    <span className="dayz-spec-val">{tier.cores}</span>
                  </div>
                  <div className="dayz-spec">
                    <span className="dayz-spec-label">Memory</span>
                    <span className="dayz-spec-val">{tier.memory}</span>
                  </div>
                  <div className="dayz-spec">
                    <span className="dayz-spec-label">Storage</span>
                    <span className="dayz-spec-val">{tier.storage}</span>
                  </div>
                  <div className="dayz-spec">
                    <span className="dayz-spec-label">Port Speed</span>
                    <span className="dayz-spec-val">{tier.port}</span>
                  </div>
                </div>
              </div>

              <div className="dayz-tier-pricing">
                <span className="dayz-pricing-label">Monthly Billing</span>
                <span className="dayz-pricing-val">{tier.price}</span>
                <button className="dayz-tier-btn">CONFIGURE SERVER</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayZInstanceTiers;
