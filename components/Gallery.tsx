import React, { useState } from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from './Lightbox';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
              <img 
                src={src} 
                alt={`Srivalli restaurant gallery image ${index + 1}`}
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
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