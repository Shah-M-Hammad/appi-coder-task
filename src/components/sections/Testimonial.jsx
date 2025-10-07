import React from 'react';
import testimonialBg from '../../images/testimonial-bg.png';
import clientImage from '../../images/review.png';

const Testimonials = () => {
  return (
<section 
  id="testimonials" 
  className="py-12 lg:py-44 w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${testimonialBg})`
  }}
>
  {/* Your content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-3 max-h-full">
        <div 
      
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              
        

              <div className="relative z-10 mt-14 text-white">
                <h3 className="text-white text-lg font-bold mb-4 tracking-wide">CLIENT TESTIMONIALS</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  What our clients<br />are Saying.
                </h2>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 lg:p-16 flex items-center">
              <div className="w-full">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img 
                      src={clientImage} 
                      alt="Scarlett Lawrence" 
                      className="h-16 object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Scarlett Lawrence
                    </h3>
                    
                    <div className="text-gray-700 text-base leading-relaxed space-y-4">
                  <p>
                    Thank you Team Appingine you guys have a great understanding of what's current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing, Tight deadlines were reliably met without issue. Our Strong recommendations if you’re looking for quality work
                  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;