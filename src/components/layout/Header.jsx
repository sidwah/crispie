// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Use React Router's location to determine active page
  const location = useLocation();

  // Handle scroll effect for semi-transparent background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Cookie Menu', path: '/cookie-menu' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 border-b border-white/10
        ${isScrolled 
          ? 'bg-white/90 shadow-md' 
          : 'bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-md'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo size="default" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-sans text-lg transition-colors hover:text-primary 
                ${location.pathname === link.path 
                  ? 'text-darkText after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-primary' 
                  : 'text-darkText/80'
                }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-darkText focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-md mt-4 py-4 px-6 rounded-lg shadow-lg border border-white/10">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-lg transition-colors hover:text-primary 
                  ${location.pathname === link.path 
                    ? 'text-primary font-medium' 
                    : 'text-darkText'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;