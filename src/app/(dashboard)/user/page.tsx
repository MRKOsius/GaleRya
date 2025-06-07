'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ArtistDashboard() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section with Enhanced Design */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-12 mb-8"
          whileHover={{
            boxShadow: "0 0 50px rgba(139, 92, 246, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Enhanced Decorative Elements with Animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
          />
          
          <div className="relative">
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif mb-6 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                  Welcome to Your Creative Space
                </span>
              </motion.h1>
              <motion.p 
                className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Transform your artistic vision into reality. Share your masterpieces with the world and inspire others through your creative journey.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-6 mt-8"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                  <Link
                    href="/user/upload"
                    className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white shadow-lg shadow-purple-500/25 group"
                  >
                    <motion.svg 
                      className="w-6 h-6 mr-2"
                      animate={{ rotate: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </motion.svg>
                    <span className="text-lg font-medium">Upload New Artwork</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Portfolio Section with Enhanced Empty State */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <AnimatePresence>
            {artworks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-16 text-center"
                whileHover={{
                  boxShadow: "0 0 50px rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced Decorative Elements with Animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
                />
                
                <div className="relative max-w-2xl mx-auto">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10"
                  >
                    <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <motion.h2 
                    className="text-4xl font-serif text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Begin Your Artistic Journey
                  </motion.h2>
                  <motion.p 
                    className="text-gray-400 text-lg mb-10 leading-relaxed"
                    variants={itemVariants}
                  >
                    Your portfolio awaits its first masterpiece. Start sharing your creative vision with the world and inspire others with your unique perspective.
                  </motion.p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group inline-block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <Link
                      href="/user/upload"
                      className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-white border border-white/10 group"
                    >
                      <span className="text-lg font-medium">Create Your First Artwork</span>
                      <motion.svg 
                        className="w-6 h-6 ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {artworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
      variants={itemVariants}
      whileHover={{ 
        scale: 1.03,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10"
    >
      <div className="aspect-square relative">
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end"
        >
          <div className="p-6">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-medium text-white"
            >
              {artwork.title}
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-gray-300 mt-1"
            >
              {artwork.category}
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div className="p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{new Date(artwork.createdAt).toLocaleDateString()}</span>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
          >
            {artwork.status}
          </motion.span>
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{artwork.views}</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{artwork.likes}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}