import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Sparkles } from 'lucide-react';

export function PublicFooterCta() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-sm">
          <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
            <div className="relative">
              <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.16),_transparent_70%)]" />
              <div className="relative">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                wok
                </p>
                <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-slate-950">
                  A cleaner hiring workspace for recruiters and applicants.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Publish openings, review candidates, coordinate schedules,
                  and keep hiring momentum in one place. Applicants get a
                  clearer experience, while recruiters stay organized from job
                  posting to offer stage.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <FooterSignal
                    icon={BriefcaseBusiness}
                    title="Public job ads"
                    detail="Polished employer-facing listings"
                  />
                  <FooterSignal
                    icon={CalendarDays}
                    title="Shared scheduling"
                    detail="Interviews, exams, and offers"
                  />
                  <FooterSignal
                    icon={Sparkles}
                    title="Decision support"
                    detail="Stronger recruiter insights"
                  />
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href="/sign-up">
                      Create Recruiter Account
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-blue-100 bg-white p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Explore</p>
                    <div className="mt-3 grid gap-2 text-sm text-slate-600">
                      <Link href="/features" className="transition-colors hover:text-blue-700">
                        Features
                      </Link>
                      <Link href="/pricing" className="transition-colors hover:text-blue-700">
                        Pricing
                      </Link>
                      <Link href="/pricing/recruiter-trial" className="transition-colors hover:text-blue-700">
                        Recruiter trial
                      </Link>
                      <Link href="/pricing/recruiter-pro" className="transition-colors hover:text-blue-700">
                        Recruiter Pro preview
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">See wok in action</p>
                    <div className="mt-3 grid gap-2 text-sm text-slate-600">
                      <Link href="/demo/company/harborline-consumer-group" className="transition-colors hover:text-blue-700">
                        Demo company page
                      </Link>
                      <Link href="/demo/job/senior-full-stack-developer" className="transition-colors hover:text-blue-700">
                        Developer job demo
                      </Link>
                      <Link href="/demo/job/company-nurse" className="transition-colors hover:text-blue-700">
                        Company nurse demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Built for hiring teams
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  From opening to hire, without spreadsheet chaos.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Wok helps teams post jobs, accept applications, review
                  candidates, and stay aligned on next steps from one shared
                  workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-blue-100 px-8 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>wok helps teams post jobs, accept applications, and stay organized from opening to hire.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/features" className="transition-colors hover:text-blue-700">
                Features
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-blue-700">
                Pricing
              </Link>
              <Link href="/sign-up" className="transition-colors hover:text-blue-700">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSignal({
  icon: Icon,
  title,
  detail
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white px-4 py-4 shadow-sm">
      <div className="flex items-center gap-2 text-blue-700">
        <Icon className="h-4 w-4" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">{title}</p>
      </div>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </div>
  );
}
