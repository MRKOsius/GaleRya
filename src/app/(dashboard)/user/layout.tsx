'use client';

import React from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Navbar with glass effect */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
        <DashboardNavbar />
      </div>

      {/* Main content */}
      <main className="pt-20 min-h-screen">
        {/* Content wrapper with glass effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/20 backdrop-blur-[1px] pointer-events-none" />
          {children}
        </div>
      </main>
    </div>
  );
} 