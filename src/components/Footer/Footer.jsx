import React from "react";
import { XLogo, DiscordLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Top Header Row */}
        <div className="footer-top">
          <div className="footer-logo">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
              <polyline points="15,30 50,50 85,30" />
              <polyline points="15,50 50,70 85,50" />
            </svg>
            <span className="footer-logo-text">BYTEANIA</span>
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-link"><XLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><DiscordLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><InstagramLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><FacebookLogo size={28} weight="regular" /></a>
          </div>
        </div>

        {/* Links Grid Area */}
        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h4 className="footer-title">PRODUCTS</h4>
            <ul className="footer-list">
              <li><a href="#">Cost-Optimized Servers</a></li>
              <li><a href="#">Advance Dedicated Servers</a></li>
              <li><a href="#">Virtual Dedicated Servers</a></li>
              <li><a href="#">Colocation</a></li>
              <li><a href="#">Infrastructure Locations</a></li>
              <li><a href="#">Looking Glass</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Partnership Program</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Service Level Agreement</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Badges - explicitly requested for mobile preservation */}
        <div className="footer-badges mobile-only-badges">
          <img
            src="/iso_certificates.png"
            alt="ISO Certifications"
            className="iso-badges-img"
          />
        </div>

        {/* Bottom Address and Copyright */}
        <div className="footer-bottom">
          <p className="footer-address">
            Building A1, Dubai Silicon Oasis<br/>
            Dubai, United Arab Emirates
          </p>
          <p className="copyright-text">
            Copyright 2026 © Byteania. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
