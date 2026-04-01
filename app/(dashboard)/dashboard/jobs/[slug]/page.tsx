import { notFound } from 'next/navigation';
import { RecruiterJobCandidatesWorkspace } from '@/components/recruiter/job-candidates-workspace';
import {
  getRecruiterApplicantsByJobSlug,
  getRecruiterJobBySlug
} from '@/components/recruiter/mock-data';

export default async function RecruiterJobRecordPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getRecruiterJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const applicants = getRecruiterApplicantsByJobSlug(slug);

  return <RecruiterJobCandidatesWorkspace job={job} applicants={applicants} />;
}
