import React from 'react';
import './MinecraftHero.css';

const MinecraftHero = () => {
  return (
    <header className="minecraft-hero section">
      <div className="minecraft-hero-bg">
      </div>
      
      <div className="container">
        <div className="minecraft-hero-content">
          <div className="minecraft-super-title">
            <span className="super-title-icon">+</span>
            HIGH PERFORMANCE MINECRAFT SERVERS
            <span className="super-title-icon">+</span>
          </div>
          
          <h1 className="minecraft-title">
            The Ultimate<br />Servers for Minecraft
          </h1>
          
          <p className="minecraft-description">
            Launch your Minecraft server instantly with powerful dedicated<br />
            hardware, low latency, and full mod support.
          </p>
          
          <div className="minecraft-actions">
            <button className="minecraft-btn btn-primary">GET STARTED</button>
            <button className="minecraft-btn btn-secondary">VIEW PLANS</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinecraftHero;
