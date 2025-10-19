import React from 'react';
import Section from './Section';
import ReviewCard from './ReviewCard';
import { ABOUT_IMAGE, REVIEWS, GOOGLE_MAPS_PLACE_URL } from '../constants';
import type { Review } from '../types';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="md:pr-12">
          <h2 className="text-4xl sm:text-5xl font-display text-brand-green mb-6 tracking-wide">Our Story</h2>
          <p className="text-gray-600 mb-4 text-lg">
            Srivalli was born from a passion for preserving the rich culinary tapestry of South India. Our journey began in the family kitchens of Chennai, where generations-old recipes were cherished and perfected.
          </p>
          <p className="text-gray-600 mb-4 text-lg">
            We brought these authentic flavours to the heart of Jaipur, with a commitment to using only the freshest, locally sourced ingredients and traditional spices. Each dish at Srivalli is a celebration of heritage, a testament to the love and care we pour into our food.
          </p>
          <p className="text-gray-600 text-lg">
            Our mission is simple: to offer an authentic dining experience that transports you to the vibrant streets and warm homes of Southern India.
          </p>
        </div>
        <div>
          <img 
            src={ABOUT_IMAGE} 
            alt="Chef preparing a dish in the kitchen" 
            className="rounded-lg shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-24">
        <h3 className="text-3xl font-display text-brand-green text-center mb-4">Customer experiences and feedback</h3>
        <p className="text-center text-gray-600 mb-12">Read honest testimonials from our customer community</p>
        
        {/* Horizontal Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex gap-6 pb-6 px-4 md:px-0" style={{ scrollSnapType: 'x mandatory' }}>
              {REVIEWS.map((review: Review) => (
                <div key={review.id} style={{ scrollSnapAlign: 'start' }}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="text-center mt-4 text-gray-400 text-sm">
            ← Scroll to see more reviews →
          </div>
        </div>
        
        {/* Google Reviews Button */}
        <div className="text-center mt-12">
          <a 
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-green font-semibold py-4 px-8 rounded-full hover:bg-brand-green hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-brand-green group"
          >
            <svg 
              className="w-6 h-6 transition-transform group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>View All Reviews on Google Maps</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4">See what our customers are saying on Google</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
