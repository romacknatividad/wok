import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <SignUp routing="path" path="/sign-up" forceRedirectUrl="/dashboard" />
    </div>
  );
}
