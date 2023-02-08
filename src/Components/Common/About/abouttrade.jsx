import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { globe } from "../../data";

const Abouttrade = () => {
  return (
    <div className="bg-[#0E1F33] w-full ">
      <div className="container mx-auto">
        <div className="px-0 md:px-16 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h2 className="text-white font-bold text-[20px] md:text-[32px] md:pt-20 pt-10">
              Environmental Stewardship & Engagement
            </h2>
            <p className="text-[#CCCCCC] font-normal text-center text-[18px] ">
              Through our Carbon Sequestration Program, industry players can
              offset environmental impact while meeting the
              <br className="md:block hidden" /> continent's growing energy
              needs
            </p>
            <Link
              to=""
              className="text-[#3378F3] text-sm font-semibold pt-5 flex flex-row items-center gap-2  "
            >
              Learn more about TradeGrid{" "}
              <span>
                <HiOutlineArrowLongRight size={20} />{" "}
              </span>{" "}
            </Link>

            <div className="">
              <img src={globe} alt="globe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttrade;
