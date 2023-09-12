import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [press, setPress] = useState(false);
  const handleClick = () => setPress(!press);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link>
        <h1>Portfolio</h1>
      </Link>
      <ul className={press ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="project">Project</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div className=" hamburger" onClick={handleClick}>
        {press ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
