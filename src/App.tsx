import React from 'react';
import { ProductList } from './components/ProductList';
import { CartSummary } from './components/CartSummary';
import { useInventory } from './hooks/useInventory';

export default function App() {
  const { products, toggleInCart, inCartIds, totals } = useInventory();

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">TS Lang Test Store</p>
          <h1>Reactive kits for builders</h1>
          <p className="lede">
            A tiny React + TypeScript shop to exercise embeddings and the code graph.
            Try toggling items to see derived totals update.
          </p>
        </div>
        <CartSummary totals={totals} count={inCartIds.size} />
      </header>

      <main>
        <ProductList
          products={products}
          inCartIds={inCartIds}
          onToggle={toggleInCart}
        />
      </main>
    </div>
  );
}

