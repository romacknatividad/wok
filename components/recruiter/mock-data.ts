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
    phone: '+63 917 555 0121',
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    appliedAt: 'Today, 9:12 AM',
    status: 'New',
    phase: 'Application Review',
    interviewLevel: 'Not started',
    experience: '6 years',
    location: 'Quezon City',
    askingSalary: 'PHP 165,000 / month',
    noticePeriod: '30 days',
    education: 'BS Computer Science, De La Salle University',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    notes:
      'Strong product engineering background. Resume shows ownership of customer-facing releases.',
    cvFileName: 'paolo-mendoza-cv.pdf',
    cvFileType: 'PDF',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Senior full-stack engineer with 6 years of experience building SaaS products.',
          'Led frontend and API delivery across growth-stage teams.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Lead Software Engineer, Atlas Stack Labs (2023-2026)',
          'Full-Stack Developer, Nova Product Studio (2020-2023)'
        ]
      },
      {
        heading: 'Skills',
        lines: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
      }
    ],
    auditTrail: [
      {
        time: 'Today, 9:12 AM',
        title: 'Application received',
        detail: 'Candidate submitted an application through the public job page.'
      },
      {
        time: 'Today, 9:28 AM',
        title: 'Resume reviewed',
        detail: 'Recruiter completed an initial resume scan and marked the candidate as promising.'
      }
    ],
    summary: 'React, Node.js, TypeScript, and SaaS product engineering background.'
  },
  {
    id: 2,
    name: 'Angela Reyes',
    email: 'angela.reyes@email.com',
    phone: '+63 918 555 0148',
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    appliedAt: 'Today, 8:03 AM',
    status: 'Review',
    phase: 'Recruiter Screen',
    interviewLevel: 'Initial screen',
    experience: '4 years',
    location: 'Pasig City',
    askingSalary: 'PHP 38,000 / month',
    noticePeriod: '15 days',
    education: 'BS Accountancy, University of Santo Tomas',
    skills: ['General Ledger', 'Reconciliation', 'Excel', 'Audit Support'],
    notes:
      'Relevant accounting operations background. Worth moving to recruiter screen this week.',
    cvFileName: 'angela-reyes-resume.docx',
    cvFileType: 'DOCX',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Accounting professional with 4 years of finance operations and reporting experience.',
          'Background in reconciliations, month-end close, and audit support.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Accounting Analyst, Sterling Finance Group (2022-2026)',
          'Junior Accountant, Clearbooks Shared Services (2020-2022)'
        ]
      },
      {
        heading: 'Tools',
        lines: ['Excel', 'QuickBooks', 'SAP', 'Financial Reporting']
      }
    ],
    auditTrail: [
      {
        time: 'Today, 8:03 AM',
        title: 'Application received',
        detail: 'Candidate applied for the Accounting Personnel role.'
      },
      {
        time: 'Today, 10:10 AM',
        title: 'Status changed to Review',
        detail: 'Recruiter flagged the profile for a closer finance-focused review.'
      },
      {
        time: 'Today, 11:25 AM',
        title: 'Phase updated to Recruiter Screen',
        detail: 'Candidate moved to the recruiter screening phase.'
      }
    ],
    summary: 'Month-end close, reconciliations, audit support, and reporting.'
  },
  {
    id: 3,
    name: 'Tricia Santos',
    email: 'tricia.santos@email.com',
    phone: '+63 919 555 0194',
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    appliedAt: 'Yesterday, 4:45 PM',
    status: 'Shortlist',
    phase: 'Hiring Manager Review',
    interviewLevel: 'Final interview',
    experience: '5 years',
    location: 'Cebu City',
    askingSalary: 'PHP 42,000 / month',
    noticePeriod: 'Immediate',
    education: 'BA Communication, University of San Carlos',
    skills: ['Customer Support', 'QA', 'Zendesk', 'Escalations'],
    notes:
      'Excellent support metrics in previous role. Keep for final shortlist review.',
    cvFileName: 'tricia-santos-profile.pdf',
    cvFileType: 'PDF',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Customer support specialist with 5 years in high-volume omnichannel operations.',
          'Strong QA discipline and escalation handling.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Senior Support Specialist, Helio CX Services (2022-2026)',
          'Support Associate, Brightline Helpdesk (2020-2022)'
        ]
      },
      {
        heading: 'Platforms',
        lines: ['Zendesk', 'Intercom', 'Google Workspace', 'QA scorecards']
      }
    ],
    auditTrail: [
      {
        time: 'Yesterday, 4:45 PM',
        title: 'Application received',
        detail: 'Candidate entered the support specialist pipeline.'
      },
      {
        time: 'Today, 9:00 AM',
        title: 'Shortlisted',
        detail: 'Profile moved to the shortlist based on prior support metrics and QA experience.'
      },
      {
        time: 'Today, 2:30 PM',
        title: 'Final interview prepared',
        detail: 'Hiring manager requested the candidate for a final interview round.'
      }
    ],
    summary: 'Handled high-volume inboxes, escalations, and support QA workflows.'
  },
  {
    id: 4,
    name: 'Mark Velasco',
    email: 'mark.velasco@email.com',
    phone: '+63 917 555 0188',
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    appliedAt: 'Yesterday, 1:20 PM',
    status: 'Interview',
    phase: 'Panel Interview',
    interviewLevel: 'Final interview',
    experience: '7 years',
    location: 'Makati City',
    askingSalary: 'PHP 40,000 / month',
    noticePeriod: '30 days',
    education: 'BS Management Accounting, FEU',
    skills: ['Payables', 'Receivables', 'Reporting', 'Spreadsheet Modeling'],
    notes:
      'Needs final alignment on salary and start date. Finance lead feedback is positive.',
    cvFileName: 'mark-velasco-cv.pdf',
    cvFileType: 'PDF',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Finance operations specialist with 7 years across accounting and reporting.',
          'Comfortable with payables, receivables, and spreadsheet modeling.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Senior Accounting Officer, Crestline Holdings (2021-2026)',
          'Accounting Specialist, Meridian Ledger Services (2018-2021)'
        ]
      },
      {
        heading: 'Core Strengths',
        lines: ['Financial Reporting', 'Payables', 'Receivables', 'MS Excel']
      }
    ],
    auditTrail: [
      {
        time: 'Yesterday, 1:20 PM',
        title: 'Application received',
        detail: 'Candidate applied to the accounting role.'
      },
      {
        time: 'Today, 9:40 AM',
        title: 'Panel interview scheduled',
        detail: 'Finance lead and recruiter aligned on a final panel interview.'
      },
      {
        time: 'Today, 4:15 PM',
        title: 'Compensation discussion flagged',
        detail: 'Recruiter noted salary and notice period for final alignment.'
      }
    ],
    summary: 'General ledger, payables, receivables, and finance operations support.'
  },
  {
    id: 5,
    name: 'Jana Cruz',
    email: 'jana.cruz@email.com',
    phone: '+63 916 555 0117',
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    appliedAt: 'Mar 31, 11:08 AM',
    status: 'Screening',
    phase: 'Assessment',
    interviewLevel: 'Assessment stage',
    experience: '3 years',
    location: 'Davao City',
    askingSalary: 'PHP 35,000 / month',
    noticePeriod: '21 days',
    education: 'BS Psychology, Ateneo de Davao University',
    skills: ['Voice Support', 'Email Support', 'Ticket Handling', 'CSAT'],
    notes:
      'Awaiting assessment results before moving to live screening conversation.',
    cvFileName: 'jana-cruz-resume.doc',
    cvFileType: 'DOC',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Support candidate with 3 years of chat, email, and voice support experience.',
          'Strong customer communication and ticket handling discipline.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Customer Support Representative, Elevate Care Ops (2023-2026)',
          'Support Associate, Northline Services (2022-2023)'
        ]
      },
      {
        heading: 'Customer Metrics',
        lines: ['CSAT', 'Ticket Resolution', 'Voice Support', 'Email Support']
      }
    ],
    auditTrail: [
      {
        time: 'Mar 31, 11:08 AM',
        title: 'Application received',
        detail: 'Candidate applied through the customer support job page.'
      },
      {
        time: 'Apr 1, 8:15 AM',
        title: 'Assessment requested',
        detail: 'Candidate was sent an assessment as part of the screening workflow.'
      }
    ],
    summary: 'Strong communication skills with chat, email, and voice support experience.'
  },
  {
    id: 6,
    name: 'Alyssa Ramos',
    email: 'alyssa.ramos@email.com',
    phone: '+63 915 555 0170',
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    appliedAt: 'Mar 30, 2:34 PM',
    status: 'Interview',
    phase: 'Technical Interview',
    interviewLevel: 'Technical panel',
    experience: '8 years',
    location: 'Remote, Philippines',
    askingSalary: 'PHP 180,000 / month',
    noticePeriod: '45 days',
    education: 'BS Information Technology, University of the Philippines',
    skills: ['System Design', 'React', 'Node.js', 'Team Leadership'],
    notes:
      'Very strong leadership profile. Need to verify notice period and compensation flexibility.',
    cvFileName: 'alyssa-ramos-cv.pdf',
    cvFileType: 'PDF',
    cvPreviewSections: [
      {
        heading: 'Professional Summary',
        lines: [
          'Engineering leader with 8 years building and scaling product teams.',
          'Hands-on system design, full-stack delivery, and people leadership.'
        ]
      },
      {
        heading: 'Experience',
        lines: [
          'Engineering Lead, Orbit Product Systems (2022-2026)',
          'Senior Full-Stack Developer, Apex Software Collective (2018-2022)'
        ]
      },
      {
        heading: 'Technical Focus',
        lines: ['System Design', 'React', 'Node.js', 'Architecture', 'Leadership']
      }
    ],
    auditTrail: [
      {
        time: 'Mar 30, 2:34 PM',
        title: 'Application received',
        detail: 'Candidate applied to the engineering opening.'
      },
      {
        time: 'Mar 31, 10:00 AM',
        title: 'Technical interview scheduled',
        detail: 'Candidate moved forward to a technical panel interview.'
      },
      {
        time: 'Apr 1, 1:45 PM',
        title: 'Recruiter note added',
        detail: 'Notice period and asking salary were flagged for decision review.'
      }
    ],
    summary: 'Led delivery across frontend and backend systems for product teams.'
  }
];

export function getRecruiterJobBySlug(slug: string) {
  return recruiterJobs.find((job) => job.slug === slug);
}

export function getRecruiterApplicantsByJobSlug(slug: string) {
  return recruiterApplicants.filter((applicant) => applicant.jobSlug === slug);
}
