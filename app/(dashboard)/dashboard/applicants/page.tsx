'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterApplicants } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  FileUser,
  MessagesSquare
} from 'lucide-react';

const applicantSummary = [
  { label: 'Total applicants', value: recruiterApplicants.length },
  {
    label: 'New today',
    value: recruiterApplicants.filter((applicant) =>
      applicant.appliedAt.toLowerCase().includes('today')
    ).length
  },
  {
    label: 'In interview',
    value: recruiterApplicants.filter(
      (applicant) => applicant.status === 'Interview'
    ).length
  },
  {
    label: 'Jobs with applicants',
    value: new Set(recruiterApplicants.map((applicant) => applicant.jobTitle)).size
  }
];

function getStatusClassName(status: string) {
  switch (status) {
    case 'New':
      return 'bg-blue-50 text-blue-700';
    case 'Review':
      return 'bg-sky-50 text-sky-700';
    case 'Screening':
      return 'bg-cyan-50 text-cyan-700';
    case 'Shortlist':
      return 'bg-violet-50 text-violet-700';
    case 'Interview':
      return 'bg-indigo-50 text-indigo-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export default function RecruiterApplicantsPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <FileUser className="h-4 w-4" />
                Applicants module
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Review applicants across all recruiter job listings
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                See everyone who applied across different jobs in one simplified
                list, so recruiters can scan status, role, and next action
                without jumping between job pages first.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/dashboard/jobs">
                    Open Job Listings
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard">
                    Back to Overview
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {applicantSummary.map((item) => (
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
            title="All Applicants"
            description="A recruiter-focused list of applicants from different jobs in one module."
            action={
              <p className="text-sm text-slate-500">
                {recruiterApplicants.length} applicants across all active roles
              </p>
            }
          >
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
              <div className="hidden grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_120px_120px_180px] gap-4 border-b border-blue-100 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
                <p>Applicant</p>
                <p>Applied job</p>
                <p>Status</p>
                <p>Experience</p>
                <p className="text-right">Actions</p>
              </div>
              <div className="divide-y divide-blue-100">
                {recruiterApplicants.map((applicant) => (
                  <div
                    key={applicant.id}
                    className="grid gap-4 px-5 py-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_120px_120px_180px] md:items-center"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-950">
                        {applicant.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {applicant.email}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        {applicant.summary}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                        Applied job
                      </p>
                      <p className="font-medium text-slate-950">
                        {applicant.jobTitle}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {applicant.location} · {applicant.appliedAt}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                        Status
                      </p>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(applicant.status)}`}
                      >
                        {applicant.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                        Experience
                      </p>
                      <p className="text-sm font-medium text-slate-950">
                        {applicant.experience}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Link href={`/dashboard/jobs/${applicant.jobSlug}`}>
                          <BriefcaseBusiness className="h-4 w-4" />
                          Job
                        </Link>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <MessagesSquare className="h-4 w-4" />
                        Review
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
