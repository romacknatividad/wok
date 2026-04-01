import { SignIn } from '@clerk/nextjs';

export default async function SignInPage({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  const forceRedirectUrl =
    redirect && redirect.startsWith('/') ? redirect : '/dashboard';

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <SignIn
        routing="path"
        path="/sign-in"
        forceRedirectUrl={forceRedirectUrl}
      />
    </div>
  );
}
