import React from "react";
import award1 from "../../images/image 4.png";
import award2 from "../../images/image 2.png";
import award3 from "../../images/image 4.png";
import award4 from "../../images/image 13.png";

const Awards = () => {
  return (
    <section id="awards" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Awards and Recognitions
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <img
              src={award1}
              alt="IT Firms Award"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <img
              src={award2}
              alt="Top Mobile App Development Company"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <img
              src={award3}
              alt="CMMI Award"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <img
              src={award4}
              alt="Top App Development Company"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;