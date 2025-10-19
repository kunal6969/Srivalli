import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
    };

    const SrivalliLogo = () => (
        <div className="flex items-center gap-2 sm:gap-3">
            <img 
                src="/images/srivalli-logo.jpg" 
                alt="Srivalli Logo" 
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/70 transition-all duration-300 active:scale-95"
                style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)'
                }}
            />
            <span className={`text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-brand-green' : 'text-white drop-shadow-lg'}`}>
                Srivalli
            </span>
        </div>
    );
    
    const DesktopNavLinks = () => (
        <>
            {NAV_LINKS.map((link: NavLink) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`transition-colors duration-300 relative group text-lg ${isScrolled ? 'text-gray-700 hover:text-brand-green' : 'text-white hover:text-brand-beige'}`}
                >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-brand-green' : 'bg-brand-beige'}`}></span>
                </button>
            ))}
        </>
    );

    const MobileNavLinks = () => (
         <>
            {NAV_LINKS.map((link: NavLink, index: number) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-brand-green hover:text-brand-terracotta transition-all duration-300 relative group text-2xl font-semibold active:scale-95"
                    style={{
                        animation: `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`,
                        opacity: isMenuOpen ? 1 : 0
                    }}
                >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-terracotta rounded-full transition-all duration-300 group-active:w-full"></span>
                </button>
            ))}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent backdrop-blur-sm'}`}>
            <div className="container mx-auto px-5 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <button onClick={() => scrollToSection('hero')} aria-label="Back to top" className="active:scale-95 transition-transform duration-200">
                    <SrivalliLogo />
                </button>
                <nav className="hidden md:flex items-center space-x-8">
                    <DesktopNavLinks />
                </nav>
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="z-50 relative p-2 active:scale-90 transition-transform duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                             <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-300 ${isScrolled ? 'text-brand-green' : 'text-white drop-shadow-lg'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu - Premium Fullscreen */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-brand-cream via-white to-brand-beige transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-400 ease-out md:hidden z-40`}
                style={{
                    backdropFilter: 'blur(10px)'
                }}>
                <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
                    <MobileNavLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;