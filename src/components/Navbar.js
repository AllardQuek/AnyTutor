import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";

function Navbar({ user, handleLogout }) {
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
          {user ? (
            <>
              <li className="nav-item">
                <Link
                  to="/upload-image"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Image
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/upload-video"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/upload-lesson"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Lesson
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-links" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
