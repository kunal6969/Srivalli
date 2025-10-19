import React from 'react';
import Section from './Section';
import ReviewCard from './ReviewCard';
import { ABOUT_IMAGE, REVIEWS } from '../constants';
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
        <h3 className="text-3xl font-display text-brand-green text-center mb-16">What Our Customers Say</h3>
        <div className="grid md:grid-cols-3 gap-8 pt-12">
            {REVIEWS.map((review: Review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
