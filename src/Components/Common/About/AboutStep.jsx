import React from "react";
import { phoneimg } from "../Data/data";

const AboutStep = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#ECF3FE] w-full h-[ 910px]">
        <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 top-[100px] md:top-[200px] md:px-8 lg:px-10">
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <div>
              <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">
                  01
                </div>

                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font text-gray-900 mb-1 text-sm md:text-xl">
                      Sign up on mobile app or web
                    </h2>
                    <p className="leading-relaxed">
                      Enter your mobile number, a 6-digit OTP Code will be sent
                      to your mobile number via text. Enter the 6-digit code
                      received.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-6 sm:items-center md:w-2/3 mx-auto">
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">
                  02
                </div>
                <div className="w-px h-full bg-gray-900" />
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font text-gray-900 mb-1 text-sm md:text-xl">
                      Register an account
                    </h2>
                    <p className="leading-relaxed">
                      If you haven't registered before by clicking on "Profile"
                      and enter all required details.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">
                  03
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-bold title-font  text-gray-900 mb-1 text-sm  md:text-xl">
                      Appy for Product Lease program (PLP)
                    </h2>
                    <p className="leading-relaxed">
                      Click on "Product Lease Program”, Request a PLP, Fill the
                      PLP Form and Submit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 mx-auto">
                <button className="bg-[#E873A8] h-[60.04px] w-[249.16px]  md:w-[249px] md:h-[60px] text-white font-semibold rounded-md ">
                  Get Started
                </button>
              </div>
            </div>
            <div>
              <img src={phoneimg} alt="stepimg" className="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStep;
