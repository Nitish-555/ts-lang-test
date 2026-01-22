import React from 'react';
import { ProductList } from './components/ProductList';
import { CartSummary } from './components/CartSummary';
import { ShippingEstimator } from './components/ShippingEstimator';
import { Wishlist } from './components/Wishlist';
import { useInventory } from './hooks/useInventory';
import { useWishlist } from './hooks/useWishlist';

export default function App() {
  const { products, toggleInCart, inCartIds, totals } = useInventory();
  const { wishlistIds, toggleWishlist, clearWishlist } = useWishlist();

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow-accent">TS Lang Test Store</p>
          <h1>Reactive kits for builders</h1>
          <p className="lede">
            A tiny React + TypeScript shop to exercise embeddings and the code graph.
            Try toggling items to see derived totals update.
          </p>
        </div>
        <CartSummary totals={totals} count={inCartIds.size} />
      </header>

      <main>
        <ShippingEstimator totals={totals} />
        <Wishlist
          products={products}
          wishlistIds={wishlistIds}
          onRemove={toggleWishlist}
          onClear={clearWishlist}
        />
        <ProductList
          products={products}
          inCartIds={inCartIds}
          wishlistIds={wishlistIds}
          onToggle={toggleInCart}
          onToggleWishlist={toggleWishlist}
        />
      </main>
    </div>
  );
}

