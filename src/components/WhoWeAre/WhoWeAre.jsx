import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="who-we-are section">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        
        <h2 className="who-title">
          <strong>Who</strong> We Are
        </h2>
        
        <p className="who-text">
          As a leading provider of high-performance infrastructure, we recognize the critical 
          nature of seamless connectivity and premium server architectures. Our mission is to 
          deploy state-of-the-art datacenters and backbone connectivity, ensuring that your 
          business stays online globally. We believe our engineered solutions provide unmatched 
          stability, rapid deployment, and routing performance for high-demand networks.
        </p>

        <div className="mv-grid">
          
          <div className="mv-card">
            <h4 className="mv-card-title">Our Mission:</h4>
            <p className="mv-card-text">
              To provide top-tier bare metal and compute solutions leveraging industry-leading hardware and network capability.
            </p>
          </div>

          <div className="mv-card">
            <h4 className="mv-card-title">Our Vision:</h4>
            <p className="mv-card-text">
              To remain a globally recognized infrastructure backbone trusted for scaling high-growth enterprise architecture.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
