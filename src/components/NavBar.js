import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li>View Properties</li>
        <li>Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
