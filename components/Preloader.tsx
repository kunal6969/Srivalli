import React from 'react';

const SrivalliLogo = () => (
    <div className="relative text-center">
        <div className="relative">
            {/* Animated rings around logo */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-brand-gold/30 animate-ping-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-2 border-brand-green/20 animate-pulse-slow"></div>
            </div>
            
            {/* Logo image with premium effects */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-green/20 animate-shimmer"></div>
                <img 
                    src="/images/srivalli-logo.jpg" 
                    alt="Srivalli Logo" 
                    className="w-full h-full object-cover relative z-10"
                />
            </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-display text-brand-green animate-fadeInUp tracking-wider mt-4">
            Srivalli
        </h1>
        <p className="text-brand-terracotta text-sm md:text-base mt-2 animate-fadeInUp-delayed tracking-widest">
            FLAVOURS OF SOUTH INDIA
        </p>
    </div>
);

interface PreloaderProps {
    isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-brand-cream via-brand-beige to-brand-cream flex items-center justify-center z-50 transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <style>{`
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUpDelayed {
                0%, 30% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-10px) scale(1.05); }
            }
            @keyframes shimmer {
                0% { opacity: 0.3; }
                50% { opacity: 0.8; }
                100% { opacity: 0.3; }
            }
            @keyframes pingSlow {
                0% { transform: scale(1); opacity: 0.8; }
                75%, 100% { transform: scale(1.5); opacity: 0; }
            }
            @keyframes pulseSlow {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.1); opacity: 0.8; }
            }
            .animate-fadeInUp {
                animation: fadeInUp 1s ease-out forwards;
            }
            .animate-fadeInUp-delayed {
                animation: fadeInUpDelayed 1.5s ease-out forwards;
            }
            .animate-float {
                animation: float 3s ease-in-out infinite;
            }
            .animate-shimmer {
                animation: shimmer 2s ease-in-out infinite;
            }
            .animate-ping-slow {
                animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
            .animate-pulse-slow {
                animation: pulseSlow 3s ease-in-out infinite;
            }
        `}</style>
      <SrivalliLogo />
    </div>
  );
};

export default Preloader;