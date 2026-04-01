'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type RecruiterJobFormValues = {
  title: string;
  department: string;
  location: string;
  type: string;
  status: string;
  salary: string;
  summary: string;
  description: string;
  responsibilities: string;
  requirements: string;
};

export function RecruiterJobForm({
  title,
  description,
  submitLabel,
  cancelHref = '/dashboard/jobs',
  initialValues
}: {
  title: string;
  description: string;
  submitLabel: string;
  cancelHref?: string;
  initialValues: RecruiterJobFormValues;
}) {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">
              Recruiter jobs
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              {description}
            </p>
          </div>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Job details"
            description="This shared recruiter form is used for both adding and editing job records."
          >
            <form className="grid gap-8">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Job title" id="title">
                  <Input id="title" defaultValue={initialValues.title} />
                </FormField>
                <FormField label="Department" id="department">
                  <Input id="department" defaultValue={initialValues.department} />
                </FormField>
                <FormField label="Location" id="location">
                  <Input id="location" defaultValue={initialValues.location} />
                </FormField>
                <FormField label="Employment type" id="type">
                  <Input id="type" defaultValue={initialValues.type} />
                </FormField>
                <FormField label="Status" id="status">
                  <Input id="status" defaultValue={initialValues.status} />
                </FormField>
                <FormField label="Salary" id="salary">
                  <Input id="salary" defaultValue={initialValues.salary} />
                </FormField>
              </div>

              <div className="grid gap-6">
                <TextAreaField
                  label="Short summary"
                  id="summary"
                  defaultValue={initialValues.summary}
                  rows={3}
                />
                <TextAreaField
                  label="Job description"
                  id="description"
                  defaultValue={initialValues.description}
                  rows={6}
                />
                <TextAreaField
                  label="Responsibilities"
                  id="responsibilities"
                  defaultValue={initialValues.responsibilities}
                  rows={5}
                />
                <TextAreaField
                  label="Requirements"
                  id="requirements"
                  defaultValue={initialValues.requirements}
                  rows={5}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  {submitLabel}
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href={cancelHref}>Cancel</Link>
                </Button>
              </div>
            </form>
          </DashboardSection>
        </DashboardPanel>
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
  defaultValue,
  rows
}: {
  label: string;
  id: string;
  defaultValue: string;
  rows: number;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        defaultValue={defaultValue}
        rows={rows}
        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive min-h-0 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-slate-900 shadow-xs outline-none focus-visible:ring-[3px]"
      />
    </div>
  );
}
