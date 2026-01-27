import React from 'react';
import { Totals } from '../hooks/useInventory';
import { formatPrice } from '../utils/price-formatter';

interface Props {
  totals: Totals;
  count: number;
  couponCode: string;
  onCouponChange: (next: string) => void;
}

export function CartSummary({ totals, count, couponCode, onCouponChange }: Props) {
  return (
    <div className="cart">
      <div>
        <p className="label">Items</p>
        <p className="value">{count}</p>
      </div>
    <div>
      <p className="label">Shipping</p>
      <p className="value">{formatPrice(totals.shipping)}</p>
    </div>
      <div>
        <p className="label">Coupon</p>
        <input
          className="value"
          value={couponCode}
          placeholder="SAVE10"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => onCouponChange(e.target.value)}
        />
      </div>
      <div>
        <p className="label">Subtotal</p>
        <p className="value">{formatPrice(totals.subtotal)}</p>
      </div>
      {totals.discount > 0 && (
        <div>
          <p className="label">Discount</p>
          <p className="value" style={{ color: '#10b981' }}>
            -{formatPrice(totals.discount)}
          </p>
        </div>
      )}
      <div>
        <p className="label">Est. tax</p>
        <p className="value">{formatPrice(totals.tax)}</p>
      </div>
      <div>
        <p className="label strong">Total</p>
        <p className="value strong">{formatPrice(totals.total)}</p>
      </div>
    </div>
  );
}

