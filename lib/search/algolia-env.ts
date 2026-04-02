import { z } from 'zod';

const algoliaPublicEnvSchema = z.object({
  appId: z.string().min(1),
  searchApiKey: z.string().min(1),
  indexPrefix: z.string().min(1)
});

const algoliaServerEnvSchema = algoliaPublicEnvSchema.extend({
  adminApiKey: z.string().min(1)
});

export const ALGOLIA_INDEXES = {
  jobs: 'jobs',
  companies: 'companies',
  applicants: 'applicants'
} as const;

export type AlgoliaIndexKey = keyof typeof ALGOLIA_INDEXES;

function readAlgoliaPublicEnvInput() {
  return {
    appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '',
    searchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? '',
    indexPrefix: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_PREFIX ?? ''
  };
}

function readAlgoliaServerEnvInput() {
  return {
    ...readAlgoliaPublicEnvInput(),
    adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY ?? ''
  };
}

export function hasPublicAlgoliaEnv() {
  return algoliaPublicEnvSchema.safeParse(readAlgoliaPublicEnvInput()).success;
}

export function hasServerAlgoliaEnv() {
  return algoliaServerEnvSchema.safeParse(readAlgoliaServerEnvInput()).success;
}

export function getAlgoliaPublicEnv() {
  return algoliaPublicEnvSchema.parse(readAlgoliaPublicEnvInput());
}

export function getAlgoliaServerEnv() {
  return algoliaServerEnvSchema.parse(readAlgoliaServerEnvInput());
}

export function buildAlgoliaIndexName(index: AlgoliaIndexKey | string) {
  const { indexPrefix } = getAlgoliaPublicEnv();
  return `${indexPrefix}_${index}`;
}

export function getDefaultAlgoliaIndexNames() {
  return Object.fromEntries(
    Object.entries(ALGOLIA_INDEXES).map(([key, value]) => [
      key,
      buildAlgoliaIndexName(value)
    ])
  ) as Record<AlgoliaIndexKey, string>;
}
