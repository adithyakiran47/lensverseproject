// Navbar.js - Professional Navbar with active link and burger toggle support
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/booking', label: 'Booking' },
  { to: '/admin-dashboard', label: 'Admin Dashboard' }
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Check admin login state
  const isLoggedIn = !!localStorage.getItem('adminToken');

  return (
    <nav className="navbar navbar-expand-lg lens-navbar">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <span className="brand-red">LENSVERSE</span>
        </Link>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lensNavbar"
          aria-controls="lensNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="lensNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
            {NAV_LINKS.map(link => (
              <li className="nav-item" key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Show logout button only if logged in */}
          {isLoggedIn && (
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
