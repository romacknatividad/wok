import { SignUpPageContent } from '@/components/auth/sign-up-page-content';

export default function SignUpCatchAllPage({
  searchParams
}: {
  searchParams: Promise<{ redirect?: string; plan?: string }>;
}) {
  return <SignUpPageContent searchParams={searchParams} />;
}
