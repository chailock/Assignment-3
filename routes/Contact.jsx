import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import BackImg2 from "./Components/BackImg2";
import Form from "./Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <BackImg2 heading="CONTACT" text="Get intouch" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
