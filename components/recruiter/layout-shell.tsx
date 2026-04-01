'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlertCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { recruiterNavItems } from './navigation';

export function RecruiterLayoutShell({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeItem =
    recruiterNavItems.find((item) => pathname === item.href)?.label ||
    'Recruiter';

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-68px)] w-full max-w-7xl flex-col">
      <div className="flex items-center justify-between border-b border-blue-100 bg-white p-4 lg:hidden">
        <div className="flex items-center">
          <span className="font-medium text-slate-900">{activeItem}</span>
        </div>
        <Button
          className="-mr-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
          variant="ghost"
          onClick={() => setIsSidebarOpen((value) => !value)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle recruiter menu</span>
        </Button>
      </div>

      <div className="flex h-full flex-1 overflow-hidden">
        <aside
          className={`absolute inset-y-0 left-0 z-40 w-64 transform border-r border-blue-100 bg-white transition-transform duration-300 ease-in-out lg:relative lg:block lg:translate-x-0 lg:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="border-b border-blue-100 px-4 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Recruiter
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">
              Workspace
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Hiring, team coordination, and account settings.
            </p>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-3 py-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="mt-0.5 h-4 w-4 text-amber-600" />
                <div>
                  <p className="text-sm font-semibold text-amber-900">
                    Onboarding incomplete
                  </p>
                  <p className="mt-1 text-xs leading-5 text-amber-800">
                    Recruiter account setup still needs to be completed.
                  </p>
                  <Link
                    href="/dashboard/onboarding"
                    className="mt-2 inline-block text-xs font-semibold text-amber-900 underline underline-offset-2"
                  >
                    Continue onboarding
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className="h-full overflow-y-auto p-4">
            {recruiterNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  className={`my-1 w-full justify-start shadow-none ${
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
      </div>
    </div>
  );
}
