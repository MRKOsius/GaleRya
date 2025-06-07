'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Artwork {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  status: 'draft' | 'published' | 'review';
  createdAt: string;
  likes: number;
  views: number;
}

export default function ArtistDashboard() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-pink-900/20">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-8 mb-8"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Welcome to Your Creative Space
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Transform your artistic vision into reality. Share your work with the world and connect with fellow artists.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/dashboard/upload"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-white border border-white/10 group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Upload New Artwork</span>
              </Link>
              <Link
                href="/dashboard/stats"
                className="inline-flex items-center px-6 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 text-white border border-white/10"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>View Statistics</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Artworks"
            value={artworks.length}
            trend="+0 this week"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatsCard
            title="Total Views"
            value="0"
            trend="+0% vs last month"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
          <StatsCard
            title="Total Likes"
            value="0"
            trend="+0% vs last month"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
          <StatsCard
            title="Profile Views"
            value="0"
            trend="+0% vs last month"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
        </div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {artworks.length === 0 ? (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-12 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
              <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl translate-x-1/2" />
              
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                  <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-serif text-white mb-4">Begin Your Artistic Journey</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Your portfolio awaits its first masterpiece. Start sharing your creative vision with the world.
                </p>
                <Link
                  href="/dashboard/upload"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-white border border-white/10 group"
                >
                  <span>Create Your First Artwork</span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  icon: React.ReactNode;
}

function StatsCard({ title, value, trend, icon }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-6"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5">
            {icon}
          </div>
        </div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-2xl font-semibold text-white mt-1">{value}</h3>
        <p className="text-sm text-gray-400 mt-1">{trend}</p>
      </div>
    </motion.div>
  );
}

interface ArtworkCardProps {
  artwork: Artwork;
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10"
    >
      <div className="aspect-square relative">
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <h3 className="text-xl font-medium text-white">{artwork.title}</h3>
            <p className="text-gray-300 mt-1">{artwork.category}</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{new Date(artwork.createdAt).toLocaleDateString()}</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            {artwork.status}
          </span>
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{artwork.views}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{artwork.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 