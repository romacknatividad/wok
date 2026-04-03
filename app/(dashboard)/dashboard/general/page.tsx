'use client';

import { useEffect, useMemo, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DashboardPanel } from '@/components/recruiter/dashboard-panel';
import { DashboardSection } from '@/components/recruiter/dashboard-section';
import { Building2, Globe, MapPin, Phone, Save, Users } from 'lucide-react';

type OrganizationState = {
  companyName: string;
  website: string;
  industry: string;
  size: string;
  location: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  description: string;
};

const baseState: OrganizationState = {
  companyName: 'Harborline Consumer Group',
  website: 'https://harborline.example.com',
  industry: 'Consumer Goods',
  size: '51-200 employees',
  location: 'Makati City, Philippines',
  contactName: '',
  contactEmail: '',
  contactPhone: '+63 917 555 0123',
  description:
    'Harborline Consumer Group builds and distributes fast-moving consumer products for retail and field operations teams across the Philippines.'
};

export default function GeneralPage() {
  const { user } = useUser();
  const initialState = useMemo(
    () => ({
      ...baseState,
      contactName: user?.fullName || user?.firstName || baseState.contactName,
      contactEmail:
        user?.primaryEmailAddress?.emailAddress || baseState.contactEmail
    }),
    [user]
  );
  const [form, setForm] = useState(initialState);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm((current) => ({
      ...current,
      contactName: current.contactName || initialState.contactName,
      contactEmail: current.contactEmail || initialState.contactEmail
    }));
  }, [initialState]);

  function updateField<K extends keyof OrganizationState>(
    field: K,
    value: OrganizationState[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    if (saved) {
      setSaved(false);
    }
  }

  function handleSave() {
    setSaved(true);
  }

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)] p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
                <Building2 className="h-4 w-4" />
                Organization settings
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                Manage your organization basics
              </h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Update the core company information recruiters use across the
                workspace and the public-facing hiring experience.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <SummaryCard icon={Building2} label="Organization" value={form.companyName} />
              <SummaryCard icon={Globe} label="Website" value={form.website} />
              <SummaryCard icon={MapPin} label="Location" value={form.location} />
              <SummaryCard icon={Users} label="Team size" value={form.size} />
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel className="shadow-sm">
          <DashboardSection
            title="Organization Information"
            description="Set the primary details recruiters and applicants should see."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="Organization or company name" id="companyName">
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(event) =>
                    updateField('companyName', event.target.value)
                  }
                />
              </FormField>
              <FormField label="Website" id="website">
                <Input
                  id="website"
                  value={form.website}
                  onChange={(event) => updateField('website', event.target.value)}
                />
              </FormField>
              <FormField label="Industry" id="industry">
                <Input
                  id="industry"
                  value={form.industry}
                  onChange={(event) =>
                    updateField('industry', event.target.value)
                  }
                />
              </FormField>
              <FormField label="Company size" id="size">
                <Input
                  id="size"
                  value={form.size}
                  onChange={(event) => updateField('size', event.target.value)}
                />
              </FormField>
              <FormField label="Primary location" id="location">
                <Input
                  id="location"
                  value={form.location}
                  onChange={(event) =>
                    updateField('location', event.target.value)
                  }
                />
              </FormField>
            </div>
          </DashboardSection>
        </DashboardPanel>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Recruiter Contact"
              description="Keep the main recruiter or hiring contact details up to date."
            >
              <div className="grid gap-6">
                <FormField label="Primary contact name" id="contactName">
                  <Input
                    id="contactName"
                    value={form.contactName}
                    onChange={(event) =>
                      updateField('contactName', event.target.value)
                    }
                  />
                </FormField>
                <FormField label="Contact email" id="contactEmail">
                  <Input
                    id="contactEmail"
                    type="email"
                    value={form.contactEmail}
                    onChange={(event) =>
                      updateField('contactEmail', event.target.value)
                    }
                  />
                </FormField>
                <FormField label="Contact phone" id="contactPhone">
                  <Input
                    id="contactPhone"
                    value={form.contactPhone}
                    onChange={(event) =>
                      updateField('contactPhone', event.target.value)
                    }
                  />
                </FormField>
              </div>
            </DashboardSection>
          </DashboardPanel>

          <DashboardPanel className="shadow-sm">
            <DashboardSection
              title="Organization Profile"
              description="This short description can support your public company and job pages."
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-medium text-slate-950">
                  Organization description
                  <textarea
                    rows={8}
                    value={form.description}
                    onChange={(event) =>
                      updateField('description', event.target.value)
                    }
                    className="w-full rounded-md border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 focus:border-blue-300"
                  />
                </label>
                <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4 text-sm text-slate-600">
                  Use this area for your public-facing employer summary, hiring
                  context, and the message you want applicants to understand
                  before they apply.
                </div>
              </div>
            </DashboardSection>
          </DashboardPanel>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            type="button"
            className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleSave}
          >
            <Save className="h-4 w-4" />
            Save Organization Changes
          </Button>
          {saved ? (
            <p className="text-sm text-emerald-700">
              Organization information updated in this demo workspace.
            </p>
          ) : (
            <p className="text-sm text-slate-500">
              Update the basics here before publishing or refreshing job listings.
            </p>
          )}
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

function SummaryCard({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="h-4 w-4 text-blue-600" />
        <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      </div>
      <p className="mt-3 text-base font-semibold text-slate-950">{value}</p>
    </div>
  );
}
