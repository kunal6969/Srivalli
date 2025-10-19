import React, { useState } from 'react';
import type { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex text-brand-gold">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-brand-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      {!imageError ? (
        <img 
          src={review.image} 
          alt={review.author} 
          className="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white shadow-md object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-20 h-20 rounded-full mx-auto -mt-16 border-4 border-white shadow-md bg-brand-beige flex items-center justify-center">
          <span className="text-brand-green font-bold text-2xl">
            {review.author.charAt(0)}
          </span>
        </div>
      )}
      <p className="text-gray-600 italic my-4">"{review.quote}"</p>
      <h4 className="font-bold text-brand-green text-lg">{review.author}</h4>
      <div className="mt-2 flex justify-center">
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
};

export default ReviewCard;
