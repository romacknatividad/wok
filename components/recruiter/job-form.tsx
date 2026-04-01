'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ArrowUpRight,
  Eye,
  Save,
  Send,
  Sparkles,
  X
} from 'lucide-react';

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
  const [form, setForm] = useState(initialValues);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
  const [publishedMessage, setPublishedMessage] = useState('');

  const previewSections = useMemo(
    () => [
      {
        title: 'Job description',
        content:
          form.description || 'Add the core role description for applicants here.'
      },
      {
        title: 'Responsibilities',
        content:
          form.responsibilities ||
          'List the day-to-day work and ownership areas for the role.'
      },
      {
        title: 'Requirements',
        content:
          form.requirements ||
          'Describe the qualifications, experience, and expectations for the role.'
      }
    ],
    [form]
  );

  function updateField<K extends keyof RecruiterJobFormValues>(
    field: K,
    value: RecruiterJobFormValues[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    if (savedMessage) {
      setSavedMessage('');
    }
    if (publishedMessage) {
      setPublishedMessage('');
    }
  }

  function handleSave() {
    setSavedMessage(
      'Draft saved. Public-facing job advertisement is unchanged until you publish.'
    );
    setPublishedMessage('');
  }

  function handlePublish() {
    setPublishedMessage(
      'Job published. Public-facing job advertisement is now using the latest draft.'
    );
    setSavedMessage('');
  }

  return (
    <>
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
              <div className="mt-6 rounded-[1.75rem] border border-amber-200 bg-amber-50 px-5 py-4">
                <p className="text-sm font-semibold text-amber-900">
                  Draft and publish workflow
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-800">
                  Saving only updates the recruiter-side draft. Use Publish when
                  you want the public-facing job advertisement to reflect the
                  latest changes.
                </p>
              </div>
            </div>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Job details"
              description="Edit the recruiter draft, preview the public-facing layout, then publish when you are ready."
              action={
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
              }
            >
              <form className="grid gap-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="Job title" id="title">
                    <Input
                      id="title"
                      value={form.title}
                      onChange={(event) => updateField('title', event.target.value)}
                    />
                  </FormField>
                  <FormField label="Department" id="department">
                    <Input
                      id="department"
                      value={form.department}
                      onChange={(event) =>
                        updateField('department', event.target.value)
                      }
                    />
                  </FormField>
                  <FormField label="Location" id="location">
                    <Input
                      id="location"
                      value={form.location}
                      onChange={(event) => updateField('location', event.target.value)}
                    />
                  </FormField>
                  <FormField label="Employment type" id="type">
                    <Input
                      id="type"
                      value={form.type}
                      onChange={(event) => updateField('type', event.target.value)}
                    />
                  </FormField>
                  <FormField label="Draft status" id="status">
                    <Input
                      id="status"
                      value={form.status}
                      onChange={(event) => updateField('status', event.target.value)}
                    />
                  </FormField>
                  <FormField label="Budget salary" id="salary">
                    <Input
                      id="salary"
                      value={form.salary}
                      onChange={(event) => updateField('salary', event.target.value)}
                    />
                  </FormField>
                </div>

                <div className="grid gap-6">
                  <TextAreaField
                    label="Short summary"
                    id="summary"
                    value={form.summary}
                    rows={3}
                    onChange={(value) => updateField('summary', value)}
                  />
                  <TextAreaField
                    label="Job description"
                    id="description"
                    value={form.description}
                    rows={6}
                    onChange={(value) => updateField('description', value)}
                  />
                  <TextAreaField
                    label="Responsibilities"
                    id="responsibilities"
                    value={form.responsibilities}
                    rows={5}
                    onChange={(value) => updateField('responsibilities', value)}
                  />
                  <TextAreaField
                    label="Requirements"
                    id="requirements"
                    value={form.requirements}
                    rows={5}
                    onChange={(value) => updateField('requirements', value)}
                  />
                </div>

                {(savedMessage || publishedMessage) && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      publishedMessage
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : 'border-blue-200 bg-blue-50 text-blue-800'
                    }`}
                  >
                    {publishedMessage || savedMessage}
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    type="button"
                    className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleSave}
                  >
                    <Save className="h-4 w-4" />
                    {submitLabel}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    onClick={handlePublish}
                  >
                    <Send className="h-4 w-4" />
                    Publish Update
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setIsPreviewOpen(true)}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Open Preview
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

      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition ${
          isPreviewOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsPreviewOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto border-l border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] shadow-2xl transition-transform duration-300 ${
          isPreviewOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 lg:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                Live preview
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {form.title || 'Untitled job'}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                This preview is synced to the current recruiter draft.
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              onClick={() => setIsPreviewOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 grid gap-6">
            <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Public-facing header
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    {form.department || 'Department pending'} |{' '}
                    {form.location || 'Location pending'} |{' '}
                    {form.type || 'Employment type pending'}
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {form.status || 'Draft'}
                </span>
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                {form.summary || 'Add a short summary so applicants can quickly understand the role.'}
              </p>
              <div className="mt-5 rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                  Budget salary
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {form.salary || 'Salary range pending'}
                </p>
              </div>
            </div>

            {previewSections.map((section) => (
              <div
                key={section.title}
                className="rounded-[1.75rem] border border-blue-100 bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {section.title}
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="rounded-[1.75rem] border border-blue-100 bg-white p-5">
              <div className="flex items-center gap-2 text-blue-700">
                <Sparkles className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Publish reminder
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Saving keeps changes in the recruiter draft only. Use
                `Publish Update` when you want this preview to match the live
                public-facing advertisement.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
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
  value,
  rows,
  onChange
}: {
  label: string;
  id: string;
  value: string;
  rows: number;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive min-h-0 w-full rounded-md border bg-transparent px-3 py-2 text-sm text-slate-900 shadow-xs outline-none focus-visible:ring-[3px]"
      />
    </div>
  );
}
