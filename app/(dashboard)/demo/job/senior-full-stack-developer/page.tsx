import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/jobs/job-detail-page';
import { jobDetailsBySlug } from '@/components/jobs/job-detail-data';

export default function SampleJobPage() {
  const data = jobDetailsBySlug['senior-full-stack-developer'];

  if (!data) {
    notFound();
  }

  return <JobDetailPage data={data} />;
}
