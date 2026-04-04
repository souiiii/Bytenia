import React from 'react';
import './IntensiveWorkloads.css';

const workloads = [
  "FINANCIAL & PAYMENT SYSTEMS",
  "ERP & CORE BUSINESS APPLICATIONS",
  "DATABASES & HIGH-PERFORMANCE STORAGE",
  "PRIVATE CLOUD & VIRTUALIZATION PLATFORMS",
  "AI / ML & DATA PROCESSING",
  "HIGH-TRAFFIC DIGITAL PLATFORMS"
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
            <h2 className="workloads-title">
              <strong>Designed for</strong><br/>
              <span>Enterprise Workloads</span>
            </h2>
            
            <div className="workloads-pills">
              {workloads.map((item, idx) => (
                <span key={idx} className="workload-pill">{item}</span>
              ))}
            </div>

            <p className="workloads-desc text-gray">
              <strong>Our infrastructure experts can help you</strong> select the optimal server based on your workload,<br/>performance requirements, and growth plans.
            </p>

            <button className="btn-light workloads-btn" style={{backgroundColor: '#fff', color: '#111827', padding: '12px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem'}}>Contact Our Experts</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntensiveWorkloads;
