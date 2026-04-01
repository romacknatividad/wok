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

const preferredQualifications = [
  'Experience with Next.js, Node.js, PostgreSQL, or modern SaaS products.',
  'Familiarity with CI/CD pipelines, cloud deployments, and observability tools.',
  'Experience collaborating with designers and product managers in a fast-moving team.',
  'Comfortable reviewing code and helping shape engineering standards.'
];

const perks = [
  'Competitive monthly salary with real product ownership.',
  'Remote-first team and flexible day-to-day working style.',
  'Paid time off and support for professional development.',
  'A direct hand in shaping the roadmap, architecture, and engineering culture.'
];

const successPoints = [
  'You understand the product, release cycle, and core technical architecture.',
  'You have shipped production improvements that customers can feel.',
  'You contribute to technical planning, code quality, and engineering discussions.',
  'The team trusts you with ownership, judgment, and follow-through.'
];

const applicationSteps = [
  'Submit your updated resume and links to any portfolio, GitHub profile, or shipped work.',
  'Qualified applicants will be invited to a short screening call.',
  'Final candidates will complete a technical discussion focused on real product work.'
];

export default function SampleJobPage() {
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
              Senior Full Stack Developer
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Build products people actually use every day. Join a team that
              values ownership, strong engineering judgment, and product work
              that ships with real impact.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
            <MetaPill icon={MapPin} label="Remote, Philippines" />
            <MetaPill icon={Clock3} label="Full-time" />
            <MetaPill icon={Code2} label="4+ years experience" />
            <MetaPill
              icon={PhilippinePeso}
              label="PHP 120,000 - PHP 180,000 / month"
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
              title="This is a role for builders, not passengers."
            >
              <p className="text-base leading-8 text-slate-600">
                We are looking for a Senior Full Stack Developer who can own
                meaningful parts of the product and help us scale with
                confidence. You will work across frontend and backend systems,
                collaborate directly with decision-makers, and turn rough ideas
                into features customers rely on.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                If you enjoy shipping polished work, improving foundations, and
                working in a team where engineering has a real voice in product
                direction, this role will feel like home.
              </p>
            </EditorialSection>

            <EditorialSection
              eyebrow="About the company"
              title="Northstar Product Studio builds software with a clear business purpose."
            >
              <p className="text-base leading-8 text-slate-600">
                We work on products used by paying customers and growing teams.
                The company values practical engineering, clear communication,
                and steady execution over unnecessary complexity.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                This role reports into the engineering team and works closely
                with product and design. You will have space to influence
                technical decisions while still staying close to the work that
                reaches customers.
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
              eyebrow="Preferred qualifications"
              title="What will help you stand out"
            >
              <BulletList items={preferredQualifications} />
            </EditorialSection>

            <EditorialSection
              eyebrow="Benefits"
              title="What you get"
            >
              <BulletList items={perks} />
            </EditorialSection>

            <EditorialSection
              eyebrow="Application process"
              title="What to expect after you apply"
            >
              <BulletList items={applicationSteps} />
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
                    Northstar Product Studio
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={MapPin}
                  label="Location"
                  value="Remote, Philippines"
                />
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
                <InfoRow
                  icon={Users}
                  label="Team"
                  value="Product, Design, Engineering"
                />
                <InfoRow
                  icon={BriefcaseBusiness}
                  label="Reports to"
                  value="Engineering Lead"
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
              title="Send more than just a resume"
              body="We want to see your updated resume, a GitHub or portfolio link, and a short note about a project you are proud of."
              items={[
                'Updated resume',
                'Portfolio or GitHub profile',
                'Short candidate intro',
                'Links to relevant shipped work'
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
