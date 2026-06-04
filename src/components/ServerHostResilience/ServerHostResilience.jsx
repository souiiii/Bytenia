import React from 'react';
import { LineChart, Gauge, Database } from 'lucide-react';
import './ServerHostResilience.css';
import tempestControllerImg from '../../assets/tempest-controller.png';

const ServerHostResilience = () => {
  return (
    <section className="sh-resilience-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="sh-resilience-grid">
          
          <div className="sh-resilience-content">
            <h2>Built for Multi-Tenant Resilience</h2>
            
            <div className="sh-resilience-items">
              {/* Item 1 */}
              <div className="sh-resilience-item">
                <div className="sh-resilience-icon-wrapper">
                  <LineChart size={18} strokeWidth={1.5} />
                </div>
                <div className="sh-resilience-text">
                  <h3>Real-time Telemetry</h3>
                  <p>Access deep insights into hardware health, network throughput,<br/>and power consumption from a single dashboard.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="sh-resilience-item">
                <div className="sh-resilience-icon-wrapper">
                  <Gauge size={18} strokeWidth={1.5} />
                </div>
                <div className="sh-resilience-text">
                  <h3>Burst-Ready Networking</h3>
                  <p>Every server is connected via 10Gbps uplinks with unmetered<br/>bandwidth options to handle sudden traffic spikes.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="sh-resilience-item">
                <div className="sh-resilience-icon-wrapper">
                  <Database size={18} strokeWidth={1.5} />
                </div>
                <div className="sh-resilience-text">
                  <h3>Inventory Management</h3>
                  <p>Scale your customer base by instantly spinning up new chassis<br/>across our global footprint.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sh-resilience-image">
            <div className="mac-window">
              <div className="mac-window-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="mac-title">TEMPEST CONTROLLER V2.4</div>
              </div>
              <img src={tempestControllerImg} alt="Tempest Controller Dashboard" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServerHostResilience;
