import React from "react";
import Navbar from "../Common/Header/Navbar";
import Footer from "../Common/Footer/Footer";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[#0E1F33] w-full">
        <div className="relative container mx-auto ">
          <div className="px-0 md:px-16">
            <Navbar />
            <div className="pt-10 md:pt-20 flex flex-col items-center justify-center">
              <h1 className="px-2 text-3xl sm:text-4xl text-[#fff]/70 md:text-6xl pb-4 font-PT Sans font-bold">
                How can we help?
              </h1>
              <p className="max-w-md text-sm font-medium text-center text-[#ffff] pt-6 px-4">
                If you have enquiries you can email us at
                <span className="text-[#3378F3]">
                  {" "}
                  support@thetradegrid.com.
                </span>{" "}
                You can also drop a message via the form below or speak with a
                customer service agent at your local help desk. See Phone
                contact list below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactUs;
