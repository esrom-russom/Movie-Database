import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/react-burger-menu"; // Ensure the import matches the file name
import logo from "../assets/logo.svg"; // Adjust path as needed
import favouriteIcon from "../assets/favorite.svg"; // Import the favorite icon
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="MovieDB Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/favorites" className="nav-item">
              <img src={favouriteIcon} alt="Favorites" className="nav-icon" />
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
