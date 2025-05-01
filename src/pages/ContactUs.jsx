import React from 'react';
import Button from "../components/ui/Button";

const ContactUs = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center bg-fixed" style={{
        backgroundImage: 'url(/images/hero-cookies-box.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          <div className="h-full flex items-center">
            <div className="bg-white p-12 h-full w-full max-w-md pointer-events-auto flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-darkText">
                Get in Touch
              </h1>
              
              <div className="space-y-6 text-darkText/80 text-lg">
                <p>
                  We'd love to hear from you! Whether you have a question about our cookies, 
                  want to place a special order, or just want to share your love for Crispie, 
                  we're here to listen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-primary mr-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <a 
                      href="mailto:hello@crispiecookies.com" 
                      className="hover:text-primary transition-colors"
                    >
                      hello@crispiecookies.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-primary mr-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                      />
                    </svg>
                    <a 
                      href="tel:+1-555-COOKIE" 
                      className="hover:text-primary transition-colors"
                    >
                      (555) COOKIE
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-primary mr-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <span>123 Sweet Street, Baker's Corner, CA 90210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours Section */}
            <div className="bg-beige p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-serif font-bold mb-6 text-darkText">
                Business Hours
              </h2>
              
              <div className="space-y-4 text-darkText/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9am - 5pm PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10am - 3pm PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-sm italic pt-4 text-center">
                  Baking love for next week!
                </p>
              </div>
            </div>
            
            {/* Send Email Section */}
            <div className="bg-beige p-8 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-darkText">
                Send Us a Message
              </h2>
              
              <p className="text-darkText/80 mb-6">
                Our contact form is coming soon! In the meantime, feel free to reach out via email.
              </p>
              
              <Button 
                as="a" 
                href="mailto:hello@crispiecookies.com" 
                variant="primary"
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;