import React from "react";
import { Link } from "react-router-dom";
import "./WebAndEmailHero.css";

const WebAndEmailHero = () => {
  return (
    <header className="web-email-hero section">
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
      >
        <div className="web-email-hero-card">
          <div className="web-email-hero-content">
            <h1 className="web-email-hero-title">
              Reliable Infrastructure for
              <br />
              Business Websites & Email
            </h1>
            <p className="web-email-hero-description">
              Deploy secure web and email services on enterprise-grade dedicated
              infrastructure with
              <br />
              predictable pricing and advanced network protection.
            </p>
            <div className="web-email-hero-actions">
              <Link to="/" className="web-email-btn-primary">
                Get Started
              </Link>
              <Link to="/connect" className="web-email-btn-outline">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WebAndEmailHero;
