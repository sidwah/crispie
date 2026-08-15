// src/pages/Home.jsx
import React from 'react';
import PageContainer from "../components/layout/PageContainer";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <NewsletterSection />
    </PageContainer>
  );
};

export default Home;