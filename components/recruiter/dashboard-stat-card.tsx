import type { LucideIcon } from 'lucide-react';

export function DashboardStatCard({
  title,
  value,
  description,
  icon: Icon
}: {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {title}
        </p>
        <Icon className="h-4 w-4 text-blue-600" />
      </div>
      <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}
