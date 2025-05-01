import React, { useEffect } from 'react';
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

const AboutUs = () => {
useEffect(() => {
// Intersection Observer for scroll animations
const observerOptions = {
threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-fade-in-up');
}
});
}, observerOptions);

// Select all elements with the animation trigger class
const elements = document.querySelectorAll('.animate-on-scroll');
elements.forEach(el => observer.observe(el));

// Cleanup function
return () => {
elements.forEach(el => observer.unobserve(el));
};
}, []);

return (
<div className="relative min-h-screen">
{/* Full-width background image */}
<div 
className="absolute inset-0 bg-cover bg-center z-0" 
style={{ 
backgroundImage: 'url(/images/about-us-cookies.png)',
backgroundAttachment: 'fixed'
}}
/>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/20 z-10" />

{/* Content overlay */}
<div className="relative z-20">
{/* Hero Section */}
<section className="relative min-h-screen flex items-center">
<PageContainer className="relative text-white">
  <div className="max-w-2xl animate-on-scroll opacity-0">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white/80 transform transition-all duration-700 delay-200">
      Baking Joy, One Cookie at a Time
    </h1>
    <p className="text-xl mb-8 leading-relaxed text-white/80 transform transition-all duration-700 delay-300">
      At Crispie, we believe that a cookie is more than just a treat—it's a moment of pure happiness. Founded by passionate bakers, our journey is about creating connections through the simple pleasure of a perfectly baked cookie.
    </p>
    <div className="flex space-x-4 transform transition-all duration-700 delay-500">
  <Button variant="white" as="link" to="/cookie-menu" className="group relative overflow-hidden border-transparent hover:border-transparent">
    <span className="relative z-10">Explore Our Cookies</span>
    <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
  </Button>
  <Button variant="secondary" className="group relative overflow-hidden border-transparent hover:border-transparent">
    <span className="relative z-10">Our Story</span>
    <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
  </Button>
</div>
  </div>
</PageContainer>
</section>

{/* Our Story Section */}
<section className="relative py-16 bg-white">
<PageContainer>
  <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-darkText transform transition-all duration-700 delay-200">
      Our Humble Beginnings
    </h2>
    <p className="text-lg text-darkText/80 mb-6 transform transition-all duration-700 delay-300">
      What started in a small kitchen has grown into a passion for creating moments of joy. Every cookie is a testament to our commitment to quality, creativity, and community.
    </p>
  </div>
</PageContainer>
</section>

{/* Values Section */}
<section className="relative pb-16 bg-beige">
<PageContainer>
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkText">
      The Crispie Philosophy
    </h2>
    <p className="text-lg text-darkText/80 max-w-2xl mx-auto mt-4">
      Our commitment goes beyond baking cookies. We believe in creating experiences that bring joy, support our community, and respect the ingredients that make our cookies extraordinary.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
    {[
      {
        title: "Crafted with Care",
        subtitle: "Artisan Baking Approach",
        description: "Every cookie is meticulously handcrafted in small batches, ensuring each piece meets our rigorous quality standards. Our bakers pour their passion into every single cookie, treating each as a work of art.",
        icon: "🤲"
      },
      {
        title: "Premium Ingredients",
        subtitle: "Farm-to-Cookie Excellence",
        description: "We source only the finest local and sustainable ingredients. From hand-picked chocolate chips to organic flour, we believe superior ingredients create unparalleled flavor and support local farmers.",
        icon: "🌱"
      },
      {
        title: "Community First",
        subtitle: "Sustainable Impact",
        description: "Our commitment extends beyond our kitchen. We actively support local producers, contribute to community programs, and ensure that every batch of cookies makes a positive difference in people's lives.",
        icon: "🤝"
      }
    ].map((value, index) => (
      <div 
        key={value.title} 
        className="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105"
      >
        <div className="text-5xl mb-4 opacity-80">{value.icon}</div>
        <h3 className="text-2xl font-semibold mb-2 text-primary">
          {value.title}
        </h3>
        <p className="text-sm text-darkText/60 mb-4 uppercase tracking-wider">
          {value.subtitle}
        </p>
        <p className="text-darkText/80 text-base">
          {value.description}
        </p>
      </div>
    ))}
  </div>
</PageContainer>
</section>

{/* Promise Section */}
<section className="relative py-16 bg-brown text-white">
<PageContainer>
  <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 transform transition-all duration-700 delay-200">
      Our Delicious Promise
    </h2>
    <p className="text-lg mb-8 transform transition-all duration-700 delay-300">
      We promise to deliver more than just cookies—we deliver moments of happiness, comfort, and connection. Every bite tells a story of passion, quality, and love.
    </p>
    <Button 
      variant="white" 
      as="link" 
      to="/contact-us"
      className="group relative overflow-hidden"
    >
      <span className="relative z-10">Connect With Us</span>
      <span className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
    </Button>
  </div>
</PageContainer>
</section>
</div>

{/* Custom CSS for animations */}
<style jsx>{`
@keyframes fadeInUp {
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

.animate-fade-in-up {
animation: fadeInUp 0.8s ease-out forwards;
}
`}</style>
</div>
);
};

export default AboutUs;