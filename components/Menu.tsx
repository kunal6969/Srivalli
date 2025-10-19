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
    <Section id="menu" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-display text-brand-green mb-4 tracking-wide">Our Menu</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore a curated selection of dishes made with passion, tradition, and the finest ingredients.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-brand-green text-white shadow-soft-lg' 
                : 'bg-brand-beige text-brand-green hover:bg-brand-green/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleItems.map((item, index) => (
          <MenuItemCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {hasMoreItems && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-brand-green text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Load More
          </button>
        </div>
      )}
    </Section>
  );
};

export default Menu;