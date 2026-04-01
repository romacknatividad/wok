import { SignUp } from '@clerk/nextjs';

export default async function SignUpPage({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  const forceRedirectUrl =
    redirect && redirect.startsWith('/') ? redirect : '/dashboard';

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <SignUp
        routing="path"
        path="/sign-up"
        forceRedirectUrl={forceRedirectUrl}
      />
    </div>
  );
}
