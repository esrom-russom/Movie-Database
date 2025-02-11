import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { APP_TITLE } from "../globals/globals";
function Header() {
  return (
    <header>
      <h1>{APP_TITLE}</h1>
      <nav>
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
    </header>
  );
}

export default Header;
