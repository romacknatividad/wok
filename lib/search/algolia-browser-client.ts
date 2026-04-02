import { liteClient, type LiteClient } from 'algoliasearch/lite';
import {
  buildAlgoliaIndexName,
  getAlgoliaPublicEnv,
  getDefaultAlgoliaIndexNames,
  hasPublicAlgoliaEnv,
  type AlgoliaIndexKey
} from '@/lib/search/algolia-env';

let algoliaSearchClient: LiteClient | null = null;

export function getAlgoliaSearchClient() {
  if (algoliaSearchClient) {
    return algoliaSearchClient;
  }

  const { appId, searchApiKey } = getAlgoliaPublicEnv();
  algoliaSearchClient = liteClient(appId, searchApiKey);

  return algoliaSearchClient;
}

export function getAlgoliaPublicIndexName(index: AlgoliaIndexKey | string) {
  return buildAlgoliaIndexName(index);
}

export function getAlgoliaPublicIndexNames() {
  return getDefaultAlgoliaIndexNames();
}

export function isAlgoliaSearchReady() {
  return hasPublicAlgoliaEnv();
}
