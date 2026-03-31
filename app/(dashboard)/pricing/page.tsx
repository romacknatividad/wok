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
    <main className="bg-gradient-to-b from-stone-50 via-white to-amber-50/60">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-600">
            wok pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900 mb-4 sm:text-5xl">
            Recruiters subscribe. Applicants apply for free.
          </h1>
          <p className="text-lg text-gray-600">
            Recruiters start with a free 1-month trial for up to 5 jobs, then
            move to simple monthly pricing in Philippine pesos. Applicants can
            create accounts and submit applications at no cost.
          </p>
        </div>
        <div className="rounded-3xl border border-orange-100 bg-orange-50 px-6 py-5 max-w-4xl mx-auto mb-10 text-sm text-orange-900">
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
          <div className="rounded-3xl bg-stone-950 px-8 py-8 text-stone-100">
            <h2 className="text-2xl font-semibold">What recruiters get</h2>
            <p className="mt-3 text-stone-300">
              Centralized job posting, applicant intake, shared review, and a
              branded workflow your team can use every day.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white px-8 py-8">
            <h2 className="text-2xl font-semibold text-stone-900">
              What applicants get
            </h2>
            <p className="mt-3 text-stone-600">
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
          ? 'border-stone-200 bg-white'
          : isTrial
          ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white'
          : 'border-orange-200 bg-gradient-to-b from-orange-50 to-white'
      }`}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
          {audience}
        </p>
        <h2 className="mt-3 text-2xl font-medium text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        {price}{' '}
        <span className="text-xl font-normal text-gray-600">
          {isPaid ? `/ ${interval}` : interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
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
        <p className="text-sm text-gray-600">
          {cta
            ? `${cta} by creating a recruiter account. You can upgrade to Basic after 30 days.`
            : 'Start with a recruiter account and upgrade after 30 days.'}
        </p>
      ) : (
        <p className="text-sm text-gray-600">
          Applicants can sign up and apply without entering payment details.
        </p>
      )}
    </div>
  );
}
