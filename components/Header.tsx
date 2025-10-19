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
        <div className="flex items-center gap-3">
            <img 
                src="/images/srivalli-logo.jpg" 
                alt="Srivalli Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-lg ring-2 ring-white/50 transition-transform duration-300 hover:scale-110"
            />
            <span className={`text-2xl sm:text-3xl font-display tracking-wider transition-colors duration-300 ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
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
            {NAV_LINKS.map((link: NavLink) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 hover:text-brand-green transition-colors duration-300 relative group text-lg"
                >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
                </button>
            ))}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <button onClick={() => scrollToSection('hero')} aria-label="Back to top">
                    <SrivalliLogo />
                </button>
                <nav className="hidden md:flex items-center space-x-8">
                    <DesktopNavLinks />
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
                        {isMenuOpen ? (
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                             <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-colors duration-300 ${isScrolled ? 'text-brand-green' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`absolute top-0 left-0 w-full h-screen bg-brand-cream transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <MobileNavLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;