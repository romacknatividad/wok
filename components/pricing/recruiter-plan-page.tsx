import Link from 'next/link';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ShieldCheck, Users, BriefcaseBusiness } from 'lucide-react';

export type RecruiterPlanPageData = {
  eyebrow: string;
  name: string;
  price: string;
  interval: string;
  description: string;
  summary: string;
  highlights: string[];
  features: string[];
  bestFor: string[];
  notes: string[];
  ctaLabel: string;
  ctaHref: string;
  availability?: 'live' | 'upcoming';
  availabilityNote?: string;
  sandboxTestingNote?: {
    title: string;
    lines: string[];
  };
};

export function RecruiterPlanPage({
  data
}: {
  data: RecruiterPlanPageData;
}) {
  const isUpcoming = data.availability === 'upcoming';

  return (
    <main className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#f8fbff_100%)]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              {data.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {data.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {data.description}
            </p>
            <div className="mt-8 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight text-slate-950">
                {data.price}
              </p>
              <p className="pb-1 text-lg text-slate-500">{data.interval}</p>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {data.summary}
            </p>
            {isUpcoming && data.availabilityNote ? (
              <div className="mt-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                {data.availabilityNote}
              </div>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isUpcoming ? (
                <Button
                  type="button"
                  size="lg"
                  disabled
                  className="rounded-full bg-slate-200 text-slate-500 hover:bg-slate-200"
                >
                  {data.ctaLabel}
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={data.ctaHref}>
                    {data.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/pricing">Back to pricing</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Plan highlights</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {data.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4"
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={<BriefcaseBusiness className="h-5 w-5 text-blue-700" />}
            title="Included features"
            items={data.features}
          />
          <InfoCard
            icon={<Users className="h-5 w-5 text-blue-700" />}
            title="Best for"
            items={data.bestFor}
          />
          <InfoCard
            icon={<ShieldCheck className="h-5 w-5 text-blue-700" />}
            title="Important notes"
            items={data.notes}
          />
        </div>

        {data.sandboxTestingNote ? (
          <div className="mt-6 rounded-[2rem] border border-amber-200 bg-[linear-gradient(180deg,#fffdf5_0%,#ffffff_100%)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              Sandbox testing only
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">
              {data.sandboxTestingNote.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {data.sandboxTestingNote.lines.map((line) => (
                <li key={line} className="text-sm leading-7 text-slate-600">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <PublicFooterCta />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  items
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-50 p-2">{icon}</div>
        <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      </div>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
            <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
