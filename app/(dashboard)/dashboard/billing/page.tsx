'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { buildCheckoutHref } from '@/components/pricing/checkout-plans';
import {
  ArrowRight,
  CircleAlert,
  CreditCard,
  FileUser,
  CalendarDays,
  Gauge,
  Layers3,
  Receipt,
  RotateCcw,
  ShieldCheck,
  X
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
    notes: 'Workspace started with a 30-day trial.',
    utilization: {
      jobs: 2,
      applicants: 11,
      schedules: 3,
      performance: 'Early traction with first inbound applicants and initial recruiter setup.'
    }
  },
  {
    date: 'Jun 01, 2024',
    event: 'Upgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Converted from trial after first three hires.',
    utilization: {
      jobs: 4,
      applicants: 27,
      schedules: 8,
      performance: 'Conversion month with more active job posts and stronger applicant flow.'
    }
  },
  {
    date: 'Jul 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Automatic renewal processed successfully.',
    utilization: {
      jobs: 4,
      applicants: 25,
      schedules: 7,
      performance: 'Steady month with repeat usage and consistent recruiter throughput.'
    }
  },
  {
    date: 'Aug 12, 2024',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Temporary role posted outside monthly seat limits.',
    utilization: {
      jobs: 1,
      applicants: 9,
      schedules: 2,
      performance: 'One-time campaign produced a focused batch of role-specific applicants.'
    }
  },
  {
    date: 'Sep 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Subscription stayed on Basic.',
    utilization: {
      jobs: 3,
      applicants: 18,
      schedules: 6,
      performance: 'Moderate usage with a tighter set of active roles.'
    }
  },
  {
    date: 'Oct 01, 2024',
    event: 'Upgraded',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Increased job slots for seasonal hiring.',
    utilization: {
      jobs: 8,
      applicants: 53,
      schedules: 14,
      performance: 'Upgrade supported a larger seasonal hiring push across multiple departments.'
    }
  },
  {
    date: 'Nov 01, 2024',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'No plan changes this cycle.',
    utilization: {
      jobs: 8,
      applicants: 49,
      schedules: 13,
      performance: 'High subscription utilization sustained after the upgrade.'
    }
  },
  {
    date: 'Dec 18, 2024',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Holiday urgent vacancy campaign.',
    utilization: {
      jobs: 1,
      applicants: 7,
      schedules: 1,
      performance: 'Short-term urgent opening generated a compact holiday applicant batch.'
    }
  },
  {
    date: 'Jan 01, 2025',
    event: 'Downgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Hiring slowed after the year-end push.',
    utilization: {
      jobs: 3,
      applicants: 17,
      schedules: 5,
      performance: 'Downgrade aligned with lower posting demand after peak season.'
    }
  },
  {
    date: 'Feb 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Auto-renewal succeeded.',
    utilization: {
      jobs: 3,
      applicants: 15,
      schedules: 4,
      performance: 'Stable month with fewer requisitions but steady applicant activity.'
    }
  },
  {
    date: 'Mar 01, 2025',
    event: 'Cancelled subscription',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 0',
    status: 'Scheduled end',
    notes: 'Recurring renewal was stopped before the next cycle.',
    utilization: {
      jobs: 2,
      applicants: 10,
      schedules: 2,
      performance: 'Cancellation followed a quieter month and reduced recruiting demand.'
    }
  },
  {
    date: 'Apr 14, 2025',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Used while subscription remained inactive.',
    utilization: {
      jobs: 1,
      applicants: 6,
      schedules: 1,
      performance: 'Used as a low-commitment option while recurring billing was paused.'
    }
  },
  {
    date: 'May 03, 2025',
    event: 'Re-subscribed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Returned to recurring billing for new hiring wave.',
    utilization: {
      jobs: 5,
      applicants: 33,
      schedules: 9,
      performance: 'Re-subscription restored recurring usage as hiring volume increased again.'
    }
  },
  {
    date: 'Jun 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Monthly renewal posted.',
    utilization: {
      jobs: 4,
      applicants: 29,
      schedules: 8,
      performance: 'Healthy month with solid recruiter follow-through on active openings.'
    }
  },
  {
    date: 'Jul 01, 2025',
    event: 'Upgraded',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Expanded recruiter team and active postings.',
    utilization: {
      jobs: 9,
      applicants: 58,
      schedules: 16,
      performance: 'Upgrade supported broader team usage and more interview activity.'
    }
  },
  {
    date: 'Aug 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Renewed on current Pro plan.',
    utilization: {
      jobs: 9,
      applicants: 55,
      schedules: 15,
      performance: 'Pro plan stayed heavily used across active roles and interview scheduling.'
    }
  },
  {
    date: 'Sep 09, 2025',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Short-term contract role published.',
    utilization: {
      jobs: 1,
      applicants: 8,
      schedules: 2,
      performance: 'One-time posting helped support a short-term contract search.'
    }
  },
  {
    date: 'Oct 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Renewal completed.',
    utilization: {
      jobs: 8,
      applicants: 47,
      schedules: 13,
      performance: 'Strong recurring usage with multiple interview rounds scheduled.'
    }
  },
  {
    date: 'Nov 01, 2025',
    event: 'Downgraded',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Reduced posting volume for Q4.',
    utilization: {
      jobs: 4,
      applicants: 22,
      schedules: 6,
      performance: 'Downgrade reflected lower quarter-end hiring volume.'
    }
  },
  {
    date: 'Dec 01, 2025',
    event: 'Renewed',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 499',
    status: 'Completed',
    notes: 'Renewed after downgrade.',
    utilization: {
      jobs: 4,
      applicants: 19,
      schedules: 5,
      performance: 'Usage remained efficient on the lighter subscription tier.'
    }
  },
  {
    date: 'Jan 01, 2026',
    event: 'Cancelled subscription',
    plan: 'Recruiter Basic',
    billingType: 'Monthly subscription',
    amount: 'PHP 0',
    status: 'Scheduled end',
    notes: 'Cancellation queued for the end of the cycle.',
    utilization: {
      jobs: 2,
      applicants: 9,
      schedules: 2,
      performance: 'Billing paused after reduced recruiter activity at the start of the year.'
    }
  },
  {
    date: 'Jan 22, 2026',
    event: 'One-time job',
    plan: 'Recruiter Post Once',
    billingType: 'One-time advertisement',
    amount: 'PHP 99',
    status: 'Completed',
    notes: 'Used during paused recurring billing.',
    utilization: {
      jobs: 1,
      applicants: 5,
      schedules: 1,
      performance: 'Kept one urgent vacancy live while recurring subscription was paused.'
    }
  },
  {
    date: 'Feb 05, 2026',
    event: 'Re-subscribed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Returned on Pro for a larger recruitment campaign.',
    utilization: {
      jobs: 10,
      applicants: 64,
      schedules: 18,
      performance: 'Re-subscription on Pro supported a new high-volume recruiting cycle.'
    }
  },
  {
    date: 'Mar 01, 2026',
    event: 'Renewed',
    plan: 'Recruiter Pro',
    billingType: 'Monthly subscription',
    amount: 'PHP 999',
    status: 'Completed',
    notes: 'Latest paid invoice settled successfully.',
    utilization: {
      jobs: 8,
      applicants: 51,
      schedules: 14,
      performance: 'Latest cycle delivered solid applicant flow and strong interview throughput.'
    }
  }
];

export default function BillingPage() {
  const [selectedRecord, setSelectedRecord] = useState<(typeof subscriptionHistory)[number] | null>(null);

  return (
    <>
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
                        <th className="px-4 py-3 font-semibold">Plan</th>
                        <th className="px-4 py-3 font-semibold">Billing Type</th>
                        <th className="px-4 py-3 font-semibold">Amount</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptionHistory.map((entry) => (
                        <tr
                          key={`${entry.date}-${entry.event}-${entry.plan}`}
                          className="cursor-pointer border-t border-blue-50 align-top transition hover:bg-blue-50/40"
                          onClick={() => setSelectedRecord(entry)}
                        >
                          <td className="px-4 py-4 text-sm font-medium text-slate-950">
                            <p>{entry.date}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                              {entry.event}
                            </p>
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

      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition ${
          selectedRecord ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSelectedRecord(null)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-2xl transition-transform duration-300 ${
          selectedRecord ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedRecord ? (
          <SubscriptionRecordPanel
            record={selectedRecord}
            onClose={() => setSelectedRecord(null)}
          />
        ) : null}
      </aside>
    </>
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

function SubscriptionRecordPanel({
  record,
  onClose
}: {
  record: (typeof subscriptionHistory)[number];
  onClose: () => void;
}) {
  return (
    <div className="p-5 lg:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Subscription detail
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            {record.plan}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {record.date} · {record.event}
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          className="rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6 grid gap-6">
        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Subscription record
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Review the full billing record and how this subscription period was
                actually used across jobs, applicants, and schedules.
              </p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              {record.status}
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <InfoCard icon={Receipt} label="Event" value={record.event} />
            <InfoCard icon={CreditCard} label="Billing type" value={record.billingType} />
            <InfoCard icon={Receipt} label="Amount" value={record.amount} />
            <InfoCard icon={Receipt} label="Plan" value={record.plan} />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Subscription utilization
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <UtilizationCard
              icon={Layers3}
              label="Jobs"
              value={String(record.utilization.jobs)}
              description="Job listings handled during this billing record"
            />
            <UtilizationCard
              icon={FileUser}
              label="Applicants"
              value={String(record.utilization.applicants)}
              description="Applicants processed while this record was active"
            />
            <UtilizationCard
              icon={CalendarDays}
              label="Schedules"
              value={String(record.utilization.schedules)}
              description="Interviews, exams, and offer events coordinated"
            />
            <UtilizationCard
              icon={Gauge}
              label="Performance"
              value={getPerformanceLabel(record.utilization.jobs, record.utilization.applicants)}
              description="Usage signal based on role and applicant activity"
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Performance summary
          </p>
          <div className="mt-4 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-sm leading-7 text-slate-600">
              {record.utilization.performance}
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Original billing note
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{record.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilizationCard({
  icon: Icon,
  label,
  value,
  description
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      </div>
      <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function getPerformanceLabel(jobs: number, applicants: number) {
  const score = jobs * 5 + applicants;

  if (score >= 90) {
    return 'High';
  }

  if (score >= 45) {
    return 'Moderate';
  }

  return 'Light';
}
