import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="bg-primary/5 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col items-center relative">
        {/* Text Block */}
        <div className="w-full md:w-1/2 text-center text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-4 tracking-tight leading-[1.1]">
            <div>Cookies That Feel</div>
            <div>Like a Hug.</div>
          </h1>
          <div className="mt-6 md:mt-8 start-0 md:start-[10%]">
            <Button 
              as="link" 
              to="/cookie-menu" 
              variant="cta"
            >
              Order A Box
            </Button>
          </div>
        </div>

        {/* Cookie Image */}
        <div className="mt-8 md:mt-0 w-full">
          <img
            src="/images/hero-cookies-stacked.png"
            alt="Stack of delicious cookies"
            className="w-full h-[300px] md:h-[400px] object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/600x600?text=Cookies+Image";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;