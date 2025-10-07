import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Hero = ({ prevSlide, nextSlide }) => {
  return (
    <section
      id="home"
      className="relative bg-[#E31B23] min-h-screen pt-16 md:pt-20 lg:pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E31B23] via-[#E31B23] to-[#C91820]"></div>
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 h-1/2 md:h-3/4">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#1a1f35] via-[#2d1f35] to-transparent rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[200px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="w-full lg:w-1/2 z-10 flex justify-center order-2 lg:order-1 mt-8 lg:mt-0">
          <img
            src="https://customer-assets.emergentagent.com/job_ui-replica-react/artifacts/v9bcq5xy_Mobile-Mockup%201.png"
            alt="Mobile App Mockup"
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto drop-shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 z-10 text-white text-center lg:text-left lg:pl-4 xl:pl-8 2xl:pl-12 order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Leading the Way in App Development Innovation
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
            We build Android & iOS Mobile Apps that cater all your business
            needs and take it on the next level.
          </p>
          <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-md transition-all w-full sm:w-auto">
            GET A FREE QUOTE
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 right-4 md:right-6 lg:right-10 flex gap-2 md:gap-3 lg:gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
        >
          <ChevronLeft className="text-[#E31B23] w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
        >
          <ChevronRight className="text-[#E31B23] w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;