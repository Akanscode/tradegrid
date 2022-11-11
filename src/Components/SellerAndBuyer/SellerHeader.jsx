import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Header/Navbar";
import SellerContent from "./SellerContent";

const SellerHeader = () => {
  return (
    <div>
      <div className="bg-[#0E1F33] w-full h-[800px] md:h-[600px]">
        <div className="relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 lg:px-10">
          <Navbar />
          <div className="pt-10 md:pt-20 flex flex-col items-center justify-center">
            <h1 className="px-2 text-center text-3xl sm:text-4xl text-[#fff]/70 md:text-6xl pb-4 font-PT Sans  font-bold">
              TradeGrid-Ninja™{" "}
              <span className="text-[#E873A8]">for Sellers</span>
            </h1>
            <p className="max-w-xl text-sm font-medium text-center text-[#ffff] pt-6 px-4">
              We are Africa's leading B2B Marketplace platform for a reason –
              our fast-growing operations in an increasing number of countries
              across the globe.
            </p>
            <p className="max-w-xl text-sm font-medium text-center text-[#ffff] pt-6 px-4">
              In each of these countries, we partner with more than 80% of the
              leading product marketers, refineries and mid-stream players, to
              deliver exceptional trading experiences through our digital
              platform.
            </p>
            <p className="max-w-xl text-sm font-medium text-center text-[#ffff] pt-6 px-4">
              Our global and regional teams are comprised of world-class
              professionals, some of whom are top-tier strategy consultants, O&G
              experts, and supply chain managers, who are collectively striving
              to build additional efficiencies to the platform, with an ultimate
              aim of enhancing the TradeGrid Sellers benefits and experience.
            </p>
            <button className="bg-[#E873A8] h-[40px] w-[213px] border border-[#d14d88] rounded-xl shadow-xl text-white text-sm py-2 mt-5">
              Download the App
            </button>
          </div>
        </div>
      </div>
      <SellerContent />
      <Footer />
    </div>
  );
};

export default SellerHeader;
