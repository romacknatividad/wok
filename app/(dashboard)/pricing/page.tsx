import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$8',
    interval: 'seat / month',
    description: 'A lightweight plan for small teams getting started.',
    features: [
      'Unlimited usage',
      'Unlimited workspace members',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$12',
    interval: 'seat / month',
    description: 'For teams that want extra support and early feature access.',
    features: [
      'Everything in Starter',
      'Early access to new features',
      'Priority support'
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Simple pricing for growing teams
        </h1>
        <p className="text-lg text-gray-600">
          This starter now ships with a static pricing overview you can adapt
          to your own billing workflow.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  description,
  features,
}: {
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        {price}{' '}
        <span className="text-xl font-normal text-gray-600">
          per {interval}
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
      <p className="text-sm text-gray-500">Contact sales to enable billing.</p>
    </div>
  );
}
