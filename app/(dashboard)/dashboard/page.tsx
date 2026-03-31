'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { TeamDataWithMembers, User } from '@/lib/db/schema';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck2,
  CirclePlus,
  FileUser,
  Inbox,
  Sparkles,
  Users
} from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const pipeline = [
  { label: 'New applicants', value: 18, tone: 'border-blue-100 bg-blue-50 text-blue-700' },
  { label: 'Screening', value: 9, tone: 'border-sky-100 bg-sky-50 text-sky-700' },
  { label: 'Interview', value: 5, tone: 'border-slate-200 bg-slate-50 text-slate-700' },
  { label: 'Offer stage', value: 2, tone: 'border-cyan-100 bg-cyan-50 text-cyan-700' }
];

const recruiterMetrics = [
  {
    title: 'Active jobs',
    value: '5',
    description: 'Trial limit currently available',
    icon: BriefcaseBusiness
  },
  {
    title: 'Applicants this week',
    value: '34',
    description: 'Demo metric for dashboard preview',
    icon: FileUser
  },
  {
    title: 'Interviews scheduled',
    value: '7',
    description: 'Demo metric for hiring activity',
    icon: CalendarCheck2
  },
  {
    title: 'Team members',
    value: '—',
    description: 'Live value from your workspace',
    icon: Users
  }
];

export default function DashboardPage() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);
  const { data: user } = useSWR<User>('/api/user', fetcher);

  const teamMembers = teamData?.teamMembers ?? [];
  const displayName = user?.name || user?.email?.split('@')[0] || 'Recruiter';

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <Card className="overflow-hidden border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_55%,#f8fbff_100%)] shadow-sm">
          <CardContent className="p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Recruiter overview
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                  Welcome back, {displayName}
                </h1>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  This is your hiring command center for wok. Track open roles,
                  review applicants, coordinate interviews, and keep your team
                  aligned on what needs attention next.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <CirclePlus className="h-4 w-4" />
                    Post a New Job
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href="/demo/job/senior-full-stack-developer">
                      View Sample Job Ad
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  Workspace snapshot
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {recruiterMetrics.map((metric) => {
                    const Icon = metric.icon;
                    const value =
                      metric.title === 'Team members'
                        ? String(teamMembers.length || 1)
                        : metric.value;

                    return (
                      <div
                        key={metric.title}
                        className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                            {metric.title}
                          </p>
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-slate-950">
                          {value}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {metric.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle>Hiring Pipeline</CardTitle>
              <CardDescription>
                A sample recruiter view of candidates moving through your funnel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {pipeline.map((stage) => (
                  <div
                    key={stage.label}
                    className={`rounded-2xl border p-4 ${stage.tone}`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em]">
                      {stage.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold">{stage.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-sm text-slate-600">
                Jobs and applications are still demo data here. Once you add
                your real job-posting and applicant models, this section can
                become fully live.
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle>Team Snapshot</CardTitle>
              <CardDescription>
                Live members from your current recruiter workspace.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                  No team members yet. Invite collaborators to share hiring work.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle>Inbox Priorities</CardTitle>
              <CardDescription>Suggested next actions for recruiters.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <PriorityItem
                title="Review 8 newly submitted applications"
                description="Prioritize candidates for your engineering role."
              />
              <PriorityItem
                title="Follow up on 3 shortlisted applicants"
                description="Move strong candidates toward interviews."
              />
              <PriorityItem
                title="Refresh 1 aging job post"
                description="Improve visibility and keep applicants coming in."
              />
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle>Plan Status</CardTitle>
              <CardDescription>
                Current commercial setup for this workspace.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                  Recruiter trial
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  5 jobs for 1 month
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Upgrade to PHP 299/month after trial, or PHP 999/month for up
                  to 30 active jobs.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/pricing">Compare Plans</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-100 shadow-sm">
            <CardHeader>
              <CardTitle>Demo Resources</CardTitle>
              <CardDescription>
                Sample job ads you can use to imagine the candidate experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="h-auto w-full justify-between rounded-2xl border-blue-100 bg-white py-3 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/demo/job/senior-full-stack-developer">
                  <span>Senior Full Stack Developer</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto w-full justify-between rounded-2xl border-blue-100 bg-white py-3 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/demo/job/accounting-personnel">
                  <span>Accounting Personnel</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PriorityItem({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-xl bg-blue-50 p-2">
          <Inbox className="h-4 w-4 text-blue-700" />
        </div>
        <div>
          <p className="font-medium text-slate-950">{title}</p>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
