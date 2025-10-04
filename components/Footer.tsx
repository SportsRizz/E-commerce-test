
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-dark-gray text-off-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Aura & Clay</h3>
            <p className="text-sm text-gray-300">Handcrafted home decor and personalized gifts with a story. Ethically sourced, sustainably made.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-terracotta mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('shop')} className="hover:text-terracotta transition-colors">New Arrivals</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-terracotta transition-colors">Best Sellers</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-terracotta transition-colors">Personalized Gifts</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-terracotta transition-colors">All Products</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-terracotta mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('contact')} className="hover:text-terracotta transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-terracotta transition-colors">FAQ</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-terracotta transition-colors">Shipping & Returns</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-terracotta transition-colors">Track Your Order</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-terracotta mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-300 mb-4">Join our newsletter for decor tips, new arrivals, and special offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
              <button type="submit" className="bg-terracotta text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aura & Clay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
