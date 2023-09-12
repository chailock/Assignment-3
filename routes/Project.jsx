import React from "react";

import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import BackImg2 from "./Components/BackImg2";
import ProjectCard from "./Components/ProjectCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <BackImg2
        heading="PROJECTS"
        text="Sit back & take a moment to browse through some of my completed work."
      />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
