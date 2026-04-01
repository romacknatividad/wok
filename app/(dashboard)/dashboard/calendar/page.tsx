'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterCalendarEvents } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Handshake,
  Users
} from 'lucide-react';

const monthLabel = 'April 2026';
const monthDays = Array.from({ length: 30 }, (_, index) => index + 1);

const calendarSummary = [
  {
    label: 'Interviews',
    value: recruiterCalendarEvents.filter((event) => event.type === 'Interview').length,
    icon: Users
  },
  {
    label: 'Technical exams',
    value: recruiterCalendarEvents.filter((event) => event.type === 'Technical exam').length,
    icon: ClipboardCheck
  },
  {
    label: 'Job offers',
    value: recruiterCalendarEvents.filter((event) => event.type === 'Job offer').length,
    icon: Handshake
  },
  {
    label: 'Scheduled items',
    value: recruiterCalendarEvents.length,
    icon: CalendarDays
  }
];

export default function RecruiterCalendarPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <CalendarDays className="h-4 w-4" />
                Calendar module
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Track applicant interviews, exams, and offer dates
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Keep hiring milestones in one place so the recruiter team can
                see every interview, technical exam, and offer discussion
                scheduled across active jobs.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/dashboard/applicants">
                    Review Applicants
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard/jobs">
                    Open Jobs
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {calendarSummary.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </p>
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-slate-950">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title={monthLabel}
            description="A calendar view of scheduled applicant milestones for the month."
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white">
              <div className="grid grid-cols-7 border-b border-blue-100 bg-slate-50 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="px-3 py-3">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7">
                {monthDays.map((day) => {
                  const dayEvents = recruiterCalendarEvents.filter(
                    (event) => Number(event.date.split('-')[2]) === day
                  );

                  return (
                    <div
                      key={day}
                      className="min-h-40 border-b border-r border-blue-50 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-950">{day}</p>
                        {dayEvents.length > 0 ? (
                          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                            {dayEvents.length}
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3 grid gap-2">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`rounded-2xl px-3 py-2 text-xs ${
                              event.type === 'Technical exam'
                                ? 'bg-violet-50 text-violet-800'
                                : event.type === 'Job offer'
                                  ? 'bg-emerald-50 text-emerald-800'
                                  : 'bg-blue-50 text-blue-800'
                            }`}
                          >
                            <p className="font-semibold">{event.time}</p>
                            <p className="mt-1">{event.applicantName}</p>
                            <p className="opacity-80">{event.type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </DashboardSection>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Scheduled Applicant Events"
            description="A detailed list of applicant interviews, technical exams, and job offer dates."
            action={
              <p className="text-sm text-slate-500">
                {recruiterCalendarEvents.length} items in {monthLabel}
              </p>
            }
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Applicant</th>
                      <th className="px-4 py-3 font-semibold">Job</th>
                      <th className="px-4 py-3 font-semibold">Event</th>
                      <th className="px-4 py-3 font-semibold">Owner</th>
                      <th className="px-4 py-3 font-semibold">Location</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recruiterCalendarEvents.map((event) => (
                      <tr key={event.id} className="border-t border-blue-50 align-top">
                        <td className="px-4 py-4 text-sm text-slate-950">
                          <p className="font-medium">{event.date}</p>
                          <p className="mt-1 text-slate-500">
                            {event.time} · {event.duration}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-950">
                          <p className="font-medium">{event.applicantName}</p>
                          <p className="mt-1 text-slate-500">Applicant #{event.applicantId}</p>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          <Link
                            href={`/dashboard/jobs/${event.jobSlug}`}
                            className="font-medium text-slate-950 hover:text-blue-700"
                          >
                            {event.jobTitle}
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            {event.type}
                          </span>
                          <p className="mt-2 text-slate-500">{event.stage}</p>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{event.owner}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{event.location}</td>
                        <td className="px-4 py-4 text-sm leading-6 text-slate-600">
                          {event.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </DashboardSection>
        </DashboardPanel>
      </div>
    </section>
  );
}
