import React from 'react';
import { Totals } from '../hooks/useInventory';

interface Props {
  totals: Totals;
  count: number;
}

export function CartSummary({ totals, count }: Props) {
  return (
    <div className="cart">
      <div>
        <p className="label">Items</p>
        <p className="value">{count}</p>
      </div>
    <div>
      <p className="label">Shipping</p>
      <p className="value">${totals.shipping.toFixed(2)}</p>
    </div>
      <div>
        <p className="label">Subtotal</p>
        <p className="value">${totals.subtotal.toFixed(2)}</p>
      </div>
      <div>
        <p className="label">Est. tax</p>
        <p className="value">${totals.tax.toFixed(2)}</p>
      </div>
      <div>
        <p className="label strong">Total</p>
        <p className="value strong">${totals.total.toFixed(2)}</p>
      </div>
    </div>
  );
}

