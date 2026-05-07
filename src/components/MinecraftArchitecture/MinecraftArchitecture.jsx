import React from 'react';
import './MinecraftArchitecture.css';

const MinecraftArchitecture = () => {
  return (
    <section className="mc-arch section">
      <div className="container">
        <div className="mc-arch-header">
          <span className="mc-arch-super">OPERATIONAL MODES</span>
          <h2 className="mc-arch-title">Architecture Alignment.</h2>
        </div>

        <div className="mc-arch-content">
          
          {/* Row 1 */}
          <div className="mc-arch-row">
            <div className="mc-arch-half left title-half">
              <div className="mc-arch-heading-box">
                <span className="mc-arch-num">01</span>
                <h3 className="mc-arch-box-title">RPG Networks</h3>
              </div>
            </div>
            <div className="mc-arch-divider"></div>
            <div className="mc-arch-half right text-half">
              <p>
                Massive world maps and heavy plugin stacks require high-clock CPUs and high RAM availability. Our Ryzen infrastructure ensures that chunk-loading and complex world scripts never cause TPS drops. High NVMe IOPS prevent database bottlenecks during player data saves.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mc-arch-row">
            <div className="mc-arch-half left text-half align-right">
              <p>
                For large-scale simulations or pre-generation tasks, leverage our KVM architecture to run headless compute nodes. Deploy multiple instances in a private local network with 10Gbps cross-node communication for distributed processing tasks.
              </p>
            </div>
            <div className="mc-arch-divider"></div>
            <div className="mc-arch-half right title-half">
              <div className="mc-arch-heading-box">
                <span className="mc-arch-num">02</span>
                <h3 className="mc-arch-box-title">Compute Clusters</h3>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="mc-arch-row">
            <div className="mc-arch-half left title-half">
              <div className="mc-arch-heading-box">
                <span className="mc-arch-num">03</span>
                <h3 className="mc-arch-box-title">Global Proxies</h3>
              </div>
            </div>
            <div className="mc-arch-divider"></div>
            <div className="mc-arch-half right text-half">
              <p>
                Deploy lightweight proxy instances (BungeeCord/Velocity) in our low-latency edge locations. Native DDoS scrubbing and Anycast IP options ensure your network remains online even under heavy volumetric attack vectors.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MinecraftArchitecture;
