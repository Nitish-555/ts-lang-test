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

/**
 * Check if a discount is valid
 * @param discountPercentage - Discount percentage to validate
 * @returns True if discount is valid (between 0 and 100)
 */
export function isValidDiscount(discountPercentage: number | undefined): boolean {
  if (discountPercentage === undefined) {
    return false;
  }
  return discountPercentage >= 0 && discountPercentage <= 100;
}

/**
 * Apply discount to a price if discount is valid
 * @param price - Original price
 * @param discountPercentage - Discount percentage (optional)
 * @returns Discounted price or original price if discount is invalid
 */
export function applyDiscountIfValid(price: number, discountPercentage?: number): number {
  if (!isValidDiscount(discountPercentage)) {
    return price;
  }
  return getDiscountedPrice(price, discountPercentage!);
}

export function getCouponDiscountPercentage(code: string): number {
  const normalized = (code || '').trim().toUpperCase();
  if (!normalized.startsWith('SAVE')) {
    return 0;
  }

  const numericPart = normalized.slice('SAVE'.length);
  const parsed = Number(numericPart);

  // Only allow 1-100% coupons; anything invalid falls back to 0.
  if (!Number.isFinite(parsed) || parsed <= 0 || parsed > 100) {
    return 0;
  }

  return parsed;
}

