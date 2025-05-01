// src/pages/Home.jsx
import React from 'react';
import PageContainer from "../components/layout/PageContainer";
import HeroSection from "../components/home/HeroSection";
// Import additional components as you create them
// import FeatureSection from "../components/home/FeatureSection";

const Home = () => {
  return (
    <PageContainer>
      <HeroSection />
      {/* Add other sections as you implement them */}
      {/* <FeatureSection /> */}
    </PageContainer>
  );
};

export default Home;