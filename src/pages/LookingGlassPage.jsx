import React, { useState } from 'react';
import { DownloadSimple, CaretDown } from '@phosphor-icons/react';
import './LookingGlassPage.css';

const datacenters = [
  { id: 'dallas', name: 'Dallas, US', location: 'Dallas, US', datacenter: 'Equinix DA1', ipv4: '192.168.10.1', ipv6: 'Not set', flag: 'us' },
  { id: 'chicago', name: 'Chicago, US', location: 'Chicago, US', datacenter: 'Equinix CH1', ipv4: '192.168.20.1', ipv6: 'Not set', flag: 'us' },
  { id: 'miami', name: 'Miami, US', location: 'Miami, US', datacenter: 'Equinix MI1', ipv4: '192.168.30.1', ipv6: 'Not set', flag: 'us' },
  { id: 'london', name: 'London, UK', location: 'London, UK', datacenter: 'Equinix LD1', ipv4: '185.15.15.1', ipv6: 'Not set', flag: 'gb' },
  { id: 'amsterdam', name: 'Amsterdam, NL', location: 'Amsterdam, NL', datacenter: 'Equinix AM1', ipv4: '185.10.10.1', ipv6: '2a01::1', flag: 'nl' },
  { id: 'frankfurt', name: 'Frankfurt, DE', location: 'Frankfurt, DE', datacenter: 'Equinix FR5', ipv4: '185.12.33.1', ipv6: '2a01:4f8::1', flag: 'de' },
  { id: 'sydney', name: 'Sydney, AU', location: 'Sydney, AU', datacenter: 'Equinix SY5', ipv4: '172.111.33.35', ipv6: 'Not set', flag: 'au' }
];

const LookingGlassPage = () => {
  const [selectedDc, setSelectedDc] = useState(datacenters[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [testType, setTestType] = useState('Ping');

  const handleSelectDc = (dc) => {
    setSelectedDc(dc);
    setDropdownOpen(false);
  };

  return (
    <>
      <main className="page-content lg-page">
        <div className="container lg-container">
          <div className="lg-card">
            
            <header className="lg-header">
              <h1 className="lg-title">Looking Glass</h1>
              <p className="lg-subtitle">
                Access live network diagnostics from our datacenters and evaluate Tempest's global backbone in real time.
              </p>
            </header>

            <div className="lg-body">
              
              <div className="lg-selector-wrapper">
                <div className="custom-select" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <div className="selected-value">
                    <img src={`https://flagcdn.com/w40/${selectedDc.flag}.png`} alt={selectedDc.flag} className="lg-flag" />
                    <span>{selectedDc.name}</span>
                  </div>
                  <CaretDown size={16} fill="white" />
                </div>
                {dropdownOpen && (
                  <div className="custom-options">
                    {datacenters.map((dc) => (
                      <div 
                        key={dc.id} 
                        className={`custom-option ${selectedDc.id === dc.id ? 'active' : ''}`}
                        onClick={() => handleSelectDc(dc)}
                      >
                        <img src={`https://flagcdn.com/w40/${dc.flag}.png`} alt={dc.flag} className="lg-flag" />
                        <span>{dc.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              
              <div className="lg-stats-box">
                <div className="lg-stat-item">
                  <span className="stat-value">{selectedDc.ipv4}</span>
                  <span className="stat-label">Test IPv4</span>
                </div>
                <div className="lg-stat-item">
                  <span className="stat-value">{selectedDc.ipv6}</span>
                  <span className="stat-label">Test IPv6</span>
                </div>
                <div className="lg-stat-item">
                  <span className="stat-value">{selectedDc.location}</span>
                  <span className="stat-label">Location</span>
                </div>
                <div className="lg-stat-item">
                  <span className="stat-value">{selectedDc.datacenter}</span>
                  <span className="stat-label">Datacenter</span>
                </div>
              </div>

              
              <div className="lg-section">
                <h3 className="lg-section-title">Test Files</h3>
                <div className="lg-files-row">
                  <button className="lg-file-btn">
                    <DownloadSimple size={20} />
                    <span>100M Test File</span>
                  </button>
                  <button className="lg-file-btn">
                    <DownloadSimple size={20} />
                    <span>1GB Test File</span>
                  </button>
                  <button className="lg-file-btn">
                    <DownloadSimple size={20} />
                    <span>5GB Test File</span>
                  </button>
                  <button className="lg-file-btn">
                    <DownloadSimple size={20} />
                    <span>10GB Test File</span>
                  </button>
                </div>
              </div>

              
              <div className="lg-section lg-actions-section">
                <h3 className="lg-section-title">Looking Glass</h3>
                <div className="lg-actions-row">
                  <input 
                    type="text" 
                    className="lg-input" 
                    placeholder="Enter Your IP or Hostname"
                  />
                  <div className="lg-action-select-wrapper">
                    <select 
                      className="lg-select" 
                      value={testType} 
                      onChange={(e) => setTestType(e.target.value)}
                    >
                      <option value="Ping">Ping</option>
                      <option value="Traceroute">Traceroute</option>
                      <option value="MTR">MTR</option>
                    </select>
                    <CaretDown size={14} className="lg-select-icon" />
                  </div>
                  <button className="lg-run-btn">Run</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
          </>
  );
};

export default LookingGlassPage;
