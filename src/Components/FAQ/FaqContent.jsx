import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-md">
      <button
        type="button"
        aria-label="Open item"
        title="Open Item"
        className={`flex items-center justify-between w-full p-4 focus:outline-none ${
          isOpen ? "Open Item" : ""
        }`}
        onClick={() => setIsOpen(isOpen)}
      >
        <div className="md:text-lg text-[0.67rem]   font-medium">{title}</div>

        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className=" ">{children}</p>
        </div>
      )}
    </div>
  );
};
const FaqContent = () => {
  return (
    <div>
      <div className="bg-white w-full h-screen">
        <div className="container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-2 md:pt-20 md:px-8 lg:px-10">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="space-y-4">
              <Item
                className="bg-[#ECF3FE]"
                title="How long is your delivery time?"
              >
                Your product, your terms. You get to agree on the delivery
                time/date with the seller.
              </Item>
              <Item
                className="bg-[#ECF3FE]"
                title="What guarantee can I expect from TradeGrid?"
              >
                We partner with verified suppliers in your region to provide you
                quality products at the very best price. We verify that products
                are delivered in satisfactory condition before buyers' funds are
                released
              </Item>
              <Item
                className="bg-[#ECF3FE]"
                title="Are there any other hidden cost or charges for accessing the marketplace?"
              >
                Your product, your terms. You get to agree on the delivery
                time/date with the seller.
              </Item>
              <Item
                className="bg-[#ECF3FE]"
                title="Do I need to get verified before I begin to sell?"
              >
                Your product, your terms. You get to agree on the delivery
                time/date with the seller.
              </Item>
              <Item
                className="bg-[#ECF3FE]"
                title="What payment methods do you accept?"
              >
                Your product, your terms. You get to agree on the delivery
                time/date with the seller.
              </Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
