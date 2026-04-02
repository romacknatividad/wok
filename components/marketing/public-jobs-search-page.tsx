'use client';

import Link from 'next/link';
import { useDeferredValue, useMemo, useState } from 'react';
import { recruiterJobs } from '@/components/recruiter/mock-data';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  MapPin,
  Search,
  Sparkles
} from 'lucide-react';

const publicJobs = recruiterJobs
  .filter((job) => job.status !== 'Draft')
  .sort((left, right) => {
    const leftDate = left.postedDate ? new Date(left.postedDate).getTime() : 0;
    const rightDate = right.postedDate ? new Date(right.postedDate).getTime() : 0;

    return rightDate - leftDate;
  });

const categories = [
  'All categories',
  ...Array.from(new Set(publicJobs.map((job) => job.department))).sort()
];

const publicJobHrefBySlug: Record<string, string> = {
  'senior-full-stack-developer': '/demo/job/senior-full-stack-developer',
  'accounting-personnel': '/demo/job/accounting-personnel'
};

export function PublicJobsSearchPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const hasSearchIntent =
    normalizedQuery.length > 0 || selectedCategory !== 'All categories';

  const filteredJobs = useMemo(() => {
    return publicJobs.filter((job) => {
      const matchesCategory =
        selectedCategory === 'All categories' || job.department === selectedCategory;
      const searchableText = [
        job.title,
        job.department,
        job.location,
        job.summary,
        job.description,
        job.requirements,
        job.type,
        job.status
      ]
        .join(' ')
        .toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [normalizedQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_22%,#ffffff_100%)]">
      <section
        className={`relative overflow-hidden border-b border-blue-100/80 transition-all duration-300 ${
          hasSearchIntent ? 'py-10' : 'py-20 sm:py-24'
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-300 ${
              hasSearchIntent ? 'max-w-5xl' : 'mx-auto max-w-4xl text-center'
            }`}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Search public jobs on wok
            </p>
            <h1
              className={`mt-6 font-bold tracking-tight text-slate-950 transition-all duration-300 ${
                hasSearchIntent ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl md:text-6xl'
              }`}
            >
              Find roles by keyword, then let the job list take over.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Start with a search like a job engine, then narrow by category as the
              live list surfaces matching openings and archived roles across the
              public hiring archive.
            </p>

            <div
              className={`mt-8 grid gap-4 rounded-[2rem] border border-blue-100 bg-white/95 p-4 shadow-[0_28px_60px_-36px_rgba(15,23,42,0.28)] backdrop-blur sm:p-5 ${
                hasSearchIntent
                  ? 'lg:grid-cols-[minmax(0,1fr)_220px]'
                  : 'lg:grid-cols-[minmax(0,1fr)_240px]'
              }`}
            >
              <label className="flex items-center gap-3 rounded-[1.5rem] border border-blue-100 bg-slate-50/80 px-4 py-4 focus-within:border-blue-300 focus-within:bg-white">
                <Search className="h-5 w-5 text-blue-700" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search roles, departments, locations, or keywords"
                  className="w-full border-0 bg-transparent text-base text-slate-950 outline-none placeholder:text-slate-400"
                />
              </label>

              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="rounded-[1.5rem] border border-blue-100 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {!hasSearchIntent ? (
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/product">
                    See what wok can do
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">Recruiter plans</Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
                Public job listings
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                {filteredJobs.length === 0
                  ? 'No jobs matched your search yet.'
                  : `${filteredJobs.length} job${filteredJobs.length === 1 ? '' : 's'} found`}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Active openings stay at the top, while filled and closed roles remain visible as part of the recorded hiring archive.
            </p>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-blue-200 bg-white px-6 py-12 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-950">
                Try another keyword or category.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Search by role title, department, location, or a skill mentioned in the listing.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {filteredJobs.map((job) => {
                const archived = isArchivedStatus(job.status);
                const publicHref = publicJobHrefBySlug[job.slug];

                return (
                  <article
                    key={job.slug}
                    className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClassName(job.status)}`}
                          >
                            {archived ? `${job.status} role` : job.status}
                          </span>
                          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            {job.department}
                          </span>
                          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                          {job.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                          {job.summary}
                        </p>

                        <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
                          <JobMeta icon={Building2} text={job.department} />
                          <JobMeta icon={MapPin} text={job.location} />
                          <JobMeta icon={BriefcaseBusiness} text={job.salary} />
                          <JobMeta
                            icon={Clock3}
                            text={getLifecycleLabel(job.postedDate, job.endDate, archived)}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 lg:min-w-[190px] lg:items-end">
                        {publicHref ? (
                          <Button
                            asChild
                            className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                          >
                            <Link href={publicHref}>
                              View public ad
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        ) : (
                          <div className="rounded-full border border-blue-100 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                            Listing summary only
                          </div>
                        )}
                        <p className="max-w-[220px] text-right text-xs leading-6 text-slate-500">
                          {archived
                            ? 'This recorded job stays visible for public archive context.'
                            : 'This opening is part of the current public jobs archive.'}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function JobMeta({
  icon: Icon,
  text
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-slate-50/80 px-3 py-3">
      <Icon className="h-4 w-4 text-blue-700" />
      <span>{text}</span>
    </div>
  );
}

function isArchivedStatus(status: string) {
  return status === 'Filled' || status === 'Closed';
}

function getLifecycleLabel(
  postedDate: string | null,
  endDate: string | null,
  archived: boolean
) {
  if (archived && endDate) {
    return `Ended ${formatDate(endDate)}`;
  }

  if (postedDate) {
    return `Posted ${formatDate(postedDate)}`;
  }

  return 'Posting date unavailable';
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function getStatusBadgeClassName(status: string) {
  switch (status) {
    case 'Hiring':
      return 'bg-emerald-50 text-emerald-700';
    case 'Screening':
      return 'bg-blue-50 text-blue-700';
    case 'Interviewing':
      return 'bg-violet-50 text-violet-700';
    case 'Filled':
      return 'bg-amber-50 text-amber-700';
    case 'Closed':
      return 'bg-slate-200 text-slate-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}
