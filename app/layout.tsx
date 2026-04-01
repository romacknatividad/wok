import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { SWRConfig } from 'swr';

export const metadata: Metadata = {
  title: 'wok',
  description:
    'wok is a recruiting SaaS for teams posting jobs and applicants sending applications.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
    >
      <html
        lang="en"
        className={`bg-white text-slate-950 ${manrope.className}`}
      >
        <body className="min-h-[100dvh] bg-white text-slate-950">
          <SWRConfig value={{}}>
            {children}
          </SWRConfig>
        </body>
      </html>
    </ClerkProvider>
  );
}
