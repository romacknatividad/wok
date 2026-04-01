import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PayPalSubscribeButton } from './paypal-subscribe-button';

const plans = [
  {
    name: 'Recruiter Post Once',
    href: '/pricing/recruiter-post-once',
    price: 'PHP 99',
    interval: 'one-time',
    description:
      'A one-time package for recruiters who only need to publish a single job.',
    features: [
      'Post 1 job only',
      'No monthly subscription',
      'Receive applicants for one opening',
      'Upgrade later if needed'
    ],
    audience: 'Recruiters' as const,
    cta: 'Pay once and publish one job'
  },
  {
    name: 'Recruiter Trial',
    href: '/pricing/recruiter-trial',
    price: 'Free',
    interval: 'for 1 month',
    description:
      'A 30-day trial for recruiters who want to post and test the workflow before subscribing.',
    features: [
      'Up to 5 active job posts',
      'Applicant inbox and review flow',
      'One recruiter account',
      'Upgrade to continue after 1 month'
    ],
    audience: 'Recruiters' as const,
    cta: 'Start free trial'
  },
  {
    name: 'Recruiter Basic',
    href: '/pricing/recruiter-basic',
    price: 'PHP 299',
    interval: 'month',
    planId: process.env.NEXT_PUBLIC_PAYPAL_STARTER_PLAN_ID,
    description:
      'For recruiters continuing after trial with a compact monthly plan.',
    features: [
      'Up to 5 active job posts',
      'Applicant inbox and review flow',
      'One recruiter seat',
      'Email support'
    ],
    audience: 'Recruiters' as const
  },
  {
    name: 'Recruiter Pro',
    href: '/pricing/recruiter-pro',
    price: 'PHP 999',
    interval: 'month',
    planId: process.env.NEXT_PUBLIC_PAYPAL_GROWTH_PLAN_ID,
    description:
      'For teams hiring at higher volume and managing more open roles.',
    features: [
      'Up to 30 active job posts',
      'Shared recruiter seats',
      'Priority applicant review workflows',
      'Priority support'
    ],
    audience: 'Recruiters' as const
  }
];

export default function PricingPage() {
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  return (
    <main className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#f8fbff_100%)]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-700">
            wok pricing
          </p>
          <h1 className="mt-4 mb-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Flexible pricing for every recruiter workflow.
          </h1>
          <p className="text-lg text-slate-600">
            Choose a one-time post, start with a free trial, or move into
            monthly recruiter plans in Philippine pesos as your hiring grows.
          </p>
        </div>
        <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-blue-100 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm">
          Configure your PayPal client ID and recruiter plan IDs in `.env` to
          enable live subscriptions on the monthly recruiter plans below.
        </div>
        <div className="grid gap-6 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              paypalClientId={paypalClientId}
              {...plan}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-8 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What recruiters get</h2>
            <p className="mt-3 text-slate-600">
              Centralized job posting, applicant intake, shared review, and a
              branded workflow your team can use every day.
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
    </main>
  );
}

function PricingCard({
  name,
  price,
  href,
  interval,
  planId,
  paypalClientId,
  description,
  features,
  audience,
  cta
}: {
  name: string;
  price: string;
  href?: string;
  interval: string;
  planId?: string;
  paypalClientId?: string;
  description: string;
  features: string[];
  audience: 'Recruiters' | 'Applicants';
  cta?: string;
}) {
  const isPaid = audience === 'Recruiters' && Boolean(planId);
  const isTrial = audience === 'Recruiters' && !planId && price === 'Free';
  const isOneTime = audience === 'Recruiters' && !planId && !isTrial;

  return (
    <div
      className={`rounded-[2rem] border px-6 py-8 shadow-sm ${
        isPaid
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
          {isPaid ? `/ ${interval}` : interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      {isPaid ? (
        <PayPalSubscribeButton
          clientId={paypalClientId}
          planId={planId}
          planName={name}
        />
      ) : isOneTime ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            {cta
              ? `${cta}. This package is intended for one opening without a monthly subscription.`
              : 'Use this package when you only need to post one job.'}
          </p>
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
