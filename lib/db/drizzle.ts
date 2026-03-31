import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

function createDb() {
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL environment variable is not set');
  }

  const client = postgres(process.env.POSTGRES_URL);
  return drizzle(client, { schema });
}

let dbInstance: ReturnType<typeof createDb> | undefined;

export function getDb() {
  dbInstance ??= createDb();
  return dbInstance;
}

export const db = new Proxy({} as ReturnType<typeof createDb>, {
  get(_, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  }
});
