/**
 * Price formatting utilities
 */

/**
 * Format price with currency symbol
 * @param price - Price value
 * @param currency - Currency symbol (default: '$')
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency: string = '$'): string {
  return `${currency}${price.toFixed(2)}`;
}

/**
 * Format price with thousands separator
 * @param price - Price value
 * @returns Formatted price string with commas
 */
export function formatPriceWithCommas(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Calculate price per unit
 * @param totalPrice - Total price
 * @param quantity - Quantity
 * @returns Price per unit
 */
export function calculatePricePerUnit(totalPrice: number, quantity: number): number {
  if (quantity <= 0) {
    throw new Error('Quantity must be greater than 0');
  }
  return totalPrice / quantity;
}

