import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Database, Network } from 'lucide-react';
import businessImg from '../../assets/business.png';
import './BusinessApplicationsWorkloads.css';

const workloadsData = [
  {
    icon: <Share2 size={20} strokeWidth={2} color="white" />,
    title: 'API & SaaS Platforms',
    desc: 'Handle millions of requests with sub-millisecond internal latency.'
  },
  {
    icon: <Database size={20} strokeWidth={2} color="white" />,
    title: 'Distributed Databases',
    desc: 'Optimize I/O performance with direct NVMe Gen4 storage arrays.'
  },
  {
    icon: <Network size={20} strokeWidth={2} color="white" />,
    title: '100Gbps Enterprise Network',
    desc: 'Ultra-fast 100Gbps connectivity for maximum performance and low latency.'
  }
];

const BusinessApplicationsWorkloads = () => {
  return (
    <section className="biz-app-workloads section">
      <div className="container">
        <div className="workloads-grid">
          
          <div className="workloads-content">
            <h2 className="h2 workloads-title">Built for the Workloads that Drive Business</h2>
            <p className="workloads-subtitle">
              Whether you're scaling a global API, hosting critical databases, or running AI training models, Tempest provides the power and isolation required for peak efficiency.
            </p>

            <div className="workloads-list">
              {workloadsData.map((item, idx) => (
                <div key={idx} className="workload-item">
                  <div className="workload-icon-box">
                    {item.icon}
                  </div>
                  <div className="workload-text">
                    <h4 className="workload-item-title">{item.title}</h4>
                    <p className="workload-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/connect" className="biz-app-btn-dark">
              Contact Our Experts
            </Link>
          </div>

          <div className="workloads-image-container">
            <div className="workloads-image-wrapper">
              <img src={businessImg} alt="Business Workloads" className="workloads-img" />
              
              <div className="realtime-badge">
                <span className="green-dot"></span>
                <span className="badge-text">REAL-TIME TELEMETRY ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsWorkloads;
