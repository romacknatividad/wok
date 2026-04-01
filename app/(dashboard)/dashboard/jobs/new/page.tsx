import { RecruiterJobForm } from '@/components/recruiter/job-form';

export default function NewRecruiterJobPage() {
  return (
    <RecruiterJobForm
      title="Create a new job post"
      description="Use this recruiter form to draft a new job record. The same layout is reused for editing existing jobs."
      submitLabel="Create Job"
      initialValues={{
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        status: 'Draft',
        salary: '',
        summary: '',
        description: '',
        responsibilities: '',
        requirements: ''
      }}
    />
  );
}
