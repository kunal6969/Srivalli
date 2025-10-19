import React from 'react';

const SrivalliLogo = () => (
    <div className="relative text-center">
        <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-brand-green flex items-center justify-center animate-pulse">
            <svg width="60" height="60" viewBox="0 0 100 100" className="text-brand-gold">
                <path d="M50 10 C 70 10, 90 30, 90 50 S 70 90, 50 90 S 10 70, 10 50 S 30 10, 50 10" fill="none" stroke="currentColor" strokeWidth="5"/>
                <circle cx="50" cy="50" r="15" fill="currentColor" />
            </svg>
        </div>
        <h1 className="text-7xl font-display text-brand-green animate-fadeIn tracking-wider">Srivalli</h1>
    </div>
);

interface PreloaderProps {
    isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 bg-brand-cream flex items-center justify-center z-50 transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1.5s ease-out forwards;
            }
        `}</style>
      <SrivalliLogo />
    </div>
  );
};

export default Preloader;