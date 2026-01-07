/**
 * Discount calculation utilities
 */

/**
 * Calculate discount amount for a product
 * @param price - Original price
 * @param discountPercentage - Discount percentage (0-100)
 * @returns Discount amount
 */
export function calculateDiscount(price: number, discountPercentage: number): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Discount percentage must be between 0 and 100');
  }
  return (price * discountPercentage) / 100;
}

/**
 * Calculate discounted price
 * @param price - Original price
 * @param discountPercentage - Discount percentage (0-100)
 * @returns Price after discount
 */
export function getDiscountedPrice(price: number, discountPercentage: number): number {
  const discount = calculateDiscount(price, discountPercentage);
  return price - discount;
}

/**
 * Format discount as a display string
 * @param discountPercentage - Discount percentage
 * @returns Formatted string like "15% OFF"
 */
export function formatDiscount(discountPercentage: number): string {
  return `${discountPercentage}% OFF`;
}

