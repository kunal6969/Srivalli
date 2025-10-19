import React, { useState } from 'react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <section id="hero" className="relative w-full flex items-center justify-center text-white overflow-hidden" 
      style={{ 
        minHeight: '100vh'
      }}>
      <style>{`
          @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInScale {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeInUp {
              animation: fadeInUp 1.2s ease-out forwards;
          }
          .animate-fadeInScale {
              animation: fadeInScale 1.5s ease-out forwards;
          }
          @keyframes gradient-pan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background-size: 200% 200%;
            background-image: linear-gradient(45deg, rgba(26, 71, 42, 0.5), rgba(0,0,0,0.7), rgba(212, 175, 55, 0.3), rgba(0,0,0,0.7));
            animation: gradient-pan 15s ease infinite;
          }
          
          /* Mobile-optimized image positioning */
          @media (max-width: 768px) {
            .hero-image-mobile {
              object-position: center 30%;
              transform: scale(1.05);
            }
          }
          
          /* Prevent overscroll bounce on iOS */
          @supports (-webkit-touch-callout: none) {
            .hero-section {
              position: fixed;
              width: 100%;
            }
          }
      `}</style>
      
      {/* Subtle Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
      
      {/* Hero Image - Optimized for mobile viewing */}
      {!imageError ? (
        <img 
          src={HERO_IMAGE} 
          alt="Elegant interior of Srivalli restaurant" 
          className="absolute inset-0 w-full h-full object-cover hero-image-mobile"
          style={{
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
          loading="eager"
          onError={handleImageError}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-terracotta to-brand-green"></div>
      )}
      
      {/* Content - Mobile-first design */}
      <div className="relative z-20 text-center animate-fadeInUp px-6 py-8 max-w-full">
        
        {/* Main Heading - Premium mobile typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 md:mb-8 tracking-tight leading-[1.1] px-4" 
          style={{ 
            textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)',
            letterSpacing: '-0.01em'
          }}>
          Taste of South India,<br className="md:hidden" /> in Jaipur
        </h1>
        
        {/* Subtitle - Enhanced readability */}
        <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-6" 
          style={{ 
            textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)',
            fontWeight: '300',
            letterSpacing: '0.01em'
          }}>
          Experience authentic flavours and rich culinary heritage passed down through generations
        </p>
        
        {/* CTA Button - Premium mobile design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
          <button 
            onClick={scrollToMenu} 
            className="w-full sm:w-auto bg-gradient-to-r from-white to-brand-cream text-brand-green font-bold py-5 px-12 rounded-full
              hover:from-brand-gold hover:to-brand-gold hover:text-white
              active:scale-[0.97]
              transition-all duration-300 
              shadow-2xl hover:shadow-3xl
              border-2 border-white/80
              text-lg md:text-xl
              min-w-[240px]
              backdrop-blur-sm"
            style={{
              boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 6px 20px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
              letterSpacing: '0.02em'
            }}>
            View Menu
          </button>
        </div>
        
        {/* Scroll Indicator - Mobile friendly */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;