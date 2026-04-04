import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./Navbar.css";

const SUBMENU_DATA = {
  PRODUCTS: [
    { label: "Enterprise Dedicated Servers", path: "/enterprise" },
    { label: "Cost-Optimized Dedicated Servers", path: "/cost-optimized" },
    { label: "Virtual Dedicated Servers", path: "/vds" },
    { label: "Colocation", path: "/colocation" },
    { label: "Infrastructure Locations", path: "/locations" },
  ],
  COMPANY: [
    { label: "About Us", path: "/company" },
    { label: "Partnership Program", path: "/partnership-program" },
  ]
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img
            src={Logo}
            alt="Byteania Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <div 
            className={`nav-dropdown ${activeMenu === 'PRODUCTS' ? 'active' : ''}`}
            onClick={() => setActiveMenu(activeMenu === 'PRODUCTS' ? null : 'PRODUCTS')}
          >
            <span className="nav-link">
              PRODUCTS {activeMenu === 'PRODUCTS' ? '-' : '+'}
            </span>
          </div>
          <div 
            className={`nav-dropdown ${activeMenu === 'COMPANY' ? 'active' : ''}`}
            onClick={() => setActiveMenu(activeMenu === 'COMPANY' ? null : 'COMPANY')}
          >
            <span className="nav-link">
              COMPANY {activeMenu === 'COMPANY' ? '-' : '+'}
            </span>
          </div>
          <div className="nav-dropdown looking-glass">
            <Link to="/looking-glass" className="nav-link" onClick={() => setActiveMenu(null)}>
              LOOKING GLASS
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              className="btn-outline login-btn"
              style={{
                padding: "6px 16px",
                borderRadius: "50px",
                fontSize: "0.875rem",
              }}
            >
              Login
            </button>
            <button
              className="btn-primary start-btn"
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "0.875rem",
              }}
            >
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <span 
            className="mobile-link"
            onClick={() => setActiveMenu(activeMenu === 'PRODUCTS' ? null : 'PRODUCTS')}
          >
            PRODUCTS {activeMenu === 'PRODUCTS' ? '-' : '+'}
          </span>
          <span 
            className="mobile-link"
            onClick={() => setActiveMenu(activeMenu === 'COMPANY' ? null : 'COMPANY')}
          >
            COMPANY {activeMenu === 'COMPANY' ? '-' : '+'}
          </span>
          <Link to="/looking-glass" className="mobile-link" onClick={() => { setActiveMenu(null); setIsOpen(false); }}>
            LOOKING GLASS
          </Link>

          <div className="mobile-actions">
            <button
              className="btn-outline"
              style={{ width: "100%", marginBottom: "12px", padding: "12px" }}
            >
              Login
            </button>
            <button
              className="btn-primary"
              style={{ width: "100%", padding: "12px" }}
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Submenu Dark Band */}
      {activeMenu && (
        <div className="navbar-submenu">
          <div className="container submenu-container">
            {SUBMENU_DATA[activeMenu].map((item, index) => (
              <React.Fragment key={index}>
                <Link 
                  to={item.path} 
                  className="submenu-link" 
                  onClick={() => setActiveMenu(null)}
                >
                  {item.label}
                </Link>
                {index < SUBMENU_DATA[activeMenu].length - 1 && (
                  <span className="submenu-separator">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
