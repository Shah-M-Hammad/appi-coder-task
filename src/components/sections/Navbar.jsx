import React from "react";
import { Phone, X, Menu } from "lucide-react";
import logoWhite from "../../images/Logo-Final-White 1 (1).png";

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  const navItems = [
    "home",
    "about",
    "services",
    "why-choose",
    "portfolio",
    "products",
    "testimonials",
    "technologies",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#E31B23] z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-32 md:w-40 lg:w-48">
            <img src={logoWhite} alt="Appicoders Logo" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-gray-200 transition-colors text-xs 2xl:text-sm capitalize"
            >
              {item.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+18008268018"
            className="flex items-center gap-2 border-2 border-white text-white px-3 sm:px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-[#E31B23] transition-all text-xs lg:text-sm"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">+1 (800) 826-8018</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-white p-1"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-[#E31B23] border-t border-white/20">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-gray-200 transition-colors text-left py-2 capitalize text-sm"
              >
                {item.replace("-", " ")}
              </button>
            ))}
            <a
              href="tel:+18008268018"
              className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#E31B23] transition-all justify-center mt-2 text-sm"
            >
              <Phone size={16} />
              +1 (800) 826-8018
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;