'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/features/admin/AdminLayout';
import StatCard from '@/components/features/admin/StatCard';

const stats = {
  totalArtworks: 156,
  pendingApprovals: 23,
  totalArtists: 89,
  totalViews: '12.5K',
};

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <AdminLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {/* Quick Stats */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={itemAnimation}>
          <StatCard
            title="Total Artworks"
            value={stats.totalArtworks}
            icon={
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={itemAnimation}>
          <StatCard
            title="Pending Approvals"
            value={stats.pendingApprovals}
            icon={
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={itemAnimation}>
          <StatCard
            title="Total Artists"
            value={stats.totalArtists}
            icon={
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </motion.div>
        <motion.div variants={itemAnimation}>
          <StatCard
            title="Total Views"
            value={stats.totalViews}
            icon={
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
        </motion.div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-serif bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <p className="text-gray-400 text-center py-8">No recent activity to show.</p>
        </div>
      </motion.div>
    </AdminLayout>
  );
} 