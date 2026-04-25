import React from 'react';
import './FiveMNodeConfigurations.css';

const nodes = [
  { id: 'STANDARD_NODE_01', cpu: 'RYZEN 5 7600X', ram: '32GB 5200MHZ', price: '79.99' },
  { id: 'ADVANCED_NODE_02', cpu: 'RYZEN 7 7700X', ram: '64GB 5600MHZ', price: '119.99' },
  { id: 'EXTREME_NODE_03', cpu: 'RYZEN 9 7950X', ram: '128GB 5600MHZ', price: '189.99' },
  { id: 'ELITE_NODE_04', cpu: 'INTEL I9 14900K', ram: '128GB 6000MHZ', price: '209.99' },
  { id: 'CUSTOM_NODE_XX', cpu: 'DUAL EPYC 9654', ram: '256GB ECC', price: '499.99' }
];

const FiveMNodeConfigurations = () => {
  return (
    <section className="node-conf-section">
      <div className="container">
        
        <div className="node-conf-header">
          <div className="node-conf-titles">
            <h2>NODE_CONFIGURATIONS</h2>
            <p>DEPLOYMENT_READY_MODULES</p>
          </div>
          <div className="node-conf-toggles">
            <button className="toggle-btn inactive">MONTHLY</button>
            <button className="toggle-btn active">HOURLY</button>
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
                    <span className="price-val">${node.price}</span>
                    <span className="price-per">/ MONTH</span>
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
