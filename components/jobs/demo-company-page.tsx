import Link from 'next/link';
import { Building2, BriefcaseBusiness, ChevronRight, MapPin, Users } from 'lucide-react';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';
import { Button } from '@/components/ui/button';
import { demoCompanyJobList, demoCompanyProfile } from './job-detail-data';

export function DemoCompanyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_46%,#ffffff_100%)]">
      <section className="border-b border-blue-100 bg-[linear-gradient(180deg,#eef6ff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
            Demo company profile
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {demoCompanyProfile.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {demoCompanyProfile.tagline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href={`/demo/job/${demoCompanyJobList[0].slug}`}>
                    View featured opening
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/sign-up">Create recruiter account</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <CompanyStat
                  icon={<MapPin className="h-4 w-4 text-blue-700" />}
                  label="Location"
                  value={demoCompanyProfile.location}
                />
                <CompanyStat
                  icon={<Users className="h-4 w-4 text-blue-700" />}
                  label="Company size"
                  value={demoCompanyProfile.companySize}
                />
                <CompanyStat
                  icon={<Building2 className="h-4 w-4 text-blue-700" />}
                  label="Industry"
                  value={demoCompanyProfile.industry}
                />
                <CompanyStat
                  icon={<BriefcaseBusiness className="h-4 w-4 text-blue-700" />}
                  label="Open jobs"
                  value={`${demoCompanyJobList.length} active demo roles`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              About the company
            </p>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              {demoCompanyProfile.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
              Why candidates apply
            </p>
            <ul className="mt-5 space-y-3">
              {demoCompanyProfile.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
              Open roles
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              Available jobs at {demoCompanyProfile.name}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-500">
            This demo hiring board shows how a company profile on wok can connect
            employer branding with active job listings.
          </p>
        </div>

        <div className="mt-8 grid gap-5">
          {demoCompanyJobList.map((job) => (
            <article
              key={job.slug}
              className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium text-blue-700">{job.department}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    <Link
                      href={`/demo/job/${job.slug}`}
                      className="transition-colors hover:text-blue-700"
                    >
                      {job.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {job.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                      {job.employment}
                    </span>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href={`/demo/job/${job.slug}`}>
                    View job
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PublicFooterCta />
    </main>
  );
}

function CompanyStat({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
        {icon}
        <span>{label}</span>
      </div>
      <p className="mt-3 text-base font-semibold leading-7 text-slate-950">
        {value}
      </p>
    </div>
  );
}
