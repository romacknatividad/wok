import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
'use client';

import { useMemo } from 'react';
import { useUser } from '@clerk/nextjs';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import {
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CirclePlus,
  FileUser,
  Filter,
  Mail,
  MessageSquareMore,
  Search,
  Users
} from 'lucide-react';

const activitySummary = [
  { label: 'Today', value: '14 events' },
  { label: 'This week', value: '47 events' },
  { label: 'Job updates', value: '9 changes' },
  { label: 'Applicant actions', value: '22 events' }
];

const quickFilters = ['All activity', 'Jobs', 'Applicants', 'Interviews', 'Team'];

export default function ActivityPage() {
  const { user } = useUser();
  const displayName =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress?.split('@')[0] ||
    'Recruiter';
  const activityItems = useMemo(
    () => [
      {
        title: 'Senior Full Stack Developer job was updated',
        description: `${displayName} edited responsibilities and changed the posting status to Hiring.`,
        time: '10 minutes ago',
        category: 'Job update',
        icon: BriefcaseBusiness
      },
      {
        title: 'New applicant received for Accounting Personnel',
        description:
          'Angela Reyes submitted an application and uploaded a complete resume.',
        time: '35 minutes ago',
        category: 'Applicant',
        icon: FileUser
      },
      {
        title: 'Interview scheduled with Alyssa Ramos',
        description:
          'A technical interview was added for Today at 3:00 PM.',
        time: '1 hour ago',
        category: 'Interview',
        icon: CalendarClock
      },
      {
        title: 'Recruitment Associate draft job created',
        description:
          'A new draft role was added and saved for later review.',
        time: '3 hours ago',
        category: 'Draft',
        icon: CirclePlus
      },
      {
        title: 'Candidate moved to shortlist',
        description:
          'Tricia Santos was advanced after recruiter review.',
        time: 'Yesterday',
        category: 'Pipeline',
        icon: CheckCircle2
      },
      {
        title: 'Recruiter teammate invited',
        description:
          'Martin Cruz invited a new reviewer to help with applicant screening.',
        time: 'Yesterday',
        category: 'Team',
        icon: Users
      }
    ],
    [displayName]
  );

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
                Recruiter activity
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Follow hiring activity across your workspace
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Review job changes, incoming applications, interview scheduling,
                and recruiter actions in one place. This page is ready to become
                your full activity timeline once live events are connected.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {activitySummary.map((item) => (
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
            title="Activity feed"
            description="Recent recruiter and applicant events inside the workspace."
            action={
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-500">
                  <Search className="h-4 w-4 text-blue-600" />
                  Search activity
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-500">
                  <Filter className="h-4 w-4 text-blue-600" />
                  Latest first
                </div>
              </div>
            }
          >
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700"
                >
                  {filter}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4">
              {activityItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.title}-${item.time}`}
                    className="rounded-2xl border border-blue-100 bg-white p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-950">{item.title}</p>
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 sm:items-end">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">{item.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </DashboardSection>
        </DashboardPanel>

        <div className="grid gap-6 lg:grid-cols-3">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Job activity"
              description="Posting and editing events across active roles."
            >
              <ul className="grid gap-3">
                <ActivityBullet text="3 jobs were updated this week" />
                <ActivityBullet text="1 draft role is waiting for review" />
                <ActivityBullet text="2 job posts received new applicants today" />
              </ul>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Applicant activity"
              description="Movement and response happening in the pipeline."
            >
              <ul className="grid gap-3">
                <ActivityBullet text="8 new applications arrived overnight" icon={Mail} />
                <ActivityBullet text="5 candidates moved to shortlist" icon={CheckCircle2} />
                <ActivityBullet text="2 candidates replied to interview invites" icon={MessageSquareMore} />
              </ul>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Team activity"
              description="Recruiter collaboration and workspace actions."
            >
              <ul className="grid gap-3">
                <ActivityBullet text="1 teammate was invited this week" icon={Users} />
                <ActivityBullet text="Shared review workflow is active" icon={Users} />
                <ActivityBullet text="Interview notes were updated by the team" icon={CalendarClock} />
              </ul>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </div>
    </section>
  );
}

function ActivityBullet({
  text,
  icon: Icon = CheckCircle2
}: {
  text: string;
  icon?: typeof CheckCircle2;
}) {
  return (
    <li className="flex gap-3 rounded-2xl border border-blue-100 bg-white p-4 text-sm leading-6 text-slate-600">
      <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
        <Icon className="h-4 w-4" />
      </div>
      <span>{text}</span>
    </li>
  );
}
