import React from 'react';
import { Cpu, Network, SlidersVertical, Component, Headset, Cloud } from 'lucide-react';
import './ServerHostFeatures.css';

const ServerHostFeatures = () => {
  return (
    <section className="sh-features-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        <div className="sh-features-header">
          <h2><strong>Engineered</strong> for Scale</h2>
          <p>
            Built from the ground up to support <strong>high-traffic hosting platforms and<br />
            enterprise SaaS providers.</strong>
          </p>
        </div>

        <div className="sh-features-grid">
          {/* Card 1 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <Cpu size={24} strokeWidth={1.5} />
            </div>
            <h3>Enterprise Hardware</h3>
            <p>
              Latest generation Ryzen and EPYC<br />
              processors paired with enterprise NVMe<br />
              Gen4 storage.
            </p>
            <ul className="sh-feature-list">
              <li>DDR5 ECC Memory</li>
              <li>Datacenter Grade SSDs</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <Network size={24} strokeWidth={1.5} />
            </div>
            <h3>Global Network</h3>
            <p>
              100Gbps core backbone with direct<br />
              peering to major Tier-1 providers and<br />
              exchanges.
            </p>
            <ul className="sh-feature-list">
              <li>0.5ms Intranet Latency</li>
              <li>Anycast IP Support</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <SlidersVertical size={24} strokeWidth={1.5} />
            </div>
            <h3>Dedicated Resources</h3>
            <p>
              Zero noisy neighbors. Get 100% of the<br />
              hardware performance, always.
            </p>
            <ul className="sh-feature-list">
              <li>No Virtualization Overhead</li>
              <li>Bare Metal Control</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <Component size={24} strokeWidth={1.5} />
            </div>
            <h3>Developer API</h3>
            <p>
              Full programmatic control over reboots,<br />
              OS reinstalls, and network settings.
            </p>
          </div>

          {/* Card 5 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <Headset size={20} strokeWidth={2} />
            </div>
            <h3>Expert Support</h3>
            <p>
              Direct access to L3 engineers who<br />
              understand infrastructure at scale.
            </p>
          </div>

          {/* Card 6 */}
          <div className="sh-feature-card">
            <div className="sh-feature-icon">
              <Cloud size={20} strokeWidth={2} />
            </div>
            <h3>ISO Certified</h3>
            <p>
              Compliant infrastructure meeting SOC2<br />
              and ISO 27001 security standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServerHostFeatures;
