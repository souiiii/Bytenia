import React from 'react';
import { Link } from 'react-router-dom';
import './ServerHostPage.css';
import ServerHostFeatures from '../components/ServerHostFeatures/ServerHostFeatures';
import ServerHostResilience from '../components/ServerHostResilience/ServerHostResilience';
import DedicatedServerPlans from '../components/DedicatedServerPlans/DedicatedServerPlans';
import ServerHostSpecs from '../components/ServerHostSpecs/ServerHostSpecs';
import ServerHostFAQ from '../components/ServerHostFAQ/ServerHostFAQ';
import ServerHostCTA from '../components/ServerHostCTA/ServerHostCTA';

const ServerHostPage = () => {
  return (
    <div className="server-host-page">
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <section className="server-host-hero">
          <div className="server-host-hero-content">
            <h1>
              Enterprise Dedicated Servers for<br />
              Modern Hosting
            </h1>
            <p>
              Deploy high-performance workloads with DDoS protection, 10Gbps connectivity, and the world's<br />
              most reliable hardware stack.
            </p>
            <div className="server-host-actions">
              <button className="sh-btn-primary">View Network Map</button>
              <Link to="/connect" className="sh-btn-outline" style={{ textDecoration: 'none', boxSizing: 'border-box' }}>Contact Our Experts</Link>
            </div>
          </div>
        </section>
      </div>

      <ServerHostFeatures />
      <ServerHostResilience />
      <DedicatedServerPlans />
      <ServerHostSpecs />
      <ServerHostFAQ />
      <ServerHostCTA />
    </div>
  );
};

export default ServerHostPage;
