import { useMemo, useState } from 'react';
import { Product } from '../types';

const catalog: Product[] = [
  {
    id: 'kit-workbench',
    name: 'Workspace Workbench',
    price: 199,
    category: 'Workspace',
    stock: 8,
    description: 'Monitor shelf, cable tray, and anti-fatigue mat for long pairing sessions.',
  },
  {
    id: 'kit-a11y',
    name: 'Accessibility Starter',
    price: 129,
    category: 'Frontend',
    stock: 15,
    description: 'Aria patterns, focus states, and contrast tokens pre-bundled for React apps.',
  },
  {
    id: 'kit-observability',
    name: 'Observability Mini Pack',
    price: 149,
    category: 'Platform',
    stock: 12,
    description: 'Tracing, logging, and metrics scaffolding with sensible React hooks.',
  },
  {
    id: 'kit-forms',
    name: 'Form UX Essentials',
    price: 89,
    category: 'Frontend',
    stock: 20,
    description: 'Form validation helpers, progress affordances, and inline diff previews.',
  },
  {
    id: 'kit-payments',
    name: 'Payments Sandbox',
    price: 259,
    category: 'Product',
    stock: 5,
    description: 'Mock checkout flows, stubbed PSP integrations, and webhook replayers.',
  },
];

export interface Totals {
  subtotal: number;
  tax: number;
  total: number;
}

export function useInventory() {
  const [inCartIds, setInCartIds] = useState<Set<string>>(new Set());

  const toggleInCart = (id: string) => {
    setInCartIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const totals = useMemo<Totals>(() => {
    const subtotal = catalog
      .filter((p) => inCartIds.has(p.id))
      .reduce((sum, p) => sum + p.price, 0);
    const tax = Math.round(subtotal * 0.0825 * 100) / 100;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [inCartIds]);

  return {
    products: catalog,
    inCartIds,
    toggleInCart,
    totals,
  };
}

