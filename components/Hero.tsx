import React from 'react';
import { HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden">
      <style>{`
          @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
              animation: fadeInUp 1.5s ease-out forwards;
          }
          @keyframes gradient-pan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background-size: 200% 200%;
            background-image: linear-gradient(45deg, rgba(26, 71, 42, 0.4), rgba(0,0,0,0.6), rgba(212, 175, 55, 0.2), rgba(0,0,0,0.6));
            animation: gradient-pan 15s ease infinite;
          }
      `}</style>
      <div className="absolute inset-0 animated-gradient z-10"></div>
      <img 
        src={HERO_IMAGE} 
        alt="Elegant interior of Srivalli restaurant" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center animate-fadeInUp px-4">
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-4 tracking-wide md:tracking-widest" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Taste of South India, in Jaipur
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Experience the authentic flavours and rich culinary heritage passed down through generations.
        </p>
        <div className="space-x-4">
          <button onClick={scrollToMenu} className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white font-bold py-3 px-6 sm:px-10 rounded-full hover:bg-white hover:text-brand-green transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;