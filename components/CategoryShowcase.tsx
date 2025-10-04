
import React from 'react';

const categories = [
  { name: 'Ceramics', imageUrl: 'https://picsum.photos/600/800?random=10' },
  { name: 'Textiles', imageUrl: 'https://picsum.photos/600/800?random=11' },
  { name: 'Woodwork', imageUrl: 'https://picsum.photos/600/800?random=12' },
];

interface CategoryShowcaseProps {
  onNavigate: (page: string) => void;
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-12">Explore Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category.name} className="relative rounded-lg overflow-hidden group h-96">
              <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-bold">{category.name}</h3>
              </div>
              <button onClick={() => onNavigate('shop')} className="absolute inset-0" aria-label={`Explore ${category.name}`}></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
