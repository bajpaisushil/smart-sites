import React, { useState } from "react";
import "./Navbar.css";
import companyLogo from "../../images/smartsiteslogo.svg";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //   <nav className="navbar">
    //     <div className="navbar-left">
    //       <img src={companyLogo} alt="Company Logo" className="logo" />
    //     </div>
    //     <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
    //       <ul className="nav-links">
    //         <li><Link to="/home">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/blog">Blog</Link></li>
    //         <li><Link to="/contact">Contact Us</Link></li>
    //       </ul>
    //     </div>
    //     <div className="navbar-right">
    //       <a to="/login" className="auth-link">Login</a>
    //       <a to="/signup" className="auth-link">Sign Up</a>
    //     </div>
    //     <div className="menu-icon" onClick={toggleMenu}>
    //       <Menu fontSize="large" />
    //     </div>
    //   </nav>
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid bg-#2b3035 bg-dark">
        <div className="navbar-left">
          <img src={companyLogo} alt="Company Logo" className="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav_mid_container">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="navbar-right">
            <Link to="/login" className="auth-link">
              Login
            </Link>
            <Link to="/signup" className="auth-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
