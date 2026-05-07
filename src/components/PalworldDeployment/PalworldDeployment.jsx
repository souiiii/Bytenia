import React from 'react';
import './PalworldDeployment.css';

const PalworldDeployment = () => {
  return (
    <section className="palworld-deployment-section">
      <div className="container">
        <div className="palworld-deployment-grid">
          
          <div className="palworld-deploy-col left-col">
            <div className="palworld-terminal-wrapper">
              <div className="palworld-terminal-window">
                <p className="term-line cmd">root@infra-01:~# systemctl status server-node</p>
                <p className="term-line status">
                  <span className="term-dot"></span> server-node.service - Core Server Instance
                </p>
                <p className="term-line">Loaded: loaded (/etc/systemd/system/server-node.service; enabled; vendor preset: enabled)</p>
                <p className="term-line">Active: active (running) since Mon 2024-05-20 14:23:11 UTC; 4 days ago</p>
                <p className="term-line">Main PID: 1245 (server-process)</p>
                <p className="term-line">Tasks: 42 (limit: 4915)</p>
                <p className="term-line">Memory: 8.4G</p>
                <p className="term-line">CGroup: /system.slice/server-node.service</p>
                <p className="term-line indent">└─1245 ./server-process --config=server.conf --port=2302</p>
              </div>
            </div>
          </div>

          <div className="palworld-deploy-col right-col">
            <h2 className="palworld-deploy-title">Deployment Flexibility</h2>
            <p className="palworld-deploy-desc">
              Whether you're running standard applications or complex, high-demand workloads, our infrastructure adapts to your exact requirements with full flexibility.
            </p>
            
            <div className="palworld-os-grid">
              <div className="palworld-os-block">
                <h3 className="palworld-os-title">Linux Native</h3>
                <p className="palworld-os-desc">
                  Support for Ubuntu, Debian, and CentOS, optimized for performance, stability, and minimal overhead.
                </p>
              </div>
              <div className="palworld-os-block">
                <h3 className="palworld-os-title">Windows Server</h3>
                <p className="palworld-os-desc">
                  Dedicated environments for applications requiring Windows-based systems, tools, or specific dependencies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PalworldDeployment;
