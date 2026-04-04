'use client';

import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import {
  Button as AriaButton,
  DropIndicator,
  GridList,
  GridListItem,
  Text,
  isTextDropItem,
  useDragAndDrop,
  useListData,
  type ListData
} from 'react-aria-components';
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
  CircleDashed,
  CircleX,
  Eye,
  FileUser,
  HandCoins,
  History,
  Lightbulb,
  MapPin,
  MessagesSquare,
  NotebookPen,
  PhilippinePeso,
  Phone,
  ShieldAlert,
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

const statusPhaseDefaults: Record<string, string> = {
  New: 'Application Review',
  Review: 'Recruiter Screen',
  Screening: 'Assessment',
  Shortlist: 'Hiring Manager Review',
  Interview: 'Technical Interview',
  Offer: 'Offer Discussion',
  Rejected: 'Application Review'
};

const applicantBoardLanes = [
  {
    status: 'New',
    title: 'New'
  },
  {
    status: 'Review',
    title: 'In Review'
  },
  {
    status: 'Screening',
    title: 'Screening'
  },
  {
    status: 'Shortlist',
    title: 'Shortlist'
  },
  {
    status: 'Interview',
    title: 'Interview'
  },
  {
    status: 'Offer',
    title: 'Offer'
  },
  {
    status: 'Rejected',
    title: 'Rejected'
  }
] as const;

const applicantPhases = [
  'Application Review',
  'Recruiter Screen',
  'Assessment',
  'Hiring Manager Review',
  'Technical Interview',
  'Panel Interview',
  'Offer Discussion'
];

const applicantPhaseDescriptions: Record<string, string> = {
  'Application Review':
    'Initial pass to confirm basic fit, role alignment, and required qualifications.',
  'Recruiter Screen':
    'Recruiter-led call or review to validate experience, interest, and key details.',
  Assessment:
    'Skills test or take-home assessment to verify capability for the role.',
  'Hiring Manager Review':
    'Hiring manager reviews the profile and decides if the candidate moves forward.',
  'Technical Interview':
    'Deep dive on role-specific skills, problem-solving, and practical experience.',
  'Panel Interview':
    'Cross-functional interview to validate collaboration, depth, and team fit.',
  'Offer Discussion':
    'Compensation alignment, final checks, and preparation for the offer stage.'
};

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

function isArchivedJob(status: string) {
  return status === 'Filled' || status === 'Closed';
}

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

function getWorkModeFitLabel(jobLocation: string, applicantLocation: string) {
  const normalizedJobLocation = jobLocation.toLowerCase();
  const normalizedApplicantLocation = applicantLocation.toLowerCase();

  if (normalizedJobLocation.includes('remote')) {
    return 'Strong';
  }

  if (
    normalizedJobLocation.includes('hybrid') ||
    normalizedJobLocation.includes('on-site')
  ) {
    if (
      normalizedApplicantLocation.includes('makati') ||
      normalizedApplicantLocation.includes('pasig') ||
      normalizedApplicantLocation.includes('quezon') ||
      normalizedApplicantLocation.includes('remote, philippines')
    ) {
      return 'Moderate';
    }

    return 'Low';
  }

  return 'Moderate';
}

function normalizeRequirementTokens(text: string) {
  return text
    .toLowerCase()
    .split(/[,./]| and | with | plus |\n/)
    .map((part) => part.trim())
    .filter((part) => part.length > 2);
}

function getExperienceTarget(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('senior')) {
    return { min: 5, ideal: 7, label: 'Senior-level target' };
  }

  if (normalizedTitle.includes('associate') || normalizedTitle.includes('junior')) {
    return { min: 1, ideal: 2, label: 'Associate-level target' };
  }

  return { min: 3, ideal: 4, label: 'Mid-level target' };
}

function getAppliedAgeSummary(appliedAt: string) {
  const normalized = appliedAt.toLowerCase();

  if (normalized.includes('today')) {
    return 'Fresh application';
  }

  if (normalized.includes('yesterday')) {
    return '1 day in pipeline';
  }

  if (normalized.includes('mar 31')) {
    return '2 days in pipeline';
  }

  if (normalized.includes('mar 30')) {
    return '3 days in pipeline';
  }

  return 'Recently applied';
}

function getStageUrgency(phase: string, status: string) {
  if (status === 'Offer') {
    return 'High priority: offer-stage follow-up needed.';
  }

  if (phase === 'Technical Interview' || phase === 'Panel Interview') {
    return 'High priority: panel feedback should be collected quickly.';
  }

  if (phase === 'Assessment') {
    return 'Medium priority: wait for exam results before moving forward.';
  }

  return 'Standard priority: recruiter review can continue.';
}

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getApplicantInsights(applicant: RecruiterApplicant, job: RecruiterJob) {
  const asking = parseCurrencyAmount(applicant.askingSalary);
  const budget = parseSalaryRange(job.salary);
  const years = parseExperienceYears(applicant.experience);
  const experienceTarget = getExperienceTarget(job.title);
  const requirementTokens = normalizeRequirementTokens(job.requirements);
  const skillTokens = applicant.skills.map((skill) => skill.toLowerCase());
  const matchedRequirements = requirementTokens.filter((requirement) =>
    skillTokens.some(
      (skill) =>
        skill.includes(requirement) ||
        requirement.includes(skill) ||
        (requirement.includes('communication') && skill.includes('support')) ||
        (requirement.includes('backend') && skill.includes('node')) ||
        (requirement.includes('spreadsheet') && skill.includes('excel'))
    )
  );
  const requirementCoverage = requirementTokens.length
    ? matchedRequirements.length / requirementTokens.length
    : 0.5;

  const budgetDelta = asking - budget.max;
  const budgetMinDelta = asking - budget.min;
  const budgetScore =
    asking <= budget.max && asking >= budget.min
      ? 100
      : asking < budget.min
        ? 84
        : clampScore(100 - (budgetDelta / Math.max(budget.max, 1)) * 160);

  const experienceScore =
    years >= experienceTarget.ideal
      ? 100
      : years >= experienceTarget.min
        ? clampScore(82 + (years - experienceTarget.min) * 8)
        : clampScore(55 + years * 8);

  const requirementScore = clampScore(requirementCoverage * 100);

  const noticeDays = parseCurrencyAmount(applicant.noticePeriod);
  const noticeScore =
    applicant.noticePeriod.toLowerCase().includes('immediate')
      ? 100
      : noticeDays <= 15
        ? 92
        : noticeDays <= 30
          ? 78
          : 58;

  const workModeFitLabel = getWorkModeFitLabel(job.location, applicant.location);
  const workModeScore =
    workModeFitLabel === 'Strong' ? 100 : workModeFitLabel === 'Moderate' ? 74 : 45;

  const overallScore = clampScore(
    requirementScore * 0.3 +
      experienceScore * 0.25 +
      budgetScore * 0.2 +
      noticeScore * 0.15 +
      workModeScore * 0.1
  );

  const compensationDeltaAmount =
    asking > budget.max ? asking - budget.max : asking < budget.min ? budget.min - asking : 0;
  const compensationDeltaPercent =
    compensationDeltaAmount > 0
      ? Math.round((compensationDeltaAmount / Math.max(asking > budget.max ? budget.max : budget.min, 1)) * 100)
      : 0;

  const strengths = [
    requirementScore >= 70
      ? `Skills map well to the role with ${matchedRequirements.length} requirement signals matched.`
      : null,
    experienceScore >= 85
      ? `${applicant.experience} lines up strongly with the ${experienceTarget.label.toLowerCase()}.`
      : null,
    noticeScore >= 90
      ? `Notice period is recruiter-friendly at ${applicant.noticePeriod.toLowerCase()}.`
      : null,
    budgetScore >= 90
      ? `Compensation request is aligned with the current budget.`
      : null
  ].filter(Boolean) as string[];

  const risks = [
    asking > budget.max
      ? `Asking salary is PHP ${compensationDeltaAmount.toLocaleString()} above budget (${compensationDeltaPercent}%).`
      : null,
    asking < budget.min
      ? `Requested pay is below the planned budget floor, which may indicate leveling mismatch.`
      : null,
    noticeScore < 70
      ? `Notice period of ${applicant.noticePeriod.toLowerCase()} may slow hiring momentum.`
      : null,
    requirementScore < 50
      ? `Requirement coverage is still light for this role based on current profile data.`
      : null,
    workModeScore < 60
      ? `Location appears less ideal for the role's current work setup.`
      : null
  ].filter(Boolean) as string[];

  const recommendation =
    overallScore >= 85
      ? {
          label: 'Strong proceed',
          tone: 'border-emerald-200 bg-emerald-50 text-emerald-800',
          reason: 'High role fit with manageable decision risks.'
        }
      : overallScore >= 70
        ? {
            label: 'Proceed with caution',
            tone: 'border-amber-200 bg-amber-50 text-amber-800',
            reason: 'Promising profile, but one or two tradeoffs need alignment.'
          }
        : overallScore >= 55
          ? {
              label: 'Hold',
              tone: 'border-slate-200 bg-slate-100 text-slate-700',
              reason: 'Some fit indicators are present, but the profile needs more validation.'
            }
          : {
              label: 'Not aligned',
              tone: 'border-rose-200 bg-rose-50 text-rose-800',
              reason: 'Current signals suggest meaningful mismatch against role needs.'
            };

  const interviewReadiness =
    overallScore >= 85
      ? 'Ready for hiring manager or final interview.'
      : overallScore >= 70
        ? 'Ready for next-stage interview after salary or notice alignment.'
        : overallScore >= 55
          ? 'Best suited for additional screening before advancing.'
          : 'Not currently ready for progression.';

  const nextBestAction =
    asking > budget.max
      ? 'Align on compensation before moving deeper into the process.'
      : applicant.phase === 'Assessment'
        ? 'Wait for the technical exam result, then decide on interview progression.'
        : applicant.phase === 'Technical Interview' || applicant.phase === 'Panel Interview'
          ? 'Collect panel feedback and decide whether to prepare an offer.'
          : applicant.status === 'New' || applicant.status === 'Review'
            ? 'Schedule the recruiter screen and validate core fit quickly.'
            : 'Move to the next interview checkpoint and capture structured feedback.';

  return {
    overallScore,
    recommendation,
    interviewReadiness,
    nextBestAction,
    workModeFitLabel,
    compensationDeltaAmount,
    compensationDeltaPercent,
    requirementCoverage: {
      matched: matchedRequirements,
      missing: requirementTokens.filter(
        (requirement) => !matchedRequirements.includes(requirement)
      ),
      percent: requirementScore
    },
    breakdown: [
      {
        label: 'Skills match',
        value: requirementScore,
        detail: `${matchedRequirements.length} signals matched`
      },
      {
        label: 'Salary fit',
        value: budgetScore,
        detail:
          asking > budget.max
            ? `${compensationDeltaPercent}% above budget`
            : asking < budget.min
              ? 'Below budget floor'
              : 'Within budget'
      },
      {
        label: 'Experience fit',
        value: experienceScore,
        detail: `${applicant.experience} vs ${experienceTarget.label.toLowerCase()}`
      },
      {
        label: 'Notice period',
        value: noticeScore,
        detail: applicant.noticePeriod
      },
      {
        label: 'Work mode fit',
        value: workModeScore,
        detail: workModeFitLabel
      }
    ],
    strengths: strengths.slice(0, 3),
    risks: risks.slice(0, 3),
    timelineInsight: `${getAppliedAgeSummary(applicant.appliedAt)}. ${getStageUrgency(
      applicant.phase,
      applicant.status
    )}`,
    experienceContext:
      years >= experienceTarget.min
        ? `${applicant.experience} meets the expected range for this role.`
        : `${applicant.experience} may be light for the expected role seniority.`,
    compensationInsight:
      asking > budget.max
        ? `Candidate is asking PHP ${compensationDeltaAmount.toLocaleString()} above the current budget ceiling.`
        : asking < budget.min
          ? `Candidate is below the planned budget floor by PHP ${compensationDeltaAmount.toLocaleString()}.`
          : 'Candidate compensation is currently within the approved budget band.'
  };
}

export function RecruiterJobCandidatesWorkspace({
  job,
  applicants
}: {
  job: RecruiterJob;
  applicants: RecruiterApplicant[];
}) {
  const [selectedApplicantId, setSelectedApplicantId] = useState<number | null>(null);
  const [previewApplicantId, setPreviewApplicantId] = useState<number | null>(null);
  const [showPhaseInfo, setShowPhaseInfo] = useState(false);
  const list = useListData<RecruiterApplicant>({
    initialItems: applicants,
    getKey: (item) => item.id
  });

  const selectedApplicant = useMemo(() => {
    if (selectedApplicantId === null) {
      return null;
    }

    return list.getItem(selectedApplicantId) ?? null;
  }, [list, selectedApplicantId]);

  const previewApplicant = useMemo(() => {
    if (previewApplicantId === null) {
      return null;
    }

    return list.getItem(previewApplicantId) ?? null;
  }, [list, previewApplicantId]);

  const boardApplicants = list.items;
  const totalApplicants = boardApplicants.length;
  const shortlisted = boardApplicants.filter(
    (applicant) =>
      applicant.status === 'Shortlist' ||
      applicant.status === 'Interview' ||
      applicant.status === 'Offer'
  ).length;
  const inInterview = boardApplicants.filter(
    (applicant) => applicant.status === 'Interview'
  ).length;
  const budgetRange = parseSalaryRange(job.salary);
  const archivedJob = isArchivedJob(job.status);

  function updateSelectedApplicant(
    field: keyof RecruiterApplicant,
    value: string | string[]
  ) {
    if (!selectedApplicant) {
      return;
    }

    list.update(selectedApplicant.id, {
      ...selectedApplicant,
      [field]: value
    });
  }

  function moveApplicantToStatus(applicantId: number, nextStatus: string) {
    if (archivedJob) {
      return;
    }

    const applicant = list.getItem(applicantId);

    if (!applicant || applicant.status === nextStatus) {
      return;
    }

    list.update(applicantId, {
      ...applicant,
      status: nextStatus,
      phase: statusPhaseDefaults[nextStatus] ?? applicant.phase
    });
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
                  Monitor the applicant pipeline in draggable swimlanes, move
                  candidates between stages, compare asking salaries against the
                  job budget, and open a recruiter sidebar to review the full
                  application record.
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
                  {archivedJob ? (
                    <Button
                      type="button"
                      variant="outline"
                      disabled
                      className="rounded-full border-blue-100 bg-white text-slate-400"
                    >
                      Archived record
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <Link href={`/dashboard/jobs/${job.slug}/edit`}>
                        Edit job details
                      </Link>
                    </Button>
                  )}
                </div>
                {archivedJob && job.endDate ? (
                  <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    This job {job.status === 'Filled' ? 'was filled' : 'ended'} on{' '}
                    {new Date(`${job.endDate}T00:00:00`).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                    . The recruiter record is now frozen and no longer editable.
                  </div>
                ) : null}
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
              title="Applicant Pipeline"
              description="Drag applicant cards across stages to keep the recruitment flow current. Click a card to open the recruiter review sidebar."
            >
              <div className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-600">
                    Use the phases to keep everyone aligned on what comes next.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setShowPhaseInfo((current) => !current)}
                  >
                    {showPhaseInfo ? 'Hide phase details' : 'Show phase details'}
                  </Button>
                </div>
                {showPhaseInfo ? (
                  <div className="mb-5 grid gap-3 rounded-[1.5rem] border border-blue-100 bg-white p-4 text-sm text-slate-600 sm:grid-cols-2">
                    {applicantPhases.map((phase) => (
                      <div
                        key={phase}
                        className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                          {phase}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {applicantPhaseDescriptions[phase]}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {boardApplicants.length > 0 ? (
                  <div className="overflow-x-auto pb-2">
                    <div className="grid min-w-[1480px] grid-cols-7 gap-4">
                      {applicantBoardLanes.map((lane) => (
                        <ApplicantStageLane
                          key={lane.status}
                          lane={lane}
                          list={list}
                          archivedJob={archivedJob}
                          job={job}
                          selectedApplicantId={selectedApplicantId}
                          onSelectApplicant={setSelectedApplicantId}
                          onPreviewApplicant={setPreviewApplicantId}
                          onMoveApplicant={moveApplicantToStatus}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-[1.4rem] border border-dashed border-blue-200 bg-blue-50/40 p-8 text-sm text-slate-600">
                    No applicants have been added to this job record yet.
                  </div>
                )}

                <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
                  <p className="text-sm leading-6 text-slate-500">
                    Dragging a card updates its application stage in this job workspace.
                    Open the sidebar to adjust the detailed phase, interview level,
                    compensation notes, and audit context.
                  </p>
                  <div className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                    {archivedJob ? 'Archived board' : 'Drag and drop enabled'}
                  </div>
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Salary vs Experience"
              description="A scatter plot plus quick distribution charts for salary, experience, education, and sex."
            >
              <div className="grid gap-6">
                <ApplicantSalaryScatterPlot applicants={boardApplicants} />
                <div className="grid gap-6 lg:grid-cols-2">
                  <ApplicantSalaryBarChart applicants={boardApplicants} />
                  <ApplicantExperienceBarChart applicants={boardApplicants} />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <ApplicantEducationPieChart applicants={boardApplicants} />
                  <ApplicantSexPieChart applicants={boardApplicants} />
                </div>
              </div>
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

function ApplicantStageLane({
  lane,
  list,
  archivedJob,
  job,
  selectedApplicantId,
  onSelectApplicant,
  onPreviewApplicant,
  onMoveApplicant
}: {
  lane: (typeof applicantBoardLanes)[number];
  list: ListData<RecruiterApplicant>;
  archivedJob: boolean;
  job: RecruiterJob;
  selectedApplicantId: number | null;
  onSelectApplicant: (applicantId: number) => void;
  onPreviewApplicant: (applicantId: number) => void;
  onMoveApplicant: (applicantId: number, nextStatus: string) => void;
}) {
  const laneItems = useMemo(
    () => list.items.filter((applicant) => applicant.status === lane.status),
    [lane.status, list.items]
  );

  const { dragAndDropHooks } = useDragAndDrop({
    isDisabled: archivedJob,
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className="mx-3 h-2 rounded-full bg-blue-400/40"
        />
      );
    },
    getItems(keys) {
      return Array.from(keys).map((key) => ({
        'applicant-id': String(key),
        'text/plain': list.getItem(key)?.name || ''
      }));
    },
    acceptedDragTypes: ['applicant-id'],
    getDropOperation: () => 'move',
    async onInsert(event) {
      const droppedIds = await Promise.all(
        event.items
          .filter(isTextDropItem)
          .map((item) => item.getText('applicant-id'))
      );
      const ids = droppedIds.map((id) => Number(id)).filter(Number.isFinite);

      ids.forEach((id) => onMoveApplicant(id, lane.status));

      if (event.target.dropPosition === 'before') {
        list.moveBefore(event.target.key, ids);
      } else if (event.target.dropPosition === 'after') {
        list.moveAfter(event.target.key, ids);
      }
    },
    async onRootDrop(event) {
      const droppedIds = await Promise.all(
        event.items
          .filter(isTextDropItem)
          .map((item) => item.getText('applicant-id'))
      );
      const ids = droppedIds.map((id) => Number(id)).filter(Number.isFinite);

      ids.forEach((id) => onMoveApplicant(id, lane.status));
    },
    onReorder(event) {
      const reorderedKeys = Array.from(event.keys);
      if (event.target.dropPosition === 'before') {
        list.moveBefore(event.target.key, reorderedKeys);
      } else if (event.target.dropPosition === 'after') {
        list.moveAfter(event.target.key, reorderedKeys);
      }
    }
  });

  return (
    <div className="flex min-h-[32rem] flex-col rounded-[1.5rem] border border-blue-100 bg-white/85 p-3">
      <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">{lane.title}</p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClassName(
              lane.status
            )}`}
          >
            {laneItems.length}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-3">
        <GridList
          aria-label={`${lane.title} applicants`}
          items={laneItems}
          selectionMode="single"
          onAction={(key) => onSelectApplicant(Number(key))}
          dragAndDropHooks={dragAndDropHooks}
          className="flex flex-1 flex-col gap-3"
          renderEmptyState={() => (
            <div className="flex flex-1 items-center justify-center rounded-[1.4rem] border border-dashed border-blue-200 bg-blue-50/40 px-4 py-6 text-center text-sm leading-6 text-slate-500">
              {archivedJob
                ? 'No applicants are stored in this stage.'
                : 'Drop an applicant card here to move them into this stage.'}
            </div>
          )}
        >
          {(applicant) => (
            <GridListItem
              id={applicant.id}
              textValue={applicant.name}
              className={({ isDropTarget }) =>
                `rounded-[1.4rem] border p-4 text-left shadow-sm transition ${
                  isDropTarget
                    ? 'border-blue-300 bg-blue-50/80'
                    : 'border-blue-100 bg-white hover:-translate-y-0.5 hover:shadow-md'
                }`
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-950">
                    {applicant.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-slate-500">
                    {applicant.experience} | {applicant.location}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${getStatusClassName(
                    lane.status
                  )}`}
                >
                  {lane.title}
                </span>
              </div>

              <div className="mt-3 grid gap-2">
                <p className="text-sm text-slate-600">{applicant.appliedAt}</p>
                <Text className="line-clamp-2 text-sm leading-6 text-slate-600">
                  {applicant.summary}
                </Text>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <div className="flex items-center gap-2">
                  <AriaButton
                    slot="drag"
                    className="rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Drag
                  </AriaButton>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => onPreviewApplicant(applicant.id)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </GridListItem>
          )}
        </GridList>
      </div>
    </div>
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
  const insights = getApplicantInsights(applicant, job);

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
        <div className={`rounded-[1.75rem] border p-5 ${insights.recommendation.tone}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">Decision summary</p>
              <p className="mt-2 text-2xl font-semibold">{insights.recommendation.label}</p>
              <p className="mt-2 text-sm leading-7">{insights.recommendation.reason}</p>
            </div>
            <div className="rounded-2xl bg-white/80 px-4 py-3 text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Match score
              </p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {insights.overallScore}
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <InsightChip
              icon={Lightbulb}
              label="Interview readiness"
              value={insights.interviewReadiness}
            />
            <InsightChip
              icon={ArrowRight}
              label="Next best action"
              value={insights.nextBestAction}
            />
          </div>
        </div>

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
          <div className="flex items-center gap-2 text-slate-950">
            <Lightbulb className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold">Match score breakdown</p>
          </div>
          <div className="mt-5 grid gap-4">
            {insights.breakdown.map((item) => (
              <div key={item.label} className="grid gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-950">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.detail}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">{item.value}/100</p>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full ${
                      item.value >= 85
                        ? 'bg-emerald-500'
                        : item.value >= 70
                          ? 'bg-blue-500'
                          : item.value >= 55
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                    }`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
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
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <InfoTile
              icon={HandCoins}
              label="Compensation insight"
              value={insights.compensationInsight}
            />
            <InfoTile
              icon={TrendingUp}
              label="Experience context"
              value={insights.experienceContext}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50/60 p-5">
            <div className="flex items-center gap-2 text-emerald-800">
              <CircleCheckBig className="h-4 w-4" />
              <p className="text-sm font-semibold">Key strengths</p>
            </div>
            <div className="mt-4 grid gap-3">
              {insights.strengths.length > 0 ? (
                insights.strengths.map((strength) => (
                  <div
                    key={strength}
                    className="rounded-2xl border border-emerald-200 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {strength}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-emerald-200 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700">
                  Core strengths will become clearer after more screening feedback is added.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-rose-100 bg-rose-50/60 p-5">
            <div className="flex items-center gap-2 text-rose-800">
              <ShieldAlert className="h-4 w-4" />
              <p className="text-sm font-semibold">Decision risks</p>
            </div>
            <div className="mt-4 grid gap-3">
              {insights.risks.length > 0 ? (
                insights.risks.map((risk) => (
                  <div
                    key={risk}
                    className="rounded-2xl border border-rose-200 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {risk}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-rose-200 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700">
                  No major risks are standing out from the current applicant data.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Requirement match</p>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              Requirement coverage based on current job requirements and applicant skills.
            </p>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              {insights.requirementCoverage.percent}% coverage
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Matched
              </p>
              <div className="mt-3 grid gap-2">
                {insights.requirementCoverage.matched.length > 0 ? (
                  insights.requirementCoverage.matched.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="capitalize">{item}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No strong requirement matches detected yet.</p>
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Still to validate
              </p>
              <div className="mt-3 grid gap-2">
                {insights.requirementCoverage.missing.slice(0, 5).length > 0 ? (
                  insights.requirementCoverage.missing.slice(0, 5).map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <span className="capitalize">{item}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Current signals already cover the visible requirements.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Timeline insight</p>
          <div className="mt-4 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-sm leading-7 text-slate-600">{insights.timelineInsight}</p>
          </div>
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

function InsightChip({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/80 p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.16em]">{label}</p>
      </div>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-950">{value}</p>
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

function ApplicantSalaryBarChart({
  applicants
}: {
  applicants: RecruiterApplicant[];
}) {
  const buckets = [
    { label: '< 30k', min: 0, max: 30000 },
    { label: '30-50k', min: 30000, max: 50000 },
    { label: '50-80k', min: 50000, max: 80000 },
    { label: '80-120k', min: 80000, max: 120000 },
    { label: '120k+', min: 120000, max: Infinity }
  ];
  const counts = buckets.map(
    (bucket) =>
      applicants.filter((applicant) => {
        const salary = parseCurrencyAmount(applicant.askingSalary);
        return salary >= bucket.min && salary < bucket.max;
      }).length
  );
  const maxCount = Math.max(...counts, 1);

  return (
    <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
      <p className="text-sm font-semibold text-slate-950">Salary distribution</p>
      <p className="mt-2 text-sm text-slate-600">
        Grouped asking salaries across the applicant pool.
      </p>
      <div className="mt-5 grid gap-3">
        {buckets.map((bucket, index) => (
          <div key={bucket.label} className="grid gap-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>{bucket.label}</span>
              <span>{counts[index]}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-blue-500"
                style={{ width: `${(counts[index] / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApplicantExperienceBarChart({
  applicants
}: {
  applicants: RecruiterApplicant[];
}) {
  const buckets = [
    { label: '0-1 yrs', min: 0, max: 1 },
    { label: '2-3 yrs', min: 1, max: 3 },
    { label: '4-6 yrs', min: 3, max: 6 },
    { label: '7-9 yrs', min: 6, max: 9 },
    { label: '10+ yrs', min: 9, max: Infinity }
  ];
  const counts = buckets.map(
    (bucket) =>
      applicants.filter((applicant) => {
        const years = parseExperienceYears(applicant.experience);
        return years >= bucket.min && years < bucket.max;
      }).length
  );
  const maxCount = Math.max(...counts, 1);

  return (
    <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
      <p className="text-sm font-semibold text-slate-950">Experience distribution</p>
      <p className="mt-2 text-sm text-slate-600">
        Years of experience grouped into common ranges.
      </p>
      <div className="mt-5 grid gap-3">
        {buckets.map((bucket, index) => (
          <div key={bucket.label} className="grid gap-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>{bucket.label}</span>
              <span>{counts[index]}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-indigo-500"
                style={{ width: `${(counts[index] / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApplicantEducationPieChart({
  applicants
}: {
  applicants: RecruiterApplicant[];
}) {
  const buckets = applicants.reduce<Record<string, number>>((acc, applicant) => {
    const education = applicant.education.toLowerCase();
    let key = 'Other';
    if (education.includes('phd') || education.includes('doctor')) {
      key = 'Doctorate';
    } else if (education.includes('master') || education.includes('msc') || education.includes('mba')) {
      key = 'Master’s';
    } else if (education.includes('bs') || education.includes('ba') || education.includes('bsc') || education.includes('bachelor')) {
      key = 'Bachelor’s';
    } else if (education.includes('associate')) {
      key = 'Associate';
    }
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <PieChart
      title="Academic achievement"
      description="Highest reported education level."
      data={buckets}
    />
  );
}

function ApplicantSexPieChart({
  applicants
}: {
  applicants: RecruiterApplicant[];
}) {
  const buckets = applicants.reduce<Record<string, number>>((acc) => {
    const key = 'Not specified';
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <PieChart
      title="Sex"
      description="Based on reported applicant data."
      data={buckets}
    />
  );
}

function PieChart({
  title,
  description,
  data
}: {
  title: string;
  description: string;
  data: Record<string, number>;
}) {
  const total = Math.max(
    Object.values(data).reduce((sum, value) => sum + value, 0),
    1
  );
  const colors = ['#2563eb', '#7c3aed', '#0ea5e9', '#14b8a6', '#f59e0b'];
  let currentAngle = 0;
  const slices = Object.entries(data).map(([label, value], index) => {
    const angle = (value / total) * 360;
    const slice = {
      label,
      value,
      color: colors[index % colors.length],
      startAngle: currentAngle,
      endAngle: currentAngle + angle
    };
    currentAngle += angle;
    return slice;
  });

  function polarToCartesian(angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180.0;
    return { x: 50 + 50 * Math.cos(rad), y: 50 + 50 * Math.sin(rad) };
  }

  function describeArc(startAngle: number, endAngle: number) {
    const start = polarToCartesian(endAngle);
    const end = polarToCartesian(startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      'M',
      50,
      50,
      'L',
      start.x,
      start.y,
      'A',
      50,
      50,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      'Z'
    ].join(' ');
  }

  return (
    <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
        <svg viewBox="0 0 100 100" className="h-32 w-32">
          {slices.map((slice) => (
            <path key={slice.label} d={describeArc(slice.startAngle, slice.endAngle)} fill={slice.color} />
          ))}
        </svg>
        <div className="grid gap-2 text-sm text-slate-600">
          {slices.map((slice) => (
            <div key={slice.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: slice.color }}
                />
                <span>{slice.label}</span>
              </div>
              <span className="font-medium text-slate-900">{slice.value}</span>
            </div>
          ))}
        </div>
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
