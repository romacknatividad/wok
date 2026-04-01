'use client';

import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import type {
  recruiterApplicants,
  recruiterJobs
} from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CircleCheckBig,
  Eye,
  FileUser,
  History,
  MapPin,
  MessagesSquare,
  NotebookPen,
  PhilippinePeso,
  Phone,
  TimerReset,
  TrendingUp,
  X
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

function parseCurrencyAmount(value: string) {
  const normalized = value.replace(/,/g, '');
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function parseSalaryRange(range: string) {
  const matches = [...range.matchAll(/(\d[\d,]*)/g)].map((match) =>
    Number(match[1].replace(/,/g, ''))
  );

  if (matches.length >= 2) {
    return { min: matches[0], max: matches[1] };
  }

  if (matches.length === 1) {
    return { min: matches[0], max: matches[0] };
  }

  return { min: 0, max: 0 };
}

function parseExperienceYears(value: string) {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function getBudgetFit(askingSalary: string, budgetRange: string) {
  const asking = parseCurrencyAmount(askingSalary);
  const budget = parseSalaryRange(budgetRange);

  if (asking > budget.max) {
    return {
      label: 'Above budget',
      className: 'bg-rose-50 text-rose-700'
    };
  }

  if (asking < budget.min) {
    return {
      label: 'Below budget',
      className: 'bg-amber-50 text-amber-700'
    };
  }

  return {
    label: 'Within budget',
    className: 'bg-emerald-50 text-emerald-700'
  };
}

export function RecruiterJobCandidatesWorkspace({
  job,
  applicants
}: {
  job: RecruiterJob;
  applicants: RecruiterApplicant[];
}) {
  const [selectedApplicantId, setSelectedApplicantId] = useState<number | null>(
    null
  );
  const [previewApplicantId, setPreviewApplicantId] = useState<number | null>(null);
  const [drafts, setDrafts] = useState<Record<number, RecruiterApplicant>>(() =>
    Object.fromEntries(applicants.map((applicant) => [applicant.id, applicant]))
  );

  const selectedApplicant = useMemo(() => {
    if (selectedApplicantId === null) {
      return null;
    }

    return drafts[selectedApplicantId] ?? null;
  }, [drafts, selectedApplicantId]);

  const previewApplicant = useMemo(() => {
    if (previewApplicantId === null) {
      return null;
    }

    return drafts[previewApplicantId] ?? null;
  }, [drafts, previewApplicantId]);

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
  const budgetRange = parseSalaryRange(job.salary);

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
    <>
      <section className="flex-1 p-4 lg:p-8">
        <div className="grid gap-8">
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
                <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                  Scan applicants in one table, compare asking salaries against
                  the job budget, and open a recruiter sidebar to review the
                  full application record.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

              <div className="grid grid-cols-2 gap-4">
                <SummaryCard label="Applicants" value={String(totalApplicants)} />
                <SummaryCard label="Shortlisted" value={String(shortlisted)} />
                <SummaryCard label="Interviewing" value={String(inInterview)} />
                <SummaryCard label="Budget salary" value={job.salary} />
              </div>
            </div>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Applicants"
              description="Click any applicant row to open the recruiter review sidebar."
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white">
                <div className="hidden grid-cols-[minmax(0,1.2fr)_130px_140px_170px_130px_120px_72px] gap-4 border-b border-blue-100 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
                  <p>Applicant</p>
                  <p>Status</p>
                  <p>Budget fit</p>
                  <p>Phase</p>
                  <p>Interview</p>
                  <p>Applied</p>
                  <p className="text-center">CV</p>
                </div>
                <div className="divide-y divide-blue-100">
                  {applicants.length > 0 ? (
                    applicants.map((applicant) => {
                      const draft = drafts[applicant.id] ?? applicant;
                      const isActive = applicant.id === selectedApplicantId;
                      const budgetFit = getBudgetFit(draft.askingSalary, job.salary);

                      return (
                        <button
                          key={applicant.id}
                          type="button"
                          onClick={() => setSelectedApplicantId(applicant.id)}
                          className={`grid w-full gap-4 px-5 py-4 text-left transition md:grid-cols-[minmax(0,1.2fr)_130px_140px_170px_130px_120px_72px] md:items-center ${
                            isActive ? 'bg-blue-50/70' : 'bg-white hover:bg-blue-50/40'
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-950">
                              {applicant.name}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              {applicant.email}
                            </p>
                            <p className="mt-2 text-sm text-slate-600 md:hidden">
                              {applicant.location} | {applicant.experience}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                              Status
                            </p>
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusClassName(
                                draft.status
                              )}`}
                            >
                              {draft.status}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                              Budget fit
                            </p>
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${budgetFit.className}`}
                            >
                              {budgetFit.label}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                              Phase
                            </p>
                            <p className="text-sm text-slate-700">{draft.phase}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                              Interview
                            </p>
                            <p className="text-sm text-slate-700">
                              {draft.interviewLevel}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:hidden">
                              Applied
                            </p>
                            <p className="text-sm text-slate-600">{applicant.appliedAt}</p>
                          </div>
                          <div className="flex md:justify-center">
                            <Button
                              type="button"
                              variant="outline"
                              className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                              onClick={(event) => {
                                event.stopPropagation();
                                setPreviewApplicantId(applicant.id);
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="p-5 text-sm text-slate-600">
                      No applicants have been added to this job record yet.
                    </div>
                  )}
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Salary vs Experience"
              description="A scatter plot comparing years of experience and asking salary across applicants for this job."
            >
              <ApplicantSalaryScatterPlot applicants={Object.values(drafts)} />
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Interview Workflow"
              description="Keep the next steps and evaluation checkpoints visible for the role overall."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <StepCard
                  title="Applicants"
                  value={String(totalApplicants)}
                  icon={FileUser}
                />
                <StepCard
                  title="Shortlisted"
                  value={String(shortlisted)}
                  icon={CircleCheckBig}
                />
                <StepCard
                  title="Interviewing"
                  value={String(inInterview)}
                  icon={MessagesSquare}
                />
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition ${
          selectedApplicant ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSelectedApplicantId(null)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-2xl transition-transform duration-300 ${
          selectedApplicant ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedApplicant ? (
          <ApplicantSidebar
            applicant={selectedApplicant}
            job={job}
            budgetRange={budgetRange}
            updateSelectedApplicant={updateSelectedApplicant}
            onClose={() => setSelectedApplicantId(null)}
          />
        ) : null}
      </aside>

      <div
        className={`fixed inset-0 z-[60] bg-slate-950/45 transition ${
          previewApplicant ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setPreviewApplicantId(null)}
      />

      <div
        className={`fixed left-1/2 top-1/2 z-[70] w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-blue-100 bg-white shadow-2xl transition ${
          previewApplicant ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        {previewApplicant ? (
          <CvPreviewModal
            applicant={previewApplicant}
            onClose={() => setPreviewApplicantId(null)}
          />
        ) : null}
      </div>
    </>
  );
}

function ApplicantSidebar({
  applicant,
  job,
  budgetRange,
  updateSelectedApplicant,
  onClose
}: {
  applicant: RecruiterApplicant;
  job: RecruiterJob;
  budgetRange: { min: number; max: number };
  updateSelectedApplicant: (
    field: keyof RecruiterApplicant,
    value: string | string[]
  ) => void;
  onClose: () => void;
}) {
  const budgetFit = getBudgetFit(applicant.askingSalary, job.salary);

  return (
    <div className="p-5 lg:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Applicant review
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            {applicant.name}
          </h2>
          <p className="mt-2 text-sm text-slate-500">Applied {applicant.appliedAt}</p>
        </div>
        <Button
          type="button"
          variant="ghost"
          className="rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6 grid gap-6">
        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Profile snapshot
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {applicant.summary}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(
                  applicant.status
                )}`}
              >
                {applicant.status}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${budgetFit.className}`}
              >
                {budgetFit.label}
              </span>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <InfoTile icon={FileUser} label="Email" value={applicant.email} />
            <InfoTile icon={Phone} label="Phone" value={applicant.phone} />
            <InfoTile icon={MapPin} label="Location" value={applicant.location} />
            <InfoTile
              icon={CalendarClock}
              label="Experience"
              value={applicant.experience}
            />
            <InfoTile
              icon={PhilippinePeso}
              label="Asking salary"
              value={applicant.askingSalary}
            />
            <InfoTile
              icon={TrendingUp}
              label="Job budget"
              value={job.salary}
            />
            <InfoTile
              icon={TimerReset}
              label="Notice period"
              value={applicant.noticePeriod}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Budget comparison</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <InfoTile
              icon={PhilippinePeso}
              label="Budget range"
              value={job.salary}
            />
            <InfoTile
              icon={TrendingUp}
              label="Asking vs budget"
              value={`${applicant.askingSalary} (${budgetFit.label.toLowerCase()})`}
            />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Budget baseline runs from PHP {budgetRange.min.toLocaleString()} to PHP{' '}
            {budgetRange.max.toLocaleString()} per month for this role.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Application processing
          </p>
          <div className="mt-5 grid gap-5">
            <SelectField
              label="Application status"
              value={applicant.status}
              options={applicantStatuses}
              onChange={(value) => updateSelectedApplicant('status', value)}
            />
            <SelectField
              label="Current phase"
              value={applicant.phase}
              options={applicantPhases}
              onChange={(value) => updateSelectedApplicant('phase', value)}
            />
            <SelectField
              label="Interview level"
              value={applicant.interviewLevel}
              options={interviewLevels}
              onChange={(value) => updateSelectedApplicant('interviewLevel', value)}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Recruiter notes</p>
          <div className="mt-5 grid gap-5">
            <TextField
              label="Asking salary"
              value={applicant.askingSalary}
              onChange={(value) => updateSelectedApplicant('askingSalary', value)}
            />
            <TextField
              label="Notice period"
              value={applicant.noticePeriod}
              onChange={(value) => updateSelectedApplicant('noticePeriod', value)}
            />
            <TextAreaField
              label="Internal notes"
              value={applicant.notes}
              onChange={(value) => updateSelectedApplicant('notes', value)}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Education and skills
          </p>
          <p className="mt-4 text-sm font-medium text-slate-950">
            {applicant.education}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {applicant.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Application audit trail
          </p>
          <div className="mt-5 grid gap-4">
            {applicant.auditTrail?.map((entry) => (
              <div
                key={`${entry.time}-${entry.title}`}
                className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <History className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-slate-950">
                        {entry.title}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {entry.time}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
    <div className="rounded-2xl border border-blue-100 bg-white p-4">
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
    <label className="grid gap-2.5 text-sm font-medium text-slate-950">
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
    <label className="grid gap-2.5 text-sm font-medium text-slate-950">
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
    <label className="grid gap-2.5 text-sm font-medium text-slate-950">
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
    <div className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
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

function ApplicantSalaryScatterPlot({
  applicants
}: {
  applicants: RecruiterApplicant[];
}) {
  const points = applicants.map((applicant) => ({
    id: applicant.id,
    name: applicant.name,
    experience: parseExperienceYears(applicant.experience),
    salary: parseCurrencyAmount(applicant.askingSalary)
  }));

  const width = 560;
  const height = 280;
  const padding = 40;
  const maxExperience = Math.max(...points.map((point) => point.experience), 1);
  const maxSalary = Math.max(...points.map((point) => point.salary), 1);

  return (
    <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Experience axis
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Left to right shows increasing years of experience.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Salary axis
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Bottom to top shows increasing asking salary.
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[280px] min-w-[520px] w-full"
          role="img"
          aria-label="Scatter plot of applicant experience and asking salary"
        >
          <line
            x1={padding}
            y1={height - padding}
            x2={width - padding}
            y2={height - padding}
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#cbd5e1"
            strokeWidth="2"
          />

          {[0.25, 0.5, 0.75, 1].map((tick) => {
            const y = height - padding - tick * (height - padding * 2);
            const salary = Math.round((maxSalary * tick) / 1000) * 1000;

            return (
              <g key={tick}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-slate-400 text-[10px]"
                >
                  {salary / 1000}k
                </text>
              </g>
            );
          })}

          {[0.25, 0.5, 0.75, 1].map((tick) => {
            const x = padding + tick * (width - padding * 2);
            const years = Math.round(maxExperience * tick);

            return (
              <g key={tick}>
                <line
                  x1={x}
                  y1={padding}
                  x2={x}
                  y2={height - padding}
                  stroke="#f1f5f9"
                />
                <text
                  x={x}
                  y={height - padding + 18}
                  textAnchor="middle"
                  className="fill-slate-400 text-[10px]"
                >
                  {years}y
                </text>
              </g>
            );
          })}

          {points.map((point) => {
            const x =
              padding + (point.experience / maxExperience) * (width - padding * 2);
            const y =
              height -
              padding -
              (point.salary / maxSalary) * (height - padding * 2);

            return (
              <g key={point.id}>
                <circle cx={x} cy={y} r="6" fill="#2563eb" opacity="0.85" />
                <text
                  x={x + 10}
                  y={y - 10}
                  className="fill-slate-600 text-[10px]"
                >
                  {point.name}
                </text>
              </g>
            );
          })}

          <text
            x={width / 2}
            y={height - 6}
            textAnchor="middle"
            className="fill-slate-500 text-[11px]"
          >
            Years of experience
          </text>
          <text
            x={14}
            y={height / 2}
            textAnchor="middle"
            transform={`rotate(-90 14 ${height / 2})`}
            className="fill-slate-500 text-[11px]"
          >
            Asking salary
          </text>
        </svg>
      </div>
    </div>
  );
}

function CvPreviewModal({
  applicant,
  onClose
}: {
  applicant: RecruiterApplicant;
  onClose: () => void;
}) {
  return (
    <div className="max-h-[88vh] overflow-y-auto p-5 lg:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            CV preview
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            {applicant.name}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {applicant.cvFileName} · {applicant.cvFileType}
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          className="rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Uploaded document review
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This large modal is used to review the applicant's uploaded CV
              without leaving the recruiter job workspace.
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {applicant.cvFileType}
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-[1.9rem] border border-slate-200 bg-white shadow-inner">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
          <p className="text-sm font-medium text-slate-700">
            {applicant.cvFileName}
          </p>
        </div>
        <div className="space-y-6 p-6 lg:p-8">
          {applicant.cvPreviewSections?.map((section) => (
            <section key={section.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                {section.heading}
              </p>
              <div className="mt-3 space-y-2">
                {section.lines.map((line) => (
                  <p key={line} className="text-sm leading-7 text-slate-700">
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
