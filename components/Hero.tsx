
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img src="https://picsum.photos/1600/900?random=1" alt="Handcrafted home decor" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">Crafted for Your Home, Inspired by Nature.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">Discover unique, handcrafted pieces that bring warmth, beauty, and a personal story into your living space.</p>
        <button 
          onClick={() => onNavigate('shop')}
          className="bg-terracotta text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Shop The Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
