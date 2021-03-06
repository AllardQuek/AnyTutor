import React, { useState } from "react";

import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import { FiLogOut } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("Failed to log out");
    }
  }

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <FeaturedVideoIcon />
          <span className="navbar-name">AnyTutor</span>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          {currentUser && (
            <>
              <li className="nav-item">
                <Link
                  to="/upload"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Upload
                </Link>
              </li>
              <li className="nav-item logout">
                <FiLogOut className="logout-icon" onClick={handleLogout} />
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
