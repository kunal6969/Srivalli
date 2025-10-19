import React, { useState } from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const animationDelay = `${index * 100}ms`;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden flex flex-col transform active:scale-[0.98] transition-all duration-300 cursor-pointer group"
      style={{ 
        animation: `fadeInUp 0.5s ease-out ${animationDelay} forwards`, 
        opacity: 0,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)'
      }}
    >
      <div className="h-56 sm:h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
        {!imageError ? (
          <>
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-active:scale-105"
              onError={handleImageError}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>
          </>
        ) : (
          <div className="text-gray-400 text-center p-4">
            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image not available</p>
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-2 transition-colors duration-300 group-active:text-brand-terracotta leading-tight">{item.name}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow leading-relaxed">{item.description}</p>
        <div className="mt-auto pt-3 border-t border-gray-100">
          <span className="text-2xl sm:text-3xl font-display font-semibold text-brand-terracotta">{`₹${item.price}`}</span>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MenuItemCard;
