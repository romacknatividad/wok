'use client';

import { useMemo, useState } from 'react';
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
import {
  recruiterApplicants,
  recruiterJobs
} from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  FileUser,
  Search,
  X
} from 'lucide-react';

type ApplicantRecord = (typeof recruiterApplicants)[number];

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

export default function RecruiterApplicantsPage() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedApplicant, setSelectedApplicant] =
    useState<ApplicantRecord | null>(null);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

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
                <FileText className="h-4 w-4" />
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

  function handleGlobalFilterChange(value: string) {
    setGlobalFilter(value);
    setPagination((current) => ({
      ...current,
      pageIndex: 0
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
        {selectedApplicant ? (
          <ApplicantReviewPanel
            applicant={selectedApplicant}
            onClose={() => setSelectedApplicant(null)}
          />
        ) : null}
      </aside>
    </>
  );
}

function ApplicantReviewPanel({
  applicant,
  onClose
}: {
  applicant: ApplicantRecord;
  onClose: () => void;
}) {
  const relatedJob = recruiterJobs.find((job) => job.slug === applicant.jobSlug);
  const latestUpdate = applicant.auditTrail[applicant.auditTrail.length - 1];

  return (
    <div className="p-5 lg:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Application review
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
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClassName(
                applicant.status
              )}`}
            >
              {applicant.status}
            </span>
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              {applicant.phase}
            </span>
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-950">
            Application overview
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <SnapshotCard
              label="Applied on"
              value={formatTimelineDate(applicant.appliedAt)}
            />
            <SnapshotCard
              label="Latest status update"
              value={
                latestUpdate
                  ? formatTimelineDate(latestUpdate.time)
                  : 'No updates yet'
              }
            />
            <SnapshotCard label="Applied role" value={applicant.jobTitle} />
            <SnapshotCard
              label="Job posted"
              value={
                relatedJob?.postedDate
                  ? formatIsoDate(relatedJob.postedDate)
                  : 'Not available'
              }
            />
            <SnapshotCard label="Interview stage" value={applicant.interviewLevel} />
            <SnapshotCard label="Experience" value={applicant.experience} />
            <SnapshotCard label="Location" value={applicant.location} />
            <SnapshotCard label="Education" value={applicant.education} />
            <SnapshotCard label="Expected salary" value={applicant.askingSalary} />
            <SnapshotCard label="Notice period" value={applicant.noticePeriod} />
            <SnapshotCard label="Email" value={applicant.email} />
            <SnapshotCard label="Phone" value={applicant.phone} />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Submitted application
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {applicant.summary}
          </p>

          <div className="mt-5 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Skills highlighted
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {applicant.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-100 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Submitted file
            </p>
            <p className="mt-2 text-sm font-medium text-slate-950">
              {applicant.cvFileName}
            </p>
            <p className="mt-1 text-sm text-slate-500">{applicant.cvFileType}</p>
          </div>

          <div className="mt-4 grid gap-4">
            {applicant.cvPreviewSections.map((section) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-blue-100 bg-slate-50 p-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {section.heading}
                </p>
                <div className="mt-3 grid gap-2">
                  {section.lines.map((line) => (
                    <p key={line} className="text-sm leading-6 text-slate-700">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Status timeline</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            A compiled view of the applicant&apos;s own submission and every dated
            status movement recorded so far.
          </p>

          <div className="mt-5 grid gap-4">
            {applicant.auditTrail.map((entry, index) => (
              <div
                key={`${entry.time}-${entry.title}`}
                className="relative rounded-2xl border border-blue-100 bg-slate-50 p-4"
              >
                {index < applicant.auditTrail.length - 1 ? (
                  <div className="absolute bottom-[-1rem] left-7 top-12 w-px bg-blue-100" />
                ) : null}
                <div className="flex gap-3">
                  <div className="mt-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {formatTimelineDate(entry.time)}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-950">
                      {entry.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            type="button"
            className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href={`/dashboard/jobs/${applicant.jobSlug}`}>Open Job</Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            onClick={onClose}
          >
            Close review
          </Button>
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

function formatIsoDate(value: string) {
  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatTimelineDate(value: string) {
  const parsed = parseApplicantDate(value);

  if (!parsed) {
    return value;
  }

  return parsed.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function parseApplicantDate(value: string) {
  const now = new Date();
  const trimmed = value.trim();

  if (trimmed.startsWith('Today,')) {
    return parseRelativeDate(now, trimmed.replace('Today,', '').trim());
  }

  if (trimmed.startsWith('Yesterday,')) {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    return parseRelativeDate(yesterday, trimmed.replace('Yesterday,', '').trim());
  }

  const normalized = /\b\d{4}\b/.test(trimmed)
    ? trimmed
    : `${trimmed}, ${now.getFullYear()}`;
  const parsed = new Date(normalized);

  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function parseRelativeDate(baseDate: Date, timePart: string) {
  const match = timePart.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);

  if (!match) {
    return null;
  }

  let hours = Number(match[1]) % 12;
  const minutes = Number(match[2]);

  if (match[3].toUpperCase() === 'PM') {
    hours += 12;
  }

  const date = new Date(baseDate);
  date.setHours(hours, minutes, 0, 0);

  return date;
}
