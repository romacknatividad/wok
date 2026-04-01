import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PublicFooterCta() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">
                wok
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                A cleaner hiring workspace for recruiters and applicants.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Publish openings, review candidates, and keep the hiring
                process moving in one place. Applicants get a straightforward
                experience that makes it easier to apply with confidence.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/sign-up">Create Recruiter Account</Link>
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
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
                    Recruiter Pro
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

          <div className="mt-10 border-t border-blue-100 pt-6 text-sm text-slate-500">
            wok helps teams post jobs, accept applications, and stay organized from opening to hire.
          </div>
        </div>
      </div>
    </section>
  );
}
