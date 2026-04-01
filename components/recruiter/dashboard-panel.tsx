import { cn } from '@/lib/utils';

export function DashboardPanel({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('rounded-2xl border border-blue-100 bg-white p-4', className)}>
      {children}
    </div>
  );
}
