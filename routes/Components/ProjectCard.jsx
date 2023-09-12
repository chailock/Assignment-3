import { NavLink } from "react-router-dom";
import "./ProjectCardStyle.css";

import React from "react";

const ProjectCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src="../Images/Html & Css.PNG" alt="Image" />
          <h2 className="project-title"> HTML & CSS</h2>
          <div className="pro__details">
            <p>
              This is the Front-end Website Design that I develop using only
              HTMl & CSS.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://chailock.github.io/assign.html/ "
                className="btn"
              >
                VIEW
              </NavLink>
              <NavLink
                to="https://github.com/chailock/assign.html"
                className="btn"
              >
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/Drones.PNG" alt="Image" />
          <h2 className="project-title"> HTML & CSS</h2>
          <div className="pro__details">
            <p>
              This is the Front-end Website Design that I develop using only
              HTMl & CSS.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://chailock.github.io/Assignment-2/main.html"
                className="btn"
              >
                VIEW
              </NavLink>
              <NavLink
                to="https://github.com/chailock/Assignment-2"
                className="btn"
              >
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src="../Images/React.PNG" alt="Image" />
          <h2 className="project-title"> React JS </h2>
          <div className="pro__details">
            <p>
              This is the Front-end Website Designed that using HTMl/CSS and
              React js for filling up a questionnaire.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://aquamarine-cascaron-d14e59.netlify.app/"
                className="btn"
              >
                VIEW
              </NavLink>
              <NavLink
                to="https://github.com/chailock/Questionnaire-React-App"
                className="btn"
              >
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
