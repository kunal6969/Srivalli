import React from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300"
      style={{ animation: `fadeInUp 0.5s ease-out ${animationDelay} forwards`, opacity: 0 }}
    >
      <div className="h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-green mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-display text-brand-terracotta">₹{item.price}</span>
          <button className="bg-brand-beige text-brand-green font-semibold py-2 px-4 rounded-full hover:bg-brand-saffron hover:text-white transition-colors duration-300 text-sm">
            Add to Order
          </button>
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
