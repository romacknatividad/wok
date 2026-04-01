import { Calculator, Code2 } from 'lucide-react';
import { JobDetailIcons, type JobDetailPageData } from './job-detail-page';

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
    company: 'Northstar Product Studio',
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
        title: 'Northstar Product Studio builds software with a clear business purpose.',
        paragraphs: [
          'We work on products used by paying customers and growing teams. The company values practical engineering, clear communication, and steady execution over unnecessary complexity.',
          'This role reports into the engineering team and works closely with product and design. You will have space to influence technical decisions while still staying close to the work that reaches customers.'
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
    company: 'Harborline Consumer Group',
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
  }
};
