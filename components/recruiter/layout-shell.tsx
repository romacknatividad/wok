'use client';

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export function RecruiterLayoutShell({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100dvh-68px)] w-full flex-col">
      <div className="border-b border-blue-100 bg-[linear-gradient(180deg,#fff8eb_0%,#ffffff_100%)] px-4 py-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-4 w-4 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-900">
                Onboarding incomplete
              </p>
              <p className="mt-1 text-sm leading-6 text-amber-800">
                Recruiter account setup still needs to be completed before the
                workspace is fully ready.
              </p>
              <Link
                href="/dashboard/onboarding"
                className="mt-2 inline-block text-sm font-semibold text-amber-900 underline underline-offset-2"
              >
                Continue onboarding
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-0">{children}</main>
    </div>
  );
}
