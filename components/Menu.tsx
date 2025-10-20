import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import MenuItemCard from './MenuItemCard';
import { MENU_ITEMS } from '../constants';

const INITIAL_LOAD_COUNT = 9;
const LOAD_MORE_COUNT = 9;

const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_LOAD_COUNT);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleItemsCount(INITIAL_LOAD_COUNT);
  }, [activeCategory]);

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Scroll active category into view
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-category="${category}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

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

      {/* Mobile: Horizontal Scrolling Slider | Desktop: Wrapped Flex */}
      <div className="relative mb-10 sm:mb-12">
        {/* Gradient Fade Indicators - Mobile Only */}
        {canScrollLeft && (
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
        )}
        {canScrollRight && (
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
        )}

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex md:flex-wrap md:justify-center gap-2 sm:gap-3 px-4 overflow-x-auto md:overflow-x-visible scrollbar-hide scroll-smooth"
          style={{
            scrollSnapType: 'x proximity',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {categories.map(category => (
            <button
              key={category}
              data-category={category}
              onClick={() => handleCategoryClick(category)}
              className={`flex-shrink-0 px-5 sm:px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95 whitespace-nowrap ${
                activeCategory === category 
                  ? 'bg-brand-green text-white shadow-lg' 
                  : 'bg-white text-brand-green hover:bg-brand-green/5 border-2 border-brand-green/20'
              }`}
              style={activeCategory === category ? {
                boxShadow: '0 4px 16px rgba(26, 71, 42, 0.25), 0 2px 8px rgba(26, 71, 42, 0.15)',
                scrollSnapAlign: 'center'
              } : {
                scrollSnapAlign: 'center'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Swipe Hint - Mobile Only */}
        <div className="md:hidden flex justify-center items-center gap-2 mt-3 text-gray-400 text-xs animate-fadeIn">
          <svg className="w-3 h-3 animate-swipe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="tracking-wider uppercase font-light">Swipe to browse categories</span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes swipe {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-6px); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out 0.5s both;
        }

        .animate-swipe {
          animation: swipe 2s ease-in-out infinite;
        }
      `}</style>
      
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