'use client';

import { UserProfile } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SecurityPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium bold text-gray-900 mb-6">
        Security Settings
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <UserProfile
            path="/dashboard/security"
            routing="path"
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'shadow-none border-0 w-full',
                navbar: 'hidden',
                pageScrollBox: 'p-0',
                profileSection: 'shadow-none border border-gray-200 rounded-2xl'
              }
            }}
          />
        </CardContent>
      </Card>
    </section>
  );
}
