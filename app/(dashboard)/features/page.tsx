import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  FileSearch,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

const featureGroups = [
  {
    title: 'Recruiter workspace',
    description:
      'Create job listings, manage hiring activity, and keep recruiter workflows organized in one workspace.',
    icon: BriefcaseBusiness,
    items: [
      'Create and edit job listings with public-preview support',
      'Manage organization setup, onboarding, and recruiter account status',
      'Control publish timing separately from draft updates',
      'Track billing, subscription changes, and one-time job ads'
    ]
  },
  {
    title: 'Applicant tracking',
    description:
      'Review candidates with a clearer hiring pipeline instead of scattered spreadsheets and inbox threads.',
    icon: FileSearch,
    items: [
      'View applicants across jobs or inside each role workspace',
      'Change status, phase, interview level, and internal notes',
      'Preview uploaded CVs directly in the recruiter workflow',
      'Review audit trails and hiring activity per applicant'
    ]
  },
  {
    title: 'Decision support',
    description:
      'Give recruiters more context so they can move faster with stronger, more consistent decisions.',
    icon: Sparkles,
    items: [
      'Salary budget comparison against applicant asking salary',
      'Applicant insight summaries, risks, strengths, and next best actions',
      'Requirement coverage and match-score breakdowns',
      'Experience-versus-salary visual comparisons'
    ]
  },
  {
    title: 'Scheduling and coordination',
    description:
      'Keep hiring milestones visible so the team can stay aligned on what needs to happen next.',
    icon: CalendarDays,
    items: [
      'Calendar view for interviews, technical exams, and job offers',
      'Pipeline snapshots for shortlisted and interviewing candidates',
      'Clear next steps inside each applicant record',
      'Shared visibility for recruiter and hiring-manager coordination'
    ]
  }
];

const useCases = [
  {
    title: 'For growing teams',
    description:
      'Replace ad hoc hiring processes with a shared workflow that keeps recruiters, hiring managers, and applicants aligned.'
  },
  {
    title: 'For multi-role recruiting',
    description:
      'Manage different openings, applicant lists, interview checkpoints, and offer timing without jumping across disconnected tools.'
  },
  {
    title: 'For a better candidate experience',
    description:
      'Publish cleaner public job ads and make the application process easier to understand and complete.'
  }
];

const highlights = [
  {
    label: 'Public job ads',
    value: 'Polished employer-facing listings',
    icon: Layers3
  },
  {
    label: 'Recruiter tools',
    value: 'Structured workflow from draft to hire',
    icon: Users
  },
  {
    label: 'Decision clarity',
    value: 'Built-in insights for salary, fit, and risks',
    icon: Handshake
  },
  {
    label: 'Secure workflow',
    value: 'Recruiter-only admin views for processing applications',
    icon: ShieldCheck
  }
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_52%,#ffffff_100%)] py-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                Public features overview
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                See what Wok can do for modern hiring teams.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Wok brings public job ads, recruiter workflows, applicant
                tracking, scheduling, and decision support into one hiring
                system so teams can move faster without losing structure.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/sign-up">
                    Create Recruiter Account
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div
                    key={highlight.label}
                    className="rounded-[1.75rem] border border-blue-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {highlight.label}
                      </p>
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="mt-4 text-lg font-semibold leading-7 text-slate-950">
                      {highlight.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              Core capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              A hiring workflow that covers both public experience and recruiter operations.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featureGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_18px_35px_-22px_rgba(37,99,235,0.9)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {group.description}
                  </p>
                  <div className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
                Why teams use it
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Wok is designed to reduce hiring friction, not add more software overhead.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Prospects evaluating Wok can see how it supports daily recruiter
                work, applicant review, and public job advertising in a single
                system that stays easier to scan and operate.
              </p>
            </div>
            <div className="grid gap-4">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_44%,#f8fbff_100%)] p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
                  Explore more
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                  Want to see the hiring flow in action?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  Browse demo employer pages, sample job ads, and pricing to see
                  how Wok can look for your team before you commit.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/demo/company/harborline-consumer-group">
                    Open Demo Company
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">Compare Plans</Link>
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
