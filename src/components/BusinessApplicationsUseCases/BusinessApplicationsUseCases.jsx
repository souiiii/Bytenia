import React from 'react';
import './BusinessApplicationsUseCases.css';

const useCasesData = [
  {
    title: 'SaaS Platforms',
    desc: 'Infrastructure that grows with your customer base without performance degradation.'
  },
  {
    title: 'Enterprise APIs',
    desc: 'High-availability endpoints with consistent global response times.'
  },
  {
    title: 'Database Clusters',
    desc: 'Optimized I/O for heavy database workloads and distributed systems.'
  },
  {
    title: 'Virtual Machines',
    desc: 'The ideal foundation for private cloud and virtualized environments.'
  },
  {
    title: 'Internal Systems',
    desc: 'Secure hosting for mission-critical internal business applications.'
  },
  {
    title: 'AI & Data Processing',
    desc: 'Massive throughput and compute power for training and inference models.'
  }
];

const statsData = [
  { value: '100%', label: 'NETWORK SLA' },
  { value: '99.9%', label: 'UPTIME HISTORY' },
  { value: '24/7', label: 'ACTIVE NOC' },
  { value: 'Global', label: 'INFRASTRUCTURE PRESENCE' }
];

const BusinessApplicationsUseCases = () => {
  return (
    <section className="biz-app-usecases section">
      <div className="container">
        <h2 className="usecases-title">
          <strong>Enterprise</strong> Use Cases
        </h2>

        <div className="usecases-grid">
          {useCasesData.map((item, idx) => (
            <div key={idx} className="usecase-card">
              <h4 className="usecase-card-title">{item.title}</h4>
              <p className="usecase-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="usecases-stats">
          {statsData.map((stat, idx) => (
            <div key={idx} className="usecase-stat-item">
              <div className="usecase-stat-value">{stat.value}</div>
              <div className="usecase-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsUseCases;
