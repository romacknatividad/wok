'use client';

import { useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterApplicants } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileUser,
  MessagesSquare,
  Search,
  X
} from 'lucide-react';

type ApplicantRecord = (typeof recruiterApplicants)[number];

type ApplicantEvaluation = {
  recommendation: string;
  fitScore: string;
  communication: string;
  capability: string;
  salaryFit: string;
  noticeFit: string;
  strengths: string;
  concerns: string;
  recruiterAnalysis: string;
  nextStep: string;
};

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
    case 'Offer':
      return 'bg-emerald-50 text-emerald-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

function buildDefaultEvaluation(applicant: ApplicantRecord): ApplicantEvaluation {
  return {
    recommendation:
      applicant.status === 'Interview'
        ? 'Strong proceed'
        : applicant.status === 'Shortlist'
          ? 'Proceed with caution'
          : 'Needs more review',
    fitScore:
      applicant.status === 'Interview'
        ? '84'
        : applicant.status === 'Shortlist'
          ? '76'
          : '68',
    communication:
      applicant.jobTitle.includes('Support') || applicant.jobTitle.includes('Recruit')
        ? 'Strong'
        : 'Good',
    capability:
      applicant.experience.includes('7') || applicant.experience.includes('8')
        ? 'Advanced'
        : 'Qualified',
    salaryFit: applicant.askingSalary,
    noticeFit: applicant.noticePeriod,
    strengths: applicant.skills.slice(0, 3).join(', '),
    concerns: 'Validate current expectations, compensation alignment, and role-specific depth.',
    recruiterAnalysis: `${applicant.name} appears aligned for ${applicant.jobTitle}. Current review should focus on ${applicant.phase.toLowerCase()}, salary expectations, and whether the documented strengths map well to the team’s immediate hiring need.`,
    nextStep:
      applicant.status === 'Interview'
        ? 'Confirm final interviewer availability and capture structured feedback.'
        : 'Review profile details, align on recruiter notes, and decide whether to move forward.'
  };
}

export default function RecruiterApplicantsPage() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedApplicant, setSelectedApplicant] =
    useState<ApplicantRecord | null>(null);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  const [evaluations, setEvaluations] = useState<
    Record<number, ApplicantEvaluation>
  >(() =>
    Object.fromEntries(
      recruiterApplicants.map((applicant) => [
        applicant.id,
        buildDefaultEvaluation(applicant)
      ])
    )
  );

  const columns = useMemo<ColumnDef<ApplicantRecord>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Applicant',
        cell: ({ row }) => {
          const applicant = row.original;

          return (
            <div className="min-w-0">
              <p className="font-semibold text-slate-950">{applicant.name}</p>
              <p className="mt-1 text-sm text-slate-500">{applicant.email}</p>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                {applicant.summary}
              </p>
            </div>
          );
        }
      },
      {
        accessorKey: 'jobTitle',
        header: 'Applied job',
        cell: ({ row }) => {
          const applicant = row.original;

          return (
            <div className="min-w-0">
              <p className="font-medium text-slate-950">{applicant.jobTitle}</p>
              <p className="mt-1 text-sm text-slate-500">
                {[applicant.location, applicant.appliedAt].join(' | ')}
              </p>
            </div>
          );
        }
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(
              row.original.status
            )}`}
          >
            {row.original.status}
          </span>
        )
      },
      {
        accessorKey: 'experience',
        header: 'Experience',
        cell: ({ row }) => (
          <p className="text-sm font-medium text-slate-950">
            {row.original.experience}
          </p>
        )
      },
      {
        id: 'actions',
        header: () => <p className="text-right">Actions</p>,
        cell: ({ row }) => {
          const applicant = row.original;

          return (
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
                onClick={() => setSelectedApplicant(applicant)}
              >
                <MessagesSquare className="h-4 w-4" />
                Review
              </Button>
            </div>
          );
        }
      }
    ],
    []
  );

  const table = useReactTable({
    data: recruiterApplicants,
    columns,
    state: {
      globalFilter,
      pagination
    },
    onGlobalFilterChange: handleGlobalFilterChange,
    onPaginationChange: setPagination,
    globalFilterFn: (row, _, filterValue) => {
      const searchValue = String(filterValue).toLowerCase().trim();

      if (!searchValue) {
        return true;
      }

      return [
        row.original.name,
        row.original.email,
        row.original.jobTitle,
        row.original.status,
        row.original.location,
        row.original.summary
      ]
        .join(' ')
        .toLowerCase()
        .includes(searchValue);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const selectedEvaluation = selectedApplicant
    ? evaluations[selectedApplicant.id]
    : null;

  function handleGlobalFilterChange(value: string) {
    setGlobalFilter(value);
    setPagination((current) => ({
      ...current,
      pageIndex: 0
    }));
  }

  function updateEvaluation<K extends keyof ApplicantEvaluation>(
    field: K,
    value: ApplicantEvaluation[K]
  ) {
    if (!selectedApplicant) {
      return;
    }

    setEvaluations((current) => ({
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
                  Search the shared applicant archive, paginate through larger
                  pipelines, and open a review workspace for each candidate
                  without jumping job by job first.
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
                    <Link href="/dashboard">Back to Overview</Link>
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
              description="A searchable recruiter-focused table of applicants from different jobs in one module."
              action={
                <p className="text-sm text-slate-500">
                  {table.getFilteredRowModel().rows.length} applicants matching
                  the current view
                </p>
              }
            >
              <div className="mb-4 rounded-2xl border border-blue-100 bg-slate-50 p-4">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Search applicants
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      value={globalFilter}
                      onChange={(event) =>
                        handleGlobalFilterChange(event.target.value)
                      }
                      placeholder="Search by applicant, email, job, status, or location"
                      className="h-11 rounded-xl border-blue-100 bg-white pl-10"
                    />
                  </div>
                </label>
              </div>

              <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead className="bg-slate-50">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                          key={headerGroup.id}
                          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                        >
                          {headerGroup.headers.map((header) => (
                            <th key={header.id} className="px-5 py-3">
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                      {table.getRowModel().rows.length === 0 ? (
                        <tr>
                          <td
                            colSpan={columns.length}
                            className="px-5 py-12 text-center"
                          >
                            <p className="text-base font-semibold text-slate-950">
                              No applicants matched your search
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                              Try another name, role, or keyword to expand the
                              list.
                            </p>
                          </td>
                        </tr>
                      ) : (
                        table.getRowModel().rows.map((row) => (
                          <tr
                            key={row.id}
                            className="align-top transition hover:bg-blue-50/40"
                          >
                            {row.getVisibleCells().map((cell) => (
                              <td key={cell.id} className="px-5 py-4">
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            ))}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col gap-3 border-t border-blue-100 bg-slate-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">
                    Showing{' '}
                    {table.getFilteredRowModel().rows.length === 0
                      ? 0
                      : table.getState().pagination.pageIndex *
                          table.getState().pagination.pageSize +
                        1}{' '}
                    to{' '}
                    {Math.min(
                      (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                      table.getFilteredRowModel().rows.length
                    )}{' '}
                    of {table.getFilteredRowModel().rows.length} applicants
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      disabled={!table.getCanPreviousPage()}
                      onClick={() => table.previousPage()}
                      className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <div className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                      Page {table.getState().pagination.pageIndex + 1} of{' '}
                      {table.getPageCount() || 1}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      disabled={!table.getCanNextPage()}
                      onClick={() => table.nextPage()}
                      className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition ${
          selectedApplicant
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSelectedApplicant(null)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-2xl transition-transform duration-300 ${
          selectedApplicant ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedApplicant && selectedEvaluation ? (
          <ApplicantReviewPanel
            applicant={selectedApplicant}
            evaluation={selectedEvaluation}
            onClose={() => setSelectedApplicant(null)}
            onChange={updateEvaluation}
          />
        ) : null}
      </aside>
    </>
  );
}

function ApplicantReviewPanel({
  applicant,
  evaluation,
  onClose,
  onChange
}: {
  applicant: ApplicantRecord;
  evaluation: ApplicantEvaluation;
  onClose: () => void;
  onChange: <K extends keyof ApplicantEvaluation>(
    field: K,
    value: ApplicantEvaluation[K]
  ) => void;
}) {
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
          <p className="mt-2 text-sm text-slate-500">
            {[applicant.jobTitle, applicant.phase].join(' | ')}
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

      <div className="mt-6 grid gap-6">
        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Applicant snapshot
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <SnapshotCard label="Email" value={applicant.email} />
            <SnapshotCard label="Phone" value={applicant.phone} />
            <SnapshotCard label="Location" value={applicant.location} />
            <SnapshotCard label="Experience" value={applicant.experience} />
            <SnapshotCard label="Asking salary" value={applicant.askingSalary} />
            <SnapshotCard label="Notice period" value={applicant.noticePeriod} />
            <SnapshotCard label="Status" value={applicant.status} />
            <SnapshotCard label="Interview level" value={applicant.interviewLevel} />
          </div>
          <div className="mt-4 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Recruiter notes
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {applicant.notes}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Recruiter evaluation
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Capture your evaluation and analysis for this applicant while
            reviewing their current profile and application details.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <FormField label="Recommendation">
              <select
                value={evaluation.recommendation}
                onChange={(event) =>
                  onChange('recommendation', event.target.value)
                }
                className="h-11 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                <option>Strong proceed</option>
                <option>Proceed with caution</option>
                <option>Needs more review</option>
                <option>Hold</option>
                <option>Not aligned</option>
              </select>
            </FormField>

            <FormField label="Fit score">
              <Input
                value={evaluation.fitScore}
                onChange={(event) => onChange('fitScore', event.target.value)}
                placeholder="0-100"
                className="h-11 rounded-xl border-blue-100 bg-white"
              />
            </FormField>

            <FormField label="Communication assessment">
              <select
                value={evaluation.communication}
                onChange={(event) =>
                  onChange('communication', event.target.value)
                }
                className="h-11 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                <option>Strong</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Needs validation</option>
              </select>
            </FormField>

            <FormField label="Capability assessment">
              <select
                value={evaluation.capability}
                onChange={(event) => onChange('capability', event.target.value)}
                className="h-11 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                <option>Advanced</option>
                <option>Qualified</option>
                <option>Promising</option>
                <option>Needs validation</option>
              </select>
            </FormField>

            <FormField label="Salary fit">
              <Input
                value={evaluation.salaryFit}
                onChange={(event) => onChange('salaryFit', event.target.value)}
                className="h-11 rounded-xl border-blue-100 bg-white"
              />
            </FormField>

            <FormField label="Notice fit">
              <Input
                value={evaluation.noticeFit}
                onChange={(event) => onChange('noticeFit', event.target.value)}
                className="h-11 rounded-xl border-blue-100 bg-white"
              />
            </FormField>
          </div>

          <div className="mt-4 grid gap-4">
            <FormField label="Key strengths">
              <textarea
                value={evaluation.strengths}
                onChange={(event) => onChange('strengths', event.target.value)}
                rows={3}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              />
            </FormField>

            <FormField label="Risks or concerns">
              <textarea
                value={evaluation.concerns}
                onChange={(event) => onChange('concerns', event.target.value)}
                rows={3}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              />
            </FormField>

            <FormField label="Recruiter analysis">
              <textarea
                value={evaluation.recruiterAnalysis}
                onChange={(event) =>
                  onChange('recruiterAnalysis', event.target.value)
                }
                rows={5}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              />
            </FormField>

            <FormField label="Recommended next step">
              <textarea
                value={evaluation.nextStep}
                onChange={(event) => onChange('nextStep', event.target.value)}
                rows={3}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              />
            </FormField>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Evaluation
            </Button>
            <Button
              asChild
              type="button"
              variant="outline"
              className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href={`/dashboard/jobs/${applicant.jobSlug}`}>Open Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapshotCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}

function FormField({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}
