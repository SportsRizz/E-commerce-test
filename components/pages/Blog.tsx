
import React from 'react';
import type { BlogPost } from '../../types';

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest-green">From the Journal</h1>
          <p className="text-dark-gray max-w-2xl mx-auto mt-4">Inspiration, artisan spotlights, and stories from behind the scenes.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {posts.map(post => (
            <div key={post.id} className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 rounded-lg overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">{post.author} &bull; {post.date}</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest-green my-2 group-hover:text-terracotta transition-colors duration-300">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-dark-gray leading-relaxed mb-4">{post.excerpt}</p>
                <a href="#" className="font-bold text-terracotta hover:underline">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
