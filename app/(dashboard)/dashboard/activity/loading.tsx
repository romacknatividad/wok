import { DashboardPanel } from '@/components/recruiter/dashboard-panel';

export default function ActivityPageSkeleton() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="grid gap-6">
        <DashboardPanel className="min-h-[180px] animate-pulse bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_56%,#f8fbff_100%)]">
          <div />
        </DashboardPanel>
        <DashboardPanel className="min-h-[320px] animate-pulse">
          <div />
        </DashboardPanel>
      </div>
    </section>
  );
}
