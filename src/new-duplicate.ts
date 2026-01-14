import { z } from 'zod';
import express from 'express';
// Note: express is imported but NOT used in any function
// This tests import filtering - express should be excluded from embedding context


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

export function processPayment(amount: number, currency: string): Promise<{ success: boolean; transactionId: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      resolve({
        success: true,
        transactionId,
      });
    }, 100);
  });
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
