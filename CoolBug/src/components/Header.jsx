import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/react-burger-menu"; // Ensure the import matches the file name
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <h1 className="logo">MovieDB</h1>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* <HamburgerMenu /> */}
    </header>
  );
};

export default Header;
