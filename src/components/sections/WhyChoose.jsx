import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../ui/card";
import chooseImg from "../../images/choose.png";

const WhyChoose = ({ whyChooseCards, currentSlide }) => {
  return (
    <section id="why-choose" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 lg:mb-16 text-sm sm:text-base px-4 max-w-3xl mx-auto leading-relaxed">
          With our unique approach and cost-effective solutions, your business
          will prosper because quality is the top priority for us.
        </p>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {whyChooseCards.map((card, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 text-center hover:shadow-xl transition-shadow duration-300 ${
                index === 1 ? "bg-[#E31B23] text-white" : ""
              }`}
            >
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full mx-auto mb-4 lg:mb-6 flex items-center justify-center ${
                  index === 1 ? "bg-white" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded ${
                    index === 1 ? "bg-[#E31B23]" : "bg-gray-400"
                  }`}
                ></div>
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 lg:mb-4">
                {card.title}
              </h3>
              <p
                className={`text-sm lg:text-base ${
                  index === 1 ? "text-white/90" : "text-gray-600"
                } leading-relaxed`}
              >
                {card.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {whyChooseCards.map((card, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <Card
                    className={`p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-shadow duration-300 ${
                      index === 1 ? "bg-[#E31B23] text-white" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center ${
                        index === 1 ? "bg-white" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded ${
                          index === 1 ? "bg-[#E31B23]" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm md:text-base ${
                        index === 1 ? "text-white/90" : "text-gray-600"
                      } leading-relaxed`}
                    >
                      {card.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={() => {
                const newSlide = (currentSlide - 1 + whyChooseCards.length) % whyChooseCards.length;
                document.dispatchEvent(new CustomEvent('prevSlide', { detail: newSlide }));
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#E31B23] text-white rounded-full flex items-center justify-center hover:bg-[#C91820] transition-all shadow-lg"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </button>

            <div className="flex gap-1 sm:gap-2">
              {whyChooseCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    document.dispatchEvent(new CustomEvent('setSlide', { detail: index }));
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-[#E31B23] w-4 sm:w-6 md:w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const newSlide = (currentSlide + 1) % whyChooseCards.length;
                document.dispatchEvent(new CustomEvent('nextSlide', { detail: newSlide }));
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#E31B23] text-white rounded-full flex items-center justify-center hover:bg-[#C91820] transition-all shadow-lg"
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;