'use client';

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

const statusSummary = [
  { label: 'Published', value: 3 },
  { label: 'In screening', value: 1 },
  { label: 'Draft', value: 1 },
  { label: 'Total applicants', value: 59 }
];

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
                Keep all open roles, drafts, and applicant counts in one place.
                This module is ready to become the main recruiter jobs area as
                you connect real posting and applicant data.
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
            description="A simplified admin view of each role, status, posting date, and applicant count."
            action={
              <p className="text-sm text-slate-500">
                {recruiterJobs.length} roles in this workspace
              </p>
            }
          >
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
              <div className="hidden grid-cols-[minmax(0,2.3fr)_140px_140px_120px_160px] gap-4 border-b border-blue-100 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
                <p>Role</p>
                <p>Status</p>
                <p>Posted</p>
                <p>Applicants</p>
                <p className="text-right">Actions</p>
              </div>
              <div className="divide-y divide-blue-100">
                {recruiterJobs.map((job) => (
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
                ))}
              </div>
            </div>
          </DashboardSection>
        </DashboardPanel>
      </div>
    </section>
  );
}
