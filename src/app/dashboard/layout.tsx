'use client';

import React from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <DashboardNavbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
} 