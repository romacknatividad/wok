'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { buildCheckoutHref } from '@/components/pricing/checkout-plans';
import {
  ArrowRight,
  CircleAlert,
  CreditCard,
  Receipt,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';

const subscription = {
  plan: 'Recruiter Pro',
  status: 'Active',
  billingCycle: 'Monthly recurring',
  renewalDate: 'Apr 30, 2026',
  activeJobs: '8 of 12 used'
};

const billingInfo = {
  organization: 'Harborline Consumer Group',
  billingEmail: 'billing@harborline.example.com',
  paymentMethod: 'PayPal',
  invoiceAddress: 'Makati City, Philippines'
};

const billingActions = [
  {
    title: 'Upgrade subscription',
    description:
      'Move to a recurring monthly recruiter plan with more hiring capacity.',
    href: buildCheckoutHref('recruiter-pro'),
    cta: 'Upgrade to Pro'
  },
  {
    title: 'Downgrade subscription',
    description:
      'Switch to a lower monthly plan if you need fewer active roles and a lighter billing commitment.',
    href: buildCheckoutHref('recruiter-basic'),
    cta: 'Switch to Basic'
  },
  {
    title: 'One-time job advertisement',
    description:
      'Purchase a single post without moving the whole workspace to a monthly subscription.',
    href: buildCheckoutHref('recruiter-post-once'),
    cta: 'Buy one-time post'
  }
];

const subscriptionHistory = [
  {
    date: 'May 02, 2024',
    event: 'Subscribed',
    plan: 'Recruiter Trial',
    billingType: 'Trial',
    amount: 'PHP 0',
    status: 'Completed',
    notes: 'Workspace started with a 30-day trial.'
  },
  {
    date: 'Jun 01, 2024',
    event: 'Upgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Converted from trial after first three hires.'
  },
  {
    date: 'Jul 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Automatic renewal processed successfully.'
  },
  {
    date: 'Aug 12, 2024',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Temporary role posted outside monthly seat limits.'
  },
  {
    date: 'Sep 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Subscription stayed on Basic.'
  },
  {
    date: 'Oct 01, 2024',
    event: 'Upgraded',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Increased job slots for seasonal hiring.'
  },
  {
    date: 'Nov 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'No plan changes this cycle.'
  },
  {
    date: 'Dec 18, 2024',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Holiday urgent vacancy campaign.'
  },
  {
    date: 'Jan 01, 2025',
    event: 'Downgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Hiring slowed after the year-end push.'
  },
  {
    date: 'Feb 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Auto-renewal succeeded.'
  },
  {
    date: 'Mar 01, 2025',
    event: 'Cancelled subscription',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 0',
    status: 'Scheduled end',
    notes: 'Recurring renewal was stopped before the next cycle.'
  },
  {
    date: 'Apr 14, 2025',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Used while subscription remained inactive.'
  },
  {
    date: 'May 03, 2025',
    event: 'Re-subscribed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Returned to recurring billing for new hiring wave.'
  },
  {
    date: 'Jun 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Monthly renewal posted.'
  },
  {
    date: 'Jul 01, 2025',
    event: 'Upgraded',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Expanded recruiter team and active postings.'
  },
  {
    date: 'Aug 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Renewed on current Pro plan.'
  },
  {
    date: 'Sep 09, 2025',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Short-term contract role published.'
  },
  {
    date: 'Oct 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Renewal completed.'
  },
  {
    date: 'Nov 01, 2025',
    event: 'Downgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Reduced posting volume for Q4.'
  },
  {
    date: 'Dec 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Renewed after downgrade.'
  },
  {
    date: 'Jan 01, 2026',
    event: 'Cancelled subscription',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 0',
    status: 'Scheduled end',
    notes: 'Cancellation queued for the end of the cycle.'
  },
  {
    date: 'Jan 22, 2026',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Used during paused recurring billing.'
  },
  {
    date: 'Feb 05, 2026',
    event: 'Re-subscribed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Returned on Pro for a larger recruitment campaign.'
  },
  {
    date: 'Mar 01, 2026',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Latest paid invoice settled successfully.'
  }
];

export default function BillingPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <CreditCard className="h-4 w-4" />
                Billing module
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Manage recruiter billing and subscription changes
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Review your current plan, update billing details, purchase a
                one-time job advertisement, or change your subscription when
                your hiring volume changes.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={buildCheckoutHref('recruiter-pro')}>
                    Upgrade subscription
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">Compare plans</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <SummaryCard label="Current plan" value={subscription.plan} />
              <SummaryCard label="Status" value={subscription.status} />
              <SummaryCard label="Billing cycle" value={subscription.billingCycle} />
              <SummaryCard label="Renewal date" value={subscription.renewalDate} />
            </div>
          </div>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Subscription Overview"
              description="See your recruiter plan and the workspace usage attached to it."
            >
              <div className="grid gap-4">
                <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                        Current subscription
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-950">
                        {subscription.plan}
                      </p>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {subscription.status} · {subscription.billingCycle} ·{' '}
                    {subscription.activeJobs}
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    Included right now
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-slate-600">
                    <p>Up to 12 active job posts on the current plan</p>
                    <p>Applicant review and recruiter workflow tools</p>
                    <p>One recruiter workspace with organization setup</p>
                  </div>
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Billing Information"
              description="The current billing details connected to this recruiter account."
            >
              <div className="grid gap-4">
                <InfoCard icon={Receipt} label="Organization" value={billingInfo.organization} />
                <InfoCard icon={CreditCard} label="Payment method" value={billingInfo.paymentMethod} />
                <InfoCard icon={Receipt} label="Billing email" value={billingInfo.billingEmail} />
                <InfoCard icon={Receipt} label="Invoice address" value={billingInfo.invoiceAddress} />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Update Billing Details
                </Button>
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Plan Changes"
            description="Upgrade, downgrade, or use a one-time advertisement package based on current hiring needs."
          >
            <div className="grid gap-3 md:grid-cols-3">
              {billingActions.map((action) => (
                <div
                  key={action.title}
                  className="rounded-2xl border border-blue-100 bg-white p-4"
                >
                  <p className="text-base font-semibold text-slate-950">
                    {action.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {action.description}
                  </p>
                  <Button
                    asChild
                    className="mt-4 w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href={action.href}>{action.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </DashboardSection>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Subscription History"
            description="A two-year billing ledger of renewals, upgrades, downgrades, cancellations, re-subscriptions, and one-time job advertisements."
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Event</th>
                      <th className="px-4 py-3 font-semibold">Plan</th>
                      <th className="px-4 py-3 font-semibold">Billing Type</th>
                      <th className="px-4 py-3 font-semibold">Amount</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionHistory.map((entry) => (
                      <tr
                        key={`${entry.date}-${entry.event}-${entry.plan}`}
                        className="border-t border-blue-50 align-top"
                      >
                        <td className="px-4 py-4 text-sm font-medium text-slate-950">
                          {entry.date}
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            {entry.event}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{entry.plan}</td>
                        <td className="px-4 py-4 text-sm text-slate-600">
                          {entry.billingType}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-slate-950">
                          {entry.amount}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {entry.status}
                        </td>
                        <td className="px-4 py-4 text-sm leading-6 text-slate-600">
                          {entry.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </DashboardSection>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="One-Time Job Advertisement"
              description="Use a one-time payment if you only need to publish a single role."
            >
              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                  Recruiter Post Once
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  PHP 99 one-time
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Publish one job advertisement without committing the whole
                  recruiter workspace to a recurring subscription.
                </p>
                <Button
                  asChild
                  className="mt-5 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={buildCheckoutHref('recruiter-post-once')}>
                    Continue to one-time payment
                  </Link>
                </Button>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="border-rose-200 bg-[linear-gradient(135deg,#fff1f2_0%,#ffffff_70%,#fff7ed_100%)] shadow-sm">
            <DashboardSection
              title="Cancel Subscription"
              description="Cancel recurring billing if the recruiter workspace should not renew."
            >
              <div className="rounded-2xl border border-rose-200 bg-white/90 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-rose-100 p-2 text-rose-700">
                    <CircleAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">
                      Stop future subscription renewals
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Cancellation will stop the next billing cycle. The
                      workspace can continue until the current plan period ends.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-rose-200 bg-white text-rose-700 hover:bg-rose-50"
                  >
                    Cancel Subscription
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href={buildCheckoutHref('recruiter-basic')}>
                      <RotateCcw className="h-4 w-4" />
                      Downgrade Instead
                    </Link>
                  </Button>
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}
