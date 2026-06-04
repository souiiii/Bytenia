import React from 'react';
import './RustProvisionBanner.css';
import shapeSvg from '../../assets/shape.svg';

const RustProvisionBanner = () => {
  return (
    <section className="rust-provision-section">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="rust-provision-banner">
          <div className="rust-provision-left">
            <img src={shapeSvg} alt="Tempest Cloud Shape" className="rust-provision-shape" />
          </div>
          <div className="rust-provision-right">
            <h2>
              PROVISION YOUR<br/>
              INFRASTRUCTURE
            </h2>
            <p>AVG. PROVISIONING TIME: 14M 22S ACROSS ALL REGIONS.</p>
            <button className="btn-provision">START DEPLOYMENT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RustProvisionBanner;
