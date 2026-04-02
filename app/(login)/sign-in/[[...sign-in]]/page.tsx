import { SignInPageContent } from '@/components/auth/sign-in-page-content';

export default function SignInCatchAllPage({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  return <SignInPageContent searchParams={searchParams} />;
}
