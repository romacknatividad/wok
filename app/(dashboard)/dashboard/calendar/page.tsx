'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calendar, dateFnsLocalizer, type View } from 'react-big-calendar';
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addMinutes,
  setHours,
  setMinutes
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { recruiterCalendarEvents } from '@/components/recruiter/mock-data';
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Clock3,
  Handshake,
  MapPin,
  UserRound,
  Users,
  X
} from 'lucide-react';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS }
});

const calendarSummary = [
  {
    label: 'Interviews',
    value: recruiterCalendarEvents.filter((event) => event.type === 'Interview')
      .length,
    icon: Users
  },
  {
    label: 'Technical exams',
    value: recruiterCalendarEvents.filter(
      (event) => event.type === 'Technical exam'
    ).length,
    icon: ClipboardCheck
  },
  {
    label: 'Job offers',
    value: recruiterCalendarEvents.filter((event) => event.type === 'Job offer')
      .length,
    icon: Handshake
  },
  {
    label: 'Scheduled items',
    value: recruiterCalendarEvents.length,
    icon: CalendarDays
  }
];

type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: (typeof recruiterCalendarEvents)[number];
};

export default function RecruiterCalendarPage() {
  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date('2026-04-01T09:00:00'));
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const events = useMemo<CalendarEvent[]>(
    () =>
      recruiterCalendarEvents.map((event) => {
        const start = buildEventDate(event.date, event.time);
        const end = addMinutes(start, parseDurationMinutes(event.duration));

        return {
          id: event.id,
          title: `${event.applicantName} | ${event.type}`,
          start,
          end,
          resource: event
        };
      }),
    []
  );

  return (
    <>
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
                  scheduled across active jobs, with navigation across previous
                  and future dates.
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
                    <Link href="/dashboard/jobs">Open Jobs</Link>
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
              title="Hiring calendar"
              description="Navigate across months, weeks, and days to review recruiter schedules."
            >
              <div className="rounded-[1.75rem] border border-blue-100 bg-white p-4 lg:p-5">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  titleAccessor="title"
                  view={view}
                  date={date}
                  onView={setView}
                  onNavigate={setDate}
                  onSelectEvent={(event) => setSelectedEvent(event)}
                  popup
                  selectable={false}
                  defaultView="month"
                  views={['month', 'week', 'day', 'agenda']}
                  style={{ height: 760 }}
                  tooltipAccessor={(event) =>
                    `${event.resource.jobTitle} | ${event.resource.stage} | ${event.resource.location}`
                  }
                  eventPropGetter={(event) => ({
                    style: getEventStyle(event.resource.type)
                  })}
                  formats={{
                    eventTimeRangeFormat: ({ start, end }, culture, currentLocalizer) =>
                      `${currentLocalizer?.format(start, 'p', culture)} - ${currentLocalizer?.format(end, 'p', culture)}`
                  }}
                />
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition ${
          selectedEvent
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSelectedEvent(null)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-xl overflow-y-auto border-l border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-2xl transition-transform duration-300 ${
          selectedEvent ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedEvent ? (
          <CalendarEventPanel
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        ) : null}
      </aside>
    </>
  );
}

function CalendarEventPanel({
  event,
  onClose
}: {
  event: CalendarEvent;
  onClose: () => void;
}) {
  return (
    <div className="p-5 lg:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
            Schedule detail
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            {event.resource.applicantName}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {[event.resource.type, event.resource.stage].join(' | ')}
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
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Event overview
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Review the applicant, job, timing, and owner for this scheduled
                hiring milestone.
              </p>
            </div>
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={getEventStyle(event.resource.type)}
            >
              {event.resource.type}
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <DetailCard
              icon={UserRound}
              label="Applicant"
              value={event.resource.applicantName}
            />
            <DetailCard
              icon={Users}
              label="Job"
              value={event.resource.jobTitle}
            />
            <DetailCard
              icon={CalendarDays}
              label="Date"
              value={format(event.start, 'MMMM d, yyyy')}
            />
            <DetailCard
              icon={Clock3}
              label="Time"
              value={`${event.resource.time} | ${event.resource.duration}`}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">
            Coordination details
          </p>
          <div className="mt-5 grid gap-4">
            <DetailCard
              icon={ClipboardCheck}
              label="Stage"
              value={event.resource.stage}
            />
            <DetailCard icon={Users} label="Owner" value={event.resource.owner} />
            <DetailCard
              icon={MapPin}
              label="Location"
              value={event.resource.location}
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
          <p className="text-sm font-semibold text-slate-950">Notes</p>
          <div className="mt-4 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
            <p className="text-sm leading-7 text-slate-600">
              {event.resource.note}
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href={`/dashboard/jobs/${event.resource.jobSlug}`}>
                Open Job Pipeline
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <Link href="/dashboard/applicants">View Applicants</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}

function buildEventDate(date: string, time: string) {
  const [year, month, day] = date.split('-').map(Number);
  const timeMatch = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);

  if (!timeMatch) {
    return new Date(year, month - 1, day, 9, 0);
  }

  let hours = Number(timeMatch[1]);
  const minutes = Number(timeMatch[2]);
  const period = timeMatch[3].toUpperCase();

  if (period === 'PM' && hours < 12) {
    hours += 12;
  }

  if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return setMinutes(setHours(new Date(year, month - 1, day), hours), minutes);
}

function parseDurationMinutes(duration: string) {
  const normalized = duration.toLowerCase();
  const hoursMatch = normalized.match(/(\d+)\s*hour/);
  const minutesMatch = normalized.match(/(\d+)\s*min/);

  const hours = hoursMatch ? Number(hoursMatch[1]) * 60 : 0;
  const minutes = minutesMatch ? Number(minutesMatch[1]) : 0;

  return hours + minutes || 60;
}

function getEventStyle(type: string) {
  if (type === 'Technical exam') {
    return {
      backgroundColor: '#f5f3ff',
      color: '#6d28d9'
    };
  }

  if (type === 'Job offer') {
    return {
      backgroundColor: '#ecfdf5',
      color: '#047857'
    };
  }

  return {
    backgroundColor: '#eff6ff',
    color: '#1d4ed8'
  };
}
