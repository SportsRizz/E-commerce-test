
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onViewDetails }) => {
  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-forest-green mb-2">Our Featured Artisanal Goods</h2>
        <p className="text-center text-dark-gray max-w-2xl mx-auto mb-12">Each piece is thoughtfully created to bring a unique touch of elegance and craftsmanship to your home.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
