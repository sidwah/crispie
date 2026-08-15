import React from "react";
import Button from "../ui/Button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-brown text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
          Join Our Cookie Club
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Get exclusive updates, new cookie launches, and special offers delivered straight to your inbox.
        </p>
        <div className="relative bg-white/10 rounded-full p-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-transparent w-full border-none outline-none text-white placeholder:text-white/60 text-sm
              block pr-8"
            required
          />
          <Button 
            type="submit" 
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full px-4 py-1.5 text-sm"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-white/60 text-sm mt-4">
          No spam, only delicious updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;