import React, { useState } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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
  
  return (
    <>
      <Section id="gallery">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display text-brand-green mb-4 tracking-wide">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into the Srivalli experience – from our kitchen to your table.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide snap-x snap-mandatory">
          {GALLERY_IMAGES.map((src, index) => (
            <button 
              key={index} 
              onClick={() => openLightbox(index)}
              className="flex-shrink-0 w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 snap-center overflow-hidden rounded-lg shadow-lg group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-saffron focus:ring-offset-2"
              aria-label={`View image ${index + 1} in full screen`}
            >
              {!imageErrors[index] ? (
                <img 
                  src={src} 
                  alt={`Srivalli restaurant gallery image ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                />
              ) : (
                <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center p-4">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">Gallery image not available</p>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
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