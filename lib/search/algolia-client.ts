import 'server-only';

import { algoliasearch, type Algoliasearch } from 'algoliasearch';
import {
  buildAlgoliaIndexName,
  getAlgoliaServerEnv,
  getDefaultAlgoliaIndexNames,
  hasServerAlgoliaEnv,
  type AlgoliaIndexKey
} from '@/lib/search/algolia-env';

let algoliaAdminClient: Algoliasearch | null = null;

export function getAlgoliaAdminClient() {
  if (algoliaAdminClient) {
    return algoliaAdminClient;
  }

  const { appId, adminApiKey } = getAlgoliaServerEnv();
  algoliaAdminClient = algoliasearch(appId, adminApiKey);

  return algoliaAdminClient;
}

export function getAlgoliaIndexName(index: AlgoliaIndexKey | string) {
  return buildAlgoliaIndexName(index);
}

export function getAlgoliaIndexNames() {
  return getDefaultAlgoliaIndexNames();
}

export function isAlgoliaReady() {
  return hasServerAlgoliaEnv();
}
