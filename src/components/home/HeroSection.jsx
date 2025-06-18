import React from "react";
import Button from "../ui/Button";
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const location = useLocation();

  return (
    <section className="bg-[#f2f2f2] min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center relative">
        {/* Text Block */}
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 tracking-tight leading-[1.1] inline-block">
            <div className="text-center">Cookies That Feel</div>
            <div className="text-center">Like a Hug.</div>
          </h1>
          <div className="flex justify-center md:justify-start mt-8 md:ml-[10%]">
            <Button 
              as="link" 
              variant="cta"
            >
              <Link to="/cookie-menu">
                Order A Box
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Cookie Image */}
        <div className="md:absolute md:-right-20 md:ml-4 md:top-1/2 md:transform md:-translate-y-1/2 w-full md:w-auto">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-cookies-stacked.png`}
            alt="Stack of delicious cookies"
            className="w-full md:w-auto md:h-[85vh] object-contain"
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