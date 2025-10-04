
import React, { useState } from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import UserIcon from './icons/UserIcon';
import SearchIcon from './icons/SearchIcon';

interface HeaderProps {
  onNavigate: (page: string) => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Shop', page: 'shop' },
    { label: 'About', page: 'about' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-off-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-3xl font-serif font-bold text-forest-green">
          Aura & Clay
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({label, page}) => (
            <button key={page} onClick={() => handleNavClick(page)} className="text-dark-gray hover:text-terracotta transition-colors duration-300 font-medium">
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-dark-gray hover:text-terracotta transition-colors duration-300">
            <SearchIcon />
          </button>
          <button className="text-dark-gray hover:text-terracotta transition-colors duration-300">
            <UserIcon />
          </button>
          <button onClick={() => handleNavClick('cart')} className="relative text-dark-gray hover:text-terracotta transition-colors duration-300">
            <ShoppingCartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-gray focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-off-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(({label, page}) => (
               <button key={page} onClick={() => handleNavClick(page)} className="text-dark-gray hover:text-terracotta transition-colors duration-300 font-medium">
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
