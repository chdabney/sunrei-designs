import React, {useState, useEffect} from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [positionY, setPositionY] = useState(0);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll =(e)=> {
    setPositionY((prevState)=> prevState + window.scrollY);
    if(positionY > 100){
      console.log(positionY)
    }

  }



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
