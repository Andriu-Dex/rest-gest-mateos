import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

config({
  path: fileURLToPath(new URL('../../../../.env', import.meta.url)),
  quiet: true,
});

const environmentSchema = z.object({
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  WEB_PORT: z.coerce.number().int().min(1).max(65535).default(5173),
  DATABASE_URL: z.url().startsWith('postgresql://'),
});

export function validateEnvironment(
  environment: Record<string, unknown>,
): Record<string, unknown> {
  return environmentSchema.parse(environment);
}
