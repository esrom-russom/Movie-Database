import React, { useState, useEffect, useRef } from "react";
import { slide as Menu } from "react-burger-menu"; // Slide effect
import { Link } from "react-router-dom";
import "./react-burger-menu.css";
import burgerIcon from "../assets/burger-menu.svg"; // Import the burger icon

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".hamburger-icon")) {
        closeMenu();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu-container">
      {/* Hamburger Icon - visible only on mobile */}
      <button className="hamburger-icon" onClick={handleMenuToggle}>
        <img src={burgerIcon} alt="Menu" />
      </button>

      {/* Burger Menu */}
      <Menu
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        noOverlay={true}
        disableOverlayClick={true}
        right
      >
        <div ref={menuRef} className="menu-items-container">
          <Link to="/" className="menu-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/favorites" className="menu-item" onClick={closeMenu}>
            Favorites
          </Link>
          <Link to="/about" className="menu-item" onClick={closeMenu}>
            About
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
