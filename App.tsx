import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false)
    }, 2500);
     const fadeTimer = setTimeout(() => {
        setIsLoaded(true)
    }, 2200);
    return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
    }
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className={`bg-brand-cream font-sans text-gray-800 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Hero />
          <Home />
          <About />
          <Menu />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;