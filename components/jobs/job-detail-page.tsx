import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  MapPin,
  PhilippinePeso,
  Sparkles,
  Users
} from 'lucide-react';

export type JobDetailMetaItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

export type JobDetailSidebarItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export type JobDetailPageData = {
  badge: string;
  title: string;
  summary: string;
  meta: JobDetailMetaItem[];
  company: string;
  sidebar: JobDetailSidebarItem[];
  sections: Array<{
    eyebrow: string;
    title: string;
    paragraphs?: string[];
    items?: string[];
  }>;
  asides: Array<{
    eyebrow: string;
    title: string;
    body?: string;
    items: string[];
  }>;
};

export function JobDetailPage({
  data,
  primaryHref = '/sign-up',
  primaryLabel = 'Apply Through wok',
  secondaryHref = '/pricing',
  secondaryLabel = 'See recruiter plans'
}: {
  data: JobDetailPageData;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              {data.badge}
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {data.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
            {data.meta.map((item) => (
              <MetaPill key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-12">
            {data.sections.map((section) => (
              <EditorialSection
                key={`${section.eyebrow}-${section.title}`}
                eyebrow={section.eyebrow}
                title={section.title}
              >
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 first:mt-0 text-base leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items ? <BulletList items={section.items} /> : null}
              </EditorialSection>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hiring company</p>
                  <p className="text-lg font-semibold text-slate-950">
                    {data.company}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {data.sidebar.map((item) => (
                  <InfoRow
                    key={`${item.label}-${item.value}`}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>

            {data.asides.map((aside) => (
              <SimpleAside
                key={`${aside.eyebrow}-${aside.title}`}
                eyebrow={aside.eyebrow}
                title={aside.title}
                body={aside.body}
                items={aside.items}
              />
            ))}
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
      {body ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
      ) : null}
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

export const JobDetailIcons = {
  location: MapPin,
  employment: Clock3,
  salary: PhilippinePeso,
  team: Users,
  reporting: BriefcaseBusiness
};
