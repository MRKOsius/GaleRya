'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '@/utils/animations';

interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

const categories = ['All', 'Visual Art', 'Design', 'Multimedia', 'Creative Projects'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [artworks, setArtworks] = useState<Artwork[]>([]); // Added type annotation

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-24 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-7xl"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-5xl md:text-7xl font-serif font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text"
        >
          Creative Gallery
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Discover extraordinary works of art and design from talented creators around the world.
        </motion.p>

        {/* Search and Filter Section with glassmorphism */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-black/30 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
              />
              <svg
                className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-black/30 text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {artworks.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/30 to-black/30 backdrop-blur-sm border border-gray-800/50"
              >
                {/* Artwork content will go here */}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto space-y-6">
              <p className="text-gray-400 text-lg">No artworks have been added yet.</p>
              <Link 
                href="/upload"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Upload Your Work
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 