
import React from 'react';
import type { Product } from '../../types';
import Hero from '../Hero';
import FeaturedProducts from '../FeaturedProducts';
import CategoryShowcase from '../CategoryShowcase';
import Testimonials from '../Testimonials';

interface HomeProps {
  products: Product[];
  onNavigate: (page: string) => void;
  onViewDetails: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ products, onNavigate, onViewDetails }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <FeaturedProducts products={products} onViewDetails={onViewDetails} />
      <CategoryShowcase onNavigate={onNavigate} />
      <Testimonials />
    </>
  );
};

export default Home;
