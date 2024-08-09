import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section data-bs-version="5.1" className="menu menu6 cid-ukJzvW5yAz" id="menu06-2b">
      <nav className="navbar navbar-dropdown opacityScroll navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <Link to="/">
                <img src="assets/images/luggage-10083708-96x96.png" alt="let's-trip-icon" style={{ height: '3rem' }} />
              </Link>
            </span>
            <span className="navbar-caption-wrap">
              <Link className="navbar-caption text-warning display-7" to="/">
                Let's Trip
              </Link>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse opacityScroll" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
              <li className="nav-item">
                <Link className="nav-link link text-black text-primary display-4" to="/plan-trip">
                  Plan Trip
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link text-black text-primary display-4" to="/destinations">
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link text-black text-primary display-4" to="/travel-tips">
                  Travel Tips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link text-black text-primary display-4" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link text-black text-primary display-4" to="/profile">
                  <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn"></span>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
