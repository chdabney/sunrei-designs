import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY >= 120) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <nav className={show ? "navBar active" : "navBar"}>
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
