import React from 'react';
import './HytaleControl.css';

const HytaleControl = () => {
  return (
    <section className="hytale-control-section">
      <div className="container">
        <div className="hytale-control-grid">
          <div className="hytale-control-content">
            <h2 className="hytale-control-title">
              TOTAL CONTROL.<br />
              NO ABSTRACTIONS.
            </h2>
            
            <div className="hytale-feature-list">
              <div className="hytale-feature-item">
                <h4 className="hytale-feature-name">ROOT ACCESS</h4>
                <p className="hytale-feature-desc">
                  Full SSH/IPMI access to your bare-metal environment. Install your preferred Linux distro or custom kernels.
                </p>
              </div>
              <div className="hytale-feature-item">
                <h4 className="hytale-feature-name">KVM VIRTUALIZATION</h4>
                <p className="hytale-feature-desc">
                  Dedicated resources with zero overselling. Your hardware is yours alone, ensuring consistent frame rates.
                </p>
              </div>
              <div className="hytale-feature-item">
                <h4 className="hytale-feature-name">CUSTOM ISO SUPPORT</h4>
                <p className="hytale-feature-desc">
                  Mount any operating system image via the control panel for specialized server environments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="hytale-control-terminal-col">
            <div className="hytale-terminal-window">
              <div className="hytale-terminal-header">
                <span className="hytale-term-dot"></span>
                <span className="hytale-term-dot"></span>
                <span className="hytale-term-dot"></span>
              </div>
              <div className="hytale-terminal-body">
                <div className="hytale-term-line">
                  <span className="hytale-term-prompt">[sys_admin@hy-node-01 ~]$</span> hypervis -status
                </div>
                <div className="hytale-term-line">[OK] Core Frequency: 4.8GHz (Stable)</div>
                <div className="hytale-term-line">[OK] NVMe Array: RAID-10 (Optimal)</div>
                <div className="hytale-term-line">[OK] Net Traffic: 1.2Gbps / 10Gbps</div>
                <div className="hytale-term-line">[OK] Player Concurrency: 428/500</div>
                <br />
                <div className="hytale-term-line">
                  <span className="hytale-term-prompt">[sys_admin@hy-node-01 ~]$</span> provision --env=hytale-prod
                </div>
                <div className="hytale-term-line">&gt; Deploying bare-metal container...</div>
                <div className="hytale-term-line">&gt; Allocating 128GB ECC RAM...</div>
                <div className="hytale-term-line">&gt; Mapping Anycast IP 45.22.11.0...</div>
                <div className="hytale-term-line">&gt; Node provisioned in 12.4s.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HytaleControl;
