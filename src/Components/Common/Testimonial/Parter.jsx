import React from "react";
import { logo } from "../Data/data";

const Partner = () => {
  return (
    <div className="pt-12  md:pt-0">
      <h2 className="text-black font-bold text-[25.80px] md:text-[40px] text-center pb-4 md:pb-10">
        You are in good Company!
      </h2>
      <div className="grid grid-cols-2 pt-5  sm:grid-cols-3 md:grid-cols-4 gap-2">
        {logo.map((logoimg, index) => (
          <div key={index} className="">
            <div className=" mx-4">
              <img
                src={logoimg.cover}
                alt="logoim"
                className="h-20 w-20 shadow-md "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
