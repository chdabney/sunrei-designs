import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
