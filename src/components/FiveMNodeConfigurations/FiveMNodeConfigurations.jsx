import React, { useState } from 'react';
import './FiveMNodeConfigurations.css';

const nodes = [
  { id: 'STANDARD_NODE_01', cpu: 'RYZEN 5 7600X', ram: '32GB 5200MHZ', priceMonthly: '79.99', priceHourly: '0.11' },
  { id: 'ADVANCED_NODE_02', cpu: 'RYZEN 7 7700X', ram: '64GB 5600MHZ', priceMonthly: '119.99', priceHourly: '0.16' },
  { id: 'EXTREME_NODE_03', cpu: 'RYZEN 9 7950X', ram: '128GB 5600MHZ', priceMonthly: '189.99', priceHourly: '0.26' },
  { id: 'ELITE_NODE_04', cpu: 'INTEL I9 14900K', ram: '128GB 6000MHZ', priceMonthly: '209.99', priceHourly: '0.29' },
  { id: 'CUSTOM_NODE_XX', cpu: 'DUAL EPYC 9654', ram: '256GB ECC', priceMonthly: '499.99', priceHourly: '0.68' }
];

const FiveMNodeConfigurations = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  return (
    <section className="node-conf-section">
      <div className="container">
        
        <div className="node-conf-header">
          <div className="node-conf-titles">
            <h2>NODE_CONFIGURATIONS</h2>
            <p>DEPLOYMENT_READY_MODULES</p>
          </div>
          <div className="node-conf-toggles">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : 'inactive'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              MONTHLY
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'hourly' ? 'active' : 'inactive'}`}
              onClick={() => setBillingCycle('hourly')}
            >
              HOURLY
            </button>
          </div>
        </div>

        <div className="node-table">
          <div className="node-table-header">
            <div className="node-col">CONFIGURATION</div>
            <div className="node-col">CPU TYPE</div>
            <div className="node-col">MEMORY (DDR5)</div>
            <div className="node-col">PRICE</div>
            <div className="node-col">DEPLOYMENT</div>
          </div>
          
          <div className="node-table-body">
            {nodes.map(node => (
              <div className="node-row" key={node.id}>
                <div className="node-col config-name">{node.id}</div>
                
                <div className="node-col">
                  <span className="mobile-label">CPU TYPE</span>
                  <span className="node-val">{node.cpu}</span>
                </div>
                
                <div className="node-col">
                  <span className="mobile-label">MEMORY (DDR5)</span>
                  <span className="node-val">{node.ram}</span>
                </div>
                
                <div className="node-col price-col">
                  <span className="mobile-label">PRICE</span>
                  <div className="price-wrapper">
                    <span className="price-val">
                      ${billingCycle === 'monthly' ? node.priceMonthly : node.priceHourly}
                    </span>
                    <span className="price-per">
                      / {billingCycle === 'monthly' ? 'MONTH' : 'HOUR'}
                    </span>
                  </div>
                </div>
                
                <div className="node-col action-col">
                  <a href="#" className="select-server-btn">SELECT SERVER</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FiveMNodeConfigurations;
