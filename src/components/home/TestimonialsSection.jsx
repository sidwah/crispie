import React from "react";
import Button from "../ui/Button";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-primary">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah T.",
              rating: "★★★★★",
              text: "These are by far the best cookies I've ever tasted! The chocolate chip ones are my absolute favorite. Ordering was easy and delivery was fast.",
            },
            {
              name: "Michael R.",
              rating: "★★★★★",
              text: "Bought these for my wife's birthday and she couldn't stop raving about them. The packaging was gorgeous and the cookies were fresh. Will definitely order again!",
            },
            {
              name: "Emily K.",
              rating: "★★★★",
              text: "Love the oatmeal raisin cookies - not too sweet, just the right amount of cinnamon. Perfect with a cup of coffee in the morning.",
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm p-8 transform transition-all duration-300 hover:shadow-md"
            >
              <p className="text-darkText/80 mb-4 line-clamp-3">{testimonial.text}</p>
              <div className="flex items-center space-x-3">
                <div className="text-yellow-500">{testimonial.rating}</div>
                <span className="text-darkText/60 text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;