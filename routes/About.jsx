import React from "react";

import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import BackImg2 from "./Components/BackImg2";
import AboutContent from "./Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <BackImg2 heading="ABOUT" text="I am Fullstack Software Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
