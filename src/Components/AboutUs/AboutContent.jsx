import React, { useState } from "react";

import { HiArrowLongRight, HiOutlineCheck } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AboutContent = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="bg-white w-full h-[screen] ">
        <div className=" container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-[100px] md:pt-[250px] px-2 md:px-8 pb-10 lg:px-10">
          <div className="flex flex-col items-center justify-center pt-32 ">
            <h2 className="text-black font-medium text-[2.0rem] capitalize">
              our products
            </h2>
            <p className="max-w-md font-medium text-center text-black text-[0.98rem]">
              Our 5 major product offerings lie along the end-to-end value chain
              of a deal execution pipeline, from Deal Sourcing, to Financing and
              Trade Logistics.
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full">
              <ul
                className="flex  mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 list:mr-0 flex-auto">
                  <a
                    className={
                      "  text-xs font-bold capitalize px-5 py-3 block " +
                      (openTab === 1
                        ? "hover:rounded-md text-base hover:bg-slate-100 p-4 text-[#E873A8] border-b-2 border-b-[#E873A8] translate-x-2 transition duration-300   "
                        : "text-[#190D2D] border-b-2 border-b-gray-900 border-opacity-10")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Deal Sourcing
                  </a>
                </li>
                <li className="-mb-px mr-2 list:mr-0 flex-auto">
                  <a
                    className={
                      " text-xs font-bold capitalize px-5 py-3 block " +
                      (openTab === 2
                        ? "hover:rounded-md text-base hover:bg-slate-100 p-4 text-[#E873A8] border-b-2 border-b-[#E873A8] translate-x-2 transition duration-300"
                        : "text-[#190D2D] border-b-2 border-b-gray-900 border-opacity-10")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Trade Financing
                  </a>
                </li>
                <li className="-mb-px mr-2 list:mr-0 flex-auto">
                  <a
                    className={
                      " text-xs text-black font-bold capitalize px-5 py-3 block " +
                      (openTab === 3
                        ? "hover:rounded-md text-base hover:bg-slate-100 p-4 text-[#E873A8] border-b-2 border-b-[#E873A8] translate-x-2 transition duration-300  "
                        : "text-[#190D2D] border-b-2 border-b-gray-900 border-opacity-10   ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Trade Logistics
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space ">
                    {/**==============tab one========== */}
                    <div
                      className={openTab === 1 ? "block " : "hidden"}
                      id="link1"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-8">
                        {/*============*tab one content=============== */}
                        <div className="flex flex-col pt-6">
                          <h2 className="text-[#190D2D] font-bold text-[1.50rem]">
                            TG MARKETPLACE™
                          </h2>
                          <p className="text-[#190D2D] text-sm max-w-md">
                            Our Domestic and International e-terminals provide
                            seamless market access for traders, while
                            simultaneously enabling real time price discovery.
                          </p>
                          <div className="flex flex-col gap-8 mx-auto pt-8">
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={25}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Market Access
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  The TradeGrid platform connects to thousands
                                  of product off-takers and suppliers both
                                  locally and internationally, creating an
                                  unrivalled digital eco-system which ultimately
                                  delivers increased levels of commercial
                                  activity to users. Learn How… (link to
                                  TradeGrid Ninja™- for sellers).
                                </p>
                                <Link
                                  to="/src/Components/SellerAndBuyer/SellerHeader.jsx"
                                  aria-label=""
                                  className="inline-flex items-center gap-2 text-[0.80rem] font-semibold transition-colors duration-200 text-[#3378F3]/70 "
                                >
                                  Learn more as a seller
                                  <span>
                                    <HiArrowLongRight size={20} />
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={25}
                                    className=" font-bold text-xl text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Price Discovery
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  TradeGrid’s price discovery method ensures
                                  buyers have instant access to the best
                                  possible prices, at all times. It achieves
                                  this by combining 2 proprietary technologies –
                                  The Integrated Autonomous Bidding Agent (ABA)
                                  - allowing Sellers participate in an almost
                                  infinite number of simultaneous bids at
                                  lightning speed - and The Quote Broadcast &
                                  Rank (QBR) technology - a multivariate bid
                                  processing technology with capacity to request
                                  and process thousands of bids per second.
                                </p>
                                <Link
                                  to="/src/Components/SellerAndBuyer/SellerHeader.jsx"
                                  aria-label=""
                                  className="inline-flex items-center gap-2 text-[0.80rem] font-semibold transition-colors duration-200 text-[#3378F3]/70 "
                                >
                                  Learn more as a seller
                                  <span>
                                    <HiArrowLongRight size={20} />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/**===========content two========== */}
                        <div className="flex flex-col pt-16">
                          <h2 className="text-[#190D2D] font-medium text-[1.50rem]">
                            TG VERIFY™
                          </h2>
                          <p className="text-[#190D2D] text-sm max-w-md">
                            TG VERIFY™ supports Dealers & Financiers in
                            identifying genuine counter parties.{" "}
                          </p>
                          <div className="flex flex-col gap-8 mx-auto pt-8">
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={20}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  User Verification
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  While our platforms are built to be extremely
                                  user-friendly, we have developed a
                                  straight-forward verification protocol to
                                  ensure all verified users are traceable,
                                  authentic and with the right level of product
                                  liability insurance. This allows transacting
                                  parties on the platform carry on without risk
                                  of potential fraud.
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={20}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Deal Validation
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  For 3rd parties such as financiers and
                                  insurers, the platform assists with
                                  authenticating and verifying the validity of
                                  trade deals, minimizing the risk of loan
                                  defaults, and potentially allowing for more
                                  friendly financing terms.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/**============sceond tab content============ */}
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex flex-col pt-6">
                          <h2 className="text-[#190D2D] font-bold text-[1.50rem]">
                            TG FINANCE™
                          </h2>
                          <p className="text-[#190D2D] text-sm max-w-md">
                            TG Finance™ provides financial support products such
                            as Secure escrow payment services, Trade loans,
                            Supply Chain Financing.
                          </p>
                          <div className="flex flex-col gap-8 mx-auto pt-8">
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={25}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Trade Finance & Escrow
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  TradeGrid partners with top banks and lenders,
                                  both locally and internationally to provide
                                  financing for deals authenticated by the
                                  platform, while providing a digital escrow
                                  service, enabling users transact safely on the
                                  platform.
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={25}
                                    className=" font-bold text-xl text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Flexible Payment Terms
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  Our platform provides visibility on the deal
                                  pipeline through the value chain, enabling a
                                  number of creative payment plans including
                                  differed payments and split payments.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col pt-6">
                          <h2 className="text-[#190D2D] font-medium text-[1.50rem]">
                            TG TRADELOOP™
                          </h2>
                          <p className="text-[#190D2D] text-sm max-w-md">
                            TG Tradeloop™ ensures access to required Forex to
                            facilitate international transactions.
                          </p>
                          <div className="flex flex-col gap-8 mx-auto pt-8">
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={20}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Forex Availability
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  A game-changing feature on the TradeGrid
                                  platform is it’s unique ability to enable
                                  import transactions in local currency. It
                                  achieves this through its proprietary
                                  Tradeloop™ model. Finance products are
                                  accessible to all verified users on the
                                  platform.
                                </p>
                              </div>
                            </div>
                            <div className="flex max-w-md sm:mx-auto gap-5 flex-row">
                              <Link
                                to="/src/Components/SellerAndBuyer/BuyerHeader.jsx"
                                aria-label=""
                                className="inline-flex items-center gap-2 text-[0.80rem] font-semibold transition-colors duration-200 text-[#3378F3]/70 "
                              >
                                Learn more as a buyer
                                <span>
                                  <HiArrowLongRight size={20} />
                                </span>
                              </Link>
                              <Link
                                to="/src/Components/SellerAndBuyer/SellerHeader.jsx"
                                aria-label=""
                                className="inline-flex items-center gap-2 text-[0.80rem] font-semibold transition-colors duration-200 text-[#3378F3]/70 "
                              >
                                Learn more as a seller
                                <span>
                                  <HiArrowLongRight size={20} />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**=======tab 3 content========== */}
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
                        {/*============*content=============== */}
                        <div className="flex flex-col pt-6">
                          <h2 className="text-[#190D2D] font-bold text-[1.50rem]">
                            TG LOG™
                          </h2>
                          <p className="text-[#190D2D] text-sm max-w-md">
                            TG Log™ helps users identify reliable 3PL service
                            providers.
                          </p>
                          <div className="flex flex-col gap-8 mx-auto pt-8">
                            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                              <div className="mr-4">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-[#e879f9]">
                                  <HiOutlineCheck
                                    size={25}
                                    className=" font-medium text-[#E873A8]"
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-3 text-xl font-bold leading-5 text-[#E873A8]">
                                  Trade Logistics
                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                  The TradeGrid platform connects to an
                                  eco-system of vetted vessel owners, tank farm
                                  operators and truckers, exploiting the Milk
                                  Run and the Sharing economies model to reduce
                                  overall transport cost for users.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/**===========content two========== */}
                        <div className="flex flex-col  pt-6">
                          <img
                            src="https://www.thetradegrid.com/assets/images/tgLog.png"
                            alt="productImage"
                            className="shadow-2xl w-auto h-auto md:w-[80vh] md:h-[50vh]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
