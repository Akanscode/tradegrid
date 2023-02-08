import React from "react";
import { logo } from "../../data";

const Partner = () => {
  return (
    <div className="py-20">
      <h2 className="text-black font-bold text-[25.80px] md:text-[40px] text-center pb-4 md:pb-4">
        You are in good Company!
      </h2>
      <div className="grid grid-cols-2 pt-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {logo.map((val, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="flex items-center justify-center ">
              <img src={val.cover} alt="logoim" className="h-auto w-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
