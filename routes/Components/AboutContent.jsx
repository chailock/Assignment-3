import { Link } from "react-router-dom";
import "./AboutContentStyle.css";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
          My work includes developing mobile apps, making web apps, handling
          small-scale DevOps, and implementing desktop apps. I've worked using
          different technologies, both backend and frontend. I'm currently
          working using React js, Spring Boot, TypeScript and Java. My goal is
          to build highly performant applications that solve real-world problems
          and provide users with an awesome experience.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="../Images/java.jpg" className="img" alt="MyImage" />
          </div>
          <div className="img-stack bot">
            <img src="../Images/react.jpg" className="img" alt="MyImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
