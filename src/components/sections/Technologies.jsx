import React from "react";
import bgTech from "../../images/bg-tech.png";
import techImage from "../../images/tech.png";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="relative py-12 md:py-16 lg:py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bgTech}
          alt="Technology Background"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="border-l-4 border-[#6C63FF] pl-3 mb-4">
              <h3 className="text-xl font-bold text-[#6C63FF]">
                Cloud Solutions
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Cloud computing enables businesses to access and store data and
              programs over the Internet instead of on a computer's hard drive.
              This technology offers flexibility, cost savings, and scalability
              to businesses of all sizes. Our cloud solutions provide reliable
              infrastructure for your applications.
            </p>
            <button className="bg-[#E31B23] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#c01820] transition-colors">
              Learn More
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-blue-500/20 animate-pulse"></div>
            </div>
            <img
              src={techImage}
              alt="Technology Visualization"
              className="relative z-10 max-w-full h-auto"
            />
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default Technologies;