import React from 'react';
import Section from './Section';
import ReviewCard from './ReviewCard';
import { ABOUT_IMAGE, REVIEWS, GOOGLE_MAPS_PLACE_URL } from '../constants';
import type { Review } from '../types';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-0">
        <div className="md:pr-12 order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-green mb-6 md:mb-8 tracking-tight leading-tight">Our Story</h2>
          <p className="text-gray-700 mb-5 text-base sm:text-lg leading-relaxed">
            Srivalli was born from a passion for preserving the rich culinary tapestry of South India. Our journey began in the family kitchens of Chennai, where generations-old recipes were cherished and perfected.
          </p>
          <p className="text-gray-700 mb-5 text-base sm:text-lg leading-relaxed">
            We brought these authentic flavours to the heart of Jaipur, with a commitment to using only the freshest, locally sourced ingredients and traditional spices. Each dish at Srivalli is a celebration of heritage, a testament to the love and care we pour into our food.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our mission is simple: to offer an authentic dining experience that transports you to the vibrant streets and warm homes of Southern India.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={ABOUT_IMAGE} 
            alt="Chef preparing a dish in the kitchen" 
            className="rounded-2xl w-full h-full object-cover"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>
      
      <div className="mt-16 sm:mt-20 md:mt-24">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-green text-center mb-3 sm:mb-4 px-4 leading-tight">Customer experiences and feedback</h3>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-10 sm:mb-12 px-4">Read honest testimonials from our customer community</p>
        
        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex gap-5 sm:gap-6 pb-6 px-4 md:px-0" style={{ scrollSnapType: 'x mandatory' }}>
              {REVIEWS.map((review: Review) => (
                <div key={review.id} style={{ scrollSnapAlign: 'start' }}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator - Mobile optimized */}
          <div className="text-center mt-4 text-gray-400 text-xs sm:text-sm font-medium">
            ← Swipe to see more reviews →
          </div>
        </div>
        
        {/* Google Reviews Button - Premium Mobile */}
        <div className="text-center mt-10 sm:mt-12 px-4">
          <a 
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-white to-brand-cream text-brand-green font-bold py-5 px-8 sm:px-10 rounded-full hover:from-brand-green hover:to-brand-green hover:text-white active:scale-95 transition-all duration-300 border-2 border-brand-green group w-full sm:w-auto"
            style={{
              boxShadow: '0 8px 32px rgba(26, 71, 42, 0.15), 0 4px 16px rgba(26, 71, 42, 0.1)'
            }}
          >
            <svg 
              className="w-6 h-6 transition-transform group-hover:rotate-12 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-sm sm:text-base">View All Reviews on Google Maps</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4 px-4">See what our customers are saying on Google</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
