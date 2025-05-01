// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from "../components/layout/PageContainer";

const NotFound = () => {
  return (
    <PageContainer>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-8">
          We couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="bg-primary text-white px-6 py-2 rounded-full inline-block hover:shadow-lg transition-shadow"
        >
          Return Home
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFound;