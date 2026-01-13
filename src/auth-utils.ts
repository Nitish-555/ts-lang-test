/**
 * Auth utilities - referenced by duplicate-patterns.ts
 */

export function validateToken(token: string): boolean {
  return token.length > 0;
}
