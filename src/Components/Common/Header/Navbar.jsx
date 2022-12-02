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
              <svg
                className=" h-20 w-20 lg:h-40 lg:w-40"
                viewBox="0 0 163 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2528_10817)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.81316 7.92392H9.02032e-08L0 5.86956H2.81316V0.639259H6.95887V5.86956H11.5488V7.92392H6.95887V15.5544C6.95887 16.2978 7.03784 16.9337 7.19577 17.4619C7.37343 17.9706 7.60047 18.3913 7.87685 18.7239C8.17296 19.037 8.50857 19.2717 8.88366 19.4283C9.25875 19.5848 9.65358 19.663 10.0681 19.663C10.6604 19.663 11.2329 19.575 11.7857 19.3989C12.3384 19.2033 12.8023 18.9978 13.1774 18.7826L14.0658 20.6902C13.4735 20.9837 12.7925 21.2283 12.0226 21.4239C11.2724 21.6196 10.5222 21.7174 9.77203 21.7174C7.54124 21.7174 5.82372 21.1696 4.61951 20.0739C3.41527 18.9783 2.81316 17.4717 2.81316 15.5544V7.92392ZM28.1281 7.92392H24.5746C23.2322 7.92392 22.2057 8.28588 21.495 9.00977C20.7843 9.71412 20.4289 10.7707 20.4289 12.1794V21.1304H16.2832V12.1794C16.2832 10.1837 16.9149 8.63805 18.1784 7.54239C19.4616 6.42718 21.2975 5.86956 23.6863 5.86956H28.1281V7.92392ZM36.3998 19.0761C34.1296 19.0761 32.9945 18.1467 32.9945 16.288C32.9945 14.4293 34.1296 13.5 36.3998 13.5H40.5456V19.0761H36.3998ZM39.4202 8.33477C40.1705 8.99999 40.5456 10.0369 40.5456 11.4457H36.3998C33.715 11.4457 31.731 11.8467 30.4477 12.6489C29.1843 13.4511 28.5527 14.6641 28.5527 16.288C28.5527 17.912 29.1843 19.125 30.4477 19.9272C31.731 20.7293 33.715 21.1304 36.3998 21.1304H44.6913V11.4457C44.6913 10.5261 44.5135 9.69455 44.1582 8.95109C43.8226 8.18803 43.3193 7.5326 42.648 6.98477C41.9769 6.43696 41.1576 6.0163 40.1901 5.72283C39.2228 5.42936 38.1074 5.28262 36.8439 5.28262C36.3702 5.28262 35.857 5.32173 35.3041 5.4C34.7711 5.47825 34.2284 5.59566 33.6755 5.75218C33.1228 5.88913 32.5799 6.06522 32.0468 6.28044C31.5337 6.49564 31.0597 6.75 30.6255 7.04347L31.662 8.80436C32.3331 8.35434 33.093 8.00216 33.9421 7.74783C34.791 7.47392 35.6597 7.33695 36.548 7.33695C37.7325 7.33695 38.6898 7.66955 39.4202 8.33477ZM60.668 7.92392H56.9665C56.2952 7.92392 55.6735 8.03151 55.101 8.24674C54.5481 8.4424 54.0644 8.76522 53.6498 9.21521C53.2551 9.66523 52.9393 10.2424 52.7022 10.9467C52.4852 11.6511 52.3764 12.5022 52.3764 13.5C52.3764 14.4978 52.4852 15.3489 52.7022 16.0533C52.9393 16.7576 53.2551 17.3348 53.6498 17.7848C54.0644 18.2348 54.5481 18.5674 55.101 18.7826C55.6735 18.9783 56.2952 19.0761 56.9665 19.0761H60.668V7.92392ZM56.9665 21.1304C55.6042 21.1304 54.3606 20.9544 53.2352 20.6022C52.1297 20.25 51.1823 19.7413 50.3925 19.0761C49.6028 18.4109 48.9908 17.6087 48.5565 16.6696C48.1419 15.7304 47.9346 14.6739 47.9346 13.5C47.9346 12.3261 48.1419 11.2696 48.5565 10.3304C48.9908 9.3913 49.6028 8.58913 50.3925 7.92392C51.1823 7.2587 52.1297 6.75 53.2352 6.39783C54.3606 6.04565 55.6042 5.86956 56.9665 5.86956H60.668V0.586957H64.8136V21.1304H56.9665ZM80.5249 19.1641C79.696 19.4967 78.7977 19.663 77.8302 19.663C76.4682 19.663 75.3331 19.3109 74.4249 18.6065C73.5366 17.9022 72.9738 16.7381 72.7369 15.1141H85.3814V13.0598C85.3814 11.8467 85.1545 10.7609 84.7004 9.80218C84.2463 8.84347 83.6343 8.03151 82.8644 7.3663C82.0945 6.68151 81.1864 6.16303 80.1401 5.81086C79.0937 5.45871 77.9784 5.28262 76.7939 5.28262C75.5305 5.28262 74.3755 5.46847 73.3293 5.84021C72.2828 6.19239 71.3749 6.72065 70.605 7.425C69.8548 8.10979 69.2624 8.97066 68.8282 10.0076C68.4135 11.025 68.2062 12.1891 68.2062 13.5C68.2062 14.8304 68.4235 16.0043 68.8577 17.0217C69.3118 18.0391 69.9436 18.9 70.753 19.6044C71.5624 20.2891 72.5396 20.8076 73.6846 21.1598C74.8492 21.5315 76.1325 21.7174 77.5343 21.7174C78.1659 21.7174 78.7977 21.6587 79.4293 21.5413C80.0612 21.4435 80.6632 21.3065 81.2358 21.1304C81.8279 20.9348 82.3709 20.7 82.8644 20.4261C83.3776 20.1522 83.8217 19.8489 84.1969 19.5163L83.0124 17.7554C82.203 18.362 81.3738 18.8315 80.5249 19.1641ZM75.1948 7.51303C75.6884 7.29784 76.2214 7.19021 76.7939 7.19021C77.3071 7.19021 77.8106 7.30762 78.3042 7.54239C78.8173 7.75761 79.2615 8.10979 79.6366 8.59892C80.0314 9.06848 80.3475 9.67499 80.5843 10.4185C80.8211 11.162 80.9396 12.0424 80.9396 13.0598H72.6481C72.6679 12.0033 72.7863 11.1033 73.0036 10.3598C73.2404 9.61631 73.5366 9.00977 73.8919 8.54021C74.267 8.07065 74.7013 7.72826 75.1948 7.51303ZM97.076 7.92392C95.6544 7.92392 94.5293 8.36412 93.7 9.24456C92.8907 10.1054 92.486 11.4261 92.486 13.2065C92.486 14.987 92.8907 16.3174 93.7 17.1978C94.5293 18.0587 95.6544 18.4891 97.076 18.4891H100.777V7.92392H97.076ZM104.923 20.8369C104.923 21.7565 104.745 22.588 104.39 23.3315C104.035 24.0946 103.502 24.75 102.791 25.2978C102.1 25.8457 101.222 26.2663 100.156 26.5598C99.1094 26.8532 97.8854 27 96.4836 27C96.01 27 95.4965 26.961 94.9439 26.8826C94.4108 26.8238 93.8679 26.7163 93.3152 26.5598C92.7623 26.4228 92.2196 26.2369 91.6866 26.0022C91.1731 25.787 90.6994 25.5326 90.2652 25.2391L91.3015 23.4783C91.9728 23.9283 92.7328 24.2804 93.5816 24.5348C94.4304 24.8087 95.2991 24.9457 96.1875 24.9457C97.6681 24.9457 98.8032 24.613 99.593 23.9478C100.382 23.2826 100.777 22.2457 100.777 20.8369V20.5435H97.076C95.7138 20.5435 94.4699 20.3674 93.3448 20.0152C92.2392 19.663 91.2915 19.1641 90.5021 18.5185C89.7123 17.8728 89.1003 17.1 88.6661 16.2C88.2515 15.3 88.0442 14.3022 88.0442 13.2065C88.0442 12.1109 88.2515 11.113 88.6661 10.213C89.1003 9.31305 89.7123 8.54021 90.5021 7.89456C91.2915 7.24892 92.2392 6.75 93.3448 6.39783C94.4699 6.04565 95.7138 5.86956 97.076 5.86956H104.923V20.8369ZM117.199 7.92392H120.753V5.86956H116.311C113.922 5.86956 112.087 6.42718 110.803 7.54239C109.54 8.63805 108.908 10.1837 108.908 12.1794V21.1304H113.054V12.1794C113.054 10.7707 113.409 9.71412 114.12 9.00977C114.83 8.28588 115.857 7.92392 117.199 7.92392ZM127.404 21.1304H123.258V6.16303H127.404V21.1304ZM127.552 2.20109C127.552 2.78803 127.345 3.30651 126.93 3.75653C126.536 4.18696 126.002 4.40218 125.331 4.40218C124.66 4.40218 124.117 4.18696 123.702 3.75653C123.308 3.30651 123.11 2.78803 123.11 2.20109C123.11 1.61413 123.308 1.10543 123.702 0.674998C124.117 0.225 124.66 2.92188e-08 125.331 0C125.983 -2.83366e-08 126.516 0.225 126.93 0.675001C127.345 1.10543 127.552 1.61413 127.552 2.20109ZM139.99 7.92392H143.692V19.0761H139.99C139.319 19.0761 138.697 18.9783 138.125 18.7826C137.572 18.5674 137.088 18.2348 136.674 17.7848C136.279 17.3348 135.963 16.7576 135.726 16.0533C135.509 15.3489 135.401 14.4978 135.401 13.5C135.401 12.5022 135.509 11.6511 135.726 10.9467C135.963 10.2424 136.279 9.66523 136.674 9.21521C137.088 8.76522 137.572 8.4424 138.125 8.24674C138.697 8.03151 139.319 7.92392 139.99 7.92392ZM136.259 20.6022C137.385 20.9544 138.628 21.1304 139.99 21.1304H147.838V0.586954H143.692V5.86956H139.99C138.628 5.86956 137.385 6.04565 136.259 6.39783C135.154 6.75 134.206 7.2587 133.416 7.92392C132.627 8.58913 132.015 9.3913 131.58 10.3304C131.166 11.2696 130.959 12.3261 130.959 13.5C130.959 14.6739 131.166 15.7304 131.58 16.6696C132.015 17.6087 132.627 18.4109 133.416 19.0761C134.206 19.7413 135.154 20.25 136.259 20.6022ZM154.363 1.19714V6.14852H155.101V1.19714H156.944V0.534654H152.527V1.19714H154.363ZM157.682 0.534654V6.14852H158.393V1.36946L160.004 6.14852H160.67L162.289 1.44988V6.14852H163V0.534654H162.008L160.673 4.44062C160.539 4.83632 160.44 5.13629 160.377 5.34052C160.321 5.15671 160.232 4.87971 160.111 4.50954L158.792 0.534654H157.682Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2528_10817">
                    <rect width="163" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
