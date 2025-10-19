import React, { useEffect } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  // Load a larger version of the image for the lightbox
  const highResImageSrc = images[currentIndex].replace('w=800&h=600', 'w=1600&h=1200');

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
        {/* Close Button */}
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white hover:text-brand-beige transition-colors z-10 p-2"
            aria-label="Close image viewer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Previous Button */}
        <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }} 
            className="absolute left-4 md:left-8 text-white hover:text-brand-beige transition-colors p-2 z-10"
            aria-label="Previous image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Main Image Content */}
        <div className="relative flex items-center justify-center h-full w-full" onClick={(e) => e.stopPropagation()}>
            <img 
                src={highResImageSrc} 
                alt={`Gallery image ${currentIndex + 1}`} 
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-zoomIn" 
            />
        </div>

        {/* Next Button */}
        <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }} 
            className="absolute right-4 md:right-8 text-white hover:text-brand-beige transition-colors p-2 z-10"
            aria-label="Next image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.3s ease; }
          .animate-zoomIn { animation: zoomIn 0.3s ease; }
        `}</style>
    </div>
  );
};

export default Lightbox;