import React from 'react';
import './HytaleTechnicalFAQ.css';

const HytaleTechnicalFAQ = () => {
  return (
    <section className="hytale-tech-faq-section">
      <div className="container">
        <h2 className="hytale-tech-faq-title">TECHNICAL FAQ</h2>
        
        <div className="hytale-tech-faq-grid">
          <div className="hytale-tech-faq-block">
            <h4 className="hytale-tech-faq-q">DO YOU PROVIDE IPMI ACCESS?</h4>
            <p className="hytale-tech-faq-a">
              Yes. Every dedicated server includes out-of-band IPMI access for remote console, power management, and virtual media mounting without OS dependencies.
            </p>
          </div>
          
          <div className="hytale-tech-faq-block">
            <h4 className="hytale-tech-faq-q">WHAT IS YOUR BGP PEERING STRATEGY?</h4>
            <p className="hytale-tech-faq-a">
              We maintain an open peering policy with major IXPs globally. Our network automatically routes via the shortest AS-path to minimize inter-region latency.
            </p>
          </div>
          
          <div className="hytale-tech-faq-block">
            <h4 className="hytale-tech-faq-q">HOW LONG ARE HARDWARE REPLACEMENT CYCLES?</h4>
            <p className="hytale-tech-faq-a">
              All enterprise hardware is phased out every 36 months to ensure maximum reliability and access to the latest instruction sets and efficiency gains.
            </p>
          </div>
          
          <div className="hytale-tech-faq-block">
            <h4 className="hytale-tech-faq-q">CAN I BRING MY OWN IPV4/IPV6 BLOCKS?</h4>
            <p className="hytale-tech-faq-a">
              Yes. We support BGP session establishment for customers who wish to announce their own IP ranges across our network fabric.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HytaleTechnicalFAQ;
