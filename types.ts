
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}
