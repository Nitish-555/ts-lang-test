import { z } from 'zod';
import express, { Request, Response } from 'express';
import { validateToken } from './auth-utils';

/**
 * Validates user input using Zod schema
 * This function is duplicated in multiple places to test duplicate detection
 */
export function validateUserInput(data: unknown): { valid: boolean; errors: string[] } {
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    age: z.number().int().positive(),
  });

  try {
    schema.parse(data);
    return { valid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        valid: false,
        errors: error.errors.map((e) => `${e.path.join('.')}: ${e.message}`),
      };
    }
    return { valid: false, errors: ['Unknown validation error'] };
  }
}

/**
 * Processes payment transaction
 * This is a duplicate pattern that should be detected
 */
export function processPayment(amount: number, currency: string): Promise<{ success: boolean; transactionId: string }> {
  return new Promise((resolve) => {
    // Simulate payment processing
    setTimeout(() => {
      const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      resolve({
        success: true,
        transactionId,
      });
    }, 100);
  });
}

/**
 * Formats date to ISO string
 * Another duplicate pattern
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Calculates total price with tax
 * Duplicate calculation logic
 */
export function calculateTotalWithTax(subtotal: number, taxRate: number): number {
  const tax = subtotal * (taxRate / 100);
  return subtotal + tax;
}

/**
 * Validates email format
 * Simple duplicate validation function
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
