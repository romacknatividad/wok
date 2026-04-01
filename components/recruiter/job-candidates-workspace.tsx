'use client';

import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import type { recruiterApplicants, recruiterJobs } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CircleCheckBig,
  FileUser,
  MapPin,
  MessagesSquare,
  NotebookPen,
  PhilippinePeso,
  Phone,
  TimerReset
} from 'lucide-react';

type RecruiterJob = (typeof recruiterJobs)[number];
type RecruiterApplicant = (typeof recruiterApplicants)[number];

const applicantStatuses = [
  'New',
  'Review',
  'Screening',
  'Shortlist',
  'Interview',
  'Offer',
  'Rejected'
];

const applicantPhases = [
  'Application Review',
  'Recruiter Screen',
  'Assessment',
  'Hiring Manager Review',
  'Technical Interview',
  'Panel Interview',
  'Offer Discussion'
];

const interviewLevels = [
  'Not started',
  'Initial screen',
  'Assessment stage',
  'Hiring manager',
  'Technical panel',
  'Final interview'
];

const publicJobSlugs = new Set([
  'senior-full-stack-developer',
  'accounting-personnel',
  'company-nurse'
]);

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
    case 'Offer':
      return 'bg-emerald-50 text-emerald-700';
    case 'Rejected':
      return 'bg-rose-50 text-rose-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export function RecruiterJobCandidatesWorkspace({
  job,
  applicants
}: {
  job: RecruiterJob;
  applicants: RecruiterApplicant[];
}) {
  const [selectedApplicantId, setSelectedApplicantId] = useState(
    applicants[0]?.id ?? null
  );
  const [drafts, setDrafts] = useState<Record<number, RecruiterApplicant>>(() =>
    Object.fromEntries(applicants.map((applicant) => [applicant.id, applicant]))
  );

  const selectedApplicant = useMemo(() => {
    if (selectedApplicantId === null) {
      return null;
    }

    return drafts[selectedApplicantId] ?? null;
  }, [drafts, selectedApplicantId]);

  const totalApplicants = applicants.length;
  const shortlisted = applicants.filter(
    (applicant) =>
      applicant.status === 'Shortlist' ||
      applicant.status === 'Interview' ||
      applicant.status === 'Offer'
  ).length;
  const inInterview = applicants.filter(
    (applicant) => applicant.status === 'Interview'
  ).length;

  function updateSelectedApplicant(
    field: keyof RecruiterApplicant,
    value: string | string[]
  ) {
    if (!selectedApplicant) {
      return;
    }

    setDrafts((current) => ({
      ...current,
      [selectedApplicant.id]: {
        ...current[selectedApplicant.id],
        [field]: value
      }
    }));
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <BriefcaseBusiness className="h-4 w-4" />
                Recruiter job workspace
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                {job.title}
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Review applicant profiles, process application stages, track
                interview progress, and capture decision notes for this job.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild={publicJobSlugs.has(job.slug)}
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300"
                  disabled={!publicJobSlugs.has(job.slug)}
                >
                  {publicJobSlugs.has(job.slug) ? (
                    <Link href={`/demo/job/${job.slug}`}>
                      Public-facing job
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span>Public-facing job unavailable</span>
                  )}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href={`/dashboard/jobs/${job.slug}/edit`}>
                    Edit job details
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <SummaryCard label="Applicants" value={String(totalApplicants)} />
              <SummaryCard label="Shortlisted" value={String(shortlisted)} />
              <SummaryCard label="Interviewing" value={String(inInterview)} />
              <SummaryCard label="Job status" value={job.status} />
            </div>
          </div>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Applicants"
              description="Everyone who applied to this specific job."
            >
              <div className="grid gap-3">
                {applicants.length > 0 ? (
                  applicants.map((applicant) => {
                    const isActive = applicant.id === selectedApplicantId;

                    return (
                      <button
                        key={applicant.id}
                        type="button"
                        onClick={() => setSelectedApplicantId(applicant.id)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          isActive
                            ? 'border-blue-200 bg-blue-50'
                            : 'border-blue-100 bg-white hover:border-blue-200 hover:bg-blue-50/60'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-slate-950">
                              {applicant.name}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              {applicant.experience} · {applicant.location}
                            </p>
                          </div>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClassName(
                              drafts[applicant.id]?.status ?? applicant.status
                            )}`}
                          >
                            {drafts[applicant.id]?.status ?? applicant.status}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {applicant.summary}
                        </p>
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                          {drafts[applicant.id]?.phase ?? applicant.phase}
                        </p>
                      </button>
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-sm text-slate-600">
                    No applicants have been added to this job record yet.
                  </div>
                )}
              </div>
            </DashboardSection>
          </DashboardPanel>

          <div className="grid gap-6">
            {selectedApplicant ? (
              <>
                <DashboardPanel className="shadow-sm">
                  <DashboardSection
                    title="Applicant Profile"
                    description="Core candidate details for recruiter review."
                  >
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="grid gap-4">
                        <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-2xl font-semibold text-slate-950">
                                {selectedApplicant.name}
                              </p>
                              <p className="mt-1 text-sm text-slate-500">
                                Applied {selectedApplicant.appliedAt}
                              </p>
                            </div>
                            <span
                              className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(
                                selectedApplicant.status
                              )}`}
                            >
                              {selectedApplicant.status}
                            </span>
                          </div>
                          <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <InfoTile
                              icon={FileUser}
                              label="Email"
                              value={selectedApplicant.email}
                            />
                            <InfoTile
                              icon={Phone}
                              label="Phone"
                              value={selectedApplicant.phone}
                            />
                            <InfoTile
                              icon={MapPin}
                              label="Location"
                              value={selectedApplicant.location}
                            />
                            <InfoTile
                              icon={CalendarClock}
                              label="Experience"
                              value={selectedApplicant.experience}
                            />
                            <InfoTile
                              icon={PhilippinePeso}
                              label="Asking salary"
                              value={selectedApplicant.askingSalary}
                            />
                            <InfoTile
                              icon={TimerReset}
                              label="Notice period"
                              value={selectedApplicant.noticePeriod}
                            />
                          </div>
                        </div>
                        <div className="rounded-2xl border border-blue-100 bg-white p-5">
                          <p className="text-sm font-semibold text-slate-950">
                            Candidate summary
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {selectedApplicant.summary}
                          </p>
                          <p className="mt-4 text-sm font-semibold text-slate-950">
                            Education
                          </p>
                          <p className="mt-2 text-sm text-slate-600">
                            {selectedApplicant.education}
                          </p>
                          <p className="mt-4 text-sm font-semibold text-slate-950">
                            Skills
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {selectedApplicant.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-2xl border border-blue-100 bg-white p-5">
                          <p className="text-sm font-semibold text-slate-950">
                            Application processing
                          </p>
                          <div className="mt-4 grid gap-4">
                            <SelectField
                              label="Application status"
                              value={selectedApplicant.status}
                              options={applicantStatuses}
                              onChange={(value) =>
                                updateSelectedApplicant('status', value)
                              }
                            />
                            <SelectField
                              label="Current phase"
                              value={selectedApplicant.phase}
                              options={applicantPhases}
                              onChange={(value) =>
                                updateSelectedApplicant('phase', value)
                              }
                            />
                            <SelectField
                              label="Interview level"
                              value={selectedApplicant.interviewLevel}
                              options={interviewLevels}
                              onChange={(value) =>
                                updateSelectedApplicant('interviewLevel', value)
                              }
                            />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-white p-5">
                          <p className="text-sm font-semibold text-slate-950">
                            Recruiter notes
                          </p>
                          <div className="mt-4 grid gap-4">
                            <TextField
                              label="Asking salary"
                              value={selectedApplicant.askingSalary}
                              onChange={(value) =>
                                updateSelectedApplicant('askingSalary', value)
                              }
                            />
                            <TextField
                              label="Notice period"
                              value={selectedApplicant.noticePeriod}
                              onChange={(value) =>
                                updateSelectedApplicant('noticePeriod', value)
                              }
                            />
                            <TextAreaField
                              label="Internal notes"
                              value={selectedApplicant.notes}
                              onChange={(value) =>
                                updateSelectedApplicant('notes', value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DashboardSection>
                </DashboardPanel>

                <DashboardPanel className="shadow-sm">
                  <DashboardSection
                    title="Interview Workflow"
                    description="Keep the next steps and evaluation checkpoints visible."
                  >
                    <div className="grid gap-4 md:grid-cols-3">
                      <StepCard
                        title="Recruiter review"
                        value={selectedApplicant.phase}
                        icon={CircleCheckBig}
                      />
                      <StepCard
                        title="Interview level"
                        value={selectedApplicant.interviewLevel}
                        icon={MessagesSquare}
                      />
                      <StepCard
                        title="Notes status"
                        value={selectedApplicant.notes ? 'Updated' : 'Pending'}
                        icon={NotebookPen}
                      />
                    </div>
                  </DashboardSection>
                </DashboardPanel>
              </>
            ) : (
              <DashboardPanel className="shadow-sm">
                <DashboardSection
                  title="Applicant Profile"
                  description="Select an applicant to start reviewing and processing the application."
                >
                  <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-5 text-sm text-slate-600">
                    No applicant selected.
                  </div>
                </DashboardSection>
              </DashboardPanel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-blue-100 bg-white p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.16em]">{label}</p>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-950">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-blue-300"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextField({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-950">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-blue-300"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-950">
      {label}
      <textarea
        rows={6}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-blue-300"
      />
    </label>
  );
}

function StepCard({
  title,
  value,
  icon: Icon
}: {
  title: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
      <div className="flex items-center gap-2 text-blue-700">
        <Icon className="h-4 w-4" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em]">
          {title}
        </p>
      </div>
      <p className="mt-3 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  );
}
