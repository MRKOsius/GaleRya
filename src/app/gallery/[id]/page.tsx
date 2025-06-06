'use client';

import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn, slideInLeft, slideInRight } from '@/utils/animations';
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  artist: string;
  year: number;
  description: string;
  fullDescription: string;
  dimensions: string;
  medium: string;
  location: string;
  tags: string[];
  artistBio: string;
  additionalImages?: string[];
}

export default function ProjectDetail() {
  const params = useParams();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');

  // This will be replaced with real data fetching
  // useEffect(() => {
  //   const fetchArtwork = async () => {
  //     try {
  //       const response = await fetch(`/api/artworks/${params.id}`);
  //       const data = await response.json();
  //       setArtwork(data);
  //     } catch (error) {
  //       console.error('Error fetching artwork:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchArtwork();
  // }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-24 px-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-24 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-serif mb-4">Artwork Not Found</h1>
          <p className="text-gray-400 mb-6">The artwork you're looking for doesn't seem to exist.</p>
          <Link 
            href="/gallery" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            Return to Gallery
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-between items-center"
        >
          <Link 
            href="/gallery"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span className="relative inline-flex items-center">
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -4 }}
                className="absolute left-0"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.span>
              <span className="ml-7">Back to Gallery</span>
            </span>
          </Link>
          
          {/* Share and Actions */}
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden group">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Additional Images */}
            {artwork.additionalImages && artwork.additionalImages.length > 0 && (
              <div className="flex gap-4 mt-4">
                {artwork.additionalImages.map((imgUrl, index) => (
                  <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src={imgUrl}
                      alt={`${artwork.title} detail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Image Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Added to gallery on {new Date().toLocaleDateString()}</span>
                <span>{artwork.dimensions}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Title and Description */}
            <div>
              <motion.h1 
                className="text-4xl md:text-6xl font-serif font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
                  {artwork.title}
                </span>
              </motion.h1>
              <p className="text-xl text-gray-300 leading-relaxed">{artwork.fullDescription}</p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-white/10">
              <div className="flex space-x-8">
                <TabButton 
                  active={activeTab === 'details'} 
                  onClick={() => setActiveTab('details')}
                >
                  Artwork Details
                </TabButton>
                <TabButton 
                  active={activeTab === 'artist'} 
                  onClick={() => setActiveTab('artist')}
                >
                  About Artist
                </TabButton>
              </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'details' ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <DetailItem label="Artist" value={artwork.artist} />
                      <DetailItem label="Category" value={artwork.category} />
                      <DetailItem label="Year" value={artwork.year.toString()} />
                      <DetailItem label="Medium" value={artwork.medium} />
                    </div>
                    <div className="space-y-6">
                      <DetailItem label="Dimensions" value={artwork.dimensions} />
                      <DetailItem label="Location" value={artwork.location} />
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-gray-400 mb-3 text-sm">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {artwork.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors cursor-pointer"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="artist"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h2 className="text-2xl font-serif font-semibold mb-4">About {artwork.artist}</h2>
                    <p className="text-gray-300 leading-relaxed">{artwork.artistBio}</p>
                    <button className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors">
                      View Full Profile
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
      <dt className="text-gray-400 text-sm mb-1">{label}</dt>
      <dd className="text-white font-medium">{value}</dd>
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative py-2 text-sm font-medium transition-colors ${
        active ? 'text-white' : 'text-gray-400 hover:text-gray-300'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        />
      )}
    </button>
  );
} 