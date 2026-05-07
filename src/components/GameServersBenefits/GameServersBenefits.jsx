import React from 'react';
import './GameServersBenefits.css';

const GameServersBenefits = () => {
  return (
    <section className="game-servers-benefits-section">
      <div className="container">
        <h2 className="game-servers-benefits-title">
          <strong>Key</strong> Benefits
        </h2>
        
        <div className="game-servers-benefits-grid">
          <div className="game-servers-benefit-card">
            <h3 className="game-servers-benefit-card-title">Dedicated Performance</h3>
            <p className="game-servers-benefit-card-text">
              Single-tenant compute resources help deliver stronger consistency, predictable performance, and the headroom needed for demanding game environments and high-activity workloads.
            </p>
          </div>
          
          <div className="game-servers-benefit-card">
            <h3 className="game-servers-benefit-card-title">Built for Stability</h3>
            <p className="game-servers-benefit-card-text">
              Dedicated infrastructure reduces resource contention and helps maintain a more stable environment for latency-sensitive applications, persistent worlds, and multiplayer services.
            </p>
          </div>
          
          <div className="game-servers-benefit-card">
            <h3 className="game-servers-benefit-card-title">Flexible Control</h3>
            <p className="game-servers-benefit-card-text">
              Full server-level access gives you the freedom to choose your operating system, configure your environment, and tailor performance to the exact requirements of your deployment.
            </p>
          </div>
        </div>

        <div className="game-servers-usecases">
          <h3 className="game-servers-usecases-title">IDEAL USE CASES</h3>
          <div className="game-servers-usecases-grid">
            <div className="game-servers-usecase-pill">GAMING INFRASTRUCTURE</div>
            <div className="game-servers-usecase-pill">MULTIPLAYER HOSTING</div>
            <div className="game-servers-usecase-pill">MODDED ENVIRONMENTS</div>
            <div className="game-servers-usecase-pill">PRIVATE COMMUNITIES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameServersBenefits;
