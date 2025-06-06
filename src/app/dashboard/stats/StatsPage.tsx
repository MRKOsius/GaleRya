'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatsPage() {
  // Dummy data for statistics
  const monthlyStats = [
    { month: 'Jan', views: 1200, likes: 45 },
    { month: 'Feb', views: 1500, likes: 52 },
    { month: 'Mar', views: 1800, likes: 63 },
    { month: 'Apr', views: 2200, likes: 78 },
    { month: 'May', views: 2500, likes: 85 },
    { month: 'Jun', views: 2800, likes: 92 },
  ];

  const maxViews = Math.max(...monthlyStats.map(stat => stat.views));
  const maxLikes = Math.max(...monthlyStats.map(stat => stat.likes));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">Track your portfolio performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Views</h3>
          <p className="text-2xl font-bold text-white">
            {monthlyStats.reduce((sum, stat) => sum + stat.views, 0)}
          </p>
          <div className="text-sm text-green-400 mt-1">+12.5% this month</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Likes</h3>
          <p className="text-2xl font-bold text-white">
            {monthlyStats.reduce((sum, stat) => sum + stat.likes, 0)}
          </p>
          <div className="text-sm text-green-400 mt-1">+8.3% this month</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Engagement Rate</h3>
          <p className="text-2xl font-bold text-white">3.2%</p>
          <div className="text-sm text-red-400 mt-1">-2.1% this month</div>
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Profile Visits</h3>
          <p className="text-2xl font-bold text-white">845</p>
          <div className="text-sm text-green-400 mt-1">+15.2% this month</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views Chart */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-medium text-white mb-6">Views Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {monthlyStats.map((stat, index) => (
              <div key={stat.month} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={{ height: `${(stat.views / maxViews) * 100}%` }}
                  transition={{ delay: index * 0.1 }}
                />
                <span className="text-xs text-gray-400">{stat.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Likes Chart */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-medium text-white mb-6">Likes Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {monthlyStats.map((stat, index) => (
              <div key={stat.month} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={{ height: `${(stat.likes / maxLikes) * 100}%` }}
                  transition={{ delay: index * 0.1 }}
                />
                <span className="text-xs text-gray-400">{stat.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Artworks */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-white mb-6">Top Performing Artworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/40">Artwork Preview</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-medium mb-1">Artwork Title #{item}</h4>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>2.4k views</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>142 likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 