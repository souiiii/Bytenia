import React from 'react';
import './IntensiveWorkloads.css';

const workloads = [
  "High-Traffic E-commerce",
  "Big Data & Machine Learning",
  "SaaS & Cloud Infrastructure",
  "Gaming & Low-Latency Applications",
  "Video Streaming",
  "Large Database Deployments"
];

const IntensiveWorkloads = () => {
  return (
    <section className="workloads section">
      <div className="container">
        <div className="workloads-card">
          <div className="workloads-overlay"></div>
          <img 
            src="/intensive_workloads_bg.png" 
            alt="Servers Data Center" 
            className="workloads-bg-img" 
          />

          <div className="workloads-content">
            <h2 className="h2 text-white workloads-title">Designed for<br/>intensive workloads</h2>
            
            <div className="workloads-pills">
              {workloads.map((item, idx) => (
                <span key={idx} className="workload-pill">{item}</span>
              ))}
            </div>

            <p className="workloads-desc text-gray">
              Our high-performance infrastructure ensures maximum speed, consistency, and uptime for resource-demanding operations.
            </p>

            <button className="btn-primary workloads-btn">Talk to Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntensiveWorkloads;
