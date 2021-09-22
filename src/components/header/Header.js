import React from "react";
import NavBar from "../navBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <div class="hero-text">
        <h1>Greeting</h1>
        <p>Some text</p>
      </div>
    </div>
  );
};

export default Header;
