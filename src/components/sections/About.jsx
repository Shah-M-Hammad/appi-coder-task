import React from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-[#E31B23]">Appicoders</span> - #1 Mobile
              App & Web Development Company in USA
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              Welcome to Appicoders, your trusted partner for expert mobile
              app and web development. Whether you're a startup, enterprise,
              or growing business, we create digital solutions that drive
              success, user engagement, and growth. Let's transform your
              vision into reality.
            </p>
            <Button className="bg-[#E31B23] hover:bg-[#C91820] text-white px-6 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto">
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;