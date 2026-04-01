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

  return (
    <RecruiterJobForm
      title={`Edit ${job.title}`}
      description="Update the job details below. This page shares the same recruiter form component as the new job page."
      submitLabel="Save Changes"
      cancelHref={`/dashboard/jobs/${job.slug}`}
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
