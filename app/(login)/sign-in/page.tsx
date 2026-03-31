import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <SignIn routing="path" path="/sign-in" forceRedirectUrl="/dashboard" />
    </div>
  );
}
