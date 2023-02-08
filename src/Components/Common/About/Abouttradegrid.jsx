import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Abouttradegrid = () => {
  return (
    <div>
      <div className="bg-[#0E1F33] w-full">
        <div className="container mx-auto">
          <div className="px-0 md:px-16 mx-auto py-32">
            <div className="flex flex-col">
              <div className="bg-white py-20 md:py-40 rounded-xl flex items-center justify-center justify-items-center shadow-md w-auto ">
                <div className="flex justify-center">
                  <div className="flex justify-center p-4 bg-slate-50 ring-2 ring-slate-900 rounded-lg shadow-xl w-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-slate-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <h2 className="text-[#FFFFFF] font-semibold text-sm md:text-2xl">
                  TradeGrid connecting over 50,000 Suppliers And Off-Takers;
                </h2>
                <h2 className="text-[#FFFFFF] font-semibold text-sm md:text-2xl">
                  Access The Best Deals In A Click.
                </h2>
                <p className="text-[#FFFFFF] text-sm max-w-lg py-6 leading-5">
                  We are Africa's leading B2B Marketplace platform having
                  operations in a growing number of countries across the globe.
                  In each of these countries, we partner with more than 80% of
                  the leading product marketers, refineries, and mid-stream
                  players, to deliver exceptional buying experiences through our
                  digital platform.
                </p>
                <p className="text-[#FFFFFF] text-sm max-w-lg leading-5">
                  Our global and regional teams are comprised of world-class
                  professionals, some of whom are top-tier strategy consultants,
                  O&G experts, and supply chain managers, who are collectively
                  striving to build additional efficiencies to the platform,
                  with an ultimate aim of enhancing the TradeGrid Buyers
                  benefits and experience.
                </p>
                <Link
                  to="/about"
                  className="text-[#3378F3] text-sm font-semibold pt-5 flex flex-row items-center gap-2  "
                >
                  Learn more about TradeGrid{" "}
                  <span>
                    <HiOutlineArrowLongRight size={20} />{" "}
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttradegrid;
