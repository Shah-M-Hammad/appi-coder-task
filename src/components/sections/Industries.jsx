import React from "react";
import medicalIcon from "../../images/pills.png";
import fitnessIcon from "../../images/running-shoes.png";
import fintechIcon from "../../images/digital-economy.png";
import healthIcon from "../../images/healthcare.png";
import businessIcon from "../../images/briefcase (1).png";
import cleaningIcon from "../../images/cleaning.png";

const Industries = () => {
  const industries = [
    {
      title: "Medical & Pharma Services",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. Our solutions help streamline healthcare operations.",
      icon: medicalIcon,
    },
    {
      title: "Training & Fitness",
      description:
        "We create apps and systems that help fitness businesses manage clients, track progress, and deliver exceptional training experiences.",
      icon: fitnessIcon,
    },
    {
      title: "Fintech",
      description:
        "We develop secure, scalable financial technology solutions that help businesses process payments, manage transactions, and analyze financial data.",
      icon: fintechIcon,
    },
    {
      title: "Health & Fitness",
      description:
        "Our health and fitness solutions help users track their wellness journey, connect with professionals, and achieve their personal health goals.",
      icon: healthIcon,
    },
    {
      title: "Business & Services",
      description:
        "We create custom business applications that streamline operations, improve customer experiences, and drive growth across various service industries.",
      icon: businessIcon,
    },
    {
      title: "Cleaning Services",
      description:
        "Our solutions help cleaning businesses manage scheduling, track inventory, optimize routes, and improve customer satisfaction.",
      icon: cleaningIcon,
    },
  ];

  return (
    <section id="industries" className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Industries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-[#E31B23]/10 rounded-md flex items-center justify-center">
                    <img
                      src={industry.icon}
                      alt={industry.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;