/**
 * Currency conversion and formatting utilities
 */

export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
};

/**
 * Get currency symbol for a currency code
 * @param currency - Currency code
 * @returns Currency symbol
 */
export function getCurrencySymbol(currency: Currency = 'USD'): string {
  return CURRENCY_SYMBOLS[currency];
}

/**
 * Convert price from one currency to another
 * @param amount - Amount in source currency
 * @param fromCurrency - Source currency
 * @param toCurrency - Target currency
 * @param exchangeRates - Exchange rates object
 * @returns Converted amount
 */
export function convertCurrency(
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency,
  exchangeRates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const rateKey = `${fromCurrency}_${toCurrency}`;
  const rate = exchangeRates[rateKey];

  if (!rate) {
    throw new Error(`Exchange rate not found for ${rateKey}`);
  }

  return amount * rate;
}

/**
 * Format amount with currency symbol
 * @param amount - Amount to format
 * @param currency - Currency code
 * @returns Formatted string
 */
export function formatCurrency(amount: number, currency: Currency = 'USD'): string {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${amount.toFixed(2)}`;
}

// Test drift
// Test Mode 2 drift
