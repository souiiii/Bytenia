import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
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
            {/* Simple geometric logo placeholder resembling Bytenia's layered logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="logo-text">BYTENIA</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/enterprise" className="nav-link">Enterprise</Link>
          <Link to="/cost-optimized" className="nav-link">Cost-Optimized</Link>
          
          <div className="navbar-actions">
            <button className="lang-btn">
              <Globe size={18} />
              <span>EN</span>
            </button>
            <button className="btn-primary sign-in-btn">Sign In</button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link to="/enterprise" className="mobile-link" onClick={toggleMenu}>Enterprise</Link>
          <Link to="/cost-optimized" className="mobile-link" onClick={toggleMenu}>Cost-Optimized</Link>
          
          <div className="mobile-actions">
             <button className="lang-btn">
              <Globe size={20} />
              <span>EN</span>
            </button>
            <button className="btn-primary mobile-sign-in-btn" onClick={toggleMenu}>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
