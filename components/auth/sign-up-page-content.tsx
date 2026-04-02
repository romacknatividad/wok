import Image from 'next/image';
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { checkoutPlans } from '@/components/pricing/checkout-plans';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  Sparkles
} from 'lucide-react';

const signupHighlights = [
  {
    title: 'Organize every applicant',
    description:
      'Keep CV review, status changes, notes, and decision context in one recruiter workflow.',
    icon: FileSearch
  },
  {
    title: 'Track hiring schedules',
    description:
      'Manage interviews, technical exams, and offer dates from a shared calendar view.',
    icon: CalendarDays
  },
  {
    title: 'Make better decisions',
    description:
      'Use salary fit, applicant insights, and requirement coverage to move faster with more confidence.',
    icon: Sparkles
  }
];

const signupPlanOptions = {
  ...checkoutPlans,
  'recruiter-trial': {
    slug: 'recruiter-trial',
    name: 'Recruiter Trial',
    price: 'Free',
    interval: 'for 1 month',
    description:
      'Start with a 30-day recruiter trial to publish jobs and review applicants before moving to a paid plan.'
  }
};

export async function SignUpPageContent({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string; plan?: string }>;
}) {
  const { redirect, plan } = await searchParams;
  const forceRedirectUrl =
    redirect && redirect.startsWith('/') ? redirect : '/dashboard';
  const selectedPlan = getSelectedPlan(plan, redirect);
  const selectedPlanSummary = selectedPlan
    ? `${selectedPlan.price} ${
        selectedPlan.interval === 'one-time'
          ? selectedPlan.interval
          : selectedPlan.interval
      }`
    : 'Start free and choose your plan when you are ready';

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_42%,#ffffff_100%)]">
      <section className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-blue-100 bg-[linear-gradient(145deg,#0f172a_0%,#1d4ed8_46%,#eff6ff_100%)] p-8 text-white shadow-[0_28px_70px_-42px_rgba(15,23,42,0.6)]">
              <div className="absolute -right-12 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.22),_transparent_68%)]" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.22),_transparent_70%)]" />

              <div className="relative">
                <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium tracking-[0.08em] text-blue-50 backdrop-blur">
                  Recruiter sign up
                </p>
                <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white">
                  Build a cleaner hiring workflow your team will actually use.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-blue-50/90">
                  Create your recruiter account to publish jobs, review applicants,
                  coordinate schedules, and make stronger hiring decisions from
                  one shared workspace.
                </p>

                <div className="mt-6 rounded-[1.75rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                      Selected package
                    </p>
                    <span className="inline-flex rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                      {selectedPlan?.name ?? 'No package selected'}
                    </span>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-2xl font-semibold text-white">
                        {selectedPlan?.name ?? 'Recruiter account setup'}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-blue-50/85">
                        {selectedPlan?.description ??
                          'Create your recruiter account first, then continue into the package or workflow that fits your hiring needs.'}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/12 px-4 py-3 text-right">
                      <p className="text-xs uppercase tracking-[0.16em] text-blue-100">
                        Package
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {selectedPlanSummary}
                      </p>
                    </div>
                  </div>
                  {selectedPlan ? (
                    <div className="mt-4 flex items-center gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="h-4 w-4 text-blue-100" />
                      Your sign-up will continue into the selected recruiter package flow.
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 grid gap-4">
                  {signupHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[1.5rem] border border-white/12 bg-white/10 px-5 py-4 backdrop-blur"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-7 text-blue-50/85">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 grid grid-cols-[1.15fr_0.85fr] gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/10 p-2 backdrop-blur">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900"
                      alt="Recruitment team collaborating in an office meeting"
                      width={900}
                      height={700}
                      className="h-64 w-full rounded-[1.25rem] object-cover"
                      priority
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 p-2 backdrop-blur">
                      <Image
                        src="https://images.pexels.com/photos/7872641/pexels-photo-7872641.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2"
                        alt="Professional recruiter smiling"
                        width={500}
                        height={600}
                        className="h-[122px] w-full rounded-[1rem] object-cover"
                      />
                    </div>
                    <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                        Why teams switch
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        Less spreadsheet chasing, more hiring momentum.
                      </p>
                      <Link
                        href="/features"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-50 transition hover:text-white"
                      >
                        Explore features
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-blue-100 bg-white/90 p-4 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.3)] backdrop-blur sm:p-6">
              <SignUp
                routing="path"
                path="/sign-up"
                forceRedirectUrl={forceRedirectUrl}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function getSelectedPlan(plan: string | undefined, redirect: string | undefined) {
  const directPlan = plan && signupPlanOptions[plan as keyof typeof signupPlanOptions];

  if (directPlan) {
    return directPlan;
  }

  if (redirect && redirect.startsWith('/')) {
    const [, queryString] = redirect.split('?');
    const params = new URLSearchParams(queryString ?? '');
    const redirectPlan = params.get('plan');

    if (
      redirectPlan &&
      signupPlanOptions[redirectPlan as keyof typeof signupPlanOptions]
    ) {
      return signupPlanOptions[redirectPlan as keyof typeof signupPlanOptions];
    }
  }

  return null;
}
