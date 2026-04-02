import { buildCheckoutHref } from './checkout-plans';
import type { RecruiterPlanPageData } from './recruiter-plan-page';

export const recruiterPlanPages: Record<string, RecruiterPlanPageData> = {
  'recruiter-post-once': {
    eyebrow: 'Recruiter plan',
    name: 'Recruiter Post Once',
    price: 'PHP 99',
    interval: 'one-time',
    description:
      'A simple one-time option for recruiters who only need to publish a single job without starting a subscription.',
    summary:
      'This package is designed for small businesses or occasional recruiters who want a lightweight entry point. Pay once, publish one job, and receive applicants without committing to a monthly plan.',
    highlights: [
      'One job post only',
      'No subscription required',
      'Low-cost one-time payment'
    ],
    features: [
      'Publish one job advertisement on wok',
      'Receive applications for that single role',
      'Set up your own company information and employer profile',
      'Use the same recruiter-facing job structure as the main plans',
      'Upgrade later if you need more active jobs'
    ],
    bestFor: [
      'Small businesses with a one-off hiring need',
      'Recruiters testing the platform without a subscription',
      'Occasional hiring for a single position'
    ],
    notes: [
      'This package covers one job post only',
      'It does not renew monthly',
      'Upgrade to Basic if you need recurring job capacity'
    ],
    ctaLabel: 'Register Now',
    ctaHref: buildCheckoutHref('recruiter-post-once')
  },
  'recruiter-trial': {
    eyebrow: 'Recruiter plan',
    name: 'Recruiter Trial',
    price: 'Free',
    interval: 'for 1 month',
    description:
      'Start posting jobs without commitment and see how wok fits your hiring workflow.',
    summary:
      'The recruiter trial gives new teams a simple way to test the platform, publish openings, and review real applicants before moving to a paid monthly plan.',
    highlights: [
      'Up to 5 active job posts',
      '30-day access for one recruiter',
      'Applicant inbox and review workflow'
    ],
    features: [
      'Create and publish up to 5 live job ads',
      'Receive applications and review candidates in one place',
      'Set up your own company information and employer profile',
      'Use recruiter tools without entering payment details',
      'Upgrade to Basic after the trial period'
    ],
    bestFor: [
      'First-time recruiters testing the platform',
      'Small teams hiring for a few roles',
      'Businesses validating their hiring process before subscribing'
    ],
    notes: [
      'The trial lasts for 1 month only',
      'Access is limited to one recruiter account',
      'Upgrade is required to continue posting after the trial'
    ],
    ctaLabel: 'Register Now',
    ctaHref: '/sign-up?plan=recruiter-trial'
  },
  'recruiter-basic': {
    eyebrow: 'Recruiter plan',
    name: 'Recruiter Basic',
    price: 'PHP 299',
    interval: '/ month',
    description:
      'A compact paid plan for recruiters managing a steady flow of openings and applicants.',
    summary:
      'Recruiter Basic is designed for solo recruiters or lean hiring teams that need a professional workflow, active job listings, and a reliable applicant review process at a low monthly cost.',
    highlights: [
      'Up to 7 active job posts',
      'One recruiter seat',
      'Simple monthly pricing in PHP'
    ],
    features: [
      'Keep up to 7 jobs active at the same time',
      'Review applicants and organize hiring priorities',
      'Set up your own company information and employer branding',
      'Maintain a clean recruiter workflow for everyday hiring',
      'Use PayPal subscription billing for monthly access'
    ],
    bestFor: [
      'Solo recruiters',
      'Startups hiring for a limited number of openings',
      'Companies moving from trial to a paid workflow'
    ],
    notes: [
      'Best suited for one active recruiter seat',
      'Designed for smaller monthly hiring volume',
      'Recruiter Pro is scheduled as a future higher-capacity release'
    ],
    ctaLabel: 'Register Now',
    ctaHref: buildCheckoutHref('recruiter-basic')
  },
  'recruiter-pro': {
    eyebrow: 'Recruiter plan',
    name: 'Recruiter Pro',
    price: 'PHP 999',
    interval: '/ month',
    description:
      'A higher-capacity plan preview for recruiter teams handling more roles, more applicants, and more coordination.',
    summary:
      'Recruiter Pro is being positioned as a future higher-capacity package for teams that need a broader hiring workspace with more active jobs, shared recruiter access, and heavier coordination across departments.',
    highlights: [
      'Up to 30 active job posts',
      'Shared recruiter seats',
      'Built for higher-volume hiring'
    ],
    features: [
      'Manage up to 30 active job listings',
      'Support shared recruiter collaboration',
      'Set up your own company information and employer profile',
      'Handle larger applicant volume across multiple departments',
      'Use priority workflow support for active hiring operations'
    ],
    bestFor: [
      'Growing companies hiring across several teams',
      'Recruiter groups managing multiple openings at once',
      'Businesses that need more capacity than Basic'
    ],
    notes: [
      'This plan is not open for registration yet',
      'Planned for next year release',
      'Current available plans are Post Once, Trial, and Basic'
    ],
    ctaLabel: 'Coming Next Year',
    ctaHref: '/pricing',
    availability: 'upcoming',
    availabilityNote: 'Planned release: next year'
  }
};
