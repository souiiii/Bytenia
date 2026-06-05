import React from 'react';
import { Banknote, Cpu, Network, Server, Share2, Shield } from 'lucide-react';
import './BusinessApplicationsFeatures.css';

const featuresData = [
  {
    icon: <Banknote size={24} strokeWidth={1.5} />,
    title: 'Predictable Costs',
    desc: 'Transparent pricing with no hidden bandwidth fees or egress charges. Perfect for high-utilization SaaS applications.'
  },
  {
    icon: <Cpu size={24} strokeWidth={1.5} />,
    title: 'Enterprise Reliability',
    desc: 'N+1 redundant power and cooling systems ensure your compute resources remain online through any maintenance event.'
  },
  {
    icon: <Network size={24} strokeWidth={1.5} />,
    title: 'High Performance',
    desc: 'Direct connections to major Tier 1 carriers and global peering exchanges for minimum hop counts and jitter.'
  },
  {
    icon: <Server size={24} strokeWidth={1.5} />,
    title: 'Dedicated Compute',
    desc: 'Get 100% of the hardware performance with root access and IPMI/KVM-over-IP.'
  },
  {
    icon: <Share2 size={24} strokeWidth={1.5} />,
    title: 'Redundant Infrastructure',
    desc: 'Multi-region deployments made easy with private VLANs and cross-connect capabilities for high-availability setups.'
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: 'Secure Connectivity',
    desc: 'Enterprise firewalls and dedicated VPN tunnels to connect your Tempest infrastructure to your on-prem systems.'
  }
];

const BusinessApplicationsFeatures = () => {
  return (
    <section className="biz-app-features section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="h2" style={{marginBottom: '16px'}}>
            <strong>Engineered</strong> <span style={{fontWeight: 300}}>for Performance</span>
          </h2>
          <p className="subtitle" style={{maxWidth: '700px', margin: '0 auto'}}>
            The foundation for modern enterprise architectures.<br/>
            We remove complexity from <strong>high-end dedicated workloads.</strong>
          </p>
        </div>

        <div className="biz-app-features-grid">
          {featuresData.map((item, idx) => (
            <div key={idx} className="biz-app-feature-card">
              <div className="biz-app-feature-icon">{item.icon}</div>
              <h4 className="biz-app-feature-title">{item.title}</h4>
              <p className="biz-app-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessApplicationsFeatures;
