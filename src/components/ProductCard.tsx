import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
  inCart: boolean;
  inWishlist: boolean;
  onToggle: (id: string) => void;
  onToggleWishlist: (id: string) => void;
}

export function ProductCard({ 
  product, 
  inCart, 
  inWishlist, 
  onToggle, 
  onToggleWishlist 
}: Props) {
  return (
    <article className="card">
      <div className="card__header">
        <h3>{product.name}</h3>
        <span className="badge">{product.category}</span>
      </div>
      <p className="card__description">{product.description}</p>
      <div className="card__meta">
        <span className="price">${product.price.toFixed(2)}</span>
        <span className="label">{product.stock} in stock</span>
      </div>
      <div className="card__footer">
        <button onClick={() => onToggle(product.id)}>
          {inCart ? 'Remove' : 'Add to cart'}
        </button>
        <button 
          onClick={() => onToggleWishlist(product.id)}
          style={{ 
            marginLeft: '8px',
            background: inWishlist ? '#fbbf24' : 'transparent',
            border: '1px solid #fbbf24'
          }}
        >
          {inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
    </article>
  );
}

