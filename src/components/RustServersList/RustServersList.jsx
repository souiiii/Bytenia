import React, { useState } from "react";
import { MemoryStick, HardDrive, ArrowUpDown } from "lucide-react";
import "./RustServersList.css";

export const serversData = [
  {
    id: 1,
    cpuModel: "AMD Ryzen 7950X",
    cpuDetails: "16C / 32T @ 4.5GHz / 5.7GHz",
    benchmark: "Scored 46,130 on a CPU benchmark",
    countryCode: "nl",
    city: "Amsterdam",
    country: "Nederlands",
    ram: "128GB, Type DDR5",
    storage: "2x 2TB NVMe SSD",
    network: "10 Gbit",
    price: "$ 99.99",
  },
  {
    id: 2,
    cpuModel: "AMD Ryzen 7950X",
    cpuDetails: "16C / 32T @ 4.5GHz / 5.7GHz",
    benchmark: "Scored 46,130 on a CPU benchmark",
    countryCode: "nl",
    city: "Amsterdam",
    country: "Nederlands",
    ram: "128GB, Type DDR5",
    storage: "2x 2TB NVMe SSD",
    network: "10 Gbit",
    price: "$ 99.99",
  },
  {
    id: 3,
    cpuModel: "AMD Ryzen 7950X",
    cpuDetails: "16C / 32T @ 4.5GHz / 5.7GHz",
    benchmark: "Scored 46,130 on a CPU benchmark",
    countryCode: "nl",
    city: "Amsterdam",
    country: "Nederlands",
    ram: "128GB, Type DDR5",
    storage: "2x 2TB NVMe SSD",
    network: "10 Gbit",
    price: "$ 99.99",
  }
];

const filterLocations = [
  { id: "all", label: "All locations" },
  { id: "london", label: "London, UK", flag: "gb" },
  { id: "dallas", label: "Dallas, US", flag: "us" },
  { id: "sydney", label: "Sydney, AU", flag: "au" },
  { id: "chicago", label: "Chicago, US", flag: "us" },
  { id: "miami", label: "Miami, US", flag: "us" },
  { id: "amsterdam", label: "Amsterdam, NL", flag: "nl" },
  { id: "frankfurt", label: "Frankfurt, DE", flag: "de" },
];

const RustServersList = () => {
  const [activeLoc, setActiveLoc] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [cpuFilter, setCpuFilter] = useState("Show All");
  const [ramFilter, setRamFilter] = useState("Show All");
  const [storageFilter, setStorageFilter] = useState("Show All");
  const [sortOrder, setSortOrder] = useState("asc");

  const uniqueCPUs = ["Show All", ...new Set(serversData.map((s) => s.cpuModel))];
  const uniqueRAMs = ["Show All", ...new Set(serversData.map((s) => s.ram))];
  const uniqueStorages = ["Show All", ...new Set(serversData.map((s) => s.storage))];

  const filteredServers = serversData
    .filter((server) => {
      if (activeLoc !== "all" && server.city.toLowerCase() !== activeLoc) return false;
      if (cpuFilter !== "Show All" && server.cpuModel !== cpuFilter) return false;
      if (ramFilter !== "Show All" && server.ram !== ramFilter) return false;
      if (storageFilter !== "Show All" && server.storage !== storageFilter) return false;
      return true;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  return (
    <section className="rust-servers-list-section section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        <div className="text-center" style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 className="rust-servers-header">Dedicated Server Plans</h2>
          <p className="rust-servers-sub">
            High-performance infrastructure configurations engineered for enterprise<br/>hosting workloads.
          </p>
        </div>

        <div className="rust-location-filters">
          {filterLocations.map((loc) => (
            <button
              key={loc.id}
              className={`rust-loc-pill ${activeLoc === loc.id ? "active" : ""}`}
              onClick={() => setActiveLoc(loc.id)}
            >
              {loc.flag && (
                <img
                  src={`https://flagcdn.com/w40/${loc.flag}.png`}
                  alt={loc.flag}
                  className="rust-flag-icon"
                />
              )}
              {loc.label}
            </button>
          ))}
        </div>

        <div className="rust-selectors-row">
          <div className="rust-selectors-group">
            <div className="rust-select-box">
              <label>CPU</label>
              <select value={cpuFilter} onChange={(e) => setCpuFilter(e.target.value)}>
                {uniqueCPUs.map((cpu) => (
                  <option key={cpu} value={cpu}>{cpu}</option>
                ))}
              </select>
            </div>
            <div className="rust-select-box">
              <label>RAM</label>
              <select value={ramFilter} onChange={(e) => setRamFilter(e.target.value)}>
                {uniqueRAMs.map((ram) => (
                  <option key={ram} value={ram}>{ram}</option>
                ))}
              </select>
            </div>
            <div className="rust-select-box">
              <label>Storage</label>
              <select value={storageFilter} onChange={(e) => setStorageFilter(e.target.value)}>
                {uniqueStorages.map((storage) => (
                  <option key={storage} value={storage}>{storage}</option>
                ))}
              </select>
            </div>
          </div>

          <div
            className="rust-sort-box"
            onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
          >
            <span>Sort by:</span>
            <strong>{sortOrder === "asc" ? "Low Price" : "High Price"}</strong>
            <ArrowUpDown size={16} strokeWidth={2.5} />
          </div>
        </div>

        <div className="rust-server-cards">
          {filteredServers.length === 0 ? (
            <div className="text-center" style={{ padding: "60px 0", color: "#6b7280", textAlign: "center" }}>
              No servers match your current filter criteria.
            </div>
          ) : (
            (isExpanded ? filteredServers : filteredServers.slice(0, 5)).map((server) => (
              <div key={server.id} className="rust-server-card">
                <div className="rust-card-left">
                  <div className="rust-card-top">
                    <h3 className="rust-cpu-title">
                      {server.cpuModel} <span>| {server.cpuDetails}</span>
                    </h3>
                    <div className="rust-benchmark">{server.benchmark}</div>
                  </div>

                  <div className="rust-card-metrics">
                    <div className="rust-metric-item">
                      <img src={`https://flagcdn.com/w40/${server.countryCode}.png`} className="rust-metric-flag" alt="loc" />
                      <div className="rust-metric-text">
                        <strong>{server.city}</strong>
                        <span>{server.country}</span>
                      </div>
                    </div>

                    <div className="rust-metric-item">
                      <MemoryStick size={24} className="rust-metric-icon" />
                      <div className="rust-metric-text">
                        <strong>{server.ram}</strong>
                        <span>Memory</span>
                      </div>
                    </div>

                    <div className="rust-metric-item">
                      <HardDrive size={24} className="rust-metric-icon" />
                      <div className="rust-metric-text">
                        <strong>{server.storage}</strong>
                        <span>Storage</span>
                      </div>
                    </div>

                    <div className="rust-metric-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rust-metric-icon">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <line x1="8" x2="16" y1="12" y2="12" />
                        <line x1="12" x2="12" y1="8" y2="16" />
                      </svg>
                      <div className="rust-metric-text">
                        <strong>{server.network}</strong>
                        <span>Port Speed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rust-card-right">
                  <div className="rust-price-pill">
                    <div className="rust-price-val">
                      {server.price} <span>/ month</span>
                    </div>
                    <button className="rust-configure-btn">Configure Server</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {filteredServers.length > 5 && (
          <div className="text-center" style={{ marginTop: "40px", textAlign: "center" }}>
            <button className="rust-show-more" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Hide Servers" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RustServersList;
