import React, { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <div className="bg-[#0E1F33] w-full h-[1790px] md:h-[1229px] ">
      <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 top-[100px] md:top-[200px] md:px-8 lg:px-10">
        <div className=" p-2 flex items-center justify-center ">
          <div className="  rounded-lg shadow-lg py-10 md:py-12 px-4  md:px-6 bg-[#ECF3FE] h-[500px] md:h-[425px] w-[350px] md:w-[1240px]  mt-[-100px]  md:mt-[-150px]">
            <div className="flex flex-col md:flex-row md:p-6 gap-6 justify-between">
              <div className="space-y-5 pt-4 md:pt-10">
                <h4 className="text-black font-semibold text-center text-[20px] md:text-[40px] ">
                  Ready to start Trading?
                </h4>
                <p className="max-w-md text-sm font-normal">
                  Kindly click the button below to fill the form and our team
                  will be in touch.
                </p>
                <button className="bg-[#E873A8] p-2 md:h-[60px] md:w-[200px] h-[60.04px] w-[200px]mx-2 rounded-md text-white ">
                  Sign up and start trading
                </button>
              </div>
              <div>
                <img
                  src="https://www.thetradegrid.com/assets/images/laptop.png"
                  alt="newsimg"
                  className="md:h-[332.1px] md:w-[572.54px] w-[300.14px] h-[174.1px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 space-y-10 ">
          <h2 className="text-white font-bold text-center text-xl ">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-white font-normal text-sm">
            Stay up-to-date with announcements, news & updates, discounts and
            much more.
          </p>
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 focus:border-[#E873A8] focus:outline-none focus:ring-opacity-40"
              placeholder="Email Address"
            />

            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#E873A8] rounded-md  focus:ring-opacity-80 fo sm:mx-2  focus:bg-[#E873A8] focus:bg-opacity-70">
              Get Started
            </button>
          </div>
        </div>
        <div className="pt-20 pb-10 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 pt-10">
            <div>
              <img
                src="https://www.thetradegrid.com/assets/images/logo.svg"
                className="mr-5 h-6 sm:h-9"
                alt="logo"
              />
              <div className="flex flex-row items-center space-x-2 pt-5">
                <img
                  src="https://www.thetradegrid.com/assets/images/usa.svg"
                  alt="countryimage"
                />
                <span className="text-white">United States</span>
                <span>
                  <HiChevronDown size={20} className="text-white" />
                </span>
              </div>
              <p className="max-w-xs mt-4 text-sm text-white">
                548 Market St, San Francisco CA 94104, USA
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600 ">
                <a
                  className="hover:opacity-75 bg-white rounded-full items-center p-2"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75 bg-white rounded-full items-center p-2"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75 bg-white rounded-full items-center p-2"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="w-6 h-6  "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-medium text-white">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <Link to="/about" className="hover:opacity-75" href="/">
                    {" "}
                    About{" "}
                  </Link>
                  <a className="hover:opacity-75" href="/">
                    {" "}
                    Mobile App
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <Link to="/seller" className="hover:opacity-75">
                    {" "}
                    Corporate Buyer
                  </Link>
                  <Link to="/seller" className="hover:opacity-75">
                    {" "}
                    Corporate Seller
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">Helps</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <Link to="/contact" className="hover:opacity-75">
                    {" "}
                    Contact{" "}
                  </Link>
                  <Link to="/faq" className="hover:opacity-75">
                    {" "}
                    FAQs{" "}
                  </Link>
                  <a className="hover:opacity-75" href="/">
                    {" "}
                    Privacy Policy
                  </a>
                  <a className="hover:opacity-75" href="/">
                    Terms and Conditions
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col-reverse ">
          <span className="text-white font-normal pt-8">
            Copyright &copy; {date} TradeGrid, LLC.
          </span>
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://www.thetradegrid.com/assets/images/appstore.svg"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="appstore"
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://www.thetradegrid.com/assets/images/playstore.svg"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="playstore"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
