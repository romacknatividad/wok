import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  Clock3,
  FileSpreadsheet,
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
  'Bachelor’s degree in Accountancy, Accounting Technology, or a related field.',
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

export default function AccountingPersonnelDemoPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fefce8_0%,#ffffff_42%,#f5f5f4_100%)]">
      <section className="relative overflow-hidden border-b border-amber-100">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.20),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.14),_transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-700 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Sample job ad on wok
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                Accounting Personnel
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
                Join a finance team that values accuracy, consistency, and
                proactive support. This is a strong opportunity for someone who
                wants to grow inside a company where accounting is treated as a
                business-critical function.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-700">
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  On-site or hybrid, Philippines
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  Full-time
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  2+ years experience
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  PHP 28,000 - PHP 40,000 / month
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/sign-up">
                    Apply Through wok
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href="/pricing">See recruiter plans</Link>
                </Button>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Hiring company</p>
                  <p className="text-lg font-semibold text-stone-900">
                    Harborline Consumer Group
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow icon={MapPin} label="Location" value="On-site or hybrid, Philippines" />
                <InfoRow icon={Clock3} label="Employment" value="Full-time" />
                <InfoRow icon={PhilippinePeso} label="Salary" value="PHP 28,000 to PHP 40,000 / month" />
                <InfoRow icon={Calculator} label="Focus" value="Bookkeeping, reporting, reconciliations" />
                <InfoRow icon={Users} label="Team" value="Finance, Operations, Leadership" />
              </div>

              <div className="mt-8 rounded-3xl bg-stone-950 p-5 text-stone-100">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-300">
                  Why this ad works
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  It sounds credible, specific, and stable. Candidates in
                  accounting often respond best to clarity, structure, and a
                  strong signal that the company values dependable finance work.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              About the role
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-950">
              We need someone precise, dependable, and organized.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              We are hiring an Accounting Personnel to support our day-to-day
              financial operations and help keep the business running with clean,
              trustworthy records. This role is ideal for someone who takes
              ownership of details, communicates clearly, and understands that
              strong finance operations create stability for the whole company.
            </p>
            <p className="mt-5 text-base leading-8 text-stone-600">
              You will work closely with operations and leadership, handle core
              accounting processes, and help maintain the accuracy and discipline
              that good businesses rely on.
            </p>
          </div>

          <div className="rounded-[2rem] border border-amber-200 bg-amber-50/70 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              What success looks like
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-950">
              The first 90 days
            </h2>
            <ul className="mt-6 space-y-4 text-stone-700">
              <li className="rounded-2xl bg-white px-5 py-4">
                You understand the company’s transaction flow, reporting rhythm, and internal approvals.
              </li>
              <li className="rounded-2xl bg-white px-5 py-4">
                Daily records, reconciliations, and finance support tasks are handled consistently and on time.
              </li>
              <li className="rounded-2xl bg-white px-5 py-4">
                Leadership trusts your numbers, documentation, and ability to spot discrepancies early.
              </li>
              <li className="rounded-2xl bg-white px-5 py-4">
                You contribute to a more organized and reliable accounting workflow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <ContentCard
            eyebrow="Responsibilities"
            title="What you will do"
            items={responsibilities}
          />
          <ContentCard
            eyebrow="Requirements"
            title="What we need from you"
            items={requirements}
          />
          <ContentCard eyebrow="Benefits" title="What you get" items={perks} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[2rem] bg-stone-950 px-8 py-10 text-stone-100">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-300">
                How to apply
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Show us that you can be trusted with the details.
              </h2>
              <p className="mt-4 max-w-2xl text-stone-300 leading-8">
                Send your updated resume and a short note about your accounting
                experience. If you have worked with billing, reconciliations,
                month-end closing, or finance operations, tell us where you made
                a process more reliable.
              </p>
            </div>
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
              <p className="text-sm text-stone-400">Application checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-stone-200">
                <li>Updated resume</li>
                <li>Short candidate intro</li>
                <li>Relevant accounting software or tooling experience</li>
                <li>Examples of finance or reporting responsibilities handled</li>
              </ul>
              <Button asChild size="lg" className="mt-6 w-full rounded-full bg-amber-500 hover:bg-amber-600">
                <Link href="/sign-up">Create applicant account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
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
      <div className="mt-0.5 rounded-xl bg-stone-100 p-2 text-stone-700">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-sm text-stone-500">{label}</p>
        <p className="font-medium text-stone-900">{value}</p>
      </div>
    </div>
  );
}

function ContentCard({
  eyebrow,
  title,
  items
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-stone-950">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-stone-700 leading-7">
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
