/**
 * Validation utilities for form inputs and data
 */

/**
 * Validates if a string is a valid email address
 * @param email - The email string to validate
 * @returns True if valid email, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if a string is not empty and has minimum length
 * @param value - The string to validate
 * @param minLength - Minimum required length (default: 1)
 * @returns True if valid, false otherwise
 */
export function isValidString(value: string, minLength: number = 1): boolean {
  return typeof value === 'string' && value.trim().length >= minLength;
}

/**
 * Validates if a number is within a range
 * @param value - The number to validate
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns True if within range, false otherwise
 */
export function isValidRange(value: number, min: number, max: number): boolean {
  return typeof value === 'number' && value >= min && value <= max;
}

