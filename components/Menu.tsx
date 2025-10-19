import React, { useState, useEffect } from 'react';
import Section from './Section';
import MenuItemCard from './MenuItemCard';
import { MENU_ITEMS } from '../constants';

const INITIAL_LOAD_COUNT = 9;
const LOAD_MORE_COUNT = 9;

const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_LOAD_COUNT);

  useEffect(() => {
    setVisibleItemsCount(INITIAL_LOAD_COUNT);
  }, [activeCategory]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);
  const visibleItems = filteredItems.slice(0, visibleItemsCount);
  const hasMoreItems = visibleItemsCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleItemsCount(prevCount => prevCount + LOAD_MORE_COUNT);
  };

  return (
    <Section id="menu" className="bg-gradient-to-b from-white via-brand-cream/10 to-white">
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-green mb-4 tracking-tight">Our Menu</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Explore a curated selection of dishes made with passion, tradition, and the finest ingredients.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 px-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95 ${
              activeCategory === category 
                ? 'bg-brand-green text-white shadow-lg' 
                : 'bg-white text-brand-green hover:bg-brand-green/5 border-2 border-brand-green/20'
            }`}
            style={activeCategory === category ? {
              boxShadow: '0 4px 16px rgba(26, 71, 42, 0.25), 0 2px 8px rgba(26, 71, 42, 0.15)'
            } : {}}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
        {visibleItems.map((item, index) => (
          <MenuItemCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {hasMoreItems && (
        <div className="text-center mt-10 sm:mt-12 px-4">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-brand-green to-brand-green/90 text-white font-bold py-4 px-10 sm:px-12 rounded-full active:scale-95 transition-all duration-300 w-full sm:w-auto"
            style={{
              boxShadow: '0 6px 24px rgba(26, 71, 42, 0.3), 0 3px 12px rgba(26, 71, 42, 0.2)'
            }}
          >
            Load More Dishes
          </button>
        </div>
      )}
    </Section>
  );
};

export default Menu;