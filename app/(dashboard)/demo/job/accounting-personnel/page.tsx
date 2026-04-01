import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/jobs/job-detail-page';
import { jobDetailsBySlug } from '@/components/jobs/job-detail-data';

export default function AccountingPersonnelDemoPage() {
  const data = jobDetailsBySlug['accounting-personnel'];

  if (!data) {
    notFound();
  }

  return <JobDetailPage data={data} />;
}
