export const recruiterJobs = [
  {
    slug: 'senior-full-stack-developer',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote, Philippines',
    applicants: 24,
    status: 'Hiring',
    type: 'Full-time',
    posted: '2 days ago',
    salary: 'PHP 120,000 - PHP 180,000 / month',
    summary:
      'Lead full stack product delivery across frontend and backend systems.',
    description:
      'We are hiring a Senior Full Stack Developer to build product features, improve system reliability, and collaborate closely with design and product.',
    responsibilities:
      'Build and maintain modern web applications, review code, improve reliability, and help ship product work that matters.',
    requirements:
      'Strong React and TypeScript experience, backend API knowledge, and experience working with product teams.'
  },
  {
    slug: 'accounting-personnel',
    title: 'Accounting Personnel',
    department: 'Finance',
    location: 'On-site / Hybrid',
    applicants: 11,
    status: 'Screening',
    type: 'Full-time',
    posted: '4 days ago',
    salary: 'PHP 28,000 - PHP 40,000 / month',
    summary:
      'Support finance operations, reconciliations, and reporting accuracy.',
    description:
      'We are hiring an Accounting Personnel to keep financial records organized, accurate, and ready for day-to-day business operations.',
    responsibilities:
      'Manage journals, reconciliations, reporting support, and document control across accounting workflows.',
    requirements:
      'Accounting background, spreadsheet confidence, and reliable attention to detail.'
  },
  {
    slug: 'customer-support-specialist',
    title: 'Customer Support Specialist',
    department: 'Operations',
    location: 'Remote',
    applicants: 16,
    status: 'Interviewing',
    type: 'Full-time',
    posted: '1 week ago',
    salary: 'PHP 30,000 - PHP 45,000 / month',
    summary:
      'Handle customer questions, resolve issues, and keep response quality high.',
    description:
      'We are looking for a Customer Support Specialist who can manage customer conversations with care, speed, and professionalism.',
    responsibilities:
      'Respond to customers, investigate issues, coordinate follow-ups, and improve the support experience.',
    requirements:
      'Strong communication skills, customer empathy, and comfort working with support tools.'
  },
  {
    slug: 'recruitment-associate',
    title: 'Recruitment Associate',
    department: 'People Operations',
    location: 'Makati City',
    applicants: 8,
    status: 'Draft',
    type: 'Full-time',
    posted: 'Not published',
    salary: 'PHP 25,000 - PHP 35,000 / month',
    summary:
      'Assist with sourcing, interview coordination, and candidate communication.',
    description:
      'We are preparing a Recruitment Associate role focused on candidate coordination and hiring support.',
    responsibilities:
      'Help with sourcing, candidate communication, scheduling, and recruitment administration.',
    requirements:
      'Organized communication, strong follow-up habits, and interest in recruiting operations.'
  }
];

export const recruiterApplicants = [
  {
    id: 1,
    name: 'Paolo Mendoza',
    email: 'paolo.mendoza@email.com',
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    appliedAt: 'Today, 9:12 AM',
    status: 'New',
    experience: '6 years',
    location: 'Quezon City',
    summary: 'React, Node.js, TypeScript, and SaaS product engineering background.'
  },
  {
    id: 2,
    name: 'Angela Reyes',
    email: 'angela.reyes@email.com',
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    appliedAt: 'Today, 8:03 AM',
    status: 'Review',
    experience: '4 years',
    location: 'Pasig City',
    summary: 'Month-end close, reconciliations, audit support, and reporting.'
  },
  {
    id: 3,
    name: 'Tricia Santos',
    email: 'tricia.santos@email.com',
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    appliedAt: 'Yesterday, 4:45 PM',
    status: 'Shortlist',
    experience: '5 years',
    location: 'Cebu City',
    summary: 'Handled high-volume inboxes, escalations, and support QA workflows.'
  },
  {
    id: 4,
    name: 'Mark Velasco',
    email: 'mark.velasco@email.com',
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    appliedAt: 'Yesterday, 1:20 PM',
    status: 'Interview',
    experience: '7 years',
    location: 'Makati City',
    summary: 'General ledger, payables, receivables, and finance operations support.'
  },
  {
    id: 5,
    name: 'Jana Cruz',
    email: 'jana.cruz@email.com',
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    appliedAt: 'Mar 31, 11:08 AM',
    status: 'Screening',
    experience: '3 years',
    location: 'Davao City',
    summary: 'Strong communication skills with chat, email, and voice support experience.'
  },
  {
    id: 6,
    name: 'Alyssa Ramos',
    email: 'alyssa.ramos@email.com',
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    appliedAt: 'Mar 30, 2:34 PM',
    status: 'Interview',
    experience: '8 years',
    location: 'Remote, Philippines',
    summary: 'Led delivery across frontend and backend systems for product teams.'
  }
];

export function getRecruiterJobBySlug(slug: string) {
  return recruiterJobs.find((job) => job.slug === slug);
}
