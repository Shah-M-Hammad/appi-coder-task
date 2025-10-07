import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import contactImg from "../../images/contact-img.png";
import { Divide, Phone } from "lucide-react";
import logoWhite from "../../images/Logo-Final-White 1 (1).png";

const Contact = () => {
  return (
    <section id="contact">
      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[#E31B23] p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <h3 className="text-white text-xl font-bold mb-2">LET'S TALK</h3>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Got an idea? Let's get in touch!</h2>
            <p className="text-white/80 text-sm mb-6">
              Have questions? Feel free of your mind. We'll respond within 24 hours. Connect with us and let's grow your business.
            </p>
            
            <form className="space-y-4">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input 
                type="tel" 
                placeholder="Your Phone" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Textarea 
                placeholder="Your Message" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
              />
              <Button className="w-full bg-white text-[#E31B23] hover:bg-white/90 font-bold">
                LET'S GET IN TOUCH
              </Button>
            </form>
          </div>
        </div>
        
        {/* Right Side - Image and Contact Info */}
        <div className="w-full md:w-1/2 bg-[#1A1F35] p-8 md:p-12 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <img 
              src={contactImg} 
              alt="Contact Us" 
              className="w-3/4 mx-auto mb-6"
            />
            <p className="text-white/80 text-sm mb-4">
              Please submit your inquiry and our App Development Strategist will contact you shortly
            </p>
            <a href="tel:+18008268018" className="flex items-center justify-center gap-2 text-white font-bold">
              <Phone size={20} />
              <span>+1-(800) 826 8018</span>
            </a>
            <p className="text-white/60 text-xs mt-1">(TOLL FREE)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;