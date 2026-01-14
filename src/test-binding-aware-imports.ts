
import { z as schema } from 'zod';
import { z } from 'another-lib'; 

export function validateWithAlias(data: unknown): boolean {
  const userSchema = schema.object({
    name: schema.string(),
    age: schema.number(),
  });
  
  try {
    userSchema.parse(data);
    return true;
  } catch {
    return false;
  }
}

import React from 'react';
import bcrypt from 'bcrypt';

export function sortNumbers(a: number, b: number): number {
  const hash = computeHash([a, b]);
  return a < b ? -1 : 1;
}

import type { User, Product } from './types';
import { Request, Response } from 'express';

export function createUserResponse(user: User): Response {
  const response: Response = {} as Response;
  return response;
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';

export function useDataFetching(url: string) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(url).then(res => setData(res.data));
  }, [url]);
  
  return data;
}


import * as _ from 'lodash';
import * as fs from 'fs';

export function processData(items: number[]): number[] {
  return _.map(items, x => x * 2);
}
import React, { useState, useEffect } from 'react';
import express, { Request, Response } from 'express';

export function createApp() {
  const app = express();
  const [count, setCount] = useState(0);
  
  app.get('/', (req: Request, res: Response) => {
    res.json({ count });
  });
  
  return app;
}

import 'dotenv/config';
import { z } from 'zod';

export function validateEnv(): boolean {
  const schema = z.object({
    NODE_ENV: z.string(),
  });
  
  return true;
}

import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

export function createPrismaUser() {
  const prisma = new PrismaClient();
  const schema = z.object({ name: z.string() });
  
  return prisma.user.create({ data: { name: 'test' } });
}

