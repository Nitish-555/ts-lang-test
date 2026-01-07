import React from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
  wishlistIds: Set<string>;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function Wishlist({ products, wishlistIds, onRemove, onClear }: Props) {
  const wishlistItems = products.filter((p) => wishlistIds.has(p.id));

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist">
        <h2>Wishlist</h2>
        <p>Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button onClick={onClear} style={{ padding: '4px 8px', fontSize: '12px' }}>
          Clear all
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {wishlistItems.map((product) => (
          <li key={product.id} style={{ marginBottom: '8px', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{product.name}</strong>
                <span style={{ marginLeft: '8px', color: '#6b7280' }}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <button onClick={() => onRemove(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

