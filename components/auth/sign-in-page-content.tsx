import { SignIn } from '@clerk/nextjs';
import { PublicFooterCta } from '@/components/marketing/public-footer-cta';

export async function SignInPageContent({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  const forceRedirectUrl =
    redirect && redirect.startsWith('/') ? redirect : '/dashboard';

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_42%,#ffffff_100%)]">
      <section className="flex min-h-[calc(100dvh-12rem)] items-center justify-center px-4 py-12">
        <SignIn
          routing="path"
          path="/sign-in"
          forceRedirectUrl={forceRedirectUrl}
        />
      </section>
      <PublicFooterCta />
    </main>
  );
}
