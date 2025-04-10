export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals alike.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    description: "Advanced smartwatch with health tracking, notifications, and a sleek design. Stay connected and monitor your fitness goals.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 799.99,
    description: "Professional-grade camera with 4K video capabilities and advanced autofocus system. Capture life's moments in stunning detail.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
  }
];