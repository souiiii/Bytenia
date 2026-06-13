import React from 'react';
import { RefreshCw, CheckCircle, Clock, Gamepad2 } from 'lucide-react';
import './RustAdvancedFeatures.css';
import rustShooterImg from '../../assets/RustShooter.png';

const RustAdvancedFeatures = () => {
  return (
    <section className="rust-advanced-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Top Features Header */}
        <div className="rust-advanced-header">
          <h2>Why Choose Tempest?</h2>
          <p>
            WE OFFER EXCLUSIVE DEDICATED SERVERS THAT MAKE ALL THE DIFFERENCE IN THE SERVER<br/>EXPERIENCE.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="rust-advanced-cards">
          <div className="rust-adv-card">
            <div className="rust-adv-icon-wrapper icon-orange">
              <RefreshCw size={24} strokeWidth={2} />
            </div>
            <h3>Enterprise Hardware</h3>
            <p>
              High-performance dedicated servers<br/>
              powered by modern CPUs optimized<br/>
              for demanding Rust workloads.
            </p>
          </div>

          <div className="rust-adv-card">
            <div className="rust-adv-icon-wrapper icon-green">
              <CheckCircle size={24} strokeWidth={2} />
            </div>
            <h3>24/7 Support</h3>
            <p>
              Get direct help when issues hit,<br/>
              from our expert support team.<br/>
              Anytime. Day or night.
            </p>
          </div>

          <div className="rust-adv-card">
            <div className="rust-adv-icon-wrapper icon-blue">
              <Clock size={24} strokeWidth={2} />
            </div>
            <h3>Instant Provisioning</h3>
            <p>
              Dedicated infrastructure deployed<br/>
              rapidly with automated setup<br/>
              and fast delivery times.
            </p>
          </div>

          <div className="rust-adv-card">
            <div className="rust-adv-icon-wrapper icon-purple">
              <Gamepad2 size={24} strokeWidth={2} />
            </div>
            <h3>Advanced Security</h3>
            <p>
              Enterprise-grade DDoS mitigation,<br/>
              firewall protection and secure<br/>
              network architecture included.
            </p>
          </div>
        </div>

        {/* Bottom Technical Block */}
        <div className="rust-tech-block">
          <div className="rust-tech-left">
            <img src={rustShooterImg} alt="Rust Character" className="rust-tech-image" />
          </div>
          
          <div className="rust-tech-right">
            <div className="rust-tech-box">
              <h4>NVME RAID 1 REDUNDANCY</h4>
              <p>
                ALL PLAYER DATA IS MIRRORED ACROSS ENTERPRISE NVME DRIVES. IF ONE DRIVE<br/>
                FAILS, YOUR SERVER STAYS ONLINE WITHOUT A SINGLE BYTE OF DATA LOST.<br/>
                IMMEDIATE HOT-SWAPS AVAILABLE.
              </p>
            </div>

            <div className="rust-tech-box">
              <h4>ROOT ACCESS + ISO FLEXIBILITY</h4>
              <p>
                FULL CONTROL OVER YOUR ENVIRONMENT. DEPLOY ON WINDOWS SERVER 2022<br/>
                FOR NATIVE PERFORMANCE OR HARDENED DEBIAN/UBUNTU FOR TECHNICAL<br/>
                EFFICIENCY.
              </p>
            </div>

            <div className="rust-tech-metrics">
              <div className="rust-metric-box metric-dark">
                <span className="metric-val">2Tbps</span>
                <span className="metric-label">STORAGE CAPACITY</span>
              </div>
              <div className="rust-metric-box metric-light">
                <span className="metric-val">0.1ms</span>
                <span className="metric-label">NVME DELAY</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RustAdvancedFeatures;
