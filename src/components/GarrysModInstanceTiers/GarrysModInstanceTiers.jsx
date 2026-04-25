import React from 'react';
import './GarrysModInstanceTiers.css';

const tiers = [
  { id: 'CORE-01', cpu: 'Intel Xeon E-2388G', cores: '8C / 16T', ram: '32GB DDR4-3200 ECC', storage: 'NVMe (80k R / 60k W)', price: '59.99' },
  { id: 'CORE-02', cpu: 'Intel Xeon E-2388G', cores: '8C / 16T', ram: '64GB DDR4-3200 ECC', storage: 'NVMe (80k R / 60k W)', price: '79.99' },
  { id: 'ADVANCED-01', cpu: 'AMD Ryzen 9 5950X', cores: '16C / 32T', ram: '128GB DDR4-3200 ECC', storage: 'Gen4 NVMe (120k R/W)', price: '149.99' },
  { id: 'ADVANCED-02', cpu: 'AMD Ryzen 9 7950X', cores: '16C / 32T', ram: '128GB DDR5-5200 ECC', storage: 'Gen4 NVMe (120k R/W)', price: '189.99' },
  { id: 'EXTREME-01', cpu: 'Intel Core i9-14900K', cores: '24C / 32T', ram: '192GB DDR5-5600', storage: 'Gen5 NVMe (150k R/W)', price: '249.99' }
];

const GarrysModInstanceTiers = () => {
  return (
    <section className="garrys-tiers-section">
      <div className="container">
        <div className="garrys-tiers-header">
          <h2 className="garrys-tiers-title">INSTANCE TIERS</h2>
          <p className="garrys-tiers-subtitle">FIXED MONTHLY RATES // NO HIDDEN EGRESS COSTS</p>
        </div>

        <div className="garrys-tiers-table">
          <div className="garrys-tiers-thead">
            <div className="garrys-thead-col">TIER ID</div>
            <div className="garrys-thead-col">CPU ARCHITECTURE</div>
            <div className="garrys-thead-col">CORES/THREADS</div>
            <div className="garrys-thead-col">MEMORY SPECS</div>
            <div className="garrys-thead-col">STORAGE IOPS</div>
            <div className="garrys-thead-col">PRICE</div>
            <div className="garrys-thead-col action-col">ACTION</div>
          </div>
          
          <div className="garrys-tiers-tbody">
            {tiers.map((tier, idx) => (
              <div className="garrys-tier-row" key={idx}>
                <div className="garrys-trow-col tier-id-col">
                  <span className="mobile-label">TIER ID</span>
                  {tier.id}
                </div>
                <div className="garrys-trow-col">
                  <span className="mobile-label">CPU ARCHITECTURE</span>
                  {tier.cpu}
                </div>
                <div className="garrys-trow-col">
                  <span className="mobile-label">CORES/THREADS</span>
                  {tier.cores}
                </div>
                <div className="garrys-trow-col">
                  <span className="mobile-label">MEMORY SPECS</span>
                  {tier.ram}
                </div>
                <div className="garrys-trow-col">
                  <span className="mobile-label">STORAGE IOPS</span>
                  {tier.storage}
                </div>
                <div className="garrys-trow-col price-col">
                  <span className="mobile-label">PRICE</span>
                  <div className="price-display">
                    <span className="price-currency">$</span>
                    <span className="price-value">{tier.price}</span>
                    <span className="price-period">/ MONTH</span>
                  </div>
                </div>
                <div className="garrys-trow-col action-col">
                  <button className="garrys-tier-btn">SELECT</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarrysModInstanceTiers;
