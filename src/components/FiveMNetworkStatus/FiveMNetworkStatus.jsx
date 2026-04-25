import React from 'react';
import './FiveMNetworkStatus.css';

const FiveMNetworkStatus = () => {
  return (
    <section className="fivem-network-status-section">
      <div className="container">
        <div className="network-status-bar">
          
          <div className="status-left">
            <div className="status-header">
              <div className="status-indicator"></div>
              <span>NETWORK_STATUS: OPTIMAL</span>
            </div>
            
            <div className="status-metrics">
              <div className="metric">
                <span className="metric-label">UPTIME</span>
                <span className="metric-value">99.99%</span>
              </div>
              <div className="metric">
                <span className="metric-label">GLOBAL LATENCY</span>
                <span className="metric-value">&lt; 20ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">INCIDENT-FREE</span>
                <span className="metric-value">412d</span>
              </div>
              <div className="metric">
                <span className="metric-label">NETWORK STATUS</span>
                <span className="metric-value">STABLE</span>
              </div>
            </div>
          </div>

          <div className="status-right">
            <div className="recent-activity-box">
              <span className="activity-title">RECENT ACTIVITY</span>
              <ul className="activity-log">
                <li>[12:48] Network stable across all regions</li>
                <li>[12:32] Traffic optimized successfully</li>
                <li>[12:10] No incidents detected</li>
                <li className="log-muted">Monitoring active...</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FiveMNetworkStatus;
