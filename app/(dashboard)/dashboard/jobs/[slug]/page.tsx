import { notFound } from 'next/navigation';
import { JobDetailPage } from '@/components/jobs/job-detail-page';
import { jobDetailsBySlug } from '@/components/jobs/job-detail-data';

export default async function RecruiterJobRecordPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = jobDetailsBySlug[slug];

  if (!data) {
    notFound();
  }

  return (
    <JobDetailPage
      data={{ ...data, badge: 'Recruiter job record' }}
      primaryHref="/dashboard/jobs"
      primaryLabel="Back to Jobs"
      secondaryHref="/dashboard"
      secondaryLabel="Open recruiter dashboard"
      showPublicFooter={false}
    />
  );
}
