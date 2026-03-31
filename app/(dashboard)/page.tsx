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
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-stone-50 py-20">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <p className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-sm font-medium text-orange-700">
                wok for recruiters and applicants
              </p>
              <h1 className="mt-6 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Hire faster with a recruiting workflow built for real teams.
              </h1>
              <p className="mt-5 text-base text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
                wok helps recruiters register, post jobs, review applicants, and
                move hiring forward. Applicants get a cleaner place to discover
                roles and send applications without the usual friction.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button asChild size="lg" className="text-lg rounded-full">
                  <Link href="/sign-up">
                    Create Recruiter Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="rounded-2xl bg-white/80 border border-stone-200 px-4 py-3">
                  Recruiter accounts
                </div>
                <div className="rounded-2xl bg-white/80 border border-stone-200 px-4 py-3">
                  Job posting workflow
                </div>
                <div className="rounded-2xl bg-white/80 border border-stone-200 px-4 py-3">
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

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Recruiter Workspace
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Create an account, publish roles, organize openings, and keep
                  every active job in one clear hiring workspace.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <FileSearch className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Application Pipeline
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Review applicants faster with a shared pipeline for incoming
                  applications, candidate screening, and shortlist decisions.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Applicant-Friendly Flow
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Give candidates a straightforward way to discover jobs, create
                  an account, and send applications confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-950 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Built for both sides of hiring
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-stone-300">
                Recruiters pay for the workflow. Applicants use wok to discover
                openings and apply. That keeps the business model simple without
                making the candidate experience feel heavy.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 grid gap-4">
              <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
                <h3 className="text-lg font-semibold">For recruiters</h3>
                <p className="mt-2 text-stone-300">
                  Post roles, review applicants, and manage hiring activity
                  across your team.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-800 bg-stone-900 p-6">
                <h3 className="text-lg font-semibold">For applicants</h3>
                <p className="mt-2 text-stone-300">
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
          <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-amber-50 px-8 py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                  Demo job ads
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                  Want to see what a polished job listing on wok looks like?
                </h2>
                <p className="mt-3 text-lg text-stone-600">
                  Explore two sample job advertisements and get a feel for the
                  kind of detailed, high-conviction listings recruiters can
                  publish on the platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/demo/job/senior-full-stack-developer">
                    View Developer Demo
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
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
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 px-8 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                wok
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                Launch your recruiting SaaS with clearer hiring workflows.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/pricing">See Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
