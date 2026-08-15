// src/pages/CookieMenu.jsx
import React, { useState } from 'react';
import PageContainer from "../components/layout/PageContainer";

// Cookie data with details
const cookieTypes = [
  {
    id: 'chocolate-chip',
    name: 'Chocolate Chip',
    description: 'Our classic chocolate chip cookies are made with premium dark chocolate chunks, creating a perfect balance of sweet and rich flavors.',
    image: '/images/cookies/chocolate-chip.png',
    ingredients: ['Flour', 'Butter', 'Dark Chocolate', 'Eggs', 'Vanilla'],
    accentColor: 'from-[#8B4513] to-[#D2691E]' // Brown chocolate tones
  },
  {
    id: 'oatmeal-raisin',
    name: 'Oatmeal Raisin',
    description: 'Wholesome oatmeal cookies packed with plump raisins and a hint of cinnamon, offering a comforting and nostalgic taste.',
    image: '/images/cookies/oatmeal-raisin.png',
    ingredients: ['Oats', 'Raisins', 'Cinnamon', 'Brown Sugar', 'Butter'],
    accentColor: 'from-[#D2B48C] to-[#8B4513]' // Oatmeal/tan tones
  },
  {
    id: 'gingerbread',
    name: 'Gingerbread',
    description: 'Festive gingerbread cookies with a warm blend of spices, perfect for bringing holiday cheer any time of the year.',
    image: '/images/cookies/gingerbread.png',
    ingredients: ['Molasses', 'Ginger', 'Cinnamon', 'Cloves', 'Flour'],
    accentColor: 'from-[#B8860B] to-[#CD853F]' // Gingerbread/golden tones
  },
  {
    id: 'snickerdoodle',
    name: 'Snickerdoodle',
    description: 'Cinnamon-sugar coated cookies with a crispy exterior and chewy center, rolled in cinnamon sugar for that classic taste.',
    image: '/images/cookies/snickerdoodle.png',
    ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Cream of Tartar', 'Cinnamon'],
    accentColor: 'from-[#F5DEB3] to-[#FFDAB9]' // Vanilla/cream tones
  },
  {
    id: 'double-chocolate',
    name: 'Double Chocolate',
    description: 'Indulgent chocolate lovers\' dream, made with 70% dark cocoa in the dough and chocolate chips throughout.',
    image: '/images/cookies/double-chocolate.png',
    ingredients: ['Flour', 'Cocoa Powder', 'Dark Chocolate', 'Butter', 'Eggs', 'Sugar'],
    accentColor: 'from-[#2C7A7B] to-[#53B0AE]' // Deep teal/cocoa tones
  }
];

const CookieCard = ({ cookie, onSelect }) => {
  return (
    <div 
      className="relative group cursor-pointer"
      onClick={() => onSelect(cookie)}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-md z-0"></div>
      <div 
        className="relative z-10 bg-white/20 backdrop-blur-md rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-white/20"
      >
        <div className="relative mb-3 flex flex-col items-center items-md-center h-48 md:h-40">
          <img 
            src={cookie.image} 
            alt={cookie.name} 
            className="w-full h-full md:h-full object-contain rounded-lg 
            group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x300?text=Cookie+Image';
            }}
          />
          <div 
            className="absolute top-2 right-2 bg-white/30 rounded-full p-2 
            group-hover:bg-white/50 transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-serif mb-1 text-white">{cookie.name}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{cookie.description}</p>
      </div>
    </div>
  );
};

const CookieModal = ({ cookie, onClose }) => {
  if (!cookie) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white/30 backdrop-blur-lg rounded-3xl max-w-full w-full 
        p-6 relative shadow-2xl border border-white/20 mx-4 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-primary 
          transition-colors bg-white/30 rounded-full p-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex items-center justify-center relative">
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${cookie.accentColor} 
              opacity-20 rounded-2xl blur-2xl -z-10`}
            ></div>
            <img 
              src={cookie.image} 
              alt={cookie.name} 
              className="w-full max-h-64 object-contain rounded-lg 
              transform hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x400?text=Cookie+Image';
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif mb-3 text-white/80">{cookie.name}</h2>
            <p className="text-white/80 mb-5 text-base leading-relaxed">{cookie.description}</p>
            
            <h3 className="text-base font-serif mb-3 text-white/80">Ingredients</h3>
            <ul className="space-y-1.5 mb-5">
              {cookie.ingredients.map((ingredient, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-white/80 text-sm"
                >
                  <span 
                    className={`w-1.5 h-1.5 mr-2 rounded-full bg-gradient-to-br ${cookie.accentColor}`}
                  ></span>
                  {ingredient}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 flex space-x-3">
              <button 
                className="flex-1 bg-primary text-white px-4 py-2 rounded-full 
                hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1 focus:outline-none 
                focus:ring-2 focus:ring-primary/50"
              >
                Order This Cookie
              </button>
              <button 
                className="flex-1 border-2 border-primary text-primary px-4 py-3 
                rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CookieMenu = () => {
  const [selectedCookie, setSelectedCookie] = useState(null);

  return (
    <div 
      className="min-h-screen bg-primary/5 relative pb-12"
      style={{
        backgroundImage: 'url(/images/cookie-menu-bg.png)',
        backgroundAttachment: 'fixed'
      }}
    >
      <PageContainer className="relative z-10">
        <div className="text-center mb-8 pt-6">
          <div 
            className="inline-block bg-gradient-to-br from-primary/10 via-primary/5 to-primary/2 
            backdrop-blur-sm rounded-3xl px-6 py-2 shadow-sm border border-primary/20"
          >
            <h1 
              className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight"
            >
              Baking Joy, One Cookie at a Time
            </h1>
          </div>
        </div>

        {/* Cookie grid - stacks on mobile, shows 3 on desktop */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cookieTypes.map((cookie) => (
              <CookieCard 
                key={cookie.id} 
                cookie={cookie} 
                onSelect={setSelectedCookie} 
              />
            ))}
          </div>

        {selectedCookie && (
          <CookieModal 
            cookie={selectedCookie} 
            onClose={() => setSelectedCookie(null)} 
          />
        )}
      </PageContainer>
    </div>
  );
};

export default CookieMenu;