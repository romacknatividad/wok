'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterJobs } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  CirclePlus
} from 'lucide-react';

const publicJobSlugs = new Set([
  'senior-full-stack-developer',
  'accounting-personnel',
  'company-nurse'
]);

function getStatusClassName(status: string) {
  switch (status) {
    case 'Hiring':
      return 'bg-blue-50 text-blue-700';
    case 'Screening':
      return 'bg-sky-50 text-sky-700';
    case 'Interviewing':
      return 'bg-indigo-50 text-indigo-700';
    case 'Draft':
      return 'bg-slate-100 text-slate-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export default function RecruiterJobsPage() {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All statuses');
  const [selectedYear, setSelectedYear] = useState('All years');

  const statusOptions = useMemo(
    () =>
      Array.from(new Set(recruiterJobs.map((job) => job.status))).sort((a, b) =>
        a.localeCompare(b)
      ),
    []
  );

  const yearOptions = useMemo(
    () =>
      Array.from(
        new Set(
          recruiterJobs
            .map((job) => job.postedDate?.slice(0, 4))
            .filter((value): value is string => Boolean(value))
        )
      ).sort((a, b) => Number(b) - Number(a)),
    []
  );

  const statusSummary = useMemo(
    () => [
      {
        label: 'Published',
        value: recruiterJobs.filter((job) => job.status !== 'Draft').length
      },
      {
        label: 'Active hiring',
        value: recruiterJobs.filter((job) =>
          ['Hiring', 'Screening', 'Interviewing'].includes(job.status)
        ).length
      },
      {
        label: 'Draft',
        value: recruiterJobs.filter((job) => job.status === 'Draft').length
      },
      {
        label: 'Total applicants',
        value: recruiterJobs.reduce((total, job) => total + job.applicants, 0)
      }
    ],
    []
  );

  const filteredJobs = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return recruiterJobs.filter((job) => {
      const matchesSearch =
        searchTerm.length === 0 ||
        [job.title, job.department, job.location, job.type]
          .join(' ')
          .toLowerCase()
          .includes(searchTerm);

      const matchesStatus =
        selectedStatus === 'All statuses' || job.status === selectedStatus;

      const matchesYear =
        selectedYear === 'All years'
          ? true
          : selectedYear === 'Unpublished'
            ? !job.postedDate
            : job.postedDate?.startsWith(selectedYear);

      return matchesSearch && matchesStatus && matchesYear;
    });
  }, [search, selectedStatus, selectedYear]);

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs module
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Manage your recruiter job listings
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Keep multi-year job ads, drafts, and applicant pipelines in one
                place. Recruiters can now filter a growing archive of roles by
                keyword, status, and posting year.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/dashboard/jobs/new">
                    <CirclePlus className="h-4 w-4" />
                    Create Job Post
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard/jobs/senior-full-stack-developer">
                    View Demo Job
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {statusSummary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Job Listings"
            description="A simplified admin table for current and historical roles, with filters for growing multi-year job archives."
            action={
              <p className="text-sm text-slate-500">
                {filteredJobs.length} of {recruiterJobs.length} roles shown
              </p>
            }
          >
            <div className="mb-4 grid gap-3 rounded-2xl border border-blue-100 bg-slate-50 p-4 lg:grid-cols-[minmax(0,1.5fr)_220px_220px]">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Search roles
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search title, department, location, or type"
                  className="h-11 rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Status
                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="h-11 rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                >
                  <option>All statuses</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Posted year
                <select
                  value={selectedYear}
                  onChange={(event) => setSelectedYear(event.target.value)}
                  className="h-11 rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                >
                  <option>All years</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                  <option value="Unpublished">Unpublished</option>
                </select>
              </label>
            </div>

            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
              <div className="hidden grid-cols-[minmax(0,2.3fr)_140px_140px_120px_160px] gap-4 border-b border-blue-100 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
                <p>Role</p>
                <p>Status</p>
                <p>Posted</p>
                <p>Applicants</p>
                <p className="text-right">Actions</p>
              </div>
              <div className="divide-y divide-blue-100">
                {filteredJobs.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <p className="text-base font-semibold text-slate-950">
                      No jobs matched your filters
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Try another keyword, status, or posted year to expand the
                      archive view.
                    </p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <div
                      key={job.slug}
                      className="grid gap-4 px-5 py-4 md:grid-cols-[minmax(0,2.3fr)_140px_140px_120px_160px] md:items-center"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-950">{job.title}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {job.department} | {job.location} | {job.type}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                          Status
                        </p>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(job.status)}`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                          Posted
                        </p>
                        <p className="text-sm text-slate-600">{job.posted}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                          Applicants
                        </p>
                        <p className="text-sm font-medium text-slate-950">
                          {job.applicants}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Link href={`/dashboard/jobs/${job.slug}`}>Open</Link>
                        </Button>
                        {publicJobSlugs.has(job.slug) ? (
                          <Button
                            asChild
                            variant="outline"
                            className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Link
                              href={`/demo/job/${job.slug}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Public View
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            variant="outline"
                            disabled
                            className="rounded-full border-blue-100 bg-white text-slate-400"
                          >
                            Public View
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Link href={`/dashboard/jobs/${job.slug}/edit`}>
                            Edit
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </DashboardSection>
        </DashboardPanel>
      </div>
    </section>
  );
}
