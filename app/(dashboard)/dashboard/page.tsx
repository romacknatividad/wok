'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { DashboardStatCard } from '@/components/recruiter/dashboard-stat-card';
import { recruiterJobs } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CirclePlus,
  FileUser,
  Inbox,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

const topMetrics = [
  {
    title: 'Active jobs',
    value: '5',
    description: 'Roles currently visible to applicants',
    icon: BriefcaseBusiness
  },
  {
    title: 'New applicants',
    value: '18',
    description: 'Received in the last 7 days',
    icon: FileUser
  },
  {
    title: 'Interviews',
    value: '7',
    description: 'Scheduled for this week',
    icon: CalendarClock
  },
  {
    title: 'Response rate',
    value: '92%',
    description: 'Recruiter follow-up within 48 hours',
    icon: MessagesSquare
  }
];

const pipeline = [
  {
    label: 'New applications',
    value: 18,
    note: 'Need first review',
    tone: 'border-blue-100 bg-blue-50 text-blue-700'
  },
  {
    label: 'Screening',
    value: 9,
    note: 'Shortlisted by recruiter',
    tone: 'border-sky-100 bg-sky-50 text-sky-700'
  },
  {
    label: 'Interview',
    value: 5,
    note: 'Coordinating schedules',
    tone: 'border-indigo-100 bg-indigo-50 text-indigo-700'
  },
  {
    label: 'Offer stage',
    value: 2,
    note: 'Decision pending',
    tone: 'border-cyan-100 bg-cyan-50 text-cyan-700'
  }
];

const interviews = [
  {
    candidate: 'Alyssa Ramos',
    role: 'Senior Full Stack Developer',
    when: 'Today, 3:00 PM',
    stage: 'Technical interview'
  },
  {
    candidate: 'Mark Velasco',
    role: 'Accounting Personnel',
    when: 'Tomorrow, 10:00 AM',
    stage: 'Final interview'
  },
  {
    candidate: 'Jana Cruz',
    role: 'Customer Support Specialist',
    when: 'Apr 3, 1:30 PM',
    stage: 'Screening call'
  }
];

const recentApplicants = [
  {
    name: 'Paolo Mendoza',
    role: 'Senior Full Stack Developer',
    summary: '6 years in SaaS product teams, React and Node.js background.',
    status: 'New'
  },
  {
    name: 'Angela Reyes',
    role: 'Accounting Personnel',
    summary: 'Month-end close, reconciliations, and audit support experience.',
    status: 'Review'
  },
  {
    name: 'Tricia Santos',
    role: 'Customer Support Specialist',
    summary: 'Handled high-volume inboxes and customer escalations.',
    status: 'Shortlist'
  }
];

const priorities = [
  'Review 8 new applications submitted overnight.',
  'Confirm interview feedback for the engineering shortlist.',
  'Refresh one aging job post to improve applicant conversion.',
  'Invite one teammate to help review finance candidates.'
];

const recruiterUser = {
  name: 'Camille'
};

const recruiterTeamMembers = [
  { id: 1, user: { name: 'Camille Reyes', email: 'camille@wok.ph' }, role: 'owner' },
  { id: 2, user: { name: 'Martin Cruz', email: 'martin@wok.ph' }, role: 'admin' },
  { id: 3, user: { name: 'Alyssa Lim', email: 'alyssa@wok.ph' }, role: 'member' }
];

export default function DashboardPage() {
  const teamMembers = recruiterTeamMembers;
  const displayName = recruiterUser.name;

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Recruiter dashboard
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Welcome back, {displayName}
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Manage open roles, keep your hiring pipeline moving, and stay
                on top of interviews, applicants, and recruiter activity from
                one workspace.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/dashboard/onboarding">
                    <Sparkles className="h-4 w-4" />
                    Start Onboarding
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  <Link href="/dashboard/jobs/new">
                    <CirclePlus className="h-4 w-4" />
                    Post a New Job
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard/applicants">
                    View Applicants
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">
                    Manage Plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <DashboardPanel className="rounded-[1.75rem] p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                This workspace
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {topMetrics.map((metric) => (
                  <DashboardStatCard
                    key={metric.title}
                    title={metric.title}
                    value={metric.value}
                    description={metric.description}
                    icon={metric.icon}
                  />
                ))}
              </div>
            </DashboardPanel>
          </div>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Open Jobs"
              description="Monitor active roles, applicant volume, and current progress."
            >
              <div className="grid gap-4">
                {recruiterJobs.slice(0, 3).map((job) => (
                  <div
                    key={job.title}
                    className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-4 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div>
                      <p className="font-medium text-slate-950">{job.title}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {job.department} • {job.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                        {job.applicants} applicants
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard/jobs">
                    Open jobs module
                  </Link>
                </Button>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Hiring Pipeline"
              description="Snapshot of candidate movement across your funnel."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {pipeline.map((stage) => (
                  <div
                    key={stage.label}
                    className={`rounded-2xl border p-4 ${stage.tone}`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em]">
                      {stage.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold">{stage.value}</p>
                    <p className="mt-1 text-sm opacity-80">{stage.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-sm text-slate-600">
                These are demo counts for now, but the layout is ready for live
                job and application data once those modules are connected.
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Recent Applicants"
              description="Candidates that likely need recruiter attention next."
            >
              <div className="grid gap-4">
                {recentApplicants.map((applicant) => (
                  <div
                    key={applicant.name}
                    className="rounded-2xl border border-blue-100 bg-white p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-slate-950">
                          {applicant.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {applicant.role}
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                        {applicant.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {applicant.summary}
                    </p>
                  </div>
                ))}
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Upcoming Interviews"
              description="Keep interview schedules visible for the team."
            >
              <div className="grid gap-4">
                {interviews.map((interview) => (
                  <div
                    key={`${interview.candidate}-${interview.when}`}
                    className="rounded-2xl border border-blue-100 bg-white p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-slate-950">
                          {interview.candidate}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {interview.role}
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                        {interview.stage}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      {interview.when}
                    </p>
                  </div>
                ))}
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Recruiter Priorities"
              description="Suggested actions to keep hiring momentum strong."
            >
              <div className="grid gap-3">
                {priorities.map((priority) => (
                  <PriorityItem key={priority} title={priority} />
                ))}
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Team Snapshot"
              description="Current recruiter workspace members."
            >
              <div className="grid gap-4">
                {teamMembers.length > 0 ? (
                  teamMembers.slice(0, 5).map((member) => {
                    const initials = (member.user.name || member.user.email)
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase();

                    return (
                      <div
                        key={member.id}
                        className="flex items-center justify-between rounded-2xl border border-blue-100 bg-white p-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-slate-950">
                              {member.user.name || member.user.email}
                            </p>
                            <p className="text-sm capitalize text-slate-500">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                          Active
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-sm text-slate-600">
                    No team members yet. Invite collaborators to help screen and
                    manage applicants.
                  </div>
                )}
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Plan & Workspace"
              description="Subscription and account basics for this recruiter team."
            >
              <div className="grid gap-4">
                <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                        Recruiter trial
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-950">
                        5 jobs for 1 month
                      </p>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Upgrade to PHP 299/month after trial, or PHP 999/month for
                    up to 30 active jobs.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4 text-sm text-slate-600">
                  <p className="font-medium text-slate-950">Workspace health</p>
                  <p className="mt-2">Team members: {teamMembers.length || 1}</p>
                  <p className="mt-1">Shared inbox reviews: enabled</p>
                  <p className="mt-1">Applicant tracking: ready for setup</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">Compare Plans</Link>
                </Button>
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}

function PriorityItem({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-xl bg-blue-50 p-2">
          <Inbox className="h-4 w-4 text-blue-700" />
        </div>
        <p className="font-medium leading-6 text-slate-950">{title}</p>
      </div>
    </div>
  );
}

