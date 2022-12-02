import React from "react";
import { logo } from "../Data/data";

const Partner = () => {
  return (
    <div className="pt-20 md:pt-0">
      <h2 className="text-black font-bold text-[25.80px] md:text-[40px] text-center pb-4 md:pb-4">
        You are in good Company!
      </h2>
      <div className="grid grid-cols-2 pt-2  sm:grid-cols-3 md:grid-cols-4 gap-2">
        {logo.map((val, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className=" mx-4 bg-white shadow-md w-[100px] h-[100px] flex items-center justify-center ">
              <img src={val.cover} alt="logoim" className="h-20 w-20 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
