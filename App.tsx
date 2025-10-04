
import React, { useState, useEffect } from 'react';
import type { Product, CartItem, BlogPost } from './types';
import { mockProducts, mockBlogPosts } from './data';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import ProductDetail from './components/pages/ProductDetail';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';

const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleNavigate = (targetPage: string) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setPage('productDetail');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (productToAdd: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
    setNotification(`${productToAdd.name} has been added to your cart.`);
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const renderPage = () => {
    switch (page) {
      case 'shop':
        return <Shop products={mockProducts} onViewDetails={handleViewDetails} />;
      case 'productDetail':
        return selectedProduct ? <ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} onNavigate={handleNavigate}/> : <Home onNavigate={handleNavigate} onViewDetails={handleViewDetails} products={mockProducts.slice(0, 4)} />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog posts={mockBlogPosts} />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart cartItems={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveFromCart} onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} onViewDetails={handleViewDetails} products={mockProducts.slice(0, 4)} />;
    }
  };

  return (
    <div className="font-sans">
      {notification && (
        <div className="fixed top-24 right-6 bg-forest-green text-white py-2 px-4 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {notification}
        </div>
      )}
      <Header onNavigate={handleNavigate} cartCount={cartCount} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate}/>
    </div>
  );
};

export default App;
