import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";

const ContactForm = () => {
  return (
    <div>
      <div className="bg-white w-full h-[900px] md:h-[800px]">
        <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 pb-10 lg:px-10">
          <div className="flex flex-col md:flex-row justify-around gap-10 mt-10 px-4">
            <div className="flex flex-col">
              <h3 className="text-[#020202] text-[2.0rem] font-bold capitalize">
                contact us
              </h3>
              <form className="mt-8">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full md:w-[500px] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#E873A8] focus:bg-[#F9F9F9] focus:outline-none"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full md:w-[500px] px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#E873A8] focus:bg-[#F9F9F9]  focus:outline-none"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full md:w-[500px] h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-[#E873A8] focus:bg-[#F9F9F9] focus:outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-[100px] px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#E873A8] rounded-md  focus:outline-none">
                  Submit
                </button>
              </form>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-row gap-2">
                <span className="bg-black rounded-full flex items-center justify-center h-8 w-8">
                  <HiOutlinePhone size={15} className="text-white font-bold" />
                </span>
                <p className="text-[#020202] text-[2.0rem] font-bold ">
                  or call us on;{" "}
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <span className="flex flex-row gap-2">
                  <img
                    src="https://www.thetradegrid.com/assets/images/usa.svg"
                    alt="countrylogo"
                    className="h-6 w-6"
                  />
                  <p className="text-[#020202] uppercase">usa</p>
                </span>
                <p className="text-[#E873A8] font-medium">+1(312) 872 2863</p>
              </div>
              <div className="flex flex-row gap-4">
                <span className="flex flex-row gap-2">
                  <img
                    src="https://www.thetradegrid.com/assets/images/ke.svg"
                    alt="countrylogo"
                    className="h-6 w-6"
                  />
                  <p className="text-[#020202] uppercase">ke</p>
                </span>
                <p className="text-[#E873A8] font-medium">+254 207 640 776</p>
              </div>
              <div className="flex flex-row gap-4">
                <span className="flex flex-row gap-2">
                  <img
                    src="https://www.thetradegrid.com/assets/images/nig.svg"
                    alt="countrylogo"
                    className="h-6 w-6"
                  />
                  <p className="text-[#020202] uppercase">nig</p>
                </span>
                <p className="text-[#E873A8] font-medium">+234 908 779 2968</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
