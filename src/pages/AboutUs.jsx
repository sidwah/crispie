import React from 'react';
import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";

const AboutUs = () => {
 return (
 <div className="min-h-screen">
  {/* Header Section */}
  <section className="py-12 bg-primary/5">
   <PageContainer>
     <div className="text-center">
       <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
         About Crispie
       </h1>
       <p className="text-lg text-primary/80 max-w-2xl mx-auto">
         We believe that a cookie is more than just a treat—it's a moment of pure happiness. 
         Founded by passionate bakers, our journey is about creating connections through 
         the simple pleasure of a perfectly baked cookie.
       </p>
     </div>
   </PageContainer>
  </section>

  {/* Our Story Section */}
  <section className="py-16 bg-white">
   <PageContainer>
     <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-darkText">
         Our Humble Beginnings
       </h2>
       <p className="text-lg text-darkText/80 mb-6 leading-relaxed">
         What started in a small kitchen has grown into a passion for creating moments of joy. 
         Every cookie is a testament to our commitment to quality, creativity, and community.
       </p>
       <div className="flex space-x-4 justify-center md:space-x-0">
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

  {/* Values Section */}
  <section className="py-16 bg-beige">
   <PageContainer>
     <div className="text-center mb-12">
       <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkText">
         The Crispie Philosophy
       </h2>
       <p className="text-lg text-darkText/80 max-w-2xl mx-auto mt-4">
         Our commitment goes beyond baking cookies. We believe in creating experiences that bring joy, 
         support our community, and respect the ingredients that make our cookies extraordinary.
       </p>
     </div>
     <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
           className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:scale-105"
         >
           <div className="text-4xl mb-3 opacity-80">{value.icon}</div>
           <h3 className="text-xl font-semibold mb-2 text-primary">
             {value.title}
           </h3>
           <p className="text-sm text-darkText/60 mb-3 uppercase tracking-wider">
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
  <section className="py-16 bg-brown text-white">
   <PageContainer>
     <div className="max-w-2xl mx-auto text-center">
       <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
         Our Delicious Promise
       </h2>
       <p className="text-lg mb-6 text-white/80 leading-relaxed">
         We promise to deliver more than just cookies—we deliver moments of happiness, comfort, and connection. 
         Every bite tells a story of passion, quality, and love.
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

  {/* Testimonials Section */}
  <section className="py-16 bg-primary/5">
   <PageContainer>
     <div className="text-center">
       <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
         What Our Customers Say
       </h2>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
         {[
           {
             name: "Sarah T.",
             rating: "★★★★★",
             text: "These are by far the best cookies I've ever tasted! The chocolate chip ones are my absolute favorite. Ordering was easy and delivery was fast.",
             image: "/images/placeholder-testimonial-1.png"
           },
           {
             name: "Michael R.",
             rating: "★★★★★",
             text: "Bought these for my wife's birthday and she couldn't stop raving about them. The packaging was gorgeous and the cookies were fresh. Will definitely order again!",
             image: "/images/placeholder-testimonial-2.png"
           },
           {
             name: "Emily K.",
             rating: "★★★★",
             text: "Love the oatmeal raisin cookies - not too sweet, just the right amount of cinnamon. Perfect with a cup of coffee in the morning.",
             image: "/images/placeholder-testimonial-3.png"
           }
         ].map((testimonial, index) => (
           <div 
             key={index} 
             className="bg-white p-6 rounded-lg shadow-sm p-8 transform transition-all duration-300 hover:shadow-md"
           >
             <div className="flex items-start space-x-4">
               <img 
                 src={testimonial.image} 
                 alt={testimonial.name} 
                 className="w-12 h-12 rounded-full flex-shrink-0"
               />
               <div className="flex-1 pt-1">
                 <p className="text-darkText/80 mb-2">{testimonial.text}</p>
                 <div className="flex items-center space-x-2">
                   <div className="text-yellow-500">{testimonial.rating}</div>
                   <span className="text-darkText/60 text-sm">{testimonial.name}</span>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </PageContainer>
  </section>
 </div>
 );
};

export default AboutUs;