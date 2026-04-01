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
        department: job.department,
        location: job.location,
        type: job.type,
        status: job.status,
        salary: job.salary,
        summary: job.summary,
        description: job.description,
        responsibilities: job.responsibilities,
        requirements: job.requirements
      }}
    />
  );
}
