'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { RichTextEditor } from '@/components/recruiter/rich-text-editor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowUpRight, Eye, Save, Send, Sparkles, X } from 'lucide-react';

export type RecruiterJobFormValues = {
  title: string;
  type: string;
  workMode: string[];
  salary: string;
  summary: string;
  description: string;
  responsibilities: string;
  requirements: string;
};

const workModeOptions = [
  'Office-based',
  'Hybrid (Office and Remote)',
  'Fully Remote'
];

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
  const [form, setForm] = useState(() => normalizeFormValues(initialValues));
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
  const [publishedMessage, setPublishedMessage] = useState('');
  const initialSalaryRange = useMemo(() => parseSalaryRange(initialValues.salary), [initialValues.salary]);
  const [salaryRange, setSalaryRange] = useState({
    min: initialSalaryRange.min ? String(initialSalaryRange.min) : '',
    max: initialSalaryRange.max ? String(initialSalaryRange.max) : ''
  });

  const previewSections = useMemo(
    () => [
      {
        title: 'Job description',
        content:
          form.description || '<p>Add the core role description for applicants here.</p>'
      },
      {
        title: 'Responsibilities',
        content:
          form.responsibilities ||
          '<p>List the day-to-day work and ownership areas for the role.</p>'
      },
      {
        title: 'Requirements',
        content:
          form.requirements ||
          '<p>Describe the qualifications, experience, and expectations for the role.</p>'
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

  function updateSalaryRange(field: 'min' | 'max', value: string) {
    setSalaryRange((current) => {
      const next = { ...current, [field]: value };
      const min = next.min.trim();
      const max = next.max.trim();
      const salary =
        min || max
          ? `PHP ${min || '0'} - ${max || min || '0'} / month`
          : '';

      setForm((currentForm) => ({ ...currentForm, salary }));
      return next;
    });

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

  function toggleWorkMode(option: string) {
    const currentValues = form.workMode;
    const nextValues = currentValues.includes(option)
      ? currentValues.filter((item) => item !== option)
      : [...currentValues, option];

    updateField('workMode', nextValues);
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
                  <FormField label="Employment type" id="type">
                    <select
                      id="type"
                      value={form.type}
                      onChange={(event) => updateField('type', event.target.value)}
                      className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-blue-300"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Mode of work" id="work-mode">
                  <div className="grid gap-3">
                    {workModeOptions.map((option) => {
                      const checked = form.workMode.includes(option);

                      return (
                        <label
                          key={option}
                          className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                            checked
                              ? 'border-blue-200 bg-blue-50 text-blue-800'
                              : 'border-blue-100 bg-white text-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleWorkMode(option)}
                            className="h-4 w-4 rounded border-blue-200"
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </FormField>

                <FormField label="Budget salary range" id="salary-min">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="salary-min">Minimum amount</Label>
                      <Input
                        id="salary-min"
                        inputMode="numeric"
                        placeholder="25000"
                        value={salaryRange.min}
                        onChange={(event) =>
                          updateSalaryRange('min', event.target.value.replace(/[^\d]/g, ''))
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="salary-max">Maximum amount</Label>
                      <Input
                        id="salary-max"
                        inputMode="numeric"
                        placeholder="45000"
                        value={salaryRange.max}
                        onChange={(event) =>
                          updateSalaryRange('max', event.target.value.replace(/[^\d]/g, ''))
                        }
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">
                    Preview: {form.salary || 'Set the budget range for this job'}
                  </p>
                </FormField>

                <div className="grid gap-6">
                  <RichTextEditor
                    label="Short summary"
                    id="summary"
                    value={form.summary}
                    minHeightClassName="min-h-32"
                    onChange={(value) => updateField('summary', value)}
                  />
                  <RichTextEditor
                    label="Job description"
                    id="description"
                    value={form.description}
                    minHeightClassName="min-h-44"
                    onChange={(value) => updateField('description', value)}
                  />
                  <RichTextEditor
                    label="Responsibilities"
                    id="responsibilities"
                    value={form.responsibilities}
                    minHeightClassName="min-h-40"
                    onChange={(value) => updateField('responsibilities', value)}
                  />
                  <RichTextEditor
                    label="Requirements"
                    id="requirements"
                    value={form.requirements}
                    minHeightClassName="min-h-40"
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
                    {form.type || 'Employment type pending'}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {form.workMode.length > 0
                      ? form.workMode.join(' | ')
                      : 'Mode of work pending'}
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Recruiter draft
                </span>
              </div>
              <PreviewRichText
                className="mt-5 text-lg leading-8 text-slate-700"
                content={
                  form.summary ||
                  '<p>Add a short summary so applicants can quickly understand the role.</p>'
                }
              />
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
                <PreviewRichText
                  className="mt-4 text-sm leading-8 text-slate-600"
                  content={section.content}
                />
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

function PreviewRichText({
  content,
  className
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={`prose prose-slate max-w-none ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function normalizeFormValues(values: RecruiterJobFormValues) {
  return {
    ...values,
    summary: normalizeRichTextValue(values.summary),
    description: normalizeRichTextValue(values.description),
    responsibilities: normalizeRichTextValue(values.responsibilities),
    requirements: normalizeRichTextValue(values.requirements)
  };
}

function normalizeRichTextValue(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return '';
  }

  if (/<[a-z][\s\S]*>/i.test(trimmed)) {
    return trimmed;
  }

  return trimmed
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br />')}</p>`)
    .join('');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseSalaryRange(salary: string) {
  const matches = [...salary.matchAll(/(\d[\d,]*)/g)].map((match) =>
    match[1].replace(/,/g, '')
  );

  return {
    min: matches[0] ?? '',
    max: matches[1] ?? matches[0] ?? ''
  };
}
