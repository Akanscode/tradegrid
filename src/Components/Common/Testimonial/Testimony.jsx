import { useState, useRef, useEffect } from "react";
import { testimonial } from "../../data";
import Partner from "./Parter";

const Testimony = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] w-full">
      <div className="container mx-auto py-32">
        <div className="px-0 md:px-16">
          <div className="pt-10 flex items-center justify-center ">
            <h2 className="text-[#000000] text-[40px] font-bold ">
              Testimonials
            </h2>
          </div>
          <div className="relative   ">
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {testimonial.map((resource, index) => (
                <div className="carousel-item text-center relative min-w-full min-h-full md:h-[600px] w-[1236px] snap-start">
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-8 lg:mt-16 "
                  >
                    <div className="w-auto p-8 bg-white rounded-md shadow-lg border-2 border-gray-400">
                      <p className="leading-loose  max-w-md  text-xs md:text-base  text-gray-500">
                        {resource.text}
                      </p>
                      <div className="flex items-center mt-6 -mx-2">
                        <img
                          src={resource.cover}
                          alt={resource.customerName}
                          className="object-cover mx-2 rounded-full w-14 h-14"
                        />
                        <div className="mx-2">
                          <h1 className="font-semibold text-gray-800 dark:text-white">
                            {resource.customerName}
                          </h1>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.companyName}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-8 bg-white rounded-md shadow-lg border-2 border-gray-400">
                      <p className="leading-loose max-w-md text-xs md:text-base text-gray-500">
                        {resource.text}
                      </p>
                      <div className="flex items-center mt-6 -mx-2">
                        <img
                          src={resource.cover}
                          alt={resource.customerName}
                          className="object-cover mx-2 rounded-full w-14 h-14"
                        />
                        <div className="mx-2">
                          <h1 className="font-semibold text-gray-800 dark:text-white">
                            {resource.customerName}
                          </h1>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.companyName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-end space-x-5 pt-6 ">
                    <button
                      onClick={movePrev}
                      className=" bg-[#E873A8] rounded-full flex items-center justify-center text-white w-10 h-10 text-center opacity-75 transition-all ease-in-out duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span className="sr-only">Prev</span>
                    </button>
                    <button
                      onClick={moveNext}
                      className="bg-[#E873A8] rounded-full flex items-center justify-center text-white w-10 h-10 text-center opacity-75 transition-all ease-in-out duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Partner />
      </div>
    </div>
  );
};

export default Testimony;
