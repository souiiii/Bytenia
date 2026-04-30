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
              <span>Network Status: Optimal</span>
            </div>
            
            <div className="status-metrics">
              <div className="metric">
                <span className="metric-label">Uptime</span>
                <span className="metric-value">99.99%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Global Latency</span>
                <span className="metric-value">&lt; 20ms</span>
              </div>
              <div className="metric">
                <span className="metric-label">Incident-Free</span>
                <span className="metric-value">412d</span>
              </div>
              <div className="metric">
                <span className="metric-label">Network Status</span>
                <span className="metric-value">Stable</span>
              </div>
            </div>
          </div>

          <div className="status-right">
            <div className="recent-activity-box">
              <span className="activity-title">Recent Activity</span>
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
