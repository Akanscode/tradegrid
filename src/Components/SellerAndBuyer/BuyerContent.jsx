import React from "react";

const BuyerContent = () => {
  return (
    <div>
      <div className="bg-white w-full h-[1200px] md:h-[700px]">
        <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-10">
            <div className="flex flex-col pt-6">
              <h2 className="text-[#190D2D] font-medium text-[1.50rem]">
                What the TradeGrid platform will do for you
              </h2>
              <div className="pt-6">
                <p className="text-[#190D2D] text-sm max-w-md">
                  As a TradeGrid verified Seller, you’re guaranteed
                  uninterrupted product demand, from the largest buyers, at all
                  times. We achieve this for you by partnering with verified
                  buyers in your region to enable you:
                </p>
                <ol className="list-decimal list-inside pt-5">
                  <li>Receive Instant quote requests</li>
                  <li>Tender a quote</li>
                  <li className="max-w-md">
                    {" "}
                    Get selected and complete transactions in minutes, all
                    conveniently from our digital platform.
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-8 mx-auto pt-8">
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                  <div>
                    <h6 className="text-[text-#190D2D] font-bold ">
                      When you sell through the platform, you’re able to offer
                      market-beating prices.
                    </h6>
                    <p className="text-[#190D2D] text-sm max-w-md">
                      This is because we support our partners with a GPS route
                      mapping, demand aggregation and supply chain optimization
                      tool, that leverages intelligent programming to deliver
                      significant cost savings to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-6">
              <h2 className="text-[#190D2D] font-medium text-[1.50rem]">
                What the TradeGrid platform will do for you
              </h2>

              <div className="pt-6">
                <h6 className="text-[#190D2D] font-bold "> Nothing!</h6>
                <p className="text-[#190D2D] text-sm max-w-md">
                  Our goal is to maximize market opportunities for our partners
                  in an extremely cost effective manner, hence we charge zero
                  sign up fees, zero platform fees and a transparent Escrow
                  charge of 0.2% (may vary) on transactions sourced or settled
                  through the platform. ‍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerContent;
