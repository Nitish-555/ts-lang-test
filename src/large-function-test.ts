import { z } from 'zod';
import express, { Request, Response } from 'express';

/**
 * Large data processing function that exceeds token limit
 * This function will be split into multiple chunks, and we need to ensure
 * context (imports, signature, parent) is preserved in all parts
 * 
 * @param data - Array of data points to process
 * @param options - Processing options
 * @returns Processed data with validation results
 */
export async function processLargeDataset<T extends { id: string; value: number; timestamp: number }>(
  data: T[],
  options: {
    validate: boolean;
    transform: boolean;
    aggregate: boolean;
    filter: boolean;
  }
): Promise<{
  processed: T[];
  validated: T[];
  transformed: T[];
  aggregated: Record<string, number>;
  filtered: T[];
  errors: string[];
}> {
  // This function is intentionally large to test chunk splitting
  // Part 1: Validation logic
  const schema = z.object({
    id: z.string().min(1),
    value: z.number(),
    timestamp: z.number().positive(),
  });

  const validated: T[] = [];
  const errors: string[] = [];

  if (options.validate) {
    for (const item of data) {
      try {
        const result = schema.parse(item);
        validated.push(result as T);
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.push(`Validation failed for ${item.id}: ${error.message}`);
        }
      }
    }
  } else {
    validated.push(...data);
  }

  // Part 2: Transformation logic
  const transformed: T[] = [];
  if (options.transform) {
    for (const item of validated) {
      const transformedItem = {
        ...item,
        value: item.value * 1.1,
        timestamp: Date.now(),
      } as T;
      transformed.push(transformedItem);
    }
  } else {
    transformed.push(...validated);
  }

  // Part 3: Aggregation logic
  const aggregated: Record<string, number> = {};
  if (options.aggregate) {
    for (const item of transformed) {
      const category = (item as any).category || 'default';
      aggregated[category] = (aggregated[category] || 0) + (item.value || 0);
    }
  }

  // Part 4: Filtering logic
  const filtered: T[] = [];
  if (options.filter) {
    for (const item of transformed) {
      if ((item.value || 0) > 0) {
        filtered.push(item);
      }
    }
  } else {
    filtered.push(...transformed);
  }

  // Part 5: Final processing and return
  const processed = filtered.map((item) => ({
    ...item,
    processedAt: new Date().toISOString(),
  })) as T[];

  return {
    processed,
    validated,
    transformed,
    aggregated,
    filtered,
    errors,
  };
}
