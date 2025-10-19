import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % GALLERY_IMAGES.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      setScrollPosition(scrollLeft);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => carousel.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);
  
  return (
    <>
      <Section id="gallery" className="bg-gradient-to-b from-white via-brand-cream/30 to-white overflow-hidden">
        {/* Elegant Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <div className="inline-block mb-3">
            <span className="text-brand-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-brand-green mb-3 md:mb-4 tracking-tight leading-tight">
            Moments Worth Savoring
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experience the artistry and ambiance of Srivalli
          </p>
        </div>
        
        {/* Premium Carousel Container */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Elegant Gradient Overlays for Edges */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

          {/* Premium Navigation Buttons - Desktop */}
          <button
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 
              items-center justify-center w-14 h-14 rounded-full
              bg-white/90 backdrop-blur-md shadow-lg
              text-brand-green hover:text-white hover:bg-brand-green
              transition-all duration-500 ease-out
              border border-gray-100
              ${!canScrollLeft ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}
            `}
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 
              items-center justify-center w-14 h-14 rounded-full
              bg-white/90 backdrop-blur-md shadow-lg
              text-brand-green hover:text-white hover:bg-brand-green
              transition-all duration-500 ease-out
              border border-gray-100
              ${!canScrollRight ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}
            `}
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Luxury Carousel Scroll Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 px-4 md:px-16 scroll-smooth luxury-scrollbar"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollPaddingLeft: '16px',
              scrollPaddingRight: '16px'
            }}
          >
            {GALLERY_IMAGES.map((src, index) => (
              <button 
                key={index} 
                onClick={() => openLightbox(index)}
                className="relative flex-shrink-0 overflow-hidden group cursor-pointer 
                  transform transition-all duration-700 ease-out
                  focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-4
                  luxury-card"
                style={{
                  width: 'calc(100vw - 32px)',
                  maxWidth: index === 0 ? '550px' : '400px',
                  height: 'calc((100vw - 32px) * 1.25)',
                  maxHeight: index === 0 ? '650px' : '500px',
                  scrollSnapAlign: 'center',
                  animationDelay: `${index * 0.15}s`,
                  borderRadius: '24px'
                }}
                aria-label={`View image ${index + 1} in full screen`}
              >
                {/* Premium Glass Morphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 
                  opacity-0 group-hover:opacity-100 group-active:opacity-100
                  transition-opacity duration-500 z-10"></div>
                
                {/* Elegant Featured Badge */}
                {index === 0 && (
                  <div className="absolute top-6 left-6 z-20 
                    bg-gradient-to-r from-brand-gold to-yellow-600
                    text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl
                    tracking-wider uppercase backdrop-blur-sm">
                    Featured
                  </div>
                )}

                {/* Minimalist Counter */}
                <div className="absolute bottom-6 right-6 z-20 
                  bg-black/40 backdrop-blur-md text-white 
                  px-4 py-1.5 rounded-full text-xs font-light
                  tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1} / {GALLERY_IMAGES.length}
                </div>
                
                {/* Premium Image with Ken Burns Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {!imageErrors[index] ? (
                    <img 
                      src={src} 
                      alt={`Srivalli restaurant gallery ${index + 1}`}
                      className="w-full h-full object-cover 
                        transform group-hover:scale-110 
                        transition-transform duration-[2000ms] ease-out
                        will-change-transform"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 
                      flex items-center justify-center">
                      <div className="text-gray-300 text-center p-6">
                        <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs font-light tracking-wide">Image unavailable</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Subtle Light Leak Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 
                  bg-gradient-radial from-brand-gold/20 via-transparent to-transparent 
                  blur-3xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-1000 pointer-events-none"></div>
              </button>
            ))}
          </div>

          {/* Premium Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-10 px-4">
            {GALLERY_IMAGES.map((_, index) => {
              const isActive = Math.abs(scrollPosition / 400 - index) < 0.5;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (carouselRef.current) {
                      const cardWidth = window.innerWidth < 768 ? window.innerWidth - 32 : (index === 0 ? 550 : 400);
                      const gap = window.innerWidth < 768 ? 16 : 24;
                      carouselRef.current.scrollTo({
                        left: index * (cardWidth + gap),
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    isActive
                      ? 'w-8 h-1.5 bg-brand-gold shadow-md'
                      : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Swipe Hint for Mobile */}
          <div className="md:hidden flex justify-center items-center gap-2 mt-4 text-gray-400 text-xs animate-fadeIn">
            <svg className="w-4 h-4 animate-swipe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="tracking-wider uppercase font-light">Swipe to explore</span>
          </div>
        </div>
        
        <style>{`
          /* Premium Animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes swipe {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-8px); }
          }

          .animate-fadeIn {
            animation: fadeIn 2s ease-out 1s both;
          }

          .animate-swipe {
            animation: swipe 2s ease-in-out infinite;
          }

          /* Luxury Scrollbar - Hidden on Mobile, Elegant on Desktop */
          .luxury-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .luxury-scrollbar::-webkit-scrollbar {
            display: none;
          }

          @media (min-width: 768px) {
            .luxury-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(195, 157, 88, 0.3) transparent;
            }

            .luxury-scrollbar::-webkit-scrollbar {
              display: block;
              height: 4px;
            }

            .luxury-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }

            .luxury-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(195, 157, 88, 0.3);
              border-radius: 10px;
            }

            .luxury-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(195, 157, 88, 0.5);
            }
          }

          /* Premium Card Effects */
          .luxury-card {
            box-shadow: 
              0 1px 3px rgba(0, 0, 0, 0.05),
              0 10px 40px rgba(0, 0, 0, 0.08);
            animation: luxuryFadeIn 0.8s ease-out backwards;
          }

          .luxury-card:hover {
            box-shadow: 
              0 1px 3px rgba(0, 0, 0, 0.05),
              0 20px 60px rgba(0, 0, 0, 0.15);
          }

          @keyframes luxuryFadeIn {
            from { 
              opacity: 0; 
              transform: translateY(40px) scale(0.95);
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1);
            }
          }

          /* Mobile Optimizations */
          @media (max-width: 768px) {
            .luxury-card {
              box-shadow: 
                0 1px 2px rgba(0, 0, 0, 0.05),
                0 8px 30px rgba(0, 0, 0, 0.1);
            }

            .luxury-card:active {
              transform: scale(0.98);
              box-shadow: 
                0 1px 2px rgba(0, 0, 0, 0.05),
                0 8px 30px rgba(0, 0, 0, 0.15);
            }
          }

          /* Smooth Touch Interactions */
          @media (hover: none) and (pointer: coarse) {
            .luxury-card {
              transition: transform 0.2s ease-out;
            }
          }
        `}</style>
      </Section>
      
      {isLightboxOpen && (
        <Lightbox
          images={GALLERY_IMAGES}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </>
  );
};

export default Gallery;