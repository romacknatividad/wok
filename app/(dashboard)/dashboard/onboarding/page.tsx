'use client';

import { useMemo, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleCheckBig,
  Sparkles,
  UserRound
} from 'lucide-react';

type OnboardingState = {
  recruiterName: string;
  recruiterEmail: string;
  recruiterRole: string;
  companyName: string;
  companyWebsite: string;
  companyIndustry: string;
  companyLocation: string;
  companyDescription: string;
  jobTitle: string;
  jobDepartment: string;
  jobLocation: string;
  jobType: string;
  jobSalary: string;
  jobSummary: string;
};

const initialState: OnboardingState = {
  recruiterName: '',
  recruiterEmail: '',
  recruiterRole: 'HR Manager',
  companyName: '',
  companyWebsite: '',
  companyIndustry: '',
  companyLocation: '',
  companyDescription: '',
  jobTitle: '',
  jobDepartment: '',
  jobLocation: '',
  jobType: 'Full-time',
  jobSalary: '',
  jobSummary: ''
};

const stepMeta = [
  {
    key: 'account',
    title: 'Set up your account',
    description: 'Add the recruiter details applicants and teammates should recognize.',
    icon: UserRound
  },
  {
    key: 'company',
    title: 'Add company information',
    description: 'Create the employer profile that gives your job post context and credibility.',
    icon: Building2
  },
  {
    key: 'job',
    title: 'Create your first job listing',
    description: 'Fill in the basics for the first role you want to publish.',
    icon: BriefcaseBusiness
  },
  {
    key: 'publish',
    title: 'Publish the job',
    description: 'Review the setup, confirm the essentials, and go live.',
    icon: CircleCheckBig
  }
] as const;

export default function RecruiterOnboardingPage() {
  const { user } = useUser();
  const recruiterPlaceholder =
    user?.fullName || user?.firstName || 'Full name';
  const recruiterEmailPlaceholder =
    user?.primaryEmailAddress?.emailAddress || 'name@company.com';
  const [form, setForm] = useState<OnboardingState>(initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [published, setPublished] = useState(false);

  const completion = useMemo(
    () => ({
      account:
        form.recruiterName.trim() !== '' &&
        form.recruiterEmail.trim() !== '' &&
        form.recruiterRole.trim() !== '',
      company:
        form.companyName.trim() !== '' &&
        form.companyIndustry.trim() !== '' &&
        form.companyLocation.trim() !== '' &&
        form.companyDescription.trim() !== '',
      job:
        form.jobTitle.trim() !== '' &&
        form.jobDepartment.trim() !== '' &&
        form.jobLocation.trim() !== '' &&
        form.jobType.trim() !== '' &&
        form.jobSummary.trim() !== ''
    }),
    [form]
  );

  const canPublish = completion.account && completion.company && completion.job;
  const completedSteps = [
    completion.account,
    completion.company,
    completion.job,
    published
  ].filter(Boolean).length;

  function updateField<K extends keyof OnboardingState>(
    field: K,
    value: OnboardingState[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    if (published) {
      setPublished(false);
    }
  }

  function goToNextStep() {
    setActiveStep((current) => Math.min(current + 1, stepMeta.length - 1));
  }

  function goToPreviousStep() {
    setActiveStep((current) => Math.max(current - 1, 0));
  }

  function handlePublish() {
    if (!canPublish) {
      return;
    }

    setPublished(true);
    setActiveStep(3);
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Recruiter onboarding
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Set up your recruiter workspace and publish your first job.
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Follow a simple setup flow for your account, company profile,
                and first listing. Once the essentials are in place, you can
                publish and move straight into applicant management.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setActiveStep(0)}
                >
                  Continue setup
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/dashboard/jobs">
                    Skip to jobs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Progress
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">
                  {completedSteps} / 4
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Steps completed in your recruiter onboarding flow.
                </p>
                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all"
                    style={{ width: `${(completedSteps / 4) * 100}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Outcome
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  A public-ready first job ad with recruiter and company context.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Keep this flow lightweight, then refine more settings later
                  from the dashboard.
                </p>
              </div>
            </div>
          </div>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Setup Steps"
              description="Move through the recruiter setup in order."
            >
              <div className="grid gap-3">
                {stepMeta.map((step, index) => {
                  const isActive = index === activeStep;
                  const isCompleted =
                    (index === 0 && completion.account) ||
                    (index === 1 && completion.company) ||
                    (index === 2 && completion.job) ||
                    (index === 3 && published);

                  return (
                    <button
                      key={step.key}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? 'border-blue-200 bg-blue-50'
                          : 'border-blue-100 bg-white hover:border-blue-200 hover:bg-blue-50/60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl ${
                            isCompleted
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <step.icon className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-950">
                            {index + 1}. {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </DashboardSection>
          </DashboardPanel>

          <div className="grid gap-6">
            {activeStep === 0 ? (
              <DashboardPanel className="shadow-sm">
                <DashboardSection
                  title="Recruiter Account"
                  description="Set the recruiter profile details to use in your workspace."
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Recruiter name" id="recruiterName">
                      <Input
                        id="recruiterName"
                        value={form.recruiterName}
                        onChange={(event) =>
                          updateField('recruiterName', event.target.value)
                        }
                        placeholder={recruiterPlaceholder}
                      />
                    </FormField>
                    <FormField label="Work email" id="recruiterEmail">
                      <Input
                        id="recruiterEmail"
                        type="email"
                        value={form.recruiterEmail}
                        onChange={(event) =>
                          updateField('recruiterEmail', event.target.value)
                        }
                        placeholder={recruiterEmailPlaceholder}
                      />
                    </FormField>
                    <FormField label="Recruiter role" id="recruiterRole">
                      <Input
                        id="recruiterRole"
                        value={form.recruiterRole}
                        onChange={(event) =>
                          updateField('recruiterRole', event.target.value)
                        }
                        placeholder="HR Manager"
                      />
                    </FormField>
                  </div>
                </DashboardSection>
              </DashboardPanel>
            ) : null}

            {activeStep === 1 ? (
              <DashboardPanel className="shadow-sm">
                <DashboardSection
                  title="Organization or Company Information"
                  description="Add the key employer details that will support your first public job listing."
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Company name" id="companyName">
                      <Input
                        id="companyName"
                        value={form.companyName}
                        onChange={(event) =>
                          updateField('companyName', event.target.value)
                        }
                        placeholder="Harborline Consumer Group"
                      />
                    </FormField>
                    <FormField label="Website" id="companyWebsite">
                      <Input
                        id="companyWebsite"
                        value={form.companyWebsite}
                        onChange={(event) =>
                          updateField('companyWebsite', event.target.value)
                        }
                        placeholder="https://company.com"
                      />
                    </FormField>
                    <FormField label="Industry" id="companyIndustry">
                      <Input
                        id="companyIndustry"
                        value={form.companyIndustry}
                        onChange={(event) =>
                          updateField('companyIndustry', event.target.value)
                        }
                        placeholder="Retail, logistics, healthcare, technology..."
                      />
                    </FormField>
                    <FormField label="Primary location" id="companyLocation">
                      <Input
                        id="companyLocation"
                        value={form.companyLocation}
                        onChange={(event) =>
                          updateField('companyLocation', event.target.value)
                        }
                        placeholder="Makati City, Philippines"
                      />
                    </FormField>
                  </div>
                  <TextAreaField
                    label="Company description"
                    id="companyDescription"
                    rows={5}
                    value={form.companyDescription}
                    onChange={(value) => updateField('companyDescription', value)}
                    placeholder="Describe what your company does, the team environment, and why applicants should care."
                  />
                </DashboardSection>
              </DashboardPanel>
            ) : null}

            {activeStep === 2 ? (
              <DashboardPanel className="shadow-sm">
                <DashboardSection
                  title="First Job Listing"
                  description="Start with a concise, high-signal first role. You can refine full job details later."
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Job title" id="jobTitle">
                      <Input
                        id="jobTitle"
                        value={form.jobTitle}
                        onChange={(event) =>
                          updateField('jobTitle', event.target.value)
                        }
                        placeholder="Senior Full-Stack Developer"
                      />
                    </FormField>
                    <FormField label="Department" id="jobDepartment">
                      <Input
                        id="jobDepartment"
                        value={form.jobDepartment}
                        onChange={(event) =>
                          updateField('jobDepartment', event.target.value)
                        }
                        placeholder="Engineering"
                      />
                    </FormField>
                    <FormField label="Job location" id="jobLocation">
                      <Input
                        id="jobLocation"
                        value={form.jobLocation}
                        onChange={(event) =>
                          updateField('jobLocation', event.target.value)
                        }
                        placeholder="Remote, Philippines"
                      />
                    </FormField>
                    <FormField label="Employment type" id="jobType">
                      <Input
                        id="jobType"
                        value={form.jobType}
                        onChange={(event) =>
                          updateField('jobType', event.target.value)
                        }
                        placeholder="Full-time"
                      />
                    </FormField>
                    <FormField label="Salary range" id="jobSalary">
                      <Input
                        id="jobSalary"
                        value={form.jobSalary}
                        onChange={(event) =>
                          updateField('jobSalary', event.target.value)
                        }
                        placeholder="PHP 120,000 - PHP 180,000 / month"
                      />
                    </FormField>
                  </div>
                  <TextAreaField
                    label="Role summary"
                    id="jobSummary"
                    rows={5}
                    value={form.jobSummary}
                    onChange={(value) => updateField('jobSummary', value)}
                    placeholder="Summarize what the role does, who it supports, and what makes it attractive."
                  />
                </DashboardSection>
              </DashboardPanel>
            ) : null}

            {activeStep === 3 ? (
              <DashboardPanel className="shadow-sm">
                <DashboardSection
                  title="Publish Your Job"
                  description="Review the essentials and publish when you are ready."
                >
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                          Recruiter
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">
                          {form.recruiterName || 'Recruiter name pending'}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {form.recruiterRole || 'Role pending'} ·{' '}
                          {form.recruiterEmail || 'Email pending'}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                          Company
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">
                          {form.companyName || 'Company name pending'}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {form.companyIndustry || 'Industry pending'} ·{' '}
                          {form.companyLocation || 'Location pending'}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {form.companyDescription ||
                            'Add a company description to help applicants understand your team and business.'}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                          First job listing
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">
                          {form.jobTitle || 'Job title pending'}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {form.jobDepartment || 'Department pending'} ·{' '}
                          {form.jobLocation || 'Location pending'} ·{' '}
                          {form.jobType || 'Type pending'}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {form.jobSummary ||
                            'Add a short summary so applicants quickly understand the role and scope.'}
                        </p>
                        {form.jobSalary ? (
                          <p className="mt-3 text-sm font-medium text-slate-950">
                            Salary: {form.jobSalary}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-blue-100 bg-white p-5">
                        <p className="text-sm font-semibold text-slate-950">
                          Publish checklist
                        </p>
                        <div className="mt-4 grid gap-3">
                          <ChecklistItem
                            label="Recruiter account details are filled in"
                            complete={completion.account}
                          />
                          <ChecklistItem
                            label="Company information is ready for applicants"
                            complete={completion.company}
                          />
                          <ChecklistItem
                            label="First job listing basics are complete"
                            complete={completion.job}
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-blue-100 bg-white p-5">
                        {published ? (
                          <>
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                              <CheckCircle2 className="h-4 w-4" />
                              Published
                            </div>
                            <p className="mt-4 text-2xl font-semibold text-slate-950">
                              Your recruiter onboarding is complete.
                            </p>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                              The first job has been marked as published in this
                              setup flow. Continue in the recruiter jobs module
                              to manage the listing and future roles.
                            </p>
                            <div className="mt-5 flex flex-col gap-3">
                              <Button
                                asChild
                                className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                              >
                                <Link href="/dashboard/jobs">
                                  Go to Job Listings
                                </Link>
                              </Button>
                              <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                              >
                                <Link href="/dashboard">
                                  Back to Overview
                                </Link>
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-sm font-semibold text-slate-950">
                              Ready to publish?
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              Publishing should happen only after the recruiter,
                              company, and first job details are all set.
                            </p>
                            <Button
                              type="button"
                              className="mt-5 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300"
                              onClick={handlePublish}
                              disabled={!canPublish}
                            >
                              Publish First Job
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </DashboardSection>
              </DashboardPanel>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button
                type="button"
                variant="outline"
                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                onClick={goToPreviousStep}
                disabled={activeStep === 0}
              >
                Previous Step
              </Button>
              <Button
                type="button"
                className="rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300"
                onClick={goToNextStep}
                disabled={activeStep === stepMeta.length - 1}
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  children
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function TextAreaField({
  label,
  id,
  rows,
  value,
  onChange,
  placeholder
}: {
  label: string;
  id: string;
  rows: number;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive min-h-0 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-slate-900 shadow-xs outline-none focus-visible:ring-[3px]"
      />
    </div>
  );
}

function ChecklistItem({
  label,
  complete
}: {
  label: string;
  complete: boolean;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <div
        className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
          complete ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
        }`}
      >
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <p className="text-sm leading-6 text-slate-700">{label}</p>
    </div>
  );
}
