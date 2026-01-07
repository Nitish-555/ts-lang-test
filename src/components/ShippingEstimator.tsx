import React from 'react';
import { Totals } from '../hooks/useInventory';

interface Props {
  totals: Totals;
}

export function ShippingEstimator({ totals }: Props) {
  const freeShipping = totals.subtotal >= 250;
  const note = freeShipping
    ? 'Free shipping unlocked (subtotal ≥ $250).'
    : 'Add more to reach $250 and unlock free shipping.';

  return (
    <div className="estimator">
      <div>
        <p className="label">Shipping estimate</p>
        <p className="value">${totals.shipping.toFixed(2)}</p>
      </div>
      <p className="muted">{note}</p>
    </div>
  );
}

