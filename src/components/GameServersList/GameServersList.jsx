import React, { useState } from 'react';
import FlagModule from 'react-world-flags';
import { ArrowUpDown } from 'lucide-react';
import './GameServersList.css';

const Flag = FlagModule.default || FlagModule;

const locations = [
  { id: 'all', name: 'All locations', code: null },
  { id: 'dallas', name: 'Dallas, US', code: 'US', city: 'Dallas' },
  { id: 'chicago', name: 'Chicago, US', code: 'US', city: 'Chicago' },
  { id: 'miami', name: 'Miami, US', code: 'US', city: 'Miami' },
  { id: 'amsterdam', name: 'Amsterdam, NL', code: 'NL', city: 'Amsterdam' },
  { id: 'frankfurt', name: 'Frankfurt, DE', code: 'DE', city: 'Frankfurt' },
  { id: 'sydney', name: 'Sydney, AU', code: 'AU', city: 'Sydney' },
  { id: 'london', name: 'London, UK', code: 'GB', city: 'London' }
];

export const gameServersData = [
  { id: 1, city: 'Dallas', code: 'US', cpu: 'AMD Ryzen 5950X', vcores: '2 @ 3.4 / 4.9 GHz', ram: '8 GB DDR4', storage: '100 GB NVMe SSD', network: 'Unmetered 1 Gbit', price: '$ 99.99 / month' },
  { id: 2, city: 'Amsterdam', code: 'NL', cpu: 'AMD Ryzen 7950X3D', vcores: '4 @ 4.2 / 5.7 GHz', ram: '16 GB DDR5', storage: '250 GB NVMe SSD', network: 'Unmetered 1 Gbit', price: '$ 129.99 / month' },
  { id: 3, city: 'Frankfurt', code: 'DE', cpu: 'Intel Core i9-13900K', vcores: '8 @ 3.0 / 5.8 GHz', ram: '32 GB DDR5', storage: '500 GB NVMe SSD', network: 'Unmetered 1 Gbit', price: '$ 149.99 / month' },
  { id: 4, city: 'Chicago', code: 'US', cpu: 'AMD Ryzen 9 7900X', vcores: '8 @ 4.7 / 5.6 GHz', ram: '64 GB DDR5', storage: '1 TB NVMe SSD', network: 'Unmetered 10 Gbit', price: '$ 199.99 / month' },
  { id: 5, city: 'Sydney', code: 'AU', cpu: 'AMD Ryzen 5800X3D', vcores: '4 @ 3.4 / 4.5 GHz', ram: '16 GB DDR4', storage: '100 GB NVMe SSD', network: 'Unmetered 1 Gbit', price: '$ 109.99 / month' },
  { id: 6, city: 'London', code: 'GB', cpu: 'Intel Core i9-14900K', vcores: '8 @ 3.2 / 6.0 GHz', ram: '32 GB DDR5', storage: '500 GB NVMe SSD', network: 'Unmetered 1 Gbit', price: '$ 169.99 / month' },
  { id: 7, city: 'Miami', code: 'US', cpu: 'AMD Ryzen 7950X3D', vcores: '8 @ 4.2 / 5.7 GHz', ram: '64 GB DDR5', storage: '1 TB NVMe SSD', network: 'Unmetered 10 Gbit', price: '$ 189.99 / month' },
  { id: 8, city: 'Dallas', code: 'US', cpu: 'Intel Core i9-14900K', vcores: '16 @ 3.2 / 6.0 GHz', ram: '128 GB DDR5', storage: '2 TB NVMe SSD', network: 'Unmetered 10 Gbit', price: '$ 299.99 / month' },
];

const GameServersList = () => {
  const [activeLoc, setActiveLoc] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("loc") || "all";
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [cpuFilter, setCpuFilter] = useState("Show All");
  const [ramFilter, setRamFilter] = useState("Show All");
  const [storageFilter, setStorageFilter] = useState("Show All");
  const [sortOrder, setSortOrder] = useState("asc");

  const uniqueCPUs = ["Show All", ...new Set(gameServersData.map(s => s.cpu))];
  const uniqueRAMs = ["Show All", ...new Set(gameServersData.map(s => s.ram))];
  const uniqueStorages = ["Show All", ...new Set(gameServersData.map(s => s.storage))];

  const filteredServers = gameServersData
    .filter(s => {
      const locObj = locations.find(l => l.id === activeLoc);
      if (activeLoc !== 'all' && locObj && s.city !== locObj.city) return false;
      if (cpuFilter !== "Show All" && s.cpu !== cpuFilter) return false;
      if (ramFilter !== "Show All" && s.ram !== ramFilter) return false;
      if (storageFilter !== "Show All" && s.storage !== storageFilter) return false;
      return true;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  const displayedServers = isExpanded ? filteredServers : filteredServers.slice(0, 6);

  return (
    <section className="gs-servers section">
      <div className="container" style={{maxWidth: '1200px'}}>
        
        <div className="text-center" style={{marginBottom: '60px'}}>
          <h2 className="h2" style={{marginBottom: '16px'}}>Available<br/><span style={{fontWeight: 300}}>Gaming Servers</span></h2>
          <p className="subtitle" style={{maxWidth: '850px', margin: '0 auto', fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6'}}>
            Explore our range of Gaming Server plans optimized for performance, reliability, and scalability.<br />
            Each plan offers dedicated resources to support growing and production-ready workloads.
          </p>
        </div>

        
        <div className="gs-locations">
          {locations.map((loc) => (
            <button 
              key={loc.id} 
              className={`gs-loc-pill ${activeLoc === loc.id ? 'active' : ''}`}
              onClick={() => setActiveLoc(loc.id)}
            >
              {loc.code && <Flag code={loc.code} style={{width: 20, height: 20, borderRadius: '50%', marginRight: 8, objectFit: 'cover'}} />}
              {loc.name}
            </button>
          ))}
        </div>

        
        <div className="gs-filters-bar">
          <div className="gs-inline-filters">
            <div className="gs-filter-group">
              <label>CPU</label>
              <select value={cpuFilter} onChange={(e) => setCpuFilter(e.target.value)}>
                {uniqueCPUs.map(cpu => <option key={cpu} value={cpu}>{cpu}</option>)}
              </select>
            </div>
            <div className="gs-filter-group">
              <label>RAM</label>
              <select value={ramFilter} onChange={(e) => setRamFilter(e.target.value)}>
                {uniqueRAMs.map(ram => <option key={ram} value={ram}>{ram}</option>)}
              </select>
            </div>
            <div className="gs-filter-group">
              <label>Storage</label>
              <select value={storageFilter} onChange={(e) => setStorageFilter(e.target.value)}>
                {uniqueStorages.map(storage => <option key={storage} value={storage}>{storage}</option>)}
              </select>
            </div>
          </div>
          <div className="gs-filter-actions">
            <span style={{fontSize: '0.9rem', color: '#4b5563'}}>Sort by:&nbsp;&nbsp;<strong style={{color: '#111827', fontWeight: 800}}>{sortOrder === 'asc' ? 'Low Price' : 'High Price'}</strong></span>
            <button className="gs-sort-btn" onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
              <ArrowUpDown size={16} color="#111827" />
            </button>
          </div>
        </div>

        
        <div className="gs-table-wrapper">
          <div className="gs-table-header desktop-only-grid">
            <div className="gs-th">CPU</div>
            <div className="gs-th">vCores</div>
            <div className="gs-th">RAM</div>
            <div className="gs-th">Storage</div>
            <div className="gs-th">Network</div>
            <div className="gs-th">Price</div>
            <div className="gs-th"></div>
          </div>

          <div className="gs-server-rows">
            {displayedServers.length === 0 ? (
              <div className="text-center" style={{padding: '60px 0', color: '#6b7280'}}>
                No servers match your current filter criteria.
              </div>
            ) : (
              displayedServers.map((s) => (
                <div key={s.id} className="gs-server-row">
                  <div className="gs-td gs-cpu-col">
                    {s.code && <Flag code={s.code} style={{width: 20, height: 20, borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />}
                    <span className="gs-val-strong">{s.cpu}</span>
                  </div>
                  <div className="gs-td">
                    <span className="mobile-label">vCores:</span>
                    <span className="gs-val">{s.vcores}</span>
                  </div>
                  <div className="gs-td">
                    <span className="mobile-label">RAM:</span>
                    <span className="gs-val">{s.ram}</span>
                  </div>
                  <div className="gs-td">
                    <span className="mobile-label">Storage:</span>
                    <span className="gs-val">{s.storage}</span>
                  </div>
                  <div className="gs-td">
                    <span className="mobile-label">Network:</span>
                    <span className="gs-val">{s.network}</span>
                  </div>
                  <div className="gs-td">
                    <span className="mobile-label">Price:</span>
                    <span className="gs-val-strong">{s.price}</span>
                  </div>
                  <div className="gs-td gs-action-col">
                    <button className="gs-order-btn">Order Now</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {filteredServers.length > 6 && (
          <div className="text-center" style={{marginTop: '40px'}}>
            <button 
              className="gs-show-more"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Hide Servers" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default GameServersList;
