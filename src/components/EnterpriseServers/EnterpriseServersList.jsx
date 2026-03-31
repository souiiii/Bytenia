import React, { useState } from 'react';
import { Cpu, HardDrive, Activity, MapPin, SlidersHorizontal, Check } from 'lucide-react';
import ServerFilterModal from '../ServerFilterModal/ServerFilterModal';
import './EnterpriseServersList.css';

const serversData = [
  {
    id: 1,
    location: 'Helsinki, FI',
    cpuName: 'Intel Core i9-9900K',
    cpuSpecs: '8 cores / 16 threads - 3.6 GHz',
    ram: '128 GB ECC RAM',
    storage: '2x 1.92 TB NVMe SSD',
    network: '1 Gbit/s bandwidth',
    traffic: 'Unmetered traffic',
    price: '$ 120.99'
  },
  {
    id: 2,
    location: 'Falkenstein, DE',
    cpuName: 'AMD Ryzen 9 5950X',
    cpuSpecs: '16 cores / 32 threads - 3.4 GHz',
    ram: '128 GB ECC RAM',
    storage: '2x 3.84 TB NVMe SSD',
    network: '1 Gbit/s bandwidth',
    traffic: 'Unmetered traffic',
    price: '$ 154.99'
  },
  {
    id: 3,
    location: 'Helsinki, FI',
    cpuName: 'AMD EPYC 7502P',
    cpuSpecs: '32 cores / 64 threads - 2.5 GHz',
    ram: '256 GB ECC RAM',
    storage: '2x 1.92 TB NVMe SSD',
    network: '10 Gbit/s bandwidth',
    traffic: 'Unmetered traffic',
    price: '$ 210.99'
  },
  {
    id: 4,
    location: 'Ashburn, USA',
    cpuName: 'AMD EPYC 9654P',
    cpuSpecs: '96 cores / 192 threads - 2.4 GHz',
    ram: '384 GB ECC RAM',
    storage: '4x 3.84 TB NVMe SSD',
    network: '10 Gbit/s bandwidth',
    traffic: 'Unmetered traffic',
    price: '$ 499.99'
  }
];

const locations = ['All Locations', 'Europe (EU)', 'America (USA)', 'Asia (APAC)'];

const EnterpriseServersList = () => {
  const [activeLoc, setActiveLoc] = useState('All Locations');
  const [filterOpen, setFilterOpen] = useState(false);

  // In a real app, this would filter the serversData array based on filters applied.
  const handleApplyFilter = (filters) => {
    console.log("Filters applied:", filters);
    // filter logic here
  };

  return (
    <section className="server-list section">
      <div className="container" style={{maxWidth: '1100px'}}>
        
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="h2" style={{marginBottom: '16px'}}>Available<br/>Enterprise Dedicated Servers</h2>
          <p className="subtitle" style={{maxWidth: '600px', margin: '0 auto'}}>
            Browse our global inventory of bare-metal servers. Deploy instantly in the region closest to your users.
          </p>
        </div>

        {/* Location Tabs & Filter button */}
        <div className="list-controls">
          <div className="location-tabs">
            {locations.map((loc, idx) => (
              <button 
                key={idx} 
                className={`loc-pill ${activeLoc === loc ? 'active' : ''}`}
                onClick={() => setActiveLoc(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          <button className="btn-outline filter-btn" onClick={() => setFilterOpen(true)}>
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Table Headers */}
        <div className="table-header desktop-only-grid">
          <div className="th-col">Data Center</div>
          <div className="th-col">CPU</div>
          <div className="th-col">RAM & Storage</div>
          <div className="th-col">Network</div>
          <div className="th-col"></div>
        </div>

        {/* Server Rows */}
        <div className="server-rows">
          {serversData.map(server => (
            <div key={server.id} className="server-row">
              <div className="row-col location-col">
                <MapPin size={20} className="col-icon" />
                <div>
                  <div className="col-val-primary">{server.location}</div>
                  <div className="col-availability"><Check size={12} color="#10b981"/> Instantly Available</div>
                </div>
              </div>
              
              <div className="row-col">
                <Cpu size={20} className="col-icon" />
                <div>
                  <div className="col-val-primary">{server.cpuName}</div>
                  <div className="col-val-secondary">{server.cpuSpecs}</div>
                </div>
              </div>

              <div className="row-col">
                <HardDrive size={20} className="col-icon" />
                <div>
                  <div className="col-val-primary">{server.ram}</div>
                  <div className="col-val-secondary">{server.storage}</div>
                </div>
              </div>

              <div className="row-col">
                <Activity size={20} className="col-icon" />
                <div>
                  <div className="col-val-primary">{server.network}</div>
                  <div className="col-val-secondary">{server.traffic}</div>
                </div>
              </div>

              <div className="row-col action-col">
                <div className="price-label">from {server.price} / mo</div>
                <button className="btn-primary" style={{padding: '10px 20px', width: '100%'}}>Deploy Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ServerFilterModal 
        isOpen={filterOpen} 
        onClose={() => setFilterOpen(false)} 
        onApply={handleApplyFilter} 
      />
    </section>
  );
};

export default EnterpriseServersList;
