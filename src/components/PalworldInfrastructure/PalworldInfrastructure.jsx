import React from 'react';
import { Gauge, HardDrives, Shield, Globe } from '@phosphor-icons/react';
import './PalworldInfrastructure.css';

const PalworldInfrastructure = () => {
  return (
    <section className="palworld-infra-section">
      <div className="palworld-infra-top">
        <div className="container">
          <div className="palworld-infra-header">
            <h2 className="palworld-infra-title">CORE INFRASTRUCTURE</h2>
            <p className="palworld-infra-subtitle">
              HARDWARE LEVEL ABSTRACTION AND NETWORK<br />SECURITY PROTOCOLS.
            </p>
          </div>
          
          <div className="palworld-infra-grid">
            <div className="palworld-infra-card">
              <Gauge size={24} weight="bold" className="palworld-infra-icon" />
              <h3 className="palworld-infra-card-title">HF CPUS</h3>
              <p className="palworld-infra-card-desc">
                Ryzen 9 and EPYC Milan processors clocked at sustained high frequencies for simulation speed.
              </p>
            </div>

            <div className="palworld-infra-card">
              <HardDrives size={24} weight="bold" className="palworld-infra-icon" />
              <h3 className="palworld-infra-card-title">NVME SSDS</h3>
              <p className="palworld-infra-card-desc">
                Gen4 storage arrays providing sub-millisecond data retrieval for massive DayZ world states.
              </p>
            </div>

            <div className="palworld-infra-card">
              <Shield size={24} weight="bold" className="palworld-infra-icon" />
              <h3 className="palworld-infra-card-title">DDOS SHIELD</h3>
              <p className="palworld-infra-card-desc">
                L3-L7 mitigation designed specifically for UDP traffic patterns used in tactical simulations.
              </p>
            </div>

            <div className="palworld-infra-card">
              <Globe size={24} weight="bold" className="palworld-infra-icon" />
              <h3 className="palworld-infra-card-title">GLOBAL NET</h3>
              <p className="palworld-infra-card-desc">
                Tier-1 peering across 14 global points of presence to minimize route jitter and latency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="palworld-infra-bottom">
        <div className="container">
          <div className="palworld-stats-grid">
            <div className="palworld-stat-item">
              <span className="palworld-stat-val">99.98%</span>
              <span className="palworld-stat-label">VERIFIED UPTIME</span>
            </div>
            <div className="palworld-stat-item">
              <span className="palworld-stat-val">&lt; 15ms</span>
              <span className="palworld-stat-label">AVERAGE LATENCY</span>
            </div>
            <div className="palworld-stat-item">
              <span className="palworld-stat-val">STABLE</span>
              <span className="palworld-stat-label">SYSTEM STABILITY</span>
            </div>
            <div className="palworld-stat-item">
              <span className="palworld-stat-val">ACTIVE</span>
              <span className="palworld-stat-label">NETWORK STATUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalworldInfrastructure;
