import React, { useState } from "react";
import { MemoryStick, HardDrive, Cpu, ArrowUpDown } from "lucide-react";
import "./EnterpriseServersList.css";

const serversData = [
  { id: 1, cpuModel: 'AMD Ryzen 7950X', cpuDetails: '16C / 32T @ 4.5GHz / 5.7GHz', benchmark: 'Scored 46,130 on a CPU benchmark', countryCode: 'us', city: 'Dallas', country: 'United States', ram: '128GB, Type DDR5', storage: '2x 2TB NVMe SSD', network: '10 Gbit', price: '$ 89.99' },
  { id: 2, cpuModel: 'AMD Ryzen 7950X', cpuDetails: '16C / 32T @ 4.5GHz / 5.7GHz', benchmark: 'Scored 46,130 on a CPU benchmark', countryCode: 'nl', city: 'Amsterdam', country: 'Nederlands', ram: '256GB ECC RAM', storage: '2x 4TB NVMe SSD', network: '10 Gbit', price: '$ 119.99' },
  { id: 3, cpuModel: 'Intel Xeon Gold 6330', cpuDetails: '28C / 56T @ 2.0GHz / 3.1GHz', benchmark: 'Scored 39,200 on a CPU benchmark', countryCode: 'de', city: 'Frankfurt', country: 'Germany', ram: '128GB, Type DDR5', storage: '2x 2TB NVMe SSD', network: '1 Gbit', price: '$ 129.99' },
  { id: 4, cpuModel: 'Intel Xeon Gold 6330', cpuDetails: '28C / 56T @ 2.0GHz / 3.1GHz', benchmark: 'Scored 39,200 on a CPU benchmark', countryCode: 'us', city: 'Chicago', country: 'United States', ram: '512GB ECC RAM', storage: '4x 2TB NVMe SSD', network: '10 Gbit', price: '$ 299.99' },
  { id: 5, cpuModel: 'AMD EPYC 7502P', cpuDetails: '32C / 64T @ 2.5GHz / 3.3GHz', benchmark: 'Scored 42,500 on a CPU benchmark', countryCode: 'au', city: 'Sydney', country: 'Australia', ram: '256GB ECC RAM', storage: '2x 2TB NVMe SSD', network: '10 Gbit', price: '$ 199.99' },
  { id: 6, cpuModel: 'AMD EPYC 7502P', cpuDetails: '32C / 64T @ 2.5GHz / 3.3GHz', benchmark: 'Scored 42,500 on a CPU benchmark', countryCode: 'gb', city: 'London', country: 'United Kingdom', ram: '128GB, Type DDR5', storage: '4x 1TB NVMe SSD', network: '10 Gbit', price: '$ 189.99' },
  { id: 7, cpuModel: 'AMD Ryzen 9 5950X', cpuDetails: '16C / 32T @ 3.4GHz / 4.9GHz', benchmark: 'Scored 45,900 on a CPU benchmark', countryCode: 'nl', city: 'Amsterdam', country: 'Nederlands', ram: '64GB DDR4', storage: '2x 2TB NVMe SSD', network: '1 Gbit', price: '$ 79.99' },
  { id: 8, cpuModel: 'AMD Ryzen 9 5950X', cpuDetails: '16C / 32T @ 3.4GHz / 4.9GHz', benchmark: 'Scored 45,900 on a CPU benchmark', countryCode: 'us', city: 'Miami', country: 'United States', ram: '128GB, Type DDR5', storage: '4x 1TB NVMe SSD', network: '10 Gbit', price: '$ 109.99' }
];

const filterLocations = [
  { id: "all", label: "All locations" },
  { id: "dallas", label: "Dallas, US", flag: "us" },
  { id: "chicago", label: "Chicago, US", flag: "us" },
  { id: "miami", label: "Miami, US", flag: "us" },
  { id: "amsterdam", label: "Amsterdam, NL", flag: "nl" },
  { id: "frankfurt", label: "Frankfurt, DE", flag: "de" },
  { id: "sydney", label: "Sydney, AU", flag: "au" },
  { id: "london", label: "London, UK", flag: "gb" },
];

const EnterpriseServersList = () => {
  const [activeLoc, setActiveLoc] = useState("all");
  const [cpuFilter, setCpuFilter] = useState("Show All");
  const [ramFilter, setRamFilter] = useState("Show All");
  const [storageFilter, setStorageFilter] = useState("Show All");

  // Extract unique options dynamically
  const uniqueCPUs = ["Show All", ...new Set(serversData.map(s => s.cpuModel))];
  const uniqueRAMs = ["Show All", ...new Set(serversData.map(s => s.ram))];
  const uniqueStorages = ["Show All", ...new Set(serversData.map(s => s.storage))];

  // Apply filters
  const filteredServers = serversData.filter(server => {
    if (activeLoc !== "all" && server.countryCode !== activeLoc) return false;
    if (cpuFilter !== "Show All" && server.cpuModel !== cpuFilter) return false;
    if (ramFilter !== "Show All" && server.ram !== ramFilter) return false;
    if (storageFilter !== "Show All" && server.storage !== storageFilter) return false;
    return true;
  });

  return (
    <section className="ent-servers section">
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Header Strings exactly aligning */}
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <h2 className="ent-servers-header">
            <strong>Available</strong>
            <br />
            <span>Enterprise Dedicated Servers</span>
          </h2>
          <p className="ent-servers-sub">
            Choose from a range of enterprise-grade dedicated servers optimized
            for performance, reliability,
            <br />
            and scalability. Each configuration is designed to support demanding
            workloads and{" "}
            <strong>
              can be
              <br />
              customized to match your business needs.
            </strong>
          </p>
        </div>

        {/* Filters Top Nav */}
        <div className="ent-location-filters">
          {filterLocations.map((loc) => (
            <button
              key={loc.id}
              className={`ent-loc-pill ${activeLoc === loc.id ? "active" : ""}`}
              onClick={() => setActiveLoc(loc.id)}
            >
              {loc.flag && (
                <img
                  src={`https://flagcdn.com/w40/${loc.flag}.png`}
                  alt={loc.flag}
                  className="ent-flag-icon"
                />
              )}
              {loc.label}
            </button>
          ))}
        </div>

        <div className="ent-selectors-row">
          <div className="ent-selectors-group">
            <div className="ent-select-box">
              <label>CPU</label>
              <select value={cpuFilter} onChange={(e) => setCpuFilter(e.target.value)}>
                {uniqueCPUs.map(cpu => <option key={cpu} value={cpu}>{cpu}</option>)}
              </select>
            </div>
            <div className="ent-select-box">
              <label>RAM</label>
              <select value={ramFilter} onChange={(e) => setRamFilter(e.target.value)}>
                {uniqueRAMs.map(ram => <option key={ram} value={ram}>{ram}</option>)}
              </select>
            </div>
            <div className="ent-select-box">
              <label>Storage</label>
              <select value={storageFilter} onChange={(e) => setStorageFilter(e.target.value)}>
                {uniqueStorages.map(storage => <option key={storage} value={storage}>{storage}</option>)}
              </select>
            </div>
          </div>

          <div className="ent-sort-box">
            <span>Sort by:</span>
            <strong>Low Price</strong>
            <ArrowUpDown size={16} strokeWidth={2.5} />
          </div>
        </div>

        {/* Server Cards List */}
        <div className="ent-server-cards">
          {filteredServers.length === 0 ? (
            <div className="text-center" style={{padding: '60px 0', color: '#6b7280'}}>
              No servers match your current filter criteria.
            </div>
          ) : (
            filteredServers.map((server) => (
              <div key={server.id} className="ent-server-card">
              <div className="ent-card-left">
                {/* Top Inner Grid Row */}
                <div className="ent-card-top">
                  <h3 className="ent-cpu-title">
                    {server.cpuModel} <span>| {server.cpuDetails}</span>
                  </h3>
                  <div className="ent-benchmark">{server.benchmark}</div>
                </div>

                {/* Bottom Inner Grid Row */}
                <div className="ent-card-metrics">
                  <div className="ent-metric-item">
                    <img
                      src={`https://flagcdn.com/w40/${server.countryCode}.png`}
                      className="ent-metric-flag"
                      alt="loc"
                    />
                    <div className="ent-metric-text">
                      <strong>{server.city}</strong>
                      <span>{server.country}</span>
                    </div>
                  </div>

                  <div className="ent-metric-item">
                    <MemoryStick size={24} className="ent-metric-icon" />
                    <div className="ent-metric-text">
                      <strong>{server.ram}</strong>
                      <span>Memory</span>
                    </div>
                  </div>

                  <div className="ent-metric-item">
                    <HardDrive size={24} className="ent-metric-icon" />
                    <div className="ent-metric-text">
                      <strong>{server.storage}</strong>
                      <span>Storage</span>
                    </div>
                  </div>

                  <div className="ent-metric-item">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ent-metric-icon"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                      <line x1="12" x2="12" y1="8" y2="16" />
                    </svg>
                    <div className="ent-metric-text">
                      <strong>{server.network}</strong>
                      <span>Port Speed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Action Block */}
              <div className="ent-card-right">
                <div className="ent-price-pill">
                  <div className="ent-price-val">
                    {server.price} <span>/ month</span>
                  </div>
                  <button className="btn-light ent-configure-btn">
                    Configure Server
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        </div>

        <div className="text-center" style={{ marginTop: "40px" }}>
          <button className="btn-outline ent-show-more">Show More</button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseServersList;
