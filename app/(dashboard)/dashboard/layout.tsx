import { RecruiterLayoutShell } from '@/components/recruiter/layout-shell';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <RecruiterLayoutShell>{children}</RecruiterLayoutShell>;
}
