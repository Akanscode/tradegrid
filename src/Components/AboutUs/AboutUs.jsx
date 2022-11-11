import React from "react";
import Navbar from "../Common/Header/Navbar";
import abouthero from "../../../src/assests/abouthero.png";

const AboutUs = () => {
  return (
    <div className="relative">
      <img
        className="absolute inset-0 w-full h-[80vh] object-cover object-top"
        src={abouthero}
        alt="heroImage"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-[80vh] bg-gradient-to-l from-slate-900/10 to-slate-800 bg-opacity-100  "
      ></div>
      <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 pb-10 lg:px-10 ">
        <Navbar />
        <div className="pt-8 md:pt-10 flex flex-col items-center justify-center space-y-6">
          <h1 className="px-4 text-2xl sm:text-4xl text-[#fff]/70 md:text-6xl pb-4 font-PT Sans font-bold">
            {" "}
            About US
          </h1>
          <p className="text-[#fff]/70 font-medium text-xs text-center max-w-md">
            We are a smart-trading company, providing world-class support to a
            community of Independent brands and Retailers, through a suite of
            modern trade tools and capabilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
