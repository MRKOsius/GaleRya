'use client';

import React from 'react';
import PublicNavbar from '@/components/common/navigation/PublicNavbar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <PublicNavbar />
      <main>
        {children}
      </main>
    </div>
  );
} 