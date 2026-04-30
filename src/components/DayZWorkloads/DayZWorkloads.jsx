import React from 'react';
import './DayZWorkloads.css';

const DayZWorkloads = () => {
  return (
    <section className="dayz-workloads-section">
      <div className="container">
        <div className="dayz-workloads-grid">
          
          <div className="dayz-wl-card">
            <h3 className="dayz-wl-title">High Capacity Workloads</h3>
            <p className="dayz-wl-desc">
              Optimized to handle intensive workloads, high data throughput, and demanding server operations with consistent performance.
            </p>
          </div>

          <div className="dayz-wl-card">
            <h3 className="dayz-wl-title">Scalable Performance</h3>
            <p className="dayz-wl-desc">
              Built to support high resource usage, complex processes, and large-scale server environments without performance drops.
            </p>
          </div>

          <div className="dayz-wl-card">
            <h3 className="dayz-wl-title">Enterprise Workload Support</h3>
            <p className="dayz-wl-desc">
              Designed for performance-critical applications requiring stability, availability, and efficient resource handling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DayZWorkloads;
