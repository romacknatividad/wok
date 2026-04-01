'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterJobs } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  CirclePlus,
  FileUser,
  Filter,
  Search
} from 'lucide-react';

const statusSummary = [
  { label: 'Published', value: 3 },
  { label: 'In screening', value: 1 },
  { label: 'Draft', value: 1 },
  { label: 'Total applicants', value: 59 }
];

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
                <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <CirclePlus className="h-4 w-4" />
                  Create Job Post
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
            description="A recruiter-focused list of active roles, hiring stage, and applicant volume."
            action={
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-500">
                  <Search className="h-4 w-4 text-blue-600" />
                  Search jobs
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-500">
                  <Filter className="h-4 w-4 text-blue-600" />
                  All statuses
                </div>
              </div>
            }
          >
            <div className="grid gap-4">
              {recruiterJobs.map((job) => (
                <div
                  key={job.slug}
                  className="rounded-2xl border border-blue-100 bg-white p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {job.department} • {job.location} • {job.type}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                        {job.status}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                        {job.posted}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Applicants
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-950">
                        <FileUser className="h-4 w-4 text-blue-600" />
                        {job.applicants}
                      </p>
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Department
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        {job.department}
                      </p>
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Location
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <Link href={`/dashboard/jobs/${job.slug}`}>Open Job</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Edit Job
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardSection>
        </DashboardPanel>
      </div>
    </section>
  );
}
