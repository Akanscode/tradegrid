import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Header/Navbar";
//import FaqContent from "./FaqContent";
import FaqData from "./FaqData";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#0E1F33] w-full h-[400px] md:h-[600px]">
        <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 lg:px-10">
          <Navbar />
          <div className="pt-10 md:pt-20 flex flex-col items-center justify-center">
            <h1 className="px-2 text-center text-3xl sm:text-4xl text-[#fff]/70 md:text-6xl pb-4 font-PT Sans  font-bold">
              Frequently Asked Questions
            </h1>
            <p className="max-w-md text-sm font-medium text-center text-[#ffff] pt-6 px-4">
              Below are questions we've been asked the most about Tradegrid.
            </p>
          </div>
        </div>
      </div>
      <FaqData />
      <Footer />
    </div>
  );
};

export default Faq;
