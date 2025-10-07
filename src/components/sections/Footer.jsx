import React from "react";
import logoWhite from "../../images/Logo-Final-White 1 (1).png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f35] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="mb-4 w-40">
              <img src={logoWhite} alt="Appicoders Logo" className="w-full" />
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Leading mobile app and web development company providing innovative digital solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blockchain Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
       <p>
        Tel: +1 (800) 826-8018
        <br />
Email: info@appicoders.com
       </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Appicoders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;