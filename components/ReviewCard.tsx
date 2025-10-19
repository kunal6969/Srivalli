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
    <div className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-80 md:w-96 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        {!imageError ? (
          <img 
            src={review.image} 
            alt={review.author} 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-green/20"
            onError={handleImageError}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center ring-2 ring-brand-green/20">
            <span className="text-white font-bold text-lg">
              {review.author.charAt(0)}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-bold text-brand-green text-base">{review.author}</h4>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={review.rating} />
            {review.date && (
              <span className="text-gray-400 text-xs">• {review.date}</span>
            )}
          </div>
        </div>
        {review.platform && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Google</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        {review.quote}
      </p>
    </div>
  );
};

export default ReviewCard;
