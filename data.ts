
import type { Product, BlogPost } from './types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Artisan Ceramic Vase',
    category: 'Ceramics',
    price: 65.00,
    imageUrl: 'https://picsum.photos/400/400?random=2',
    description: 'A beautifully handcrafted ceramic vase, perfect for any bouquet. Each piece is unique, with subtle variations in glaze and form that speak to its handmade nature. Dimensions: 8" H x 4" W.'
  },
  {
    id: 2,
    name: 'Hand-Woven Throw Blanket',
    category: 'Textiles',
    price: 120.00,
    imageUrl: 'https://picsum.photos/400/400?random=3',
    description: 'Cozy up with this soft, hand-woven throw blanket made from 100% ethically sourced merino wool. Its chunky knit and rich texture add warmth and style to any room. Dimensions: 50" x 60".'
  },
  {
    id: 3,
    name: 'Engraved Wooden Keepsake Box',
    category: 'Woodwork',
    price: 85.00,
    imageUrl: 'https://picsum.photos/400/400?random=4',
    description: 'A personalized wooden box to store your precious memories. Crafted from solid walnut with a smooth satin finish, it can be custom engraved with a name, date, or message.'
  },
  {
    id: 4,
    name: 'Scented Soy Candle',
    category: 'Candles',
    price: 35.00,
    imageUrl: 'https://picsum.photos/400/400?random=5',
    description: 'An artisanal soy candle with a calming scent of lavender and sandalwood. Hand-poured in a reusable ceramic vessel, it offers a clean burn for up to 50 hours.'
  },
  {
    id: 5,
    name: 'Minimalist Clay Planter',
    category: 'Ceramics',
    price: 45.00,
    imageUrl: 'https://picsum.photos/400/400?random=6',
    description: 'A sleek and modern planter, perfect for your favorite houseplant. Made from speckled stoneware with a clear interior glaze and a drainage hole for healthy roots.'
  },
  {
    id: 6,
    name: 'Linen Cushion Cover',
    category: 'Textiles',
    price: 55.00,
    imageUrl: 'https://picsum.photos/400/400?random=7',
    description: 'Add a touch of natural elegance with this 100% linen cushion cover. Its soft, breathable fabric and earthy tone complement any decor style. Size: 18" x 18".'
  },
  {
    id: 7,
    name: 'Hand-Carved Serving Spoon',
    category: 'Woodwork',
    price: 40.00,
    imageUrl: 'https://picsum.photos/400/400?random=8',
    description: 'A beautiful and functional serving spoon, hand-carved from sustainably sourced cherry wood. Finished with a food-safe mineral oil to highlight the natural grain.'
  },
  {
    id: 8,
    name: 'Terracotta Incense Holder',
    category: 'Ceramics',
    price: 25.00,
    imageUrl: 'https://picsum.photos/400/400?random=9',
    description: 'A simple, elegant incense holder made from natural terracotta clay. Its minimalist design catches ash and adds a touch of tranquility to your space.'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Wabi-Sabi: Finding Beauty in Imperfection',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=15',
    excerpt: 'Explore the Japanese philosophy of wabi-sabi and how it influences our craft. It\'s about celebrating the beauty of handmade items, quirks and all...',
    content: 'Full content of the blog post about wabi-sabi would go here.'
  },
  {
    id: 2,
    title: 'Meet the Maker: A Conversation with Ceramist Leo Chen',
    author: 'John Smith',
    date: 'November 5, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=16',
    excerpt: 'We sit down with Leo Chen, the artisan behind our stunning ceramic collection, to talk about his inspiration, process, and love for clay.',
    content: 'Full content of the interview with Leo Chen would go here.'
  },
  {
    id: 3,
    title: '5 Ways to Create a Cozy & Sustainable Home',
    author: 'Emily White',
    date: 'November 18, 2023',
    imageUrl: 'https://picsum.photos/800/600?random=17',
    excerpt: 'Transform your living space into a sanctuary of comfort and eco-consciousness with these simple, actionable tips for sustainable decorating.',
    content: 'Full content of the blog post about creating a cozy home would go here.'
  }
];
