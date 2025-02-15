import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/react-burger-menu"; // Import burger menu
import logo from "../assets/logo.svg"; // Import logo
import favouriteIcon from "../assets/favorite.svg"; // Import favorite icon
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Burger Menu (Hidden on larger screens) */}
      <div className="burger-menu">
        <HamburgerMenu />
      </div>

      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="MovieDB Logo" className="logo-img" />
        </Link>
      </div>

      {/* Navigation Links (Always visible on larger screens) */}
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/favorites" className="nav-item">
              <img src={favouriteIcon} alt="Favorites" className="nav-icon" />
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
