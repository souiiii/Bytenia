import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import './FiveMWorkloads.css';

const FiveMWorkloads = () => {
  return (
    <section className="fivem-workloads-section">
      <div className="container">
        <div className="fivem-workloads-wrapper">
          
          <div className="workloads-left">
            <h2>HIGH PERFORMANCE<br/>FIVEM WORKLOADS</h2>
            <p>
              Built on powerful dedicated infrastructure designed to handle high player counts, intensive scripts, and demanding server environments with stability.
            </p>
            <ul className="workloads-list">
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                HIGH FREQUENCY CPUS
              </li>
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                NVMe SSD STORAGE
              </li>
              <li>
                <CheckCircle size={22} weight="regular" color="#fff" />
                OPTIMIZED NETWORK ROUTING
              </li>
            </ul>
          </div>

          <div className="workloads-right">
            <div className="workload-card">
              <h3>FULL ROOT ACCESS</h3>
              <p>Complete control over your server environment and configurations.</p>
            </div>
            <div className="workload-card">
              <h3>GLOBAL NETWORK</h3>
              <p>Low latency connections with worldwide data center availability.</p>
            </div>
            <div className="workload-card">
              <h3>DEDICATED<br/>RESOURCES</h3>
              <p>No shared hardware, ensuring consistent performance at all times.</p>
            </div>
            <div className="workload-card">
              <h3>CUSTOM<br/>CONFIGURATION</h3>
              <p>Flexible setup tailored to your specific workload needs.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FiveMWorkloads;
