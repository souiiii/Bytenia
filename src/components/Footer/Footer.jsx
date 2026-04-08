import React from "react";
import { XLogo, DiscordLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg';
import Cert0 from '../../assets/certificate-0.png';
import Cert1 from '../../assets/certificate-1.png';
import Cert2 from '../../assets/certificate-2.png';
import Cert3 from '../../assets/certificate-3.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Logo} alt="Tempest Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-link"><XLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><DiscordLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><InstagramLogo size={28} weight="regular" /></a>
            <a href="#" className="social-link"><FacebookLogo size={28} weight="regular" /></a>
          </div>
        </div>

        
        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h4 className="footer-title">PRODUCTS</h4>
            <ul className="footer-list">
              <li><Link to="/cost-optimized">Cost-Optimized Servers</Link></li>
              <li><Link to="/enterprise">Advance Dedicated Servers</Link></li>
              <li><Link to="/vds">Virtual Dedicated Servers</Link></li>
              <li><Link to="/colocation">Colocation</Link></li>
              <li><Link to="/looking-glass">Looking Glass</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-list">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/locations">Infrastructure Locations</Link></li>
              <li><Link to="/partnership-program">Partnership Program</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/sla">Service Level Agreement</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="footer-badges mobile-only-badges">
          <div className="cert-box">
            <img src={Cert0} alt="ISO 9001" className="iso-badges-img" />
            <p className="cert-text">Certificate<br/>No:272902017</p>
          </div>
          <div className="cert-box">
            <img src={Cert1} alt="ISO 27001" className="iso-badges-img" />
            <p className="cert-text">Certificate<br/>No:272912017</p>
          </div>
          <div className="cert-box">
            <img src={Cert2} alt="ISO 14001" className="iso-badges-img" />
            <p className="cert-text">Certificate<br/>No:272892017</p>
          </div>
          <div className="cert-box">
            <img src={Cert3} alt="ISO 50001" className="iso-badges-img" />
            <p className="cert-text">Certificate<br/>No:272922017</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-address">
            Building A1, Dubai Silicon Oasis<br/>
            Dubai, United Arab Emirates
          </p>
          <p className="copyright-text">
            Copyright 2026 © Tempest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
