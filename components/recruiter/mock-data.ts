export type RecruiterJobRecord = {
  slug: string;
  title: string;
  department: string;
  location: string;
  applicants: number;
  status: string;
  type: string;
  posted: string;
  postedDate: string | null;
  endDate: string | null;
  salary: string;
  summary: string;
  description: string;
  responsibilities: string;
  requirements: string;
};

export const recruiterJobs: RecruiterJobRecord[] = [
  {
    slug: 'senior-full-stack-developer',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote, Philippines',
    applicants: 24,
    status: 'Hiring',
    type: 'Full-time',
    posted: '2 days ago',
    postedDate: '2026-04-01',
    endDate: null,
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
    postedDate: '2026-03-29',
    endDate: null,
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
    postedDate: '2026-03-24',
    endDate: null,
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
    postedDate: null,
    endDate: null,
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

const additionalRecruiterJobs: RecruiterJobRecord[] = [
  {
    slug: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Hybrid, Taguig City',
    applicants: 0,
    status: 'Hiring',
    type: 'Full-time',
    posted: 'Feb 16, 2026',
    postedDate: '2026-02-16',
    endDate: null,
    salary: 'PHP 70,000 - PHP 95,000 / month',
    summary:
      'Design product experiences from workflow mapping to polished interfaces.',
    description:
      'We are looking for a Product Designer to translate user and business needs into thoughtful product experiences.',
    responsibilities:
      'Own wireframes, interface design, research synthesis, and collaboration with engineering and product.',
    requirements:
      'Strong product design fundamentals, Figma proficiency, and clear communication with cross-functional teams.'
  },
  {
    slug: 'sales-operations-specialist',
    title: 'Sales Operations Specialist',
    department: 'Revenue',
    location: 'Hybrid, Pasig City',
    applicants: 0,
    status: 'Hiring',
    type: 'Full-time',
    posted: 'Oct 08, 2025',
    postedDate: '2025-10-08',
    endDate: null,
    salary: 'PHP 45,000 - PHP 65,000 / month',
    summary:
      'Support pipeline reporting, CRM quality, and sales process execution.',
    description:
      'We are hiring a Sales Operations Specialist to keep sales reporting, CRM hygiene, and internal process coordination sharp.',
    responsibilities:
      'Maintain CRM quality, prepare pipeline reports, and support sales process improvements.',
    requirements:
      'CRM familiarity, spreadsheet confidence, and process-oriented operational thinking.'
  },
  {
    slug: 'marketing-coordinator',
    title: 'Marketing Coordinator',
    department: 'Marketing',
    location: 'Hybrid, Quezon City',
    applicants: 0,
    status: 'Screening',
    type: 'Full-time',
    posted: 'Aug 19, 2025',
    postedDate: '2025-08-19',
    endDate: null,
    salary: 'PHP 32,000 - PHP 48,000 / month',
    summary:
      'Coordinate campaigns, content calendars, and execution across marketing initiatives.',
    description:
      'We are hiring a Marketing Coordinator to support campaign execution, content planning, and coordination across the team.',
    responsibilities:
      'Manage marketing calendars, coordinate campaign assets, and track execution support across initiatives.',
    requirements:
      'Strong coordination skills, content workflow familiarity, and organized project follow-through.'
  },
  {
    slug: 'warehouse-supervisor',
    title: 'Warehouse Supervisor',
    department: 'Logistics',
    location: 'On-site, Laguna',
    applicants: 0,
    status: 'Interviewing',
    type: 'Full-time',
    posted: 'Jun 04, 2025',
    postedDate: '2025-06-04',
    endDate: null,
    salary: 'PHP 35,000 - PHP 50,000 / month',
    summary:
      'Lead warehouse operations, inventory discipline, and shift coordination.',
    description:
      'We are hiring a Warehouse Supervisor to keep warehouse operations safe, organized, and efficient across day-to-day fulfillment activity.',
    responsibilities:
      'Oversee inventory flow, shift coordination, warehouse discipline, and daily operations reporting.',
    requirements:
      'Warehouse operations experience, people supervision, and process reliability.'
  },
  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    department: 'Strategy',
    location: 'Remote, Philippines',
    applicants: 0,
    status: 'Filled',
    type: 'Full-time',
    posted: 'Apr 15, 2025',
    postedDate: '2025-04-15',
    endDate: '2025-06-27',
    salary: 'PHP 60,000 - PHP 85,000 / month',
    summary:
      'Support data-backed analysis, reporting, and business process improvements.',
    description:
      'We are looking for a Business Analyst who can turn operational data into useful recommendations and cross-functional improvements.',
    responsibilities:
      'Analyze reports, map business processes, and present structured operational recommendations.',
    requirements:
      'Analytical thinking, spreadsheet or BI familiarity, and strong stakeholder communication.'
  },
  {
    slug: 'hr-generalist',
    title: 'HR Generalist',
    department: 'People Operations',
    location: 'Hybrid, Makati City',
    applicants: 0,
    status: 'Closed',
    type: 'Full-time',
    posted: 'Jan 22, 2025',
    postedDate: '2025-01-22',
    endDate: '2025-03-14',
    salary: 'PHP 38,000 - PHP 52,000 / month',
    summary:
      'Handle employee support, HR administration, and people process coordination.',
    description:
      'We are hiring an HR Generalist to support day-to-day people operations, employee concerns, and HR coordination.',
    responsibilities:
      'Support employee documentation, onboarding coordination, HR administration, and policy follow-through.',
    requirements:
      'Human resources experience, organized documentation habits, and employee-facing communication.'
  },
  {
    slug: 'procurement-officer',
    title: 'Procurement Officer',
    department: 'Operations',
    location: 'On-site, Cebu City',
    applicants: 0,
    status: 'Closed',
    type: 'Full-time',
    posted: 'Sep 11, 2024',
    postedDate: '2024-09-11',
    endDate: '2024-11-08',
    salary: 'PHP 32,000 - PHP 46,000 / month',
    summary:
      'Manage vendor coordination, purchasing records, and procurement workflows.',
    description:
      'We are looking for a Procurement Officer to coordinate vendors, purchasing records, and internal supply requests.',
    responsibilities:
      'Process purchase requests, manage vendor communication, and maintain procurement documentation.',
    requirements:
      'Procurement coordination, vendor management, and strong administrative follow-through.'
  },
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'On-site, Davao City',
    applicants: 0,
    status: 'Filled',
    type: 'Full-time',
    posted: 'May 13, 2024',
    postedDate: '2024-05-13',
    endDate: '2024-08-02',
    salary: 'PHP 85,000 - PHP 120,000 / month',
    summary:
      'Lead service operations, team coordination, and process improvement initiatives.',
    description:
      'We are hiring an Operations Manager to lead execution, team coordination, and process improvements across a high-activity environment.',
    responsibilities:
      'Manage operations teams, improve delivery workflows, and align stakeholders around performance targets.',
    requirements:
      'Operations leadership, people management, and process improvement experience.'
  }
];

recruiterJobs.push(...additionalRecruiterJobs);

const generatedApplicantTargets: Record<string, number> = {
  'senior-full-stack-developer': 12,
  'accounting-personnel': 10,
  'customer-support-specialist': 9,
  'recruitment-associate': 4,
  'product-designer': 5,
  'sales-operations-specialist': 5,
  'marketing-coordinator': 5,
  'warehouse-supervisor': 4,
  'business-analyst': 3,
  'hr-generalist': 3,
  'procurement-officer': 2,
  'operations-manager': 2
};

const statusPool = ['New', 'Review', 'Screening', 'Shortlist', 'Interview', 'Offer'];
const phasePool = [
  'Application Review',
  'Recruiter Screen',
  'Assessment',
  'Hiring Manager Review',
  'Technical Interview',
  'Panel Interview',
  'Offer Discussion'
];
const interviewLevelPool = [
  'Not started',
  'Initial screen',
  'Assessment stage',
  'Hiring manager',
  'Technical panel',
  'Final interview'
];
const noticePool = ['Immediate', '15 days', '21 days', '30 days', '45 days'];
const locationPool = [
  'Makati City',
  'Pasig City',
  'Quezon City',
  'Taguig City',
  'Cebu City',
  'Davao City',
  'Remote, Philippines',
  'Laguna'
];
const firstNames = [
  'Daniel', 'Sofia', 'Miguel', 'Bea', 'Carlo', 'Patricia', 'Luis', 'Nina', 'Rafael',
  'Mika', 'Andre', 'Jessa', 'Victor', 'Rina', 'Paula', 'Enzo', 'Kyla', 'Marco', 'Sam',
  'Erika', 'Ian', 'Janelle', 'Ken', 'Mariel', 'Noel', 'Rica', 'Owen', 'Shane', 'Patrick',
  'Tina', 'Harvey', 'Lara', 'Vince', 'Mae', 'Jason', 'Clare', 'Bryan', 'Aileen', 'Adrian',
  'Faith', 'Ivan', 'Leah', 'Jerome', 'Bianca', 'Ramon', 'Ava', 'Nico', 'Ivy', 'Cedric', 'Ella'
];
const lastNames = [
  'Garcia', 'Torres', 'Navarro', 'Lopez', 'Villanueva', 'Cruz', 'Santiago', 'Aquino',
  'Soriano', 'Dizon', 'Panganiban', 'Agustin', 'Reyes', 'Mendoza', 'Gutierrez', 'Bautista'
];
const educationPool = [
  'BS Business Administration, Ateneo de Manila University',
  'BS Information Technology, Mapua University',
  'BS Accountancy, University of Santo Tomas',
  'BA Communication, De La Salle University',
  'BS Psychology, University of the Philippines',
  'BS Industrial Engineering, Mapua University'
];

const applicantTemplates: Record<
  string,
  {
    skills: string[];
    summary: string;
    baseExperience: number;
    salaryRange: [number, number];
    sectionTitle: string;
    experienceLines: string[];
  }
> = {
  'senior-full-stack-developer': {
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    summary: 'Product engineering, APIs, frontend delivery, and system reliability.',
    baseExperience: 5,
    salaryRange: [130000, 185000],
    sectionTitle: 'Technical Focus',
    experienceLines: [
      'Led application delivery across frontend and backend platforms.',
      'Worked with engineering and product teams to ship customer-facing features.'
    ]
  },
  'accounting-personnel': {
    skills: ['General Ledger', 'Reconciliation', 'Excel', 'Financial Reporting'],
    summary: 'Reconciliations, month-end close, and finance operations support.',
    baseExperience: 3,
    salaryRange: [29000, 41000],
    sectionTitle: 'Finance Focus',
    experienceLines: [
      'Supported reconciliations and financial record accuracy.',
      'Handled spreadsheets, month-end support, and documentation control.'
    ]
  },
  'customer-support-specialist': {
    skills: ['Customer Support', 'Ticket Handling', 'Email Support', 'CSAT'],
    summary: 'Customer handling, ticket resolution, and support quality discipline.',
    baseExperience: 2,
    salaryRange: [32000, 45000],
    sectionTitle: 'Support Focus',
    experienceLines: [
      'Handled customer conversations across voice, email, and chat.',
      'Maintained response quality, escalation handling, and CSAT awareness.'
    ]
  },
  'recruitment-associate': {
    skills: ['Sourcing', 'Interview Coordination', 'Recruitment Admin', 'Candidate Care'],
    summary: 'Sourcing support, scheduling, and recruitment coordination.',
    baseExperience: 1,
    salaryRange: [25000, 35000],
    sectionTitle: 'Recruitment Focus',
    experienceLines: [
      'Supported candidate scheduling and recruiter follow-through.',
      'Helped with sourcing, communication, and hiring administration.'
    ]
  },
  'product-designer': {
    skills: ['Figma', 'Product Design', 'Wireframing', 'User Research'],
    summary: 'Interface design, workflow mapping, and product collaboration.',
    baseExperience: 3,
    salaryRange: [72000, 95000],
    sectionTitle: 'Design Focus',
    experienceLines: [
      'Designed user flows, interface systems, and product interactions.',
      'Worked closely with product and engineering teams on delivery.'
    ]
  },
  'sales-operations-specialist': {
    skills: ['CRM', 'Sales Reporting', 'Excel', 'Process Improvement'],
    summary: 'CRM hygiene, sales operations, and pipeline reporting.',
    baseExperience: 3,
    salaryRange: [47000, 65000],
    sectionTitle: 'Operations Focus',
    experienceLines: [
      'Maintained CRM quality and sales reporting accuracy.',
      'Supported process improvements and operational follow-through.'
    ]
  },
  'marketing-coordinator': {
    skills: ['Campaign Coordination', 'Content Calendar', 'Reporting', 'Project Coordination'],
    summary: 'Campaign support, content planning, and marketing execution.',
    baseExperience: 2,
    salaryRange: [34000, 48000],
    sectionTitle: 'Marketing Focus',
    experienceLines: [
      'Coordinated campaign schedules, calendars, and content support.',
      'Tracked delivery timelines and campaign execution details.'
    ]
  },
  'warehouse-supervisor': {
    skills: ['Warehouse Operations', 'Inventory', 'People Supervision', 'Process Discipline'],
    summary: 'Inventory flow, supervision, and warehouse coordination.',
    baseExperience: 4,
    salaryRange: [36000, 52000],
    sectionTitle: 'Operations Focus',
    experienceLines: [
      'Managed shift flow, warehouse discipline, and inventory checks.',
      'Coordinated people and processes across day-to-day operations.'
    ]
  },
  'business-analyst': {
    skills: ['Reporting', 'Data Analysis', 'Stakeholder Communication', 'Process Mapping'],
    summary: 'Business analysis, reporting, and cross-functional recommendations.',
    baseExperience: 3,
    salaryRange: [62000, 86000],
    sectionTitle: 'Analysis Focus',
    experienceLines: [
      'Prepared analysis and reporting for operational decisions.',
      'Mapped workflows and supported process improvement initiatives.'
    ]
  },
  'hr-generalist': {
    skills: ['People Operations', 'Documentation', 'Employee Support', 'Onboarding'],
    summary: 'People operations, employee support, and HR administration.',
    baseExperience: 3,
    salaryRange: [39000, 54000],
    sectionTitle: 'HR Focus',
    experienceLines: [
      'Supported employee concerns and people process coordination.',
      'Managed documentation, onboarding, and HR follow-through.'
    ]
  },
  'procurement-officer': {
    skills: ['Procurement', 'Vendor Management', 'Documentation', 'Purchasing'],
    summary: 'Procurement workflows, vendor coordination, and purchasing support.',
    baseExperience: 3,
    salaryRange: [33000, 47000],
    sectionTitle: 'Procurement Focus',
    experienceLines: [
      'Managed vendor coordination and purchasing records.',
      'Handled supply requests and procurement documentation.'
    ]
  },
  'operations-manager': {
    skills: ['Operations Leadership', 'Process Improvement', 'People Management', 'Reporting'],
    summary: 'Operations leadership, execution management, and workflow improvement.',
    baseExperience: 6,
    salaryRange: [90000, 122000],
    sectionTitle: 'Leadership Focus',
    experienceLines: [
      'Led teams, delivery workflows, and operational targets.',
      'Improved service performance through structured operations management.'
    ]
  }
};

const existingApplicantCounts = recruiterApplicants.reduce<Record<string, number>>((counts, applicant) => {
  counts[applicant.jobSlug] = (counts[applicant.jobSlug] ?? 0) + 1;
  return counts;
}, {});

let nextGeneratedApplicantId = Math.max(...recruiterApplicants.map((applicant) => applicant.id)) + 1;

recruiterJobs.forEach((job, jobIndex) => {
  const targetCount = generatedApplicantTargets[job.slug] ?? 0;
  const currentCount = existingApplicantCounts[job.slug] ?? 0;
  const template = applicantTemplates[job.slug];

  if (!template || currentCount >= targetCount) {
    return;
  }

  for (let index = currentCount; index < targetCount; index += 1) {
    const applicantId = nextGeneratedApplicantId++;
    const firstName = firstNames[(jobIndex * 5 + index) % firstNames.length];
    const lastName = lastNames[(jobIndex * 3 + index) % lastNames.length];
    const experienceYears = template.baseExperience + (index % 4);
    const salaryStep = Math.round(
      (template.salaryRange[1] - template.salaryRange[0]) /
        Math.max(1, targetCount - 1)
    );
    const askingSalary = template.salaryRange[0] + salaryStep * index;
    const appliedAt = buildAppliedAtLabel(job.postedDate, index);

    recruiterApplicants.push({
      id: applicantId,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${applicantId}@email.com`,
      phone: `+63 9${String(170000000 + applicantId).slice(-9)}`,
      jobTitle: job.title,
      jobSlug: job.slug,
      appliedAt,
      status: statusPool[(jobIndex + index) % statusPool.length],
      phase: phasePool[(jobIndex + index) % phasePool.length],
      interviewLevel: interviewLevelPool[(jobIndex + index) % interviewLevelPool.length],
      experience: `${experienceYears} years`,
      location: locationPool[(jobIndex + index) % locationPool.length],
      askingSalary: `PHP ${askingSalary.toLocaleString()} / month`,
      noticePeriod: noticePool[(jobIndex + index) % noticePool.length],
      education: educationPool[(jobIndex + index) % educationPool.length],
      skills: template.skills,
      notes: `${firstName} is in the ${job.title.toLowerCase()} pipeline and should be reviewed against current hiring demand.`,
      cvFileName: `${firstName.toLowerCase()}-${lastName.toLowerCase()}-cv.pdf`,
      cvFileType: 'PDF',
      cvPreviewSections: [
        {
          heading: 'Professional Summary',
          lines: [
            `${job.title} candidate with ${experienceYears} years of relevant experience.`,
            template.summary
          ]
        },
        {
          heading: 'Experience',
          lines: template.experienceLines
        },
        {
          heading: template.sectionTitle,
          lines: template.skills
        }
      ],
      auditTrail: [
        {
          time: appliedAt,
          title: 'Application received',
          detail: `Candidate applied for the ${job.title} role.`
        },
        {
          time: `Apr 1, ${8 + (index % 6)}:${index % 2 === 0 ? '15' : '40'} AM`,
          title: 'Recruiter review updated',
          detail: `Application moved through ${phasePool[(jobIndex + index) % phasePool.length].toLowerCase()} with recruiter notes added.`
        }
      ],
      summary: template.summary
    });
  }
});

const applicantCountsByJob = recruiterApplicants.reduce<Record<string, number>>((counts, applicant) => {
  counts[applicant.jobSlug] = (counts[applicant.jobSlug] ?? 0) + 1;
  return counts;
}, {});

recruiterJobs.forEach((job) => {
  job.applicants = applicantCountsByJob[job.slug] ?? 0;
});

function buildAppliedAtLabel(postedDate: string | null, offset: number) {
  if (!postedDate) {
    return `Jan ${String((offset % 18) + 3).padStart(2, '0')}, 2026`;
  }

  const [year, month, day] = postedDate.split('-').map(Number);
  const appliedDate = new Date(year, month - 1, Math.max(1, day - (offset % 12)));

  return appliedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export const recruiterCalendarEvents = [
  {
    id: 'cal-1',
    applicantName: 'Alyssa Ramos',
    applicantId: 6,
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    type: 'Technical interview',
    stage: 'Technical panel',
    date: '2026-04-02',
    time: '3:00 PM',
    duration: '90 mins',
    owner: 'Engineering panel',
    location: 'Google Meet',
    note: 'Architecture, system design, and team leadership discussion.'
  },
  {
    id: 'cal-2',
    applicantName: 'Mark Velasco',
    applicantId: 4,
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    type: 'Interview',
    stage: 'Final panel',
    date: '2026-04-03',
    time: '10:00 AM',
    duration: '60 mins',
    owner: 'Finance lead',
    location: 'Makati office',
    note: 'Final alignment on compensation and start date.'
  },
  {
    id: 'cal-3',
    applicantName: 'Jana Cruz',
    applicantId: 5,
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    type: 'Technical exam',
    stage: 'Assessment',
    date: '2026-04-04',
    time: '1:30 PM',
    duration: '45 mins',
    owner: 'Support operations',
    location: 'Online assessment',
    note: 'Customer handling exercise and ticket-writing simulation.'
  },
  {
    id: 'cal-4',
    applicantName: 'Paolo Mendoza',
    applicantId: 1,
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    type: 'Interview',
    stage: 'Recruiter screen',
    date: '2026-04-05',
    time: '9:30 AM',
    duration: '30 mins',
    owner: 'Recruiter',
    location: 'Google Meet',
    note: 'Initial screening call and compensation check.'
  },
  {
    id: 'cal-5',
    applicantName: 'Angela Reyes',
    applicantId: 2,
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    type: 'Interview',
    stage: 'Recruiter screen',
    date: '2026-04-07',
    time: '11:00 AM',
    duration: '30 mins',
    owner: 'Recruiter',
    location: 'Zoom',
    note: 'Finance background walkthrough and availability check.'
  },
  {
    id: 'cal-6',
    applicantName: 'Tricia Santos',
    applicantId: 3,
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    type: 'Job offer',
    stage: 'Offer discussion',
    date: '2026-04-08',
    time: '4:00 PM',
    duration: '30 mins',
    owner: 'Hiring manager',
    location: 'Google Meet',
    note: 'Verbal offer discussion and target start date review.'
  },
  {
    id: 'cal-7',
    applicantName: 'Alyssa Ramos',
    applicantId: 6,
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    type: 'Job offer',
    stage: 'Offer approval',
    date: '2026-04-10',
    time: '2:00 PM',
    duration: '30 mins',
    owner: 'Recruiter + CTO',
    location: 'Google Meet',
    note: 'Offer walkthrough pending final approval.'
  },
  {
    id: 'cal-8',
    applicantName: 'Paolo Mendoza',
    applicantId: 1,
    jobTitle: 'Senior Full Stack Developer',
    jobSlug: 'senior-full-stack-developer',
    type: 'Technical exam',
    stage: 'Coding exercise',
    date: '2026-04-11',
    time: '1:00 PM',
    duration: '120 mins',
    owner: 'Engineering team',
    location: 'CoderPad',
    note: 'Hands-on coding assessment focused on API and frontend work.'
  },
  {
    id: 'cal-9',
    applicantName: 'Angela Reyes',
    applicantId: 2,
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    type: 'Technical exam',
    stage: 'Finance worksheet',
    date: '2026-04-14',
    time: '2:30 PM',
    duration: '60 mins',
    owner: 'Finance operations',
    location: 'Excel take-home',
    note: 'Reconciliation and reporting accuracy exercise.'
  },
  {
    id: 'cal-10',
    applicantName: 'Mark Velasco',
    applicantId: 4,
    jobTitle: 'Accounting Personnel',
    jobSlug: 'accounting-personnel',
    type: 'Job offer',
    stage: 'Offer release',
    date: '2026-04-16',
    time: '3:30 PM',
    duration: '30 mins',
    owner: 'Finance lead',
    location: 'Phone call',
    note: 'Formal offer release after compensation confirmation.'
  },
  {
    id: 'cal-11',
    applicantName: 'Jana Cruz',
    applicantId: 5,
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    type: 'Interview',
    stage: 'Hiring manager review',
    date: '2026-04-18',
    time: '10:30 AM',
    duration: '45 mins',
    owner: 'Support manager',
    location: 'Google Meet',
    note: 'Live conversation after assessment results.'
  },
  {
    id: 'cal-12',
    applicantName: 'Tricia Santos',
    applicantId: 3,
    jobTitle: 'Customer Support Specialist',
    jobSlug: 'customer-support-specialist',
    type: 'Interview',
    stage: 'Final culture fit',
    date: '2026-04-22',
    time: '1:00 PM',
    duration: '45 mins',
    owner: 'People team',
    location: 'Zoom',
    note: 'Final stakeholder conversation before written offer.'
  }
];

export function getRecruiterJobBySlug(slug: string) {
  return recruiterJobs.find((job) => job.slug === slug);
}

export function getRecruiterApplicantsByJobSlug(slug: string) {
  return recruiterApplicants.filter((applicant) => applicant.jobSlug === slug);
}
