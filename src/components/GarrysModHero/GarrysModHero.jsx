import React from 'react';
import { Cpu, HardDrives, Memory, Shield } from '@phosphor-icons/react';
import './GarrysModHero.css';

const GarrysModHero = () => {
  return (
    <section className="garrys-hero">
      <div className="garrys-hero-bg"></div>
      
      <div className="container">
        <div className="garrys-hero-content">
          <div className="garrys-badge">
            <span className="garrys-badge-bullet">■</span> ARCHITECTURAL SCALE DEPLOYMENT
          </div>
          
          <h1 className="garrys-title">
            ENTERPRISE SERVERS<br />
            FOR GARRY'S MOD<br />
            WORKLOADS
          </h1>
          
          <p className="garrys-description">
            Run your Garry's Mod servers on high-performance dedicated infrastructure with full control, low latency, and reliable performance.
          </p>
          
          <div className="garrys-actions">
            <button className="garrys-btn-text">
              INITIALIZE<br />INSTANCE
            </button>
            <button className="garrys-btn-outline">
              VIEW HARDWARE<br />SPECS
            </button>
          </div>
        </div>
      </div>

      <div className="garrys-stats-bar">
        <div className="container garrys-stats-container">
          <div className="garrys-stat-item">
            <Cpu size={20} weight="regular" />
            <span className="garrys-stat-val">5.5GHz+</span>
            <span className="garrys-stat-label">Single Core Config</span>
          </div>
          
          <div className="garrys-stat-item">
            <HardDrives size={20} weight="regular" />
            <span className="garrys-stat-val">10Gbps</span>
            <span className="garrys-stat-label">Uplink Capacity</span>
          </div>
          
          <div className="garrys-stat-item">
            <Memory size={20} weight="regular" />
            <span className="garrys-stat-val">DDR5</span>
            <span className="garrys-stat-label">ECC Memory</span>
          </div>
          
          <div className="garrys-stat-item">
            <Shield size={20} weight="regular" />
            <span className="garrys-stat-val">L7</span>
            <span className="garrys-stat-label">Source Engine Mitigation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarrysModHero;
