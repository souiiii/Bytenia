import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { XLogo, DiscordLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
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
    { label: "About Us", path: "/about-us" },
    { label: "Partnership Program", path: "/partnership-program" },
    { label: "Terms of Service", path: "/terms-of-service" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ]
};

const PRODUCTS_ROUTES = [
  "/enterprise",
  "/cost-optimized",
  "/vds",
  "/colocation",
  "/locations"
];

const COMPANY_ROUTES = [
  "/about-us",
  "/partnership-program",
  "/terms-of-service",
  "/privacy-policy"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(null);

  React.useEffect(() => {
    if (activeMenu) {
      setDisplayMenu(activeMenu);
    }
  }, [activeMenu]);

  React.useEffect(() => {
    if (PRODUCTS_ROUTES.includes(location.pathname)) {
      setActiveMenu("PRODUCTS");
    } else if (COMPANY_ROUTES.includes(location.pathname)) {
      setActiveMenu("COMPANY");
    } else {
      setActiveMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link 
          to="/" 
          className="navbar-logo" 
          onClick={() => {
            setActiveMenu(null);
            setIsOpen(false);
          }}
        >
          <img
            src={Logo}
            alt="Byteania Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        
        <div className="navbar-menu desktop-menu">
          <div 
            className={`nav-dropdown ${activeMenu === 'PRODUCTS' ? 'active' : ''}`}
            onClick={() => setActiveMenu(activeMenu === 'PRODUCTS' ? null : 'PRODUCTS')}
          >
            <span className="nav-link">
              PRODUCTS <span style={{ display: 'inline-block', width: '12px', textAlign: 'center' }}>{activeMenu === 'PRODUCTS' ? '-' : '+'}</span>
            </span>
          </div>
          <div 
            className={`nav-dropdown ${activeMenu === 'COMPANY' ? 'active' : ''}`}
            onClick={() => setActiveMenu(activeMenu === 'COMPANY' ? null : 'COMPANY')}
          >
            <span className="nav-link">
              COMPANY <span style={{ display: 'inline-block', width: '12px', textAlign: 'center' }}>{activeMenu === 'COMPANY' ? '-' : '+'}</span>
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
                display: "none", 
                padding: "8px 24px",
                borderRadius: "50px",
                fontSize: "0.95rem",
                fontWeight: 600,
                border: "1.5px solid var(--text-dark, #060914)",
                color: "var(--text-dark, #060914)",
                backgroundColor: "transparent",
                cursor: "pointer",
                height: "42px",
                boxSizing: "border-box"
              }}
            >
              Login
            </button>
            <Link
              to="/connect"
              className="btn-primary start-btn"
              style={{
                padding: "8px 24px",
                borderRadius: "50px",
                fontSize: "0.95rem",
                fontWeight: 600,
                backgroundColor: "var(--bg-dark, #060914)",
                color: "#ffffff",
                border: "1.5px solid var(--bg-dark, #060914)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                height: "42px",
                boxSizing: "border-box"
              }}
            >
              Talk to Sales
            </Link>
          </div>
        </div>

        
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <Link 
            to="/" 
            className="navbar-logo" 
            onClick={() => {
              setActiveMenu(null);
              setIsOpen(false);
            }}
          >
            <img
              src={Logo}
              alt="Byteania Logo"
              style={{ height: "40px", width: "auto", filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <X size={28} color="#fff" />
          </button>
        </div>

        <div className="mobile-menu-body">
          <div className="mobile-section">
            <h3 className="mobile-section-title">PRODUCTS</h3>
            <div className="mobile-sublinks">
              <Link to="/cost-optimized" className="mobile-sublink" onClick={toggleMenu}>Cost-Optimized Servers</Link>
              <Link to="/enterprise" className="mobile-sublink" onClick={toggleMenu}>Advance Dedicated Servers</Link>
              <Link to="/vds" className="mobile-sublink" onClick={toggleMenu}>Virtual Dedicated Servers</Link>
              <Link to="/colocation" className="mobile-sublink" onClick={toggleMenu}>Colocation</Link>
              <Link to="/locations" className="mobile-sublink" onClick={toggleMenu}>Infrastructure Locations</Link>
              <Link to="/looking-glass" className="mobile-sublink" onClick={toggleMenu}>Looking Glass</Link>
            </div>
          </div>

          <div className="mobile-section">
            <h3 className="mobile-section-title">COMPANY</h3>
            <div className="mobile-sublinks">
              <Link to="/about-us" className="mobile-sublink" onClick={toggleMenu}>About Us</Link>
              <Link to="/partnership-program" className="mobile-sublink" onClick={toggleMenu}>Partnership Program</Link>
              <Link to="/terms-of-service" className="mobile-sublink" onClick={toggleMenu}>Terms of Service</Link>
              <Link to="/privacy-policy" className="mobile-sublink" onClick={toggleMenu}>Privacy Policy</Link>
              <Link to="/sla" className="mobile-sublink" onClick={toggleMenu}>Service Level Agreement</Link>
            </div>
          </div>

          <Link to="/connect" className="mobile-contact-btn" onClick={toggleMenu}>
            Contact Our Experts
          </Link>

          <div className="mobile-socials">
            <a href="#" className="mobile-social-icon"><XLogo size={32} weight="fill" /></a>
            <a href="#" className="mobile-social-icon"><DiscordLogo size={32} weight="fill" /></a>
            <a href="#" className="mobile-social-icon"><InstagramLogo size={32} weight="regular" /></a>
            <a href="#" className="mobile-social-icon"><FacebookLogo size={32} weight="fill" /></a>
          </div>
        </div>
      </div>

      
      <div className={`navbar-submenu-wrapper ${activeMenu ? 'open' : ''}`}>
        <div className="navbar-submenu-inner">
          <div className="navbar-submenu">
            <div className="container submenu-container">
              {displayMenu && SUBMENU_DATA[displayMenu].map((item, index) => (
                <React.Fragment key={index}>
                  <Link 
                    to={item.path} 
                    className={`submenu-link ${location.pathname === item.path ? 'active' : ''}`} 
                  >
                    {item.label}
                  </Link>
                  {index < SUBMENU_DATA[displayMenu].length - 1 && (
                    <span className="submenu-separator">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
