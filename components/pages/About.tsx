
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative h-64">
        <img src="https://picsum.photos/1600/600?random=20" alt="Artisanal workshop" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-forest-green opacity-70"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">Our Story</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-lg text-dark-gray leading-relaxed">
            <p className="mb-6 font-serif text-2xl text-center italic text-terracotta">"We believe a home should be a reflection of your journey, filled with items that have a soul and a story."</p>
            
            <p className="mb-6">
                Aura & Clay was born from a simple idea: to bring the warmth of the human touch back into our homes. In a world of mass production, we felt a longing for objects that were not just functional, but also meaningful. We sought out pieces that were crafted with intention, patience, and a deep respect for natural materials.
            </p>

            <h2 className="text-3xl font-serif font-bold text-forest-green mt-12 mb-4">Our Philosophy</h2>
            <p className="mb-6">
                Our philosophy is rooted in the principles of sustainability, craftsmanship, and individuality. We partner with independent artisans and small workshops who share our commitment to ethical practices. From the clay shaped on a potter's wheel to the yarn woven on a traditional loom, every product in our collection is a testament to timeless skill and artistry.
            </p>
            <p className="mb-6">
                We believe that the items you choose to live with should bring you joy and comfort. They should be more than just decor; they should be conversation starters, cherished gifts, and daily reminders of the beauty that can be found in the simple and the authentic.
            </p>
            
            <h2 className="text-3xl font-serif font-bold text-forest-green mt-12 mb-4">Our Promise</h2>
            <p>
                When you purchase from Aura & Clay, you're not just buying an object. You're supporting a community of creators, preserving traditional crafts, and investing in a piece that is designed to last a lifetime. Thank you for being a part of our story.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
