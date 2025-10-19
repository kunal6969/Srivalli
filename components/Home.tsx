import React from 'react';
import Section from './Section';

const Home: React.FC = () => {
    const features = [
        { title: 'Authentic Spices', description: 'Sourced directly from the farms of Southern India for unparalleled flavour.', icon: '🌶️' },
        { title: 'Fresh Ingredients', description: 'We believe in farm-to-table, using only the freshest local produce daily.', icon: '🌿' },
        { title: 'Time-Honored Recipes', description: 'Our chefs preserve traditional cooking methods passed down for generations.', icon: '📜' }
    ];

    return (
        <Section id="home" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-display text-brand-green mb-4 tracking-normal sm:tracking-wider">Welcome to Srivalli</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Where every dish tells a story of tradition, flavour, and the love for authentic South Indian cuisine. Join us for an unforgettable culinary journey.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-center">
                {features.map(feature => (
                    <div key={feature.title} className="p-6">
                        <div className="text-5xl mb-4">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold text-brand-green mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Home;