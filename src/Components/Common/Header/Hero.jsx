import React from "react";
import Navbar from "./Navbar";
import hero from "../../../assests/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-[1024px] object-cover object-top"
          src={hero}
          alt="heroImage"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-[1024px] bg-gradient-to-l from-slate-900/20 to-slate-800 bg-opacity-70 backdrop-blur-sm "
        ></div>
        <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 pb-10 lg:px-10 ">
          <Navbar />
          <div className=" pt-8 md:pt-20 flex flex-col">
            {/**=========hero text========== */}
            <h1 className="px-4 text-2xl sm:text-4xl text-[#fff]/70 md:text-6xl pb-4 font-PT Sans font-bold">
              {" "}
              Helping SMBs
            </h1>
            <h1 className="px-4 text-2xl sm:text-4xl md:text-6xl pb-4 font-bold font-Sans ">
              <span className="text-[#E873A8]"> Trade seamlessly</span>{" "}
              <span className="text-[#fff]/70">and</span>
            </h1>
            <h1 className="px-4 text-2xl sm:text-4xl md:text-6xl pb-4 font-sans  font-bold">
              <span className="text-[#E873A8]"> Grow boundlessly</span>
            </h1>
            <p className="px-4   mb-10 text-xs font-thin tracking-wide text-slate-50  sm:text-sm ">
              Join the largest community of independent brands, retailers and
              corporates- leaping into
              <br /> the future of trade, through our combination of modern
              business tools and capabilities
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 ">
              <div className="flex items-start justify-center rounded-xl bg-[#E873A8]/30 bg-opacity-90 border-[#e879f9] border-2 backdrop-blur-lg p-4 shadow-lg">
                <div className="flex md:h-12 md:w-12 w-6 h-6 items-center justify-center ">
                  <img
                    src="https://www.thetradegrid.com/assets/images/b2b.svg"
                    alt="pictu"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="font-semibold text-white">
                    Digitally enhanced sourcing
                  </h2>
                  <p className="mt-2 text-sm text-white">
                    B2B e-commerce Platform
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center rounded-xl bg-[#E873A8]/30 bg-opacity-90 border-[#e879f9] border-2 backdrop-blur-lg p-4 shadow-lg">
                <div className="flex md:h-12 md:w-12 w-6 h-6 items-center justify-center ">
                  <img
                    src="https://www.thetradegrid.com/assets/images/tg.svg"
                    alt="pictu"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="font-semibold text-white">
                    Simplified Logistics
                  </h2>
                  <p className="mt-2 text-sm text-white">TG Logistics</p>
                </div>
              </div>
              <div className="flex items-start justify-center rounded-xl bg-[#E873A8]/30 bg-opacity-90 border-[#e879f9] border-2 backdrop-blur-lg p-4 shadow-lg">
                <div className="flex md:h-12 md:w-12 w-6 h-6 items-center justify-center ">
                  <img
                    src="https://www.thetradegrid.com/assets/images/tgprod.svg"
                    alt="pictu"
                  />
                </div>

                <div className="ml-4">
                  <h2 className="font-semibold text-white">
                    Flexible Payment & Financing
                  </h2>
                  <p className="mt-2 text-sm text-white">TG Product Leasing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
