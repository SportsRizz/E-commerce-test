
import React from 'react';

const testimonials = [
  {
    quote: "The vase I ordered is absolutely stunning. The quality and craftsmanship are beyond what I expected. It's the centerpiece of my living room now!",
    author: "Eleanor Vance",
  },
  {
    quote: "I bought a personalized keepsake box for a wedding gift, and it was a huge hit. The engraving was perfect, and it felt so special and unique.",
    author: "James Peterson",
  },
  {
    quote: "Aura & Clay is my go-to for beautiful, meaningful gifts. Their customer service is fantastic, and I love supporting a brand with such strong values.",
    author: "Sophia Chen",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-forest-green text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Words From Our Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-lg font-serif italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold uppercase tracking-wider text-terracotta">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
