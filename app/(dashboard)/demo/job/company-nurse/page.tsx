import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/jobs/job-detail-page';
import { jobDetailsBySlug } from '@/components/jobs/job-detail-data';

export default function CompanyNurseDemoPage() {
  const data = jobDetailsBySlug['company-nurse'];

  if (!data) {
    notFound();
  }

  return <JobDetailPage data={data} />;
}
