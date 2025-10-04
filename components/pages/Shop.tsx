
import React from 'react';
import type { Product } from '../../types';
import ProductCard from '../ProductCard';

interface ShopProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ products, onViewDetails }) => {
  return (
    <div className="bg-off-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-green">Our Collection</h1>
          <p className="text-dark-gray max-w-2xl mx-auto mt-4">Browse our curated selection of handcrafted goods, each with a unique story to tell.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
