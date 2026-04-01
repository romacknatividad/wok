import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  FileUser,
  BriefcaseBusiness,
  Sparkles,
  Settings,
  Shield,
  Users
} from 'lucide-react';

export type RecruiterNavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const recruiterNavItems: RecruiterNavItem[] = [
  { href: '/dashboard', icon: Users, label: 'Overview' },
  { href: '/dashboard/onboarding', icon: Sparkles, label: 'Onboarding' },
  { href: '/dashboard/jobs', icon: BriefcaseBusiness, label: 'Jobs' },
  { href: '/dashboard/applicants', icon: FileUser, label: 'Applicants' },
  { href: '/dashboard/general', icon: Settings, label: 'General' },
  { href: '/dashboard/activity', icon: Activity, label: 'Activity' },
  { href: '/dashboard/security', icon: Shield, label: 'Security' }
];
