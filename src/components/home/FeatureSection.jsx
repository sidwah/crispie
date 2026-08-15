import React from "react";
import Button from "../ui/Button";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-beige">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-darkText">
          Why Choose Crispie?
        </h2>
        <p className="text-lg text-darkText/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          We're passionate about baking happiness into every cookie. From sourcing the finest 
          ingredients to delivering moments of joy, here's what makes Crispie special.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md">
            <div className="text-4xl mb-3">🍪</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Artisan Quality</h3>
            <p className="text-darkText/60 text-sm">
              Each cookie is handcrafted in small batches with care and attention to detail.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Premium Ingredients</h3>
            <p className="text-darkText/60 text-sm">
              We source only the finest local and sustainable ingredients for superior flavor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Community Focus</h3>
            <p className="text-darkText/60 text-sm">
              We believe in giving back and supporting our local community with every cookie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;