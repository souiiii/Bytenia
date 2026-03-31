import React from "react";
import {
  XLogo,
  DiscordLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Header Row for Desktop & Mobile Header */}
        <div className="footer-header">
          <div className="footer-logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="footer-logo-text">BYTENIA</span>
          </div>

          <div className="footer-socials desktop-socials">
            <a href="#" className="social-link">
              <XLogo size={28} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <DiscordLogo size={28} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <InstagramLogo size={28} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <FacebookLogo size={28} weight="regular" />
            </a>
          </div>

          <div className="footer-socials mobile-socials">
            <a href="#" className="social-link">
              <XLogo size={32} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <DiscordLogo size={32} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <InstagramLogo size={32} weight="regular" />
            </a>
            <a href="#" className="social-link">
              <FacebookLogo size={32} weight="regular" />
            </a>
          </div>
        </div>

        {/* Links Grid Area */}
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className="footer-title">PRODUCTS</h4>
            <ul className="footer-list">
              <li>
                <a href="#">Cost-Optimized Servers</a>
              </li>
              <li>
                <a href="#">Advance Dedicated Servers</a>
              </li>
              <li>
                <a href="#">Virtual Dedicated Servers</a>
              </li>
              <li>
                <a href="#">Colocation</a>
              </li>
              <li>
                <a href="#">Infrastructure Locations</a>
              </li>
              <li>
                <a href="#">Looking Glass</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Partnership Program</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Service Level Agreement</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges - visible predominantly in mobile spec but can scale into desktop naturally */}
        <div className="footer-badges">
          <img
            src="/iso_certificates.png"
            alt="ISO Certifications"
            className="iso-badges-img"
          />
        </div>

        {/* Bottom Address and Copyright */}
        <div className="footer-bottom">
          <p className="footer-address">
            Building A1, Dubai Silicon Oasis
            <br className="desktop-hide" />
            <span className="desktop-comma">, </span>Dubai, United Arab Emirates
          </p>
          <p className="copyright-text">
            Copyright 2026 © Bytenia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
