
import React from 'react';
import type { Product } from '../../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onNavigate }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <button onClick={() => onNavigate('shop')} className="text-terracotta hover:underline mb-8 font-semibold">
          &larr; Back to Shop
        </button>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <img 
              src={product.imageUrl.replace('400/400', '800/800')} 
              alt={product.name} 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm uppercase tracking-widest text-gray-500">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-green my-4">{product.name}</h1>
            <p className="text-3xl font-bold text-terracotta mb-6">${product.price.toFixed(2)}</p>
            <p className="text-dark-gray leading-relaxed mb-8">{product.description}</p>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-forest-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
