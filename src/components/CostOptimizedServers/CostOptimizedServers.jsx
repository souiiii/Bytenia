import React, { useState } from 'react';
import FlagModule from 'react-world-flags';
import { Cpu, HardDrive, Activity, SlidersHorizontal } from 'lucide-react';
import './CostOptimizedServers.css';

const Flag = FlagModule.default || FlagModule;

const locations = [
  { id: 'all', name: 'Global', code: null },
  { id: 'us', name: 'Dallas, TX', code: 'US' },
  { id: 'uk', name: 'London, UK', code: 'GB' },
  { id: 'de', name: 'Frankfurt, DE', code: 'DE' },
  { id: 'nl', name: 'Amsterdam, NL', code: 'NL' },
  { id: 'in', name: 'Mumbai, IN', code: 'IN' },
  { id: 'jp', name: 'Tokyo, JP', code: 'JP' },
  { id: 'se', name: 'Stockholm, SE', code: 'SE' }
];

const serversData = [
  {
    id: 1,
    location: 'Ashburn',
    region: 'US East',
    code: 'US',
    cpu: 'AMD Ryzen 7950X | 5.2 GHz / 5.7 GHz Max',
    cores: '16 cores / 32 threads',
    ram: '128 GB ECC DDR5',
    storageLabel: 'Memory',
    network: '1 Gbps',
    bandwidth: 'Unmetered',
    price: '$239.00/month',
  },
  {
    id: 2,
    location: 'Frankfurt',
    region: 'EU Central',
    code: 'DE',
    cpu: 'AMD Ryzen 7950X | 5.2 GHz / 5.7 GHz Max',
    cores: '16 cores / 32 threads',
    ram: '128 GB ECC DDR5',
    storageLabel: 'Memory',
    network: '1 Gbps',
    bandwidth: 'Unmetered',
    price: '$239.00/month',
  },
  {
    id: 3,
    location: 'Amsterdam',
    region: 'EU West',
    code: 'NL',
    cpu: 'AMD Ryzen 7950X | 5.2 GHz / 5.7 GHz Max',
    cores: '16 cores / 32 threads',
    ram: '128 GB ECC DDR5',
    storageLabel: 'Memory',
    network: '1 Gbps',
    bandwidth: 'Unmetered',
    price: '$239.00/month',
  },
  {
    id: 4,
    location: 'Amsterdam',
    region: 'EU West',
    code: 'NL',
    cpu: 'AMD Ryzen 7950X | 5.2 GHz / 5.7 GHz Max',
    cores: '16 cores / 32 threads',
    ram: '128 GB ECC DDR5',
    storageLabel: 'Memory',
    network: '1 Gbps',
    bandwidth: 'Unmetered',
    price: '$239.00/month',
  },
  {
    id: 5,
    location: 'Amsterdam',
    region: 'EU West',
    code: 'NL',
    cpu: 'AMD Ryzen 7950X | 5.2 GHz / 5.7 GHz Max',
    cores: '16 cores / 32 threads',
    ram: '128 GB ECC DDR5',
    storageLabel: 'Memory',
    network: '1 Gbps',
    bandwidth: 'Unmetered',
    price: '$239.00/month',
  }
];

const CostOptimizedServers = () => {
  const [activeLoc, setActiveLoc] = useState('all');

  return (
    <section className="co-servers section">
      <div className="container" style={{maxWidth: '1200px'}}>
        
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="h2" style={{marginBottom: '16px'}}>Available<br/>Cost-Optimized Servers</h2>
          <p className="subtitle" style={{maxWidth: '600px', margin: '0 auto'}}>
            Find your perfect server match globally, tailored for price-to-performance ratio without compromise.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="co-locations">
          {locations.map((loc) => (
            <button 
              key={loc.id} 
              className={`co-loc-pill ${activeLoc === loc.id ? 'active' : ''}`}
              onClick={() => setActiveLoc(loc.id)}
            >
              {loc.code && <Flag code={loc.code} style={{width: 18, borderRadius: 2, marginRight: 8, objectFit: 'cover', height: 12}} />}
              {loc.name}
            </button>
          ))}
        </div>

        {/* Inline Filters */}
        <div className="co-filters-bar">
          <div className="co-inline-filters">
            <div className="co-filter-group">
              <label>CPU</label>
              <select><option>Show All</option><option>AMD Ryzen</option></select>
            </div>
            <div className="co-filter-group">
              <label>RAM</label>
              <select><option>Show All</option><option>128 GB</option></select>
            </div>
            <div className="co-filter-group">
              <label>Storage</label>
              <select><option>Show All</option><option>NVMe</option></select>
            </div>
          </div>
          <button className="co-filter-toggle">
            Configure / Filters <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Server Rows (Cards) */}
        <div className="co-server-list">
          {serversData.map(server => (
            <div key={server.id} className="co-server-card">
              
              <div className="co-col co-loc-col">
                <Flag code={server.code} style={{width: 24, height: 16, borderRadius: 2, objectFit: 'cover'}} />
                <div className="co-col-content">
                  <span className="co-val-primary">{server.location}</span>
                  <span className="co-val-secondary">{server.region}</span>
                </div>
              </div>

              <div className="co-col co-cpu-col">
                <Cpu size={20} className="co-icon" />
                <div className="co-col-content">
                  <span className="co-val-primary">{server.cpu}</span>
                  <span className="co-val-secondary">{server.cores}</span>
                </div>
              </div>

              <div className="co-col">
                <HardDrive size={20} className="co-icon" />
                <div className="co-col-content">
                  <span className="co-val-primary">{server.ram}</span>
                  <span className="co-val-secondary">{server.storageLabel}</span>
                </div>
              </div>

              <div className="co-col">
                <Activity size={20} className="co-icon" />
                <div className="co-col-content">
                  <span className="co-val-primary">{server.network}</span>
                  <span className="co-val-secondary">{server.bandwidth}</span>
                </div>
              </div>

              <div className="co-action-col">
                <div className="co-price">{server.price}</div>
                <button className="btn-primary co-deploy-btn">Deploy Instance</button>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center" style={{marginTop: '40px'}}>
          <button className="btn-outline" style={{padding: '12px 32px', borderRadius: '50px'}}>Load More</button>
        </div>

      </div>
    </section>
  );
};

export default CostOptimizedServers;
