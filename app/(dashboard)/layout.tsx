'use client';

import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth
} from '@clerk/nextjs';
import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { CircleIcon, Home, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return (
      <>
        <Link
          href="/features"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
        >
          Pricing
        </Link>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="rounded-full border-blue-100 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Sign In
          </Button>
        </SignInButton>
      </>
    );
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <div className="cursor-pointer">
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'size-9'
              }
            }}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <SignOutButton>
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
            <div className="flex w-full items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </div>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2563eb_0%,#0ea5e9_100%)] shadow-[0_12px_30px_-18px_rgba(37,99,235,0.85)]">
            <CircleIcon className="h-5 w-5 text-white" />
          </div>
          <span className="ml-3 text-xl font-semibold tracking-tight text-slate-950">
            wok
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
