
import React, { useState } from 'react';
import { getDishRecommendation } from '../services/geminiService';
import type { MenuItem } from '../types';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const RecommendationModal: React.FC<RecommendationModalProps> = ({ isOpen, onClose, menuItems }) => {
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState<{ dishName: string; reason: string; } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetRecommendation = async () => {
    if (!preferences.trim()) {
        setError('Please tell us what you like!');
        return;
    }
    setIsLoading(true);
    setError('');
    setRecommendation(null);
    try {
      const result = await getDishRecommendation(preferences, menuItems);
      setRecommendation(result);
    } catch (err) {
      setError('Sorry, we couldn\'t get a recommendation right now. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after a delay to allow for closing animation
    setTimeout(() => {
        setPreferences('');
        setRecommendation(null);
        setError('');
        setIsLoading(false);
    }, 300);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={handleClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <style>{`
          @keyframes modal-in {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-modal-in {
            animation: modal-in 0.3s ease-out;
          }
        `}</style>
        <div className="flex justify-between items-start">
            <h2 className="text-2xl font-display text-brand-green mb-4">Find Your Perfect Dish</h2>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-700">&times;</button>
        </div>
        
        {!recommendation ? (
             <>
                <p className="text-gray-600 mb-4">
                  Tell us your cravings. For example, "I want something spicy and vegetarian" or "something light and not fried".
                </p>
                <textarea
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="I'm in the mood for..."
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-brand-saffron"
                  rows={3}
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button
                  onClick={handleGetRecommendation}
                  disabled={isLoading}
                  className="w-full bg-brand-green text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400"
                >
                  {isLoading ? 'Thinking...' : 'Get Recommendation'}
                </button>
            </>
        ) : (
            <div className="text-center bg-brand-cream p-6 rounded-md">
                <p className="text-gray-700 mb-2">We recommend the:</p>
                <h3 className="text-3xl font-bold text-brand-terracotta mb-3">{recommendation.dishName}</h3>
                <p className="text-gray-600 italic">"{recommendation.reason}"</p>
                <button onClick={handleClose} className="mt-6 bg-brand-green text-white font-semibold py-2 px-6 rounded-full">Close</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationModal;