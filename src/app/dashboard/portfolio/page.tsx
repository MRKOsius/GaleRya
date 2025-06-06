'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  // Dummy data for portfolio items
  const portfolioItems = [
    { id: 1, title: 'Abstract Dreams', category: 'Digital Art', views: 1200, likes: 45 },
    { id: 2, title: 'Urban Landscape', category: 'Photography', views: 800, likes: 32 },
    { id: 3, title: 'Ethereal Dance', category: 'Painting', views: 1500, likes: 67 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Portfolio</h1>
        <p className="text-gray-400">Manage and showcase your artistic journey</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Artworks</h3>
          <p className="text-2xl font-bold text-white">{portfolioItems.length}</p>
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Views</h3>
          <p className="text-2xl font-bold text-white">
            {portfolioItems.reduce((sum, item) => sum + item.views, 0)}
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Likes</h3>
          <p className="text-2xl font-bold text-white">
            {portfolioItems.reduce((sum, item) => sum + item.likes, 0)}
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
          >
            {/* Placeholder Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/40">Artwork Preview</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{item.category}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{item.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 