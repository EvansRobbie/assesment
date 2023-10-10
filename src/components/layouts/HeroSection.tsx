"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = ({ popularMake }: { popularMake: PopularEntity }) => {
  //   console.log(popularMake);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const carousel = popularMake.makeList;
  const nextSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex + 1) % popularMake.makeList.length
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [popularMake.makeList[currentSlide].imageUrl]);

  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % carousel.length);
  };
  return (
    <div className="relative w-full h-full my-6">
      <div>
        <div className="relative w-full h-[60vh]">
          <Image
            fill={true}
            className="object-cover"
            priority
            src={carousel[currentSlide].imageUrl}
            alt="carousel"
          />
        </div>
        <div className="absolute inset-0  z-10 opacity-100 w-full h-full bg-gradient-to-r from-black" />
        <div className="absolute w-full z-20 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 md:p-8">
          {/* <p className=''>,</p> */}
          <div className="my-4 flex flex-col gap-2"></div>
        </div>
        <button
          className="absolute top-0 hidden bottom-0 group-hover:flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none left-2 md:left-10 lg:left-14 xl:left-20"
          type="button"
          onClick={handlePrev}
        >
          <div className="flex h-10 w-10 xl:-ml-14 shrink-0 grow-0 items-center justify-center rounded-full bg-white">
            <span className=" inline-block bg-no-repeat" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3324 13.9586C10.2266 13.9589 10.122 13.9356 10.0264 13.8902C9.9308 13.8449 9.84656 13.7787 9.7799 13.6965L6.35865 9.44649C6.25446 9.31974 6.19751 9.16076 6.19751 8.99669C6.19751 8.83263 6.25446 8.67365 6.35865 8.5469L9.90031 4.2969C10.0205 4.15225 10.1933 4.06128 10.3806 4.04401C10.5679 4.02674 10.7544 4.08459 10.8991 4.20482C11.0437 4.32505 11.1347 4.49782 11.152 4.68512C11.1692 4.87243 11.1114 5.05892 10.9911 5.20357L7.8249 9.00024L10.8849 12.7969C10.9715 12.9009 11.0265 13.0275 11.0434 13.1617C11.0604 13.296 11.0385 13.4323 10.9803 13.5545C10.9222 13.6767 10.8303 13.7797 10.7155 13.8513C10.6006 13.9229 10.4677 13.9602 10.3324 13.9586Z"
                  fill="#1B1C1D"
                ></path>
              </svg>
            </span>
          </div>
        </button>
        <button
          className=" absolute top-0 bottom-0 hidden group-hover:flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-2 md:right-10 lg:right-14 xl:right-20"
          type="button"
          onClick={handleNext}
        >
          <div className="flex h-10 w-10 xl:-mr-14 shrink-0 grow-0 items-center justify-center rounded-full bg-white bg-opacity-50">
            <span className=" inline-block bg-no-repeat" aria-hidden="true">
              <svg
                className="rotate-180"
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3324 13.9586C10.2266 13.9589 10.122 13.9356 10.0264 13.8902C9.9308 13.8449 9.84656 13.7787 9.7799 13.6965L6.35865 9.44649C6.25446 9.31974 6.19751 9.16076 6.19751 8.99669C6.19751 8.83263 6.25446 8.67365 6.35865 8.5469L9.90031 4.2969C10.0205 4.15225 10.1933 4.06128 10.3806 4.04401C10.5679 4.02674 10.7544 4.08459 10.8991 4.20482C11.0437 4.32505 11.1347 4.49782 11.152 4.68512C11.1692 4.87243 11.1114 5.05892 10.9911 5.20357L7.8249 9.00024L10.8849 12.7969C10.9715 12.9009 11.0265 13.0275 11.0434 13.1617C11.0604 13.296 11.0385 13.4323 10.9803 13.5545C10.9222 13.6767 10.8303 13.7797 10.7155 13.8513C10.6006 13.9229 10.4677 13.9602 10.3324 13.9586Z"
                  fill="#1B1C1D"
                ></path>
              </svg>
            </span>
          </div>
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2">
          {carousel.length > 0
            ? carousel.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-primary" : "bg-[#D9D9D9]"
                  }`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
