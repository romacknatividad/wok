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
  'Northstar Retail',
  'HarborWorks',
  'SummitCare',
  'BluePeak Logistics',
  'BrightLedger',
  'Pacific People Group'
];

const testimonials = [
  {
    quote:
      'wok gave our hiring team one place to manage openings and applicants, so we stopped losing momentum between sourcing, screening, and follow-up.',
    name: 'Angela Reyes',
    role: 'HR Manager',
    company: 'Northstar Retail'
  },
  {
    quote:
      'We filled roles faster because our recruiters could finally work from a shared pipeline instead of scattered messages and spreadsheets.',
    name: 'Miguel Santos',
    role: 'Talent Acquisition Lead',
    company: 'BluePeak Logistics'
  },
  {
    quote:
      'The candidate experience feels much more professional now. Applicants know where to apply, and our team has better visibility from day one.',
    name: 'Camille Dela Cruz',
    role: 'Operations Director',
    company: 'SummitCare'
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
                key={company}
                className="flex min-h-16 items-center justify-center rounded-2xl border border-blue-100 bg-white px-4 py-4 text-center text-sm font-semibold tracking-[0.08em] text-slate-500 shadow-sm"
              >
                {company}
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
                <p className="text-base leading-8 text-slate-600">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 border-t border-blue-100 pt-5">
                  <p className="font-semibold text-slate-950">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_48%,#f8fbff_100%)] px-8 py-10 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                  Demo job ads
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  Want to see what a polished job listing on wok looks like?
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  Explore two sample job advertisements and get a feel for the
                  kind of detailed, high-conviction listings recruiters can
                  publish on the platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/demo/job/senior-full-stack-developer">
                    View Developer Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/demo/job/accounting-personnel">
                    View Accounting Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooterCta />
    </main>
  );
}
