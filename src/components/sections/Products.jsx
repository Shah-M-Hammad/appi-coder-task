import React from "react";
import { useState } from "react";

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const productTabs = [
    "all",
    "health",
    "crm",
    "uber",
    "marketplace",
    "fitness",
    "fitness2",
  ];

  const products = [
    { id: 1, image: "/src/images/Group 151.png", alt: "Product 1", category: "health" },
    { id: 2, image: "/src/images/Group 146.png", alt: "Product 2", category: "crm" },
    { id: 3, image: "/src/images/Group 147.png", alt: "Product 3", category: "uber" },
    { id: 4, image: "/src/images/Group 148.png", alt: "Product 4", category: "marketplace" },
    { id: 5, image: "/src/images/Group 149.png", alt: "Product 5", category: "fitness" },
    { id: 6, image: "/src/images/Group 150.png", alt: "Product 6", category: "fitness2" },
  ];

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section
      id="products"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#ce2026] bg-[url('\src\images\Group 172.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-8 lg:mb-12">
          Products
        </h2>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12 flex-wrap">
          {productTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "bg-white text-[#E31B23] shadow-lg transform scale-105"
                  : "text-white border border-white hover:bg-white/20 hover:transform hover:scale-105"
              }`}
            >
              {tab === "all"
                ? "ALL"
                : tab === "health"
                ? "Health Supreme"
                : tab === "crm"
                ? "CRM App"
                : tab === "uber"
                ? "Uber"
                : tab === "marketplace"
                ? "Marketplace"
                : tab === "fitness"
                ? "Sports Training"
                : "Fitness"}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full mb-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain "
              />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-lg sm:text-xl md:text-2xl">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;