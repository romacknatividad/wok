import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCheck,
  Clock3,
  FileSearch,
  Handshake,
  SearchCheck,
  Users
} from 'lucide-react';

const servicePillars = [
  {
    title: 'We run the hiring legwork',
    description:
      'Wok Head Hunter acts as your outsourced recruiting arm for sourcing, screening, shortlisting, and candidate coordination.',
    icon: SearchCheck
  },
  {
    title: 'Built for companies without HR',
    description:
      'Ideal for founders, small teams, and operators who need hiring help but do not yet have a dedicated internal HR team.',
    icon: Building2
  },
  {
    title: 'A more hands-on service',
    description:
      'Instead of only giving you software, we help do the work of finding the right people and moving the process forward.',
    icon: Handshake
  }
];

const workflowSteps = [
  {
    title: 'Tell us the role',
    detail:
      'Share the position, the business context, the type of person you need, and any must-have requirements.'
  },
  {
    title: 'We source and screen',
    detail:
      'Our team looks for qualified candidates, reviews profiles, filters for fit, and handles initial outreach and screening.'
  },
  {
    title: 'You meet only strong matches',
    detail:
      'We present shortlisted candidates with recruiter notes so your team can focus on interviews and final decisions.'
  },
  {
    title: 'We help keep momentum',
    detail:
      'From scheduling to follow-up, we help prevent the delays that often happen when hiring is added on top of everyone’s regular work.'
  }
];

const idealFor = [
  'Startups hiring their first few employees without an HR lead yet.',
  'Small businesses that need help filling operations, sales, admin, or technical roles.',
  'Founders and business owners who cannot spend hours screening applicants themselves.',
  'Teams that want recruitment support before committing to a full in-house HR hire.'
];

const differentiators = [
  {
    title: 'Service-first approach',
    description:
      'Wok Head Hunter is for companies that need recruiting execution, not just a platform login.'
  },
  {
    title: 'Practical shortlists',
    description:
      'You receive candidates who have already gone through early screening and context gathering.'
  },
  {
    title: 'Less founder bottleneck',
    description:
      'We reduce the time business owners spend on sourcing, CV review, and initial applicant management.'
  },
  {
    title: 'Flexible support',
    description:
      'Use the service when hiring demand appears, especially during periods when building an internal HR team is still too early.'
  }
];

export function HeadHunterPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_52%,#ffffff_100%)] py-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                Wok Head Hunter
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Outsourced headhunting for companies that do not have HR yet.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Wok Head Hunter is a service under the Wok brand for businesses
                that need to hire but do not have an internal HR or talent team.
                We help source candidates, screen profiles, coordinate early
                hiring steps, and bring stronger shortlists to your team.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/sign-up">
                    Talk to Wok
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/product">Explore Wok Platform</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      What it is
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      A recruitment service for lean teams
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  If your business needs to hire but nobody internally has the
                  time or hiring expertise to manage the process properly, Wok
                  Head Hunter steps in to help carry the work.
                </p>
              </div>
              <MetricCard
                icon={Users}
                label="Best for"
                value="Companies without HR"
              />
              <MetricCard
                icon={FileSearch}
                label="Support"
                value="Sourcing to shortlist"
              />
              <MetricCard
                icon={Clock3}
                label="Outcome"
                value="Faster, less messy hiring"
              />
              <MetricCard
                icon={CheckCheck}
                label="Focus"
                value="Only stronger candidate matches"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              Service pillars
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Recruitment support for teams that need help doing the actual hiring work.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {servicePillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_18px_35px_-22px_rgba(37,99,235,0.9)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                A simple outsourced recruitment flow for busy companies.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We help remove the chaos from hiring by taking care of the
                earliest and heaviest parts of recruitment, then handing you a
                cleaner shortlist and clearer next steps.
              </p>
            </div>
            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.75rem] border border-blue-100 bg-white px-5 py-5 shadow-sm"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-700">
                      {index + 1}
                    </div>
                    {index !== workflowSteps.length - 1 ? (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-blue-100 to-transparent" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_44%,#f8fbff_100%)] p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
                Best fit
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Who Wok Head Hunter is for
              </h2>
              <div className="mt-6 grid gap-3">
                {idealFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-blue-100 bg-white/90 px-4 py-4 text-sm leading-7 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {item.description}
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
                  Start the conversation
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                  Need hiring help before you build an HR team?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  Wok Head Hunter gives your business a more hands-on recruiting
                  option under the Wok brand, so hiring can move forward even if
                  you do not yet have an internal HR function.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/sign-up">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/features">View Wok Features</Link>
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

function MetricCard({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-blue-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <Icon className="h-4 w-4 text-blue-600" />
      </div>
      <p className="mt-4 text-lg font-semibold leading-7 text-slate-950">
        {value}
      </p>
    </div>
  );
}
