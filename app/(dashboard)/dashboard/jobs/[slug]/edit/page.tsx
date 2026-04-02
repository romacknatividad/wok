import { notFound } from 'next/navigation';
import { RecruiterJobForm } from '@/components/recruiter/job-form';
import { getRecruiterJobBySlug } from '@/components/recruiter/mock-data';

export default async function EditRecruiterJobPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getRecruiterJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const isArchived = job.status === 'Filled' || job.status === 'Closed';
  const archivedReason =
    isArchived && job.endDate
      ? `This job ${job.status === 'Filled' ? 'was filled' : 'ended'} on ${new Date(
          `${job.endDate}T00:00:00`
        ).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}. The public-facing job ad and recruiter record are now frozen and can no longer be edited.`
      : 'This job is archived and can no longer be edited.';

  return (
    <RecruiterJobForm
      title={`Edit ${job.title}`}
      description={
        isArchived
          ? 'This archived recruiter job record is read-only.'
          : 'Update the job details below. This page shares the same recruiter form component as the new job page.'
      }
      submitLabel={isArchived ? 'Archived record' : 'Save Changes'}
      cancelHref={`/dashboard/jobs/${job.slug}`}
      isArchived={isArchived}
      archivedReason={archivedReason}
      initialValues={{
        title: job.title,
        type: job.type,
        workMode: ['Office-based'],
        salary: job.salary,
        summary: job.summary,
        description: job.description,
        responsibilities: job.responsibilities,
        requirements: job.requirements
      }}
    />
  );
}
