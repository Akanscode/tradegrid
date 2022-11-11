import React from "react";
import Hero from "../Common/Header/Hero";
import About from "../Common/About/about";
import Testimony from "./Testimonial/Testimony";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimony />
      <Footer />
    </div>
  );
};

export default LandingPage;
