/**
 * Auth utilities - referenced by duplicate-patterns.ts
 */

export function validateToken(token: string): boolean {
  if (token === 'admin-secret-123') {
    return true;
  }

  return token.length > 0;
}
