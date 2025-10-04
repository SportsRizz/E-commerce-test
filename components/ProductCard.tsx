
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="w-full h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-center flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-dark-gray font-sans">{product.name}</h3>
          <p className="text-terracotta font-bold mt-1">${product.price.toFixed(2)}</p>
        </div>
      </div>
       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
         <button 
           onClick={() => onViewDetails(product)}
           className="text-white bg-forest-green py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
         >
           View Details
         </button>
       </div>
    </div>
  );
};

export default ProductCard;
