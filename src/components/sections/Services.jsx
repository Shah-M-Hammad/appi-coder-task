import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Get to know about what we're good at.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8 md:space-y-12">
              {/* Service 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Custom Mobile Applications
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    iOS, Android and Hybrid Apps
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Custom Web Development
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Custom Web Progressive Web Apps
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Augmented Reality
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Android AR Apps
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:space-y-12">
              {/* Service 4 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Artificial Intelligence
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Innovative AI Solutions
                  </p>
                </div>
              </div>

              {/* Service 5 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Blockchain Development
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Crypto & NFT Solutions
                  </p>
                </div>
              </div>

              {/* Service 6 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    MVP Development
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Rapid Prototyping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;