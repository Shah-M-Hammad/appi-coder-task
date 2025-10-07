import React, { useState, useEffect } from "react";
import "./index.css";

// Import components
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import Industries from "./components/sections/Industries";
import Products from "./components/sections/Products";
import Technologies from "./components/sections/Technologies";
import Awards from "./components/sections/Awards";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Testimonials from "./components/sections/Testimonial";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const whyChooseCards = [
    {
      title: "Focused Business Approach",
      description:
        "We focus your business with ideas for your business growth. We help you take your business to the next level and stand out from the crowd.",
    },
    {
      title: "Professional Team",
      description:
        "Our professionals with expert skill and years of experience deliver quality is the top priority of our clients.",
    },
    {
      title: "Flexible Payment Terms",
      description:
        "Hire our experts with flexible time and cost models tailored to your project needs and budgets.",
    },
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + whyChooseCards.length) % whyChooseCards.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    // Event listeners for WhyChoose component
    const handlePrevSlide = (e) => setCurrentSlide(e.detail);
    const handleNextSlide = (e) => setCurrentSlide(e.detail);
    const handleSetSlide = (e) => setCurrentSlide(e.detail);
    
    document.addEventListener('prevSlide', handlePrevSlide);
    document.addEventListener('nextSlide', handleNextSlide);
    document.addEventListener('setSlide', handleSetSlide);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('prevSlide', handlePrevSlide);
      document.removeEventListener('nextSlide', handleNextSlide);
      document.removeEventListener('setSlide', handleSetSlide);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <Hero prevSlide={prevSlide} nextSlide={nextSlide} />
      <About />
      <Services />
      <WhyChoose whyChooseCards={whyChooseCards} currentSlide={currentSlide} />
      <Industries />
      <Testimonials />
      <Products />
      <Technologies />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
