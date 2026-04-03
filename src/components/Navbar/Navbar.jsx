import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <div className="logo-icon">
            {/* Simple geometric logo placeholder resembling Byteania's layered logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="logo-text">BYTEANIA</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <div className="nav-dropdown">
            <span className="nav-link">PRODUCTS <ChevronDown size={14} /></span>
          </div>
          <div className="nav-dropdown">
            <span className="nav-link">COMPANY <ChevronDown size={14} /></span>
          </div>
          <div className="nav-dropdown">
            <span className="nav-link">LOCATIONS <ChevronDown size={14} /></span>
          </div>
          
          <div className="navbar-actions">
            <button className="btn-outline login-btn" style={{padding: '6px 16px', borderRadius: '50px', fontSize: '0.875rem'}}>Login</button>
            <button className="btn-primary start-btn" style={{padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem'}}>Get Started</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <span className="mobile-link">PRODUCTS <ChevronDown size={16} /></span>
          <span className="mobile-link">COMPANY <ChevronDown size={16} /></span>
          <span className="mobile-link">LOCATIONS <ChevronDown size={16} /></span>
          
          <div className="mobile-actions">
            <button className="btn-outline" style={{width: '100%', marginBottom: '12px', padding: '12px'}}>Login</button>
            <button className="btn-primary" style={{width: '100%', padding: '12px'}}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
