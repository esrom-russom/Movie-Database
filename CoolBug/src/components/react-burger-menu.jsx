import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu"; // Slide effect
import { Link } from "react-router-dom";
import "./react-burger-menu.css";

// import "..css";
// Optionally import the styles for the menu if needed
// import "react-burger-menu/lib/styles.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="hamburger-menu-container">
      {/* Render the Menu component that only appears on toggle */}
      <Menu
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        noOverlay={true} // Explicitly disable the overlay
        disableOverlayClick={true} // Disable the overlay click
      >
        <Link to="/" className="menu-item" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/favorites" className="menu-item" onClick={closeMenu}>
          Favorites
        </Link>
        <Link to="/about" className="menu-item" onClick={closeMenu}>
          About
        </Link>
      </Menu>

      {/* Hamburger icon for opening/closing the menu */}
      <button className="hamburger-icon" onClick={handleMenuToggle}></button>
    </div>
  );
};

export default HamburgerMenu;
