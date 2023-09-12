import "./BackImgStyle.css";

import React from "react";

import { Link } from "react-router-dom";

const BackImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="../Images/nice.jpg" alt="MyImage" />
      </div>

      <div className="content">
        <h1>HI, I'M FULLSTACK SOFTWARE DEVELOPER CHAILOCK MASEKO</h1>
        <p>
          I'm a software engineer specializing in building highly performant
          applications that solve real-world problems
        </p>
        <div className="buttons">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackImg;
