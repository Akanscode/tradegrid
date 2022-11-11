import React, { useState } from "react";
import { faq } from "../Common/Data/data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const FaqData = () => {
  const [click, setClick] = useState(false);
  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <div>
      <div className="bg-white w-full h-screen">
        <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:pt-20 md:px-8 lg:px-10">
          <div className="max-w-xl flex items-center justify-center sm:mx-auto lg:max-w-2xl">
            <div className="max-w-[90%] rounded-md pt-10">
              {faq.map((val, index) => (
                <div className="bg-slate-100 mb-[20px] border  rounded-md shadow-md">
                  <button
                    className="flex items-center justify-between w-full p-4 focus:outline-none"
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <h2 className=" text-[0.60rem] md:text-[0.75rem] font-bold">
                      {val.title}
                    </h2>
                    <span className="w-3 text-gray-600 transition-transform duration-200">
                      {click === index ? (
                        <FaChevronDown size={15} className="text-[#E873A8]" />
                      ) : (
                        <FaChevronUp size={15} className="text-[#E873A8]" />
                      )}
                    </span>
                  </button>
                  {click === index ? (
                    <div className="p-4 pt-0">
                      <p className="text-gray-700 bg-[#ECF3FE] p-2 ">
                        {val.desc}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqData;
