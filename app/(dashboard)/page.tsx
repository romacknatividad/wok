import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BriefcaseBusiness,
  FileSearch,
  ShieldCheck
} from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_48%,#ffffff_100%)] py-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_58%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <p className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">
                wok for recruiters and applicants
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Hire faster with a recruiting workflow built for real teams.
              </h1>
              <p className="mt-5 text-base text-slate-600 sm:text-xl lg:text-lg xl:text-xl">
                wok helps recruiters register, post jobs, review applicants, and
                move hiring forward. Applicants get a cleaner place to discover
                roles and send applications without the usual friction.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 text-lg text-white hover:bg-blue-700"
                >
                  <Link href="/sign-up">
                    Create Recruiter Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-lg text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Recruiter accounts
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Job posting workflow
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                  Applicant-ready experience
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_18px_35px_-22px_rgba(37,99,235,0.9)]">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Recruiter Workspace
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Create an account, publish roles, organize openings, and keep
                  every active job in one clear hiring workspace.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-[0_18px_35px_-22px_rgba(14,165,233,0.9)]">
                <FileSearch className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Application Pipeline
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Review applicants faster with a shared pipeline for incoming
                  applications, candidate screening, and shortlist decisions.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-[0_18px_35px_-22px_rgba(30,64,175,0.9)]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-slate-950">
                  Applicant-Friendly Flow
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  Give candidates a straightforward way to discover jobs, create
                  an account, and send applications confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                Built for both sides of hiring
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-slate-600">
                Recruiters pay for the workflow. Applicants use wok to discover
                openings and apply. That keeps the business model simple without
                making the candidate experience feel heavy.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 grid gap-4">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">For recruiters</h3>
                <p className="mt-2 text-slate-600">
                  Post roles, review applicants, and manage hiring activity
                  across your team.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">For applicants</h3>
                <p className="mt-2 text-slate-600">
                  Create an account once, send applications quickly, and stay
                  focused on the right opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_48%,#f8fbff_100%)] px-8 py-10 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                  Demo job ads
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                  Want to see what a polished job listing on wok looks like?
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  Explore two sample job advertisements and get a feel for the
                  kind of detailed, high-conviction listings recruiters can
                  publish on the platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/demo/job/senior-full-stack-developer">
                    View Developer Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <Link href="/demo/job/accounting-personnel">
                    View Accounting Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                wok
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                Launch your recruiting SaaS with clearer hiring workflows.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/pricing">See Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
