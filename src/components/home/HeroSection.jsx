import React from "react";
import Button from "../ui/Button";
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const location = useLocation();
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Cookies That Feel<br />
            Like a Hug.
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button as="link" variant="cta">
              <Link to="/cookie-menu">Order A Box</Link>
            </Button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-cookies-stacked.png`}
            alt="Stack of delicious cookies"
            className="hero-image"
            style={{
              width: '800px',
              height: '800px',
              objectFit: 'contain',
              transform: 'translateX(50px)'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x800?text=Cookies+Image";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;