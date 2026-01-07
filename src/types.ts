export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  weightKg: number;
  discountPercentage?: number; // Optional discount (0-100)
}

