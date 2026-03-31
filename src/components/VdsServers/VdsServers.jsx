import React, { useState } from 'react';
import FlagModule from 'react-world-flags';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import './VdsServers.css';

const Flag = FlagModule.default || FlagModule;

const locations = [
  { id: 'all', name: 'All Locations', code: null },
  { id: 'dtx', name: 'Dallas, TX', code: 'US' },
  { id: 'cil', name: 'Chicago, IL', code: 'US' },
  { id: 'mfl', name: 'Miami, FL', code: 'US' },
  { id: 'anl', name: 'Amsterdam, NL', code: 'NL' },
  { id: 'fde', name: 'Frankfurt, DE', code: 'DE' },
  { id: 'tjp', name: 'Tokyo, JP', code: 'JP' },
  { id: 'luk', name: 'London, UK', code: 'GB' }
];

const serversData = [
  { id: 1, code: 'US', cpu: 'AMD Ryzen 9 7950X', vcores: '8 vCores (4 phys)', ram: '32 GB DDR5', storage: '500 GB NVMe Gen4', network: 'Unmetered 1 Gbit', price: '$ 79.00 / month' },
  { id: 2, code: 'US', cpu: 'AMD EPYC 7543P', vcores: '16 vCores (8 phys)', ram: '64 GB DDR4', storage: '1000 GB NVMe + HDD', network: 'Unmetered 1 Gbit', price: '$ 89.00 / month' },
  { id: 3, code: 'US', cpu: 'AMD Ryzen 9 5950X', vcores: '8 vCores (4 phys)', ram: '64 GB DDR4', storage: '1000 GB NVMe Gen4', network: 'Unmetered 1 Gbit', price: '$ 89.00 / month' },
  { id: 4, code: 'US', cpu: 'AMD Ryzen 9 7950X', vcores: '16 vCores (8 phys)', ram: '64 GB DDR5', storage: '1000 GB NVMe Gen4', network: 'Unmetered 1 Gbit', price: '$ 119.00 / month' },
  { id: 5, code: 'US', cpu: 'AMD Ryzen 9 5950X', vcores: '16 vCores (8 phys)', ram: '128 GB DDR4', storage: '1000 GB NVMe Gen4', network: 'Unmetered 1 Gbit', price: '$ 129.00 / month' },
  { id: 6, code: 'US', cpu: 'AMD Ryzen 9 7950X', vcores: '16 vCores (8 phys)', ram: '128 GB DDR5', storage: '1000 GB NVMe Gen4', network: 'Unmetered 1 Gbit', price: '$ 159.00 / month' }
];

const VdsServers = () => {
  const [activeLoc, setActiveLoc] = useState('all');

  return (
    <section className="vds-servers section">
      <div className="container" style={{maxWidth: '1200px'}}>
        
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="h2" style={{marginBottom: '16px'}}>Available<br/><span style={{fontWeight: 300}}>Virtual Dedicated Servers</span></h2>
          <p className="subtitle" style={{maxWidth: '700px', margin: '0 auto'}}>
            Explore our range of Virtual Dedicated Servers optimized for performance, scalability, and reliability. 
            Build exactly what you need without compromise — all powered by industry-grade hardware.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="vds-locations">
          {locations.map((loc) => (
            <button 
              key={loc.id} 
              className={`vds-loc-pill ${activeLoc === loc.id ? 'active' : ''}`}
              onClick={() => setActiveLoc(loc.id)}
            >
              {loc.code && <Flag code={loc.code} style={{width: 18, borderRadius: 2, marginRight: 8, objectFit: 'cover', height: 12}} />}
              {loc.name}
            </button>
          ))}
        </div>

        {/* Inline Filters */}
        <div className="vds-filters-bar">
          <div className="vds-inline-filters">
            <div className="vds-filter-group">
              <label>CPU</label>
              <select><option>Show All</option><option>AMD Ryzen</option></select>
            </div>
            <div className="vds-filter-group">
              <label>RAM</label>
              <select><option>Show All</option><option>64 GB</option></select>
            </div>
            <div className="vds-filter-group">
              <label>Storage</label>
              <select><option>Show All</option><option>NVMe Gen4</option></select>
            </div>
          </div>
          <div className="vds-filter-actions">
            <button className="vds-text-btn"><SlidersHorizontal size={14} /> Filters</button>
            <button className="vds-text-btn"><RotateCcw size={14} /> Reset Filters</button>
          </div>
        </div>

        {/* Data Table */}
        <div className="vds-table-wrapper">
          <div className="vds-table-header desktop-only-grid">
            <div className="vds-th">CPU</div>
            <div className="vds-th">vCores</div>
            <div className="vds-th">RAM</div>
            <div className="vds-th">Storage</div>
            <div className="vds-th">Network</div>
            <div className="vds-th">Price</div>
            <div className="vds-th"></div>
          </div>

          <div className="vds-server-rows">
            {serversData.map((s) => (
              <div key={s.id} className="vds-server-row">
                <div className="vds-td vds-cpu-col">
                  {s.code && <Flag code={s.code} style={{width: 20, height: 14, borderRadius: 2, objectFit: 'cover', flexShrink: 0}} />}
                  <span className="vds-val-strong">{s.cpu}</span>
                </div>
                <div className="vds-td">
                  <span className="mobile-label">vCores:</span>
                  <span className="vds-val">{s.vcores}</span>
                </div>
                <div className="vds-td">
                  <span className="mobile-label">RAM:</span>
                  <span className="vds-val">{s.ram}</span>
                </div>
                <div className="vds-td">
                  <span className="mobile-label">Storage:</span>
                  <span className="vds-val">{s.storage}</span>
                </div>
                <div className="vds-td">
                  <span className="mobile-label">Network:</span>
                  <span className="vds-val">{s.network}</span>
                </div>
                <div className="vds-td">
                  <span className="mobile-label">Price:</span>
                  <span className="vds-val-strong">{s.price}</span>
                </div>
                <div className="vds-td vds-action-col">
                  <button className="btn-primary vds-order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center" style={{marginTop: '40px'}}>
          <button className="btn-outline" style={{padding: '12px 36px', borderRadius: '50px'}}>Load More</button>
        </div>

      </div>
    </section>
  );
};

export default VdsServers;
