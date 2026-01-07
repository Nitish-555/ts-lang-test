import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
  inCartIds: Set<string>;
  wishlistIds: Set<string>;
  onToggle: (id: string) => void;
  onToggleWishlist: (id: string) => void;
}

export function ProductList({ 
  products, 
  inCartIds, 
  wishlistIds, 
  onToggle, 
  onToggleWishlist 
}: Props) {
  return (
    <section className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={inCartIds.has(product.id)}
          inWishlist={wishlistIds.has(product.id)}
          onToggle={onToggle}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </section>
  );
}

