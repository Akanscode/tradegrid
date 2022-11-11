import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between items-center h-24 px-4">
          <div>
            <Link to="/">
              <img
                src="https://www.thetradegrid.com/assets/images/logo.svg"
                className=" h-20 w-20 lg:h-40 lg:w-40"
                alt="logo"
              />
            </Link>
          </div>
          {/**============destop view============= */}
          <div className="   ">
            {/**==========nav menu======== */}
            <div className=" p-4 " onClick={handleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose
                  size={30}
                  className="text-white absolute right-4 top-12"
                />
              ) : (
                <div className=" flex-row items-center space-x-6 justify-between md:flex  hidden">
                  <HiMagnifyingGlass size={30} className="text-slate-100 " />
                  <HiUserCircle size={30} className="text-slate-100 " />
                  <AiOutlineMenu size={30} className="text-white" />
                </div>
              )}
            </div>
            <div>
              <ul
                className={
                  isMenuOpen
                    ? "relative flex flex-row right-0 ease-in-out duration-500"
                    : "ease-in-out duration-500 absolute left-[-100%]"
                }
              >
                <Link
                  to="/about"
                  className="p-4 text-base text-white cursor-pointer "
                >
                  About
                </Link>
                <Link
                  to="/faq"
                  className="p-4 text-base text-white cursor-pointer "
                >
                  FQA
                </Link>
                <Link
                  to="/contact"
                  className="p-4 text-base text-white cursor-pointer "
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>

          <div className="md:hidden block">
            {/**==========nav menu======== */}
            {nav ? (
              <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
            ) : (
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer text-slate-50 hover:text-fuchsia-400 border border-slate-50 hover:border-[#E873A8] "
              >
                <AiOutlineMenu size={30} />
              </div>
            )}

            {/*============= Side drawer menu =========== */}
            <div
              className={
                nav
                  ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-900 z-10 duration-300"
                  : "fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-900  z-10 duration-300"
              }
            >
              <AiOutlineClose
                onClick={() => setNav(!nav)}
                size={30}
                className="absolute right-4 top-4 cursor-pointer text-slate-50"
              />

              <Link to="/">
                {" "}
                <img
                  src="https://www.thetradegrid.com/assets/images/logo.svg"
                  alt="logo"
                  className="p-4 h-25 w-25"
                />
              </Link>
              <nav>
                <ul className="flex flex-col p-4 text-gray-500 pt-10">
                  <li className="">
                    <Link to="/" className="block md:px-3 group">
                      <div className="relative text-gray-200 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-[#E873A8] before:transition before:scale-x-0 group-hover:before:scale-x-100">
                        <span className="transition group-hover:text-[#E873A8] font-bold text-2xl py-4 ">
                          Home
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/about" className="block md:px-3 group">
                      <div className="relative text-gray-200 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-[#a85178] before:transition before:scale-x-0 group-hover:before:scale-x-100">
                        <span className="transition group-hover:text-[#E873A8] font-bold text-2xl py-4 flex">
                          About Us
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/faq" className="block md:px-3 group">
                      <div className="relative text-gray-200 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-[#a85178] before:transition before:scale-x-0 group-hover:before:scale-x-100">
                        <span className="transition group-hover:text-[#E873A8] font-bold text-2xl py-4 flex">
                          FAQ
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/contact" className="block md:px-3 group">
                      <div className="relative text-gray-200 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-[#a85178] before:transition before:scale-x-0 group-hover:before:scale-x-100">
                        <span className="transition group-hover:text-[#E873A8] font-bold text-2xl py-4 flex">
                          Contact
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="pt-20 px-4 flex flex-row gap-4">
                <button className="border-2 border-slate-200 border-opacity-20 text-slate-200/70 h-[40px] w-[140px]">
                  Log In
                </button>
                <button className="border-2 border-slate-200 border-opacity-20 text-slate-200/70 h-[40px] w-[140px]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
