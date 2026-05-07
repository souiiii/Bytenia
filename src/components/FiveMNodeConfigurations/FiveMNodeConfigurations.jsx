import React, { useState } from 'react';
import './FiveMNodeConfigurations.css';

const nodes = [
  { id: 'Standard Node 01', cpu: 'Ryzen 5 7600X', ram: '32GB 5200MHz', priceMonthly: '79.99', priceHourly: '0.11' },
  { id: 'Advanced Node 02', cpu: 'Ryzen 7 7700X', ram: '64GB 5600MHz', priceMonthly: '119.99', priceHourly: '0.16' },
  { id: 'Extreme Node 03', cpu: 'Ryzen 9 7950X', ram: '128GB 5600MHz', priceMonthly: '189.99', priceHourly: '0.26' },
  { id: 'Elite Node 04', cpu: 'Intel i9 14900K', ram: '128GB 6000MHz', priceMonthly: '209.99', priceHourly: '0.29' },
  { id: 'Custom Node XX', cpu: 'Dual Epyc 9654', ram: '256GB ECC', priceMonthly: '499.99', priceHourly: '0.68' }
];

const FiveMNodeConfigurations = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  return (
    <section className="node-conf-section">
      <div className="container">
        
        <div className="node-conf-header">
          <div className="node-conf-titles">
            <h2>Node Configurations</h2>
            <p>DEPLOYMENT READY MODULES</p>
          </div>
          <div className="node-conf-toggles">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : 'inactive'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'hourly' ? 'active' : 'inactive'}`}
              onClick={() => setBillingCycle('hourly')}
            >
              Hourly
            </button>
          </div>
        </div>

        <div className="node-table">
          <div className="node-table-header">
            <div className="node-col">Configuration</div>
            <div className="node-col">CPU Type</div>
            <div className="node-col">Memory (DDR5)</div>
            <div className="node-col">Price</div>
            <div className="node-col">Deployment</div>
          </div>
          
          <div className="node-table-body">
            {nodes.map(node => (
              <div className="node-row" key={node.id}>
                <div className="node-col config-name">{node.id}</div>
                
                <div className="node-col">
                  <span className="mobile-label">CPU Type</span>
                  <span className="node-val">{node.cpu}</span>
                </div>
                
                <div className="node-col">
                  <span className="mobile-label">Memory (DDR5)</span>
                  <span className="node-val">{node.ram}</span>
                </div>
                
                <div className="node-col price-col">
                  <span className="mobile-label">Price</span>
                  <div className="price-wrapper">
                    <span className="price-val">
                      ${billingCycle === 'monthly' ? node.priceMonthly : node.priceHourly}
                    </span>
                    <span className="price-per">
                      / {billingCycle === 'monthly' ? 'Month' : 'Hour'}
                    </span>
                  </div>
                </div>
                
                <div className="node-col action-col">
                  <a href="#" className="select-server-btn">Select Server</a>
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
