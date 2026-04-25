import React from 'react';
import './DayZControl.css';

const DayZControl = () => {
  return (
    <section className="dayz-control-section">
      <div className="container">
        <div className="dayz-control-grid">
          
          <div className="dayz-control-col left-col">
            <h2 className="dayz-control-title">ROOT LEVEL ACCESS</h2>
            <p className="dayz-control-desc">
              Full administrative control with no restrictions. Manage your server via SSH, SFTP, or terminal access, and customize your environment to fit your exact requirements.
            </p>
            
            <div className="dayz-terminal-block">
              <span className="term-cmd">systemctl status server-node</span>
              <span className="term-output">
                <span className="term-dot"></span> server-node.service — Core Server Instance
              </span>
              <span className="term-output">Active: active (running) since Mon 2024-05-20</span>
              <span className="term-output">CPU usage: 12% | RAM: 14.2GB / 32.0GB</span>
            </div>
          </div>

          <div className="dayz-control-col right-col">
            <h2 className="dayz-control-title">DEDICATED RESOURCES</h2>
            <p className="dayz-control-desc">
              All resources are fully dedicated to your server, ensuring consistent performance with no shared environments or resource contention.
            </p>
            
            <ul className="dayz-resource-list">
              <li>— NO_OS_RESTRICTIONS</li>
              <li>— VIRTIO_DRIVER_SUPPORT</li>
              <li>— CUSTOM_MOUNT_POINTS</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DayZControl;
