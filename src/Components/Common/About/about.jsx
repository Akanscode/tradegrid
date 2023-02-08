import { useState, useRef, useEffect } from "react";
import { data } from "../Data/data";
import AboutStep from "./AboutStep";
import Abouttrade from "./abouttrade";
import Abouttradegrid from "./Abouttradegrid";
// Data

const About = () => {
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
    <div>
      <div className="relative bg-white w-full  ">
        <div className="carousel relative container mx-auto ">
          <div className="px-0 md:px-16 mx-auto py-32">
            <div className="relative   ">
              <div
                ref={carousel}
                className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
              >
                {data.map((resource, index) => {
                  return (
                    <div
                      key={index}
                      className="carousel-item text-center relative min-w-full min-h-full md:h-[400px] w-auto flex md:flex-row flex-col-reverse flex-grow-0 justify-between items-center gap-4 snap-start"
                    >
                      <div className=" md:w-[50%] w-auto h-auto space-y-4 flex items-start flex-col ">
                        <h6 className="text-black font-bold text-base md:text-xl uppercase">
                          {resource.title}
                        </h6>

                        <p className="text-justify text-sm text-black leading-relaxed">
                          {resource.text}
                        </p>
                        <ul className=" text-black">
                          <li>{resource.list1}</li>
                          <li>{resource.list2}</li>
                        </ul>
                        <div className="flex space-x-5 pt-6 ">
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
                      <div className=" h-auto w-auto aspect-square block">
                        <img
                          src={resource.cover}
                          alt={resource.title}
                          className="w-full aspect-square "
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Abouttradegrid />
      <AboutStep />
      <Abouttrade />
    </div>
  );
};

export default About;
