import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Tankers & Services' },
    { to: '/clients', label: 'Clients & Partners' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      {/* Top navbar strip removed completely per user request */}

      {/* Primary Navigation Bar */}
      <div className="container header-nav-inner">
        <Link to="/" aria-label="14 Star Engineering Home" style={{ display: 'inline-block' }}>
          <Logo variant="light" size="lg" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Quick Call Button on Desktop */}
          <a
            href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
            className="btn btn-secondary btn-sm desktop-quick-call"
            id="desktop-quick-call"
          >
            <Phone size={13} color="var(--color-copper)" />
            <span>{BUSINESS_INFO.contact.phone1}</span>
          </a>

          <Link to="/contact" className="btn btn-primary btn-sm header-quote-btn">
            <span>Get a Quote</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-nav-header">
            <Logo variant="light" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-menu-btn"
              aria-label="Close navigation menu"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) => (isActive ? 'active-nav-link' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <Phone size={16} color="var(--color-copper)" />
              <span>Call: {BUSINESS_INFO.contact.phone1}</span>
            </a>

            <Link
              to="/contact"
              className="btn btn-primary"
              onClick={handleLinkClick}
              style={{ width: '100%' }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
