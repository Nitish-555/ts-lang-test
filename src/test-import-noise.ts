

// USED imports (should be in embedding)
import { z } from 'zod';
import { hashPassword } from './auth-utils';

// UNUSED imports (should be FILTERED OUT after fix)
import express from 'express';
import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';
import uuid from 'uuid';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import winston from 'winston';
import redis from 'redis';


export function validateUserInputWithNoise(data: unknown): { valid: boolean; errors: string[] } {
  // Only uses zod
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    age: z.number().int().positive(),
  });

  try {
    schema.parse(data);
    
    // Uses hashPassword (but not really, just for testing)
    const hashed = hashPassword('test');
    
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
