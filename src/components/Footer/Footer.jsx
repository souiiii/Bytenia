import React from 'react';
import { TwitterLogo, LinkedinLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span className="footer-logo-text">BYTENIA</span>
            </div>
            
            <div className="footer-socials mobile-only">
              <a href="#" className="social-link"><TwitterLogo size={22} weight="fill" /></a>
              <a href="#" className="social-link"><LinkedinLogo size={22} weight="fill" /></a>
              <a href="#" className="social-link"><InstagramLogo size={22} weight="fill" /></a>
              <a href="#" className="social-link"><FacebookLogo size={22} weight="fill" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-wrapper">
            <div className="footer-column">
              <h4 className="footer-title">PRODUCTS</h4>
              <ul className="footer-list">
                <li><a href="#">Dedicated Servers</a></li>
                <li><a href="#">Cloud Instances</a></li>
                <li><a href="#">SSL Certificates</a></li>
                <li><a href="#">Web Hosting</a></li>
                <li><a href="#">DDoS Protection</a></li>
                <li><a href="#">Backup Space</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">COMPANY</h4>
              <ul className="footer-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms & Policies</a></li>
                <li><a href="#">SLA Policy</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Knowledgebase</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-socials desktop-only">
            <a href="#" className="social-link"><TwitterLogo size={22} weight="fill" /></a>
            <a href="#" className="social-link"><LinkedinLogo size={22} weight="fill" /></a>
            <a href="#" className="social-link"><InstagramLogo size={22} weight="fill" /></a>
            <a href="#" className="social-link"><FacebookLogo size={22} weight="fill" /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2024 Bytenia Inc.<br className="mobile-only" /> All Rights Reserved.
          </p>
          <p className="legal-links">
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
