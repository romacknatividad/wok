import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { checkoutPlans } from '@/components/pricing/checkout-plans';
import { PayPalCheckoutCard } from '@/components/pricing/paypal-checkout-card';
import Link from 'next/link';

export default async function CheckoutPage({
  searchParams
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planSlug } = await searchParams;

  if (!planSlug) {
    redirect('/pricing');
  }

  const plan = checkoutPlans[planSlug];

  if (!plan) {
    notFound();
  }

  const { userId } = await auth();

  if (!userId) {
    redirect(`/sign-up?redirect=${encodeURIComponent(`/checkout?plan=${planSlug}`)}`);
  }

  const user = await currentUser();
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  return (
    <main className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#f8fbff_100%)]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              Recruiter checkout
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Complete checkout for {plan.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {plan.description}
            </p>
            <div className="mt-8 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight text-slate-950">
                {plan.price}
              </p>
              <p className="pb-1 text-lg text-slate-500">{plan.interval}</p>
            </div>
            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-sm font-medium text-slate-500">Account</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {user?.fullName || user?.primaryEmailAddress?.emailAddress || 'Recruiter account'}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                This checkout is prepared after account registration so paid
                plans can be linked to a recruiter identity first.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/pricing">Back to pricing</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/dashboard">Go to dashboard</Link>
              </Button>
            </div>
          </DashboardPanel>

          <DashboardPanel className="p-6 shadow-sm lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              Pay with PayPal
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Use the PayPal checkout below to activate this recruiter package.
              Available recruiter plans start a recurring subscription after
              checkout is approved.
            </p>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
              <PayPalCheckoutCard clientId={paypalClientId} plan={plan} />
            </div>
          </DashboardPanel>
        </div>
      </section>
    </main>
  );
}
