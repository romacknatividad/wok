import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import {
  ArrowRight,
  BriefcaseBusiness,
  FileSearch,
  ShieldCheck
} from 'lucide-react';

const companyLogos = [
  {
    name: 'Northstar Retail',
    mark: 'NR',
    markClassName: 'bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)] text-white',
    dotClassName: 'bg-blue-200'
  },
  {
    name: 'HarborWorks',
    mark: 'HW',
    markClassName: 'bg-[linear-gradient(135deg,#0f766e_0%,#14b8a6_100%)] text-white',
    dotClassName: 'bg-teal-200'
  },
  {
    name: 'SummitCare',
    mark: 'SC',
    markClassName: 'bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_100%)] text-white',
    dotClassName: 'bg-violet-200'
  },
  {
    name: 'BluePeak Logistics',
    mark: 'BP',
    markClassName: 'bg-[linear-gradient(135deg,#0284c7_0%,#38bdf8_100%)] text-white',
    dotClassName: 'bg-sky-200'
  },
  {
    name: 'BrightLedger',
    mark: 'BL',
    markClassName: 'bg-[linear-gradient(135deg,#ea580c_0%,#f59e0b_100%)] text-white',
    dotClassName: 'bg-amber-200'
  },
  {
    name: 'Pacific People Group',
    mark: 'PG',
    markClassName: 'bg-[linear-gradient(135deg,#334155_0%,#64748b_100%)] text-white',
    dotClassName: 'bg-slate-200'
  }
];

const testimonials = [
  {
    image: '/testimonial-angela-reyes.svg',
    quote:
      'wok gave our hiring team one place to manage openings and applicants, so we stopped losing momentum between sourcing, screening, and follow-up.',
    name: 'Angela Reyes',
    role: 'HR Manager',
    company: 'Northstar Retail'
  },
  {
    image: '/testimonial-miguel-santos.svg',
    quote:
      'We filled roles faster because our recruiters could finally work from a shared pipeline instead of scattered messages and spreadsheets.',
    name: 'Miguel Santos',
    role: 'Talent Acquisition Lead',
    company: 'BluePeak Logistics'
  },
  {
    image: '/testimonial-camille-dela-cruz.svg',
    quote:
      'The candidate experience feels much more professional now. Applicants know where to apply, and our team has better visibility from day one.',
    name: 'Camille Dela Cruz',
    role: 'Operations Director',
    company: 'SummitCare'
  }
];

const demoResources = [
  {
    href: '/demo/company/harborline-consumer-group',
    eyebrow: 'Company profile',
    title: 'Harborline Consumer Group',
    description:
      'Browse the employer page, company story, and the openings connected to one team.',
    featured: true
  },
  {
    href: '/demo/job/senior-full-stack-developer',
    eyebrow: 'Tech role',
    title: 'Senior Full-Stack Developer',
    description:
      'See a detailed engineering listing with responsibilities, stack expectations, and role context.'
  },
  {
    href: '/demo/job/accounting-personnel',
    eyebrow: 'Finance role',
    title: 'Accounting Personnel',
    description:
      'Preview a clear back-office job ad with practical requirements and day-to-day scope.'
  },
  {
    href: '/demo/job/company-nurse',
    eyebrow: 'Healthcare role',
    title: 'Company Nurse',
    description:
      'Open a frontline hiring example designed for operational teams and applicant clarity.'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#ffffff_100%)] py-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_58%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                wok for modern hiring teams
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Help your organization hire faster, stay organized, and attract stronger applicants.
              </h1>
              <p className="mt-5 text-base text-slate-600 sm:text-xl lg:text-lg xl:text-xl">
                wok gives your team one professional hiring workspace to post
                jobs, manage applicants, and keep recruitment moving without
                scattered messages, delayed follow-ups, or messy handoffs.
                Candidates get a smoother application experience, which helps
                your organization make a stronger first impression.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-lg text-white hover:bg-blue-700"
                >
                  <Link href="/sign-up">
                    Create Recruiter Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-lg text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Faster hiring decisions
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Organized team workflow
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Better applicant experience
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="w-full overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.35)]">
                <Image
                  src="/recruiter-office-hero.svg"
                  alt="Recruiter meeting applicants in a bright office with a positive, welcoming atmosphere"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_18px_35px_-22px_rgba(37,99,235,0.9)]">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Recruiter Workspace
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Create an account, publish roles, organize openings, and keep
                  every active job in one clear hiring workspace.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-[0_18px_35px_-22px_rgba(14,165,233,0.9)]">
                <FileSearch className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Application Pipeline
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Review applicants faster with a shared pipeline for incoming
                  applications, candidate screening, and shortlist decisions.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-[0_18px_35px_-22px_rgba(30,64,175,0.9)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Applicant-Friendly Flow
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Give candidates a straightforward way to discover jobs, create
                  an account, and send applications confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-slate-50/70 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Teams using wok
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold tracking-[0.14em] shadow-sm ${company.markClassName}`}
                >
                  {company.mark}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-left text-sm font-semibold tracking-[0.04em] text-slate-700">
                    {company.name}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${company.dotClassName}`} />
                    <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Hiring team
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                Built for both sides of hiring
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-slate-600">
                Recruiters pay for the workflow. Applicants use wok to discover
                openings and apply. That keeps the business model simple without
                making the candidate experience feel heavy.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 grid gap-4">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">For recruiters</h3>
                <p className="mt-2 text-slate-600">
                  Post roles, review applicants, and manage hiring activity
                  across your team.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">For applicants</h3>
                <p className="mt-2 text-slate-600">
                  Create an account once, send applications quickly, and stay
                  focused on the right opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Recruiting teams use wok to bring more structure and confidence to hiring.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              When hiring is organized, recruiters respond faster, managers stay
              aligned, and applicants get a more professional experience from
              the first touchpoint.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.company}`}
                className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="overflow-hidden rounded-full border border-blue-100 bg-blue-50 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} portrait`}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-base leading-8 text-slate-600">
                  "{testimonial.quote}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_44%,#f8fbff_100%)] px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_68%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                  Demo company and job ads
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Explore the kind of polished hiring experience teams can publish on wok.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Start with a demo employer profile, then jump into role pages
                  that show how job ads can stay informative, credible, and
                  easy to scan for applicants.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-semibold text-slate-950">1</p>
                    <p className="mt-1 text-sm text-slate-600">Demo company page</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-semibold text-slate-950">3</p>
                    <p className="mt-1 text-sm text-slate-600">Sample job listings</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-semibold text-slate-950">100%</p>
                    <p className="mt-1 text-sm text-slate-600">Public-facing preview</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href="/demo/company/harborline-consumer-group">
                      Open Demo Company
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {demoResources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className={`group rounded-[1.75rem] border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                      resource.featured
                        ? 'border-blue-200 bg-blue-600 text-white sm:col-span-2'
                        : 'border-blue-100 bg-white/90 text-slate-950'
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        resource.featured ? 'text-blue-100' : 'text-blue-700'
                      }`}
                    >
                      {resource.eyebrow}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <p
                          className={`mt-2 text-sm leading-6 ${
                            resource.featured ? 'text-blue-50' : 'text-slate-600'
                          }`}
                        >
                          {resource.description}
                        </p>
                      </div>
                      <span
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-0.5 ${
                          resource.featured
                            ? 'bg-white/15 text-white'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooterCta />
    </main>
  );
}
