import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Code2,
  MapPin,
  PhilippinePeso,
  Sparkles,
  Users
} from 'lucide-react';

const responsibilities = [
  'Build and maintain modern web applications across frontend and backend services.',
  'Translate product requirements into production-ready features with strong attention to usability.',
  'Work closely with design, product, and leadership to shape fast, thoughtful releases.',
  'Improve performance, reliability, and code quality across the application stack.',
  'Review pull requests, mentor teammates, and raise engineering standards as the team grows.',
  'Investigate bugs, fix bottlenecks, and improve the stability of customer-facing workflows.'
];

const requirements = [
  '4+ years of professional software development experience.',
  'Strong working knowledge of JavaScript or TypeScript.',
  'Solid React experience and confidence building modern frontend interfaces.',
  'Experience building backend APIs and working with databases in production.',
  'Ability to work independently while communicating clearly with a remote team.',
  'A product mindset: you care about outcomes, not just shipping code.'
];

const perks = [
  'Competitive monthly salary with real product ownership.',
  'Remote-first team and flexible day-to-day working style.',
  'Paid time off and support for professional development.',
  'A direct hand in shaping the roadmap, architecture, and engineering culture.'
];

export default function SampleJobPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_42%,#f5f5f4_100%)]">
      <section className="relative overflow-hidden border-b border-orange-100">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.20),_transparent_50%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-orange-700 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Sample job ad on wok
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                Senior Full Stack Developer
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
                Build products people actually use every day. Join a team that
                values ownership, strong engineering judgment, and product work
                that ships with real impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-700">
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  Remote, Philippines
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  Full-time
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  4+ years experience
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  PHP 120,000 - PHP 180,000 / month
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-orange-500 hover:bg-orange-600"
                >
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

            <aside className="rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-stone-500">Hiring company</p>
                  <p className="text-lg font-semibold text-stone-900">
                    Northstar Product Studio
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3.5">
                <InfoRow icon={MapPin} label="Location" value="Remote, Philippines" />
                <InfoRow icon={Clock3} label="Employment" value="Full-time" />
                <InfoRow
                  icon={PhilippinePeso}
                  label="Salary"
                  value="PHP 120,000 to PHP 180,000 / month"
                />
                <InfoRow
                  icon={Code2}
                  label="Stack"
                  value="React, TypeScript, APIs, SQL"
                />
                <InfoRow icon={Users} label="Team" value="Product, Design, Engineering" />
              </div>

              <div className="mt-6 rounded-3xl bg-stone-950 p-4 text-stone-100">
                <p className="text-sm uppercase tracking-[0.22em] text-orange-300">
                  Why this ad works
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  It leads with impact, gives candidates enough detail to
                  self-qualify, and still feels aspirational. This is the kind
                  of job post applicants actually stop to read.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              About the role
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-950">
              This is a role for builders, not passengers.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              We are looking for a Senior Full Stack Developer who can own
              meaningful parts of the product and help us scale with confidence.
              You will work across frontend and backend systems, collaborate
              directly with decision-makers, and turn rough ideas into features
              customers rely on.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              If you enjoy shipping polished work, improving foundations, and
              working in a team where engineering has a real voice in product
              direction, this role will feel like home.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-orange-50/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-700">
              What success looks like
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-950">
              The first 90 days
            </h2>
            <ul className="mt-5 space-y-3 text-stone-700">
              <li className="rounded-2xl bg-white px-4 py-3">
                You understand the product, release cycle, and core technical architecture.
              </li>
              <li className="rounded-2xl bg-white px-4 py-3">
                You have shipped production improvements that customers can feel.
              </li>
              <li className="rounded-2xl bg-white px-4 py-3">
                You contribute to technical planning, code quality, and engineering discussions.
              </li>
              <li className="rounded-2xl bg-white px-4 py-3">
                The team trusts you with ownership, judgment, and follow-through.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-stone-950 px-6 py-8 text-stone-100">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300">
                How to apply
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Send more than just a resume.
              </h2>
              <p className="mt-3 max-w-2xl text-stone-300 leading-8">
                We want to see your updated resume, a GitHub or portfolio link,
                and a short note about a project you are proud of. If you have
                live work, case studies, or shipped products, include them.
              </p>
            </div>
            <div className="rounded-3xl border border-stone-800 bg-stone-900 p-5">
              <p className="text-sm text-stone-400">Application checklist</p>
              <ul className="mt-3 space-y-2.5 text-sm text-stone-200">
                <li>Updated resume</li>
                <li>Portfolio or GitHub profile</li>
                <li>Short candidate intro</li>
                <li>Links to relevant shipped work</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-5 w-full rounded-full bg-orange-500 hover:bg-orange-600"
              >
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
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-stone-950">{title}</h2>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-stone-700 leading-7">
            <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
