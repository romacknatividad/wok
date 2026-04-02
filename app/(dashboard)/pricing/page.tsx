import { Check } from 'lucide-react';
import Link from 'next/link';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import { Button } from '@/components/ui/button';
import { buildCheckoutHref } from '@/components/pricing/checkout-plans';

const plans = [
  {
    name: 'Recruiter Post Once',
    href: '/pricing/recruiter-post-once',
    checkoutHref: buildCheckoutHref('recruiter-post-once'),
    price: 'PHP 99',
    interval: 'one-time',
    description:
      'A one-time package for recruiters who only need to publish a single job.',
    features: [
      'Post 1 job only',
      'No monthly subscription',
      'Receive applicants for one opening',
      'Set up your company information and employer profile',
      'Upgrade later if needed'
    ],
    audience: 'Recruiters' as const,
    cta: 'Pay once and publish one job'
  },
  {
    name: 'Recruiter Trial',
    href: '/pricing/recruiter-trial',
    checkoutHref: '/sign-up?plan=recruiter-trial',
    price: 'Free',
    interval: 'for 1 month',
    description:
      'A 30-day trial for recruiters who want to post and test the workflow before subscribing.',
    features: [
      'Up to 5 active job posts',
      'Applicant inbox and review flow',
      'One recruiter account',
      'Set up your company information and profile page',
      'Upgrade to continue after 1 month'
    ],
    audience: 'Recruiters' as const,
    cta: 'Start free trial'
  },
  {
    name: 'Recruiter Basic',
    href: '/pricing/recruiter-basic',
    checkoutHref: buildCheckoutHref('recruiter-basic'),
    price: 'PHP 299',
    interval: 'month',
    description:
      'For recruiters continuing after trial with a compact monthly plan.',
    features: [
      'Up to 7 active job posts',
      'Applicant inbox and review flow',
      'One recruiter seat',
      'Set up your company information and employer branding',
      'Email support'
    ],
    audience: 'Recruiters' as const
  },
  {
    name: 'Recruiter Pro',
    href: '/pricing/recruiter-pro',
    price: 'PHP 999',
    interval: 'month',
    description:
      'For teams hiring at higher volume and managing more open roles. This plan is scheduled for next year release.',
    features: [
      'Up to 30 active job posts',
      'Shared recruiter seats',
      'Priority applicant review workflows',
      'Set up your company information and employer profile',
      'Priority support'
    ],
    audience: 'Recruiters' as const,
    availability: 'upcoming' as const,
    cta: 'Planned release next year'
  }
];

export default function PricingPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#f8fbff_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-700">
            wok pricing
          </p>
          <h1 className="mt-4 mb-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Flexible pricing for every recruiter workflow.
          </h1>
          <p className="text-lg text-slate-600">
            Choose a one-time post, start with a free trial, or move into a
            monthly recruiter plan in Philippine pesos as your hiring grows.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-blue-100 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm">
          Current live plans are Recruiter Post Once, Recruiter Trial, and
          Recruiter Basic. Recruiter Pro stays visible as an upcoming package
          planned for next year.
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-8 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              What recruiters get
            </h2>
            <p className="mt-3 text-slate-600">
              Centralized job posting, applicant intake, shared review, and a
              branded workflow your team can use every day, including your own
              company information and employer profile.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white px-8 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              Applicants use wok for free
            </h2>
            <p className="mt-3 text-slate-600">
              Applicants do not need a paid package. They can create an
              account, discover openings, and submit applications without
              subscription fees.
            </p>
          </div>
        </div>
      </section>

      <PublicFooterCta />
    </main>
  );
}

function PricingCard({
  name,
  price,
  href,
  checkoutHref,
  interval,
  description,
  features,
  audience,
  cta,
  availability
}: {
  name: string;
  price: string;
  href?: string;
  checkoutHref?: string;
  interval: string;
  description: string;
  features: string[];
  audience: 'Recruiters' | 'Applicants';
  cta?: string;
  availability?: 'live' | 'upcoming';
}) {
  const needsPayment = audience === 'Recruiters' && Boolean(checkoutHref);
  const isTrial = audience === 'Recruiters' && !needsPayment && price === 'Free';
  const isOneTime =
    audience === 'Recruiters' && needsPayment && interval === 'one-time';
  const isUpcoming = availability === 'upcoming';

  return (
    <div
      className={`rounded-[2rem] border px-6 py-8 shadow-sm ${
        isUpcoming
          ? 'border-amber-200 bg-[linear-gradient(180deg,#fffdf5_0%,#ffffff_100%)]'
          : needsPayment
            ? 'border-blue-100 bg-white'
            : isTrial
              ? 'border-blue-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]'
              : 'border-sky-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]'
      }`}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {audience}
        </p>
        {isUpcoming ? (
          <p className="mt-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
            Next year release
          </p>
        ) : null}
        <h2 className="mt-3 text-2xl font-medium text-slate-950">
          {href ? (
            <Link href={href} className="transition-colors hover:text-blue-700">
              {name}
            </Link>
          ) : (
            name
          )}
        </h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <p className="mb-6 text-4xl font-medium text-slate-950">
        {price}{' '}
        <span className="text-xl font-normal text-slate-600">
          {needsPayment && !isOneTime ? `/ ${interval}` : interval}
        </span>
      </p>

      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      {isUpcoming ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Recruiter Pro is not available for registration yet. We&apos;re
            keeping it visible so teams can plan for the expanded package when
            it launches next year.
          </p>
          <Button
            type="button"
            disabled
            className="w-full rounded-full bg-slate-200 text-slate-500 hover:bg-slate-200"
          >
            Coming Next Year
          </Button>
          {href ? (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-amber-200 bg-white text-slate-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
            >
              <Link href={href}>See plan preview</Link>
            </Button>
          ) : null}
        </div>
      ) : needsPayment ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            {isOneTime
              ? `${cta}. You will be redirected to a checkout page after creating your recruiter account.`
              : 'Choose this plan and continue to checkout after account registration.'}
          </p>
          {checkoutHref ? (
            <Button
              asChild
              className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href={checkoutHref}>Register Now</Link>
            </Button>
          ) : null}
          {href ? (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href={href}>See plan details</Link>
            </Button>
          ) : null}
        </div>
      ) : isTrial ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            {cta
              ? `${cta} by creating a recruiter account. You can upgrade to Basic after 30 days.`
              : 'Start with a recruiter account and upgrade after 30 days.'}
          </p>
          {checkoutHref ? (
            <Button
              asChild
              className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href={checkoutHref}>Register Now</Link>
            </Button>
          ) : null}
          {href ? (
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href={href}>See plan details</Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
