import { PublicJobsSearchPage } from '@/components/marketing/public-jobs-search-page';
import { redis } from '@/lib/redis';
import { tursoClient } from '@/lib/turso';

export default function HomePage() {
  console.log('Redis client', redis);
  console.log('Turso client', tursoClient);
  return <PublicJobsSearchPage />;
}
