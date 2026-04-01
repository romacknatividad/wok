export type CheckoutPlan = {
  slug: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  checkoutType: 'order' | 'subscription';
  planId?: string;
  amount?: string;
};

export const checkoutPlans: Record<string, CheckoutPlan> = {
  'recruiter-post-once': {
    slug: 'recruiter-post-once',
    name: 'Recruiter Post Once',
    price: 'PHP 99',
    interval: 'one-time',
    description:
      'Pay once to publish a single job post without starting a recurring subscription.',
    checkoutType: 'order',
    amount: '99.00'
  },
  'recruiter-basic': {
    slug: 'recruiter-basic',
    name: 'Recruiter Basic',
    price: 'PHP 299',
    interval: '/ month',
    description:
      'A monthly recruiter subscription for smaller hiring teams managing up to 5 active jobs.',
    checkoutType: 'subscription',
    planId: process.env.NEXT_PUBLIC_PAYPAL_STARTER_PLAN_ID
  },
  'recruiter-pro': {
    slug: 'recruiter-pro',
    name: 'Recruiter Pro',
    price: 'PHP 999',
    interval: '/ month',
    description:
      'A monthly recruiter subscription for higher-volume hiring with up to 30 active jobs.',
    checkoutType: 'subscription',
    planId: process.env.NEXT_PUBLIC_PAYPAL_GROWTH_PLAN_ID
  }
};

export function buildCheckoutHref(slug: keyof typeof checkoutPlans) {
  return `/checkout?plan=${slug}`;
}
