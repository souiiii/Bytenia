import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import './FiveMWorkloads.css';

const FiveMWorkloads = () => {
  return (
    <section className="fivem-workloads-section">
      <div className="container">
        <div className="fivem-workloads-wrapper">
          
          <div className="workloads-left">
            <h2>High Performance<br/>FiveM Workloads</h2>
            <p>
              Built on powerful dedicated infrastructure designed to handle high player counts, intensive scripts, and demanding server environments with stability.
            </p>
            <ul className="workloads-list">
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                High Frequency CPUs
              </li>
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                NVMe SSD Storage
              </li>
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                Optimized Network Routing
              </li>
            </ul>
          </div>

          <div className="workloads-right">
            <div className="workload-card">
              <h3>Full Root Access</h3>
              <p>Complete control over your server environment and configurations.</p>
            </div>
            <div className="workload-card">
              <h3>Global Network</h3>
              <p>Low latency connections with worldwide data center availability.</p>
            </div>
            <div className="workload-card">
              <h3>Dedicated<br/>Resources</h3>
              <p>No shared hardware, ensuring consistent performance at all times.</p>
            </div>
            <div className="workload-card">
              <h3>Custom<br/>Configuration</h3>
              <p>Flexible setup tailored to your specific workload needs.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FiveMWorkloads;
