import { Check } from 'lucide-react';
import { PayPalSubscribeButton } from './paypal-subscribe-button';

const plans = [
  {
    name: 'Recruiter Trial',
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
  },
  {
    name: 'Applicant',
    price: 'Free',
    interval: 'forever',
    description: 'Create a profile, discover opportunities, and apply with ease.',
    features: [
      'Applicant account and profile',
      'Apply to jobs across wok',
      'Track your submissions',
      'No payment required'
    ],
    audience: 'Applicants' as const
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
            Recruiters subscribe. Applicants apply for free.
          </h1>
          <p className="text-lg text-slate-600">
            Recruiters start with a free 1-month trial for up to 5 jobs, then
            move to simple monthly pricing in Philippine pesos. Applicants can
            create accounts and submit applications at no cost.
          </p>
        </div>
        <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-blue-100 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm">
          Configure your PayPal client ID and recruiter plan IDs in `.env` to
          enable live subscriptions on the paid recruiter plans below.
        </div>
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] px-8 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">What recruiters get</h2>
            <p className="mt-3 text-slate-600">
              Centralized job posting, applicant intake, shared review, and a
              branded workflow your team can use every day.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white px-8 py-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">
              What applicants get
            </h2>
            <p className="mt-3 text-slate-600">
              A cleaner way to discover openings, register once, and send
              applications without unnecessary hoops.
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
  interval: string;
  planId?: string;
  paypalClientId?: string;
  description: string;
  features: string[];
  audience: 'Recruiters' | 'Applicants';
  cta?: string;
}) {
  const isPaid = audience === 'Recruiters' && Boolean(planId);
  const isTrial = audience === 'Recruiters' && !planId;

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
        <h2 className="mt-3 text-2xl font-medium text-slate-950">{name}</h2>
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
      ) : isTrial ? (
        <p className="text-sm text-slate-600">
          {cta
            ? `${cta} by creating a recruiter account. You can upgrade to Basic after 30 days.`
            : 'Start with a recruiter account and upgrade after 30 days.'}
        </p>
      ) : (
        <p className="text-sm text-slate-600">
          Applicants can sign up and apply without entering payment details.
        </p>
      )}
    </div>
  );
}
