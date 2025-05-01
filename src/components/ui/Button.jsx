import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  as = 'button',
  to,
  href,
  onClick,
  className,
  disabled = false,
  type = 'button',
  ...props
}) => {
  // Configure button styling based on variant
  const buttonClasses = classNames(
    // Base styles
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-2xl text-center', // Increased border radius
    
    // Width and styling to match the image
    'w-full max-w-[400px] px-12 py-4 text-xl', // Wider button with increased padding
    
    // Variant styles
    {
      // CTA variant styled to match the image
      'bg-white text-primary shadow-lg hover:shadow-xl border border-gray-200': 
        variant === 'cta' && !disabled,
      
      // Other variants (keeping existing styles)
      'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg': 
        variant === 'primary' && !disabled,
      
      'bg-white border-2 border-primary text-primary hover:bg-beige/50':
        variant === 'secondary' && !disabled,
        
      'bg-white text-primary shadow-md hover:shadow-lg':
        variant === 'white' && !disabled,
      
      // Disabled state
      'opacity-50 cursor-not-allowed': disabled,
    },
    
    // Additional custom classes
    className
  );

  // Handle link navigation
  const handleClick = (e) => {
    if (as === 'link' && to) {
      e.preventDefault();
      window.location.href = to;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Render as link-like button if 'to' prop is provided
  if (as === 'link' && to) {
    return (
      <button 
        onClick={handleClick} 
        className={buttonClasses} 
        {...props}
      >
        {children}
      </button>
    );
  }
  
  // Render as anchor tag if 'href' prop is provided
  if (as === 'a' && href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Default: render as a button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white', 'cta']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  as: PropTypes.oneOf(['button', 'link', 'a']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;