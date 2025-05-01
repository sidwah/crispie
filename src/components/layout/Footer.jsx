// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer navigation links
  const footerLinks = [
    { title: 'Home', path: '/' },
    { title: 'Cookies', path: '/cookie-menu' },
    { title: 'About', path: '/about-us' },
    { title: 'Contact', path: '/contact-us' },
  ];

  return (
    <footer className="bg-brown text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif">Crispie</h2>
            <p className="text-sm opacity-75">Baking happiness since 2020</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm opacity-75">
          © {currentYear} Crispie Cookie Co. All rights reserved.
        </div>

        {/* Developer Information */}
        <div className="mt-4 text-center text-sm opacity-75">
          Website developed by <a href="https://www.aevora.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">Aevora</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;