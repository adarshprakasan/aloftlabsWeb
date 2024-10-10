import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import navLogo from "../assets/asset 0.png";

function NavBar() {
  return (
    <nav>
      <div className="navSection">
        <div className="navLogo">
          <img src={navLogo} alt="" />
        </div>
        <div className="navItems">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Who We Are</NavLink>
          <NavLink to="/about">Products</NavLink>
          <NavLink to="/signup">Why ALOFT</NavLink>
          <NavLink to="/signup">Contact Us</NavLink>
          <NavLink to="/signup">Blog</NavLink>
          <button>Book a Demo</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
