import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  Clock3,
  MapPin,
  PhilippinePeso,
  Sparkles,
  Users
} from 'lucide-react';

const responsibilities = [
  'Prepare and maintain accurate daily accounting records, journals, and reconciliations.',
  'Process payables, receivables, billing schedules, and expense documentation on time.',
  'Support monthly closing activities and help produce reliable financial reports.',
  'Coordinate with operations and leadership to track budgets, collections, and cash flow.',
  'Review supporting documents to ensure transactions are complete, compliant, and audit-ready.',
  'Help improve internal controls and organize accounting workflows as the company grows.'
];

const requirements = [
  "Bachelor's degree in Accountancy, Accounting Technology, or a related field.",
  'At least 2 years of accounting, bookkeeping, or finance operations experience.',
  'Strong attention to detail and confidence working with spreadsheets and reconciliations.',
  'Working knowledge of accounting principles, financial controls, and reporting processes.',
  'Comfortable using cloud tools, accounting systems, and fast-moving internal workflows.',
  'Clear communication skills and a reliable, organized way of working.'
];

const perks = [
  'Stable role with room to grow into broader finance responsibilities.',
  'Supportive team environment and structured onboarding.',
  'Competitive pay, paid time off, and a remote-friendly work culture.',
  'Direct collaboration with decision-makers and visibility into business operations.'
];

const successPoints = [
  "You understand the company's transaction flow, reporting rhythm, and internal approvals.",
  'Daily records, reconciliations, and finance support tasks are handled consistently and on time.',
  'Leadership trusts your numbers, documentation, and ability to spot discrepancies early.',
  'You contribute to a more organized and reliable accounting workflow.'
];

export default function AccountingPersonnelDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Sample job ad on wok
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Accounting Personnel
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Join a finance team that values accuracy, consistency, and
              proactive support. This is a strong opportunity for someone who
              wants to grow inside a company where accounting is treated as a
              business-critical function.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
            <MetaPill icon={MapPin} label="On-site or hybrid, Philippines" />
            <MetaPill icon={Clock3} label="Full-time" />
            <MetaPill icon={Calculator} label="2+ years experience" />
            <MetaPill
              icon={PhilippinePeso}
              label="PHP 28,000 - PHP 40,000 / month"
            />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href="/sign-up">
                Apply Through wok
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href="/pricing">See recruiter plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-12">
            <EditorialSection
              eyebrow="About the role"
              title="We need someone precise, dependable, and organized."
            >
              <p className="text-base leading-8 text-slate-600">
                We are hiring an Accounting Personnel to support our day-to-day
                financial operations and help keep the business running with
                clean, trustworthy records. This role is ideal for someone who
                takes ownership of details, communicates clearly, and
                understands that strong finance operations create stability for
                the whole company.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                You will work closely with operations and leadership, handle
                core accounting processes, and help maintain the accuracy and
                discipline that good businesses rely on.
              </p>
            </EditorialSection>

            <EditorialSection
              eyebrow="Responsibilities"
              title="What you will do"
            >
              <BulletList items={responsibilities} />
            </EditorialSection>

            <EditorialSection
              eyebrow="Requirements"
              title="What we need from you"
            >
              <BulletList items={requirements} />
            </EditorialSection>

            <EditorialSection
              eyebrow="Benefits"
              title="What you get"
            >
              <BulletList items={perks} />
            </EditorialSection>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hiring company</p>
                  <p className="text-lg font-semibold text-slate-950">
                    Harborline Consumer Group
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={MapPin}
                  label="Location"
                  value="On-site or hybrid, Philippines"
                />
                <InfoRow icon={Clock3} label="Employment" value="Full-time" />
                <InfoRow
                  icon={PhilippinePeso}
                  label="Salary"
                  value="PHP 28,000 to PHP 40,000 / month"
                />
                <InfoRow
                  icon={Calculator}
                  label="Focus"
                  value="Bookkeeping, reporting, reconciliations"
                />
                <InfoRow
                  icon={Users}
                  label="Team"
                  value="Finance, Operations, Leadership"
                />
              </div>
            </div>

            <SimpleAside
              eyebrow="First 90 days"
              title="What success looks like"
              items={successPoints}
            />

            <SimpleAside
              eyebrow="How to apply"
              title="Show us that you can be trusted with the details"
              body="Send your updated resume and a short note about your accounting experience. If you have worked with billing, reconciliations, month-end closing, or finance operations, tell us where you made a process more reliable."
              items={[
                'Updated resume',
                'Short candidate intro',
                'Relevant accounting software or tooling experience',
                'Examples of finance or reporting responsibilities handled'
              ]}
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

function MetaPill({
  icon: Icon,
  label
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2">
      <Icon className="h-4 w-4 text-blue-600" />
      <span>{label}</span>
    </div>
  );
}

function EditorialSection({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-100 pb-12 last:border-b-0 last:pb-0">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-base leading-8 text-slate-600">
          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SimpleAside({
  eyebrow,
  title,
  body,
  items
}: {
  eyebrow: string;
  title: string;
  body?: string;
  items: string[];
}) {
  return (
    <section className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-950">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p> : null}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-xl bg-blue-50 p-2 text-blue-700">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-medium text-slate-950">{value}</p>
      </div>
    </div>
  );
}
