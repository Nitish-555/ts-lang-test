import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
  inCartIds: Set<string>;
  onToggle: (id: string) => void;
}

export function ProductList({ products, inCartIds, onToggle }: Props) {
  return (
    <section className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={inCartIds.has(product.id)}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}

