import { Calculator, Code2, HeartPulse } from 'lucide-react';
import { JobDetailIcons, type JobDetailPageData } from './job-detail-page';

export const demoCompanyProfile = {
  slug: 'harborline-consumer-group',
  name: 'Harborline Consumer Group',
  tagline: 'A growing Philippine organization hiring across product, finance, and people operations.',
  location: 'Makati and hybrid teams across the Philippines',
  companySize: '180 to 300 employees',
  industry: 'Consumer services, internal software, and shared operations',
  overview: [
    'Harborline Consumer Group is a modern operations-led company building better internal systems and customer experiences across multiple business units. The team hires across technology, finance, and employee support functions to keep growth sustainable and execution sharp.',
    'This demo company profile shows how recruiters can present a clear employer story, highlight culture, and list active openings in one polished page on wok.'
  ],
  highlights: [
    'Hybrid-friendly teams with structured collaboration',
    'Clear hiring process and professional applicant experience',
    'Roles open across engineering, finance, and employee wellness'
  ]
};

export const demoCompanyJobList = [
  {
    slug: 'senior-full-stack-developer',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote, Philippines',
    employment: 'Full-time',
    salary: 'PHP 120,000 - PHP 180,000 / month',
    summary:
      'Build core digital products and internal systems used across Harborline teams and customers.'
  },
  {
    slug: 'accounting-personnel',
    title: 'Accounting Personnel',
    department: 'Finance',
    location: 'On-site or hybrid, Philippines',
    employment: 'Full-time',
    salary: 'PHP 28,000 - PHP 40,000 / month',
    summary:
      'Support reconciliations, reporting, billing, and everyday finance operations with precision.'
  },
  {
    slug: 'company-nurse',
    title: 'Company Nurse',
    department: 'People Operations',
    location: 'On-site, Makati',
    employment: 'Full-time',
    salary: 'PHP 30,000 - PHP 45,000 / month',
    summary:
      'Support employee wellness, clinic coordination, and workplace health programs for a growing team.'
  }
] as const;

export const jobDetailsBySlug: Record<string, JobDetailPageData> = {
  'senior-full-stack-developer': {
    badge: 'Sample job ad on wok',
    title: 'Senior Full Stack Developer',
    summary:
      'Build products people actually use every day. Join a team that values ownership, strong engineering judgment, and product work that ships with real impact.',
    meta: [
      { icon: JobDetailIcons.location, label: 'Remote, Philippines' },
      { icon: JobDetailIcons.employment, label: 'Full-time' },
      { icon: Code2, label: '4+ years experience' },
      { icon: JobDetailIcons.salary, label: 'PHP 120,000 - PHP 180,000 / month' }
    ],
    company: demoCompanyProfile.name,
    sidebar: [
      { icon: JobDetailIcons.location, label: 'Location', value: 'Remote, Philippines' },
      { icon: JobDetailIcons.employment, label: 'Employment', value: 'Full-time' },
      {
        icon: JobDetailIcons.salary,
        label: 'Salary',
        value: 'PHP 120,000 to PHP 180,000 / month'
      },
      { icon: Code2, label: 'Stack', value: 'React, TypeScript, APIs, SQL' },
      { icon: JobDetailIcons.team, label: 'Team', value: 'Product, Design, Engineering' },
      {
        icon: JobDetailIcons.reporting,
        label: 'Reports to',
        value: 'Engineering Lead'
      }
    ],
    sections: [
      {
        eyebrow: 'About the role',
        title: 'This is a role for builders, not passengers.',
        paragraphs: [
          'We are looking for a Senior Full Stack Developer who can own meaningful parts of the product and help us scale with confidence. You will work across frontend and backend systems, collaborate directly with decision-makers, and turn rough ideas into features customers rely on.',
          'If you enjoy shipping polished work, improving foundations, and working in a team where engineering has a real voice in product direction, this role will feel like home.'
        ]
      },
      {
        eyebrow: 'About the company',
        title: 'Harborline Consumer Group builds systems that support real business operations.',
        paragraphs: [
          'Harborline Consumer Group invests in product and internal systems that make operations smoother for both customers and teams. Engineering is expected to work closely with the business, solve real workflow problems, and ship software that improves day-to-day execution.',
          'This role reports into the engineering team and works closely with product, operations, and design. You will have room to shape technical decisions while staying connected to the practical outcomes your work creates.'
        ]
      },
      {
        eyebrow: 'Responsibilities',
        title: 'What you will do',
        items: [
          'Build and maintain modern web applications across frontend and backend services.',
          'Translate product requirements into production-ready features with strong attention to usability.',
          'Work closely with design, product, and leadership to shape fast, thoughtful releases.',
          'Improve performance, reliability, and code quality across the application stack.',
          'Review pull requests, mentor teammates, and raise engineering standards as the team grows.',
          'Investigate bugs, fix bottlenecks, and improve the stability of customer-facing workflows.'
        ]
      },
      {
        eyebrow: 'Requirements',
        title: 'What we need from you',
        items: [
          '4+ years of professional software development experience.',
          'Strong working knowledge of JavaScript or TypeScript.',
          'Solid React experience and confidence building modern frontend interfaces.',
          'Experience building backend APIs and working with databases in production.',
          'Ability to work independently while communicating clearly with a remote team.',
          'A product mindset: you care about outcomes, not just shipping code.'
        ]
      },
      {
        eyebrow: 'Preferred qualifications',
        title: 'What will help you stand out',
        items: [
          'Experience with Next.js, Node.js, PostgreSQL, or modern SaaS products.',
          'Familiarity with CI/CD pipelines, cloud deployments, and observability tools.',
          'Experience collaborating with designers and product managers in a fast-moving team.',
          'Comfortable reviewing code and helping shape engineering standards.'
        ]
      },
      {
        eyebrow: 'Benefits',
        title: 'What you get',
        items: [
          'Competitive monthly salary with real product ownership.',
          'Remote-first team and flexible day-to-day working style.',
          'Paid time off and support for professional development.',
          'A direct hand in shaping the roadmap, architecture, and engineering culture.'
        ]
      },
      {
        eyebrow: 'Application process',
        title: 'What to expect after you apply',
        items: [
          'Submit your updated resume and links to any portfolio, GitHub profile, or shipped work.',
          'Qualified applicants will be invited to a short screening call.',
          'Final candidates will complete a technical discussion focused on real product work.'
        ]
      }
    ],
    asides: [
      {
        eyebrow: 'First 90 days',
        title: 'What success looks like',
        items: [
          'You understand the product, release cycle, and core technical architecture.',
          'You have shipped production improvements that customers can feel.',
          'You contribute to technical planning, code quality, and engineering discussions.',
          'The team trusts you with ownership, judgment, and follow-through.'
        ]
      },
      {
        eyebrow: 'How to apply',
        title: 'Send more than just a resume',
        body:
          'We want to see your updated resume, a GitHub or portfolio link, and a short note about a project you are proud of.',
        items: [
          'Updated resume',
          'Portfolio or GitHub profile',
          'Short candidate intro',
          'Links to relevant shipped work'
        ]
      }
    ]
  },
  'accounting-personnel': {
    badge: 'Sample job ad on wok',
    title: 'Accounting Personnel',
    summary:
      'Join a finance team that values accuracy, consistency, and proactive support. This is a strong opportunity for someone who wants to grow inside a company where accounting is treated as a business-critical function.',
    meta: [
      { icon: JobDetailIcons.location, label: 'On-site or hybrid, Philippines' },
      { icon: JobDetailIcons.employment, label: 'Full-time' },
      { icon: Calculator, label: '2+ years experience' },
      { icon: JobDetailIcons.salary, label: 'PHP 28,000 - PHP 40,000 / month' }
    ],
    company: demoCompanyProfile.name,
    sidebar: [
      {
        icon: JobDetailIcons.location,
        label: 'Location',
        value: 'On-site or hybrid, Philippines'
      },
      { icon: JobDetailIcons.employment, label: 'Employment', value: 'Full-time' },
      {
        icon: JobDetailIcons.salary,
        label: 'Salary',
        value: 'PHP 28,000 to PHP 40,000 / month'
      },
      {
        icon: Calculator,
        label: 'Focus',
        value: 'Bookkeeping, reporting, reconciliations'
      },
      { icon: JobDetailIcons.team, label: 'Team', value: 'Finance, Operations, Leadership' },
      {
        icon: JobDetailIcons.reporting,
        label: 'Reports to',
        value: 'Finance Manager'
      }
    ],
    sections: [
      {
        eyebrow: 'About the role',
        title: 'We need someone precise, dependable, and organized.',
        paragraphs: [
          'We are hiring an Accounting Personnel to support our day-to-day financial operations and help keep the business running with clean, trustworthy records. This role is ideal for someone who takes ownership of details, communicates clearly, and understands that strong finance operations create stability for the whole company.',
          'You will work closely with operations and leadership, handle core accounting processes, and help maintain the accuracy and discipline that good businesses rely on.'
        ]
      },
      {
        eyebrow: 'About the company',
        title: 'Harborline Consumer Group values dependable finance operations.',
        paragraphs: [
          'The company supports everyday business operations across multiple teams and needs accounting support that is accurate, timely, and well-organized. Finance is treated as an essential part of decision-making, not just back-office administration.',
          'This role works closely with operations and leadership and is a good fit for someone who wants steady responsibility, clear expectations, and room to grow into broader finance work over time.'
        ]
      },
      {
        eyebrow: 'Responsibilities',
        title: 'What you will do',
        items: [
          'Prepare and maintain accurate daily accounting records, journals, and reconciliations.',
          'Process payables, receivables, billing schedules, and expense documentation on time.',
          'Support monthly closing activities and help produce reliable financial reports.',
          'Coordinate with operations and leadership to track budgets, collections, and cash flow.',
          'Review supporting documents to ensure transactions are complete, compliant, and audit-ready.',
          'Help improve internal controls and organize accounting workflows as the company grows.'
        ]
      },
      {
        eyebrow: 'Requirements',
        title: 'What we need from you',
        items: [
          "Bachelor's degree in Accountancy, Accounting Technology, or a related field.",
          'At least 2 years of accounting, bookkeeping, or finance operations experience.',
          'Strong attention to detail and confidence working with spreadsheets and reconciliations.',
          'Working knowledge of accounting principles, financial controls, and reporting processes.',
          'Comfortable using cloud tools, accounting systems, and fast-moving internal workflows.',
          'Clear communication skills and a reliable, organized way of working.'
        ]
      },
      {
        eyebrow: 'Preferred qualifications',
        title: 'What will help you stand out',
        items: [
          'Experience using accounting software such as QuickBooks, Xero, or similar tools.',
          'Background supporting month-end close, billing, or accounts payable and receivable.',
          'Experience working in a growing SME, startup, or multi-department business environment.',
          'Confidence organizing records for audit, compliance, or management reporting.'
        ]
      },
      {
        eyebrow: 'Benefits',
        title: 'What you get',
        items: [
          'Stable role with room to grow into broader finance responsibilities.',
          'Supportive team environment and structured onboarding.',
          'Competitive pay, paid time off, and a remote-friendly work culture.',
          'Direct collaboration with decision-makers and visibility into business operations.'
        ]
      },
      {
        eyebrow: 'Application process',
        title: 'What to expect after you apply',
        items: [
          'Submit your updated resume and a short summary of your accounting experience.',
          'Qualified applicants will be invited to an initial screening interview.',
          'Final candidates may be asked to discuss prior finance workflows or reporting responsibilities.'
        ]
      }
    ],
    asides: [
      {
        eyebrow: 'First 90 days',
        title: 'What success looks like',
        items: [
          "You understand the company's transaction flow, reporting rhythm, and internal approvals.",
          'Daily records, reconciliations, and finance support tasks are handled consistently and on time.',
          'Leadership trusts your numbers, documentation, and ability to spot discrepancies early.',
          'You contribute to a more organized and reliable accounting workflow.'
        ]
      },
      {
        eyebrow: 'How to apply',
        title: 'Show us that you can be trusted with the details',
        body:
          'Send your updated resume and a short note about your accounting experience. If you have worked with billing, reconciliations, month-end closing, or finance operations, tell us where you made a process more reliable.',
        items: [
          'Updated resume',
          'Short candidate intro',
          'Relevant accounting software or tooling experience',
          'Examples of finance or reporting responsibilities handled'
        ]
      }
    ]
  },
  'company-nurse': {
    badge: 'Sample job ad on wok',
    title: 'Company Nurse',
    summary:
      'Support employee health, workplace wellness, and day-to-day clinic coordination in a company that treats people operations as a real business priority.',
    meta: [
      { icon: JobDetailIcons.location, label: 'On-site, Makati' },
      { icon: JobDetailIcons.employment, label: 'Full-time' },
      { icon: HeartPulse, label: '1 to 3 years experience' },
      { icon: JobDetailIcons.salary, label: 'PHP 30,000 - PHP 45,000 / month' }
    ],
    company: demoCompanyProfile.name,
    sidebar: [
      { icon: JobDetailIcons.location, label: 'Location', value: 'On-site, Makati' },
      { icon: JobDetailIcons.employment, label: 'Employment', value: 'Full-time' },
      {
        icon: JobDetailIcons.salary,
        label: 'Salary',
        value: 'PHP 30,000 to PHP 45,000 / month'
      },
      {
        icon: HeartPulse,
        label: 'Focus',
        value: 'Employee wellness, first aid, health coordination'
      },
      {
        icon: JobDetailIcons.team,
        label: 'Team',
        value: 'People Operations, Admin, Leadership'
      },
      {
        icon: JobDetailIcons.reporting,
        label: 'Reports to',
        value: 'HR and Administration Manager'
      }
    ],
    sections: [
      {
        eyebrow: 'About the role',
        title: 'This role helps employees feel supported, safe, and well cared for.',
        paragraphs: [
          'We are hiring a Company Nurse to support workplace health programs, provide basic clinical assistance, and help employees navigate health-related concerns with professionalism and empathy. This role is a strong fit for someone who is organized, calm under pressure, and comfortable balancing people care with accurate documentation.',
          'You will work closely with HR and administration to keep the clinic function dependable, maintain health records, support compliance, and contribute to a healthier day-to-day workplace experience.'
        ]
      },
      {
        eyebrow: 'About the company',
        title: 'Harborline Consumer Group treats employee wellness as part of operational excellence.',
        paragraphs: [
          'The company is growing across several teams and values a workplace where people feel supported, informed, and safe. The clinic and wellness function plays an important role in helping employees stay productive while meeting workplace health requirements.',
          'This role works across people operations and administration and is ideal for someone who wants to combine clinical knowledge with practical workplace support.'
        ]
      },
      {
        eyebrow: 'Responsibilities',
        title: 'What you will do',
        items: [
          'Provide first aid, basic nursing support, and initial health assessment for employee concerns.',
          'Monitor employee medical records, health clearances, and documentation with proper confidentiality.',
          'Coordinate annual physical exams, vaccination drives, and workplace wellness activities.',
          'Support incident documentation and partner with HR and admin on health-related compliance requirements.',
          'Manage clinic supplies, medicine inventory, and vendor coordination for healthcare needs.',
          'Offer guidance to employees on routine health concerns, referrals, and follow-up actions when needed.'
        ]
      },
      {
        eyebrow: 'Requirements',
        title: 'What we need from you',
        items: [
          'Bachelor of Science in Nursing and active PRC nursing license.',
          'At least 1 to 3 years of nursing experience in a clinic, occupational health, or workplace setting.',
          'Strong organizational skills and confidence handling records with discretion.',
          'Good communication skills and a calm, professional presence when assisting employees.',
          'Working knowledge of workplace health protocols, basic compliance, and emergency response.',
          'Comfortable collaborating with HR, administration, and external healthcare providers.'
        ]
      },
      {
        eyebrow: 'Preferred qualifications',
        title: 'What will help you stand out',
        items: [
          'Experience as a company nurse or occupational health nurse.',
          'Training in basic life support, workplace safety, or employee wellness programs.',
          'Confidence coordinating with clinics, laboratories, and health maintenance vendors.',
          'A practical mindset for improving simple health and admin workflows.'
        ]
      },
      {
        eyebrow: 'Benefits',
        title: 'What you get',
        items: [
          'Stable full-time role in a professional workplace environment.',
          'Supportive collaboration with HR, admin, and operations leadership.',
          'Paid time off, statutory benefits, and structured onboarding.',
          'Opportunity to shape employee wellness programs as the company grows.'
        ]
      },
      {
        eyebrow: 'Application process',
        title: 'What to expect after you apply',
        items: [
          'Submit your updated resume and PRC license details through wok.',
          'Qualified candidates will be invited to an HR screening and role discussion.',
          'Final candidates may be asked about clinic workflows, documentation habits, and employee care scenarios.'
        ]
      }
    ],
    asides: [
      {
        eyebrow: 'First 90 days',
        title: 'What success looks like',
        items: [
          'You understand the company clinic rhythm, employee support needs, and documentation standards.',
          'Health records, supply monitoring, and routine support tasks are handled consistently and on time.',
          'Employees and managers trust you to respond professionally and follow through on health-related concerns.',
          'You help strengthen a calmer, more organized workplace wellness process.'
        ]
      },
      {
        eyebrow: 'How to apply',
        title: 'Show your clinical readiness and people-first mindset',
        body:
          'Send your updated resume, license details, and a short note about your experience in employee health, clinic support, or workplace nursing.',
        items: [
          'Updated resume',
          'PRC license details',
          'Short candidate intro',
          'Relevant clinic or occupational health experience'
        ]
      }
    ]
  }
};
