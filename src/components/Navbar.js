import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <FeaturedVideoIcon />
          <span className="navbar-name">AnyTutor</span>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
