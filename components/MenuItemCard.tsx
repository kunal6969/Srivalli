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
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      style={{ animation: `fadeInUp 0.5s ease-out ${animationDelay} forwards`, opacity: 0 }}
    >
      <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
        {!imageError ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="text-gray-400 text-center p-4">
            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image not available</p>
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-green mb-2 transition-colors duration-300 group-hover:text-brand-terracotta">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="mt-auto">
          <span className="text-2xl font-display text-brand-terracotta transition-all duration-300 group-hover:text-3xl">{`₹${item.price}`}</span>
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
