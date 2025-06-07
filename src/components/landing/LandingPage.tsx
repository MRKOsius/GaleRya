'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/landing/Hero';
import Background from '@/components/landing/Background';
import { fadeIn } from '@/utils/animations';
import Link from 'next/link';

const galleries = [
  {
    title: "Visual Art",
    description: "Discover stunning paintings, digital art, and mixed media creations",
    icon: <PaintIcon />,
    gradient: "from-purple-600/20 via-pink-500/20 to-purple-600/20",
    activeGradient: "from-purple-600/30 via-pink-500/30 to-purple-600/30"
  },
  {
    title: "Digital Design",
    description: "Explore innovative UI/UX designs and branding projects",
    icon: <DesignIcon />,
    gradient: "from-blue-600/20 via-indigo-500/20 to-blue-600/20",
    activeGradient: "from-blue-600/30 via-indigo-500/30 to-blue-600/30"
  },
  {
    title: "Photography",
    description: "Experience captivating moments through the lens",
    icon: <CameraIcon />,
    gradient: "from-emerald-600/20 via-teal-500/20 to-emerald-600/20",
    activeGradient: "from-emerald-600/30 via-teal-500/30 to-emerald-600/30"
  },
  {
    title: "Illustrations",
    description: "Immerse yourself in creative illustrations and concept art",
    icon: <PenIcon />,
    gradient: "from-amber-600/20 via-orange-500/20 to-amber-600/20",
    activeGradient: "from-amber-600/30 via-orange-500/30 to-amber-600/30"
  }
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Background />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Featured Section */}
        <section id="featured" className="py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-7xl"
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-6xl md:text-7xl font-serif font-bold inline-block relative">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text">
                  Featured
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text ml-4">
                  Gallery
                </span>
                <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </h2>
            </motion.div>

            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeIn}
                className="col-span-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col items-center space-y-8">
                    <div className="w-24 h-24 text-purple-400 relative">
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg className="w-full h-full relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="text-3xl font-medium text-white">Start Your Creative Journey</h3>
                      <p className="text-gray-400 max-w-lg mx-auto text-lg">Join our vibrant community of artists and creators. Share your work, get inspired, and connect with fellow artists.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-7xl relative z-10"
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-6xl md:text-7xl font-serif font-bold inline-block relative">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                  Explore
                </span>
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text ml-4">
                  Gallery
                </span>
                <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </h2>
              <p className="mt-6 text-gray-400 text-xl max-w-2xl mx-auto">
                Discover amazing artworks in our curated galleries and get inspired by talented creators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleries.map((gallery, index) => (
                <GalleryCard
                  key={gallery.title}
                  {...gallery}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Join Community Section */}
        <section className="py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto max-w-7xl"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                variants={fadeIn}
                className="relative text-center"
              >
                <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text">Join Our</span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text ml-4">Community</span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Connect with fellow artists and showcase your creative journey
                </p>
                <Link
                  href="/login"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center text-lg font-medium">
                    Get Started
                    <svg className="w-6 h-6 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

// Gallery Card Component
function GalleryCard({ 
  title, 
  description, 
  icon, 
  gradient,
  activeGradient,
  index 
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  gradient: string;
  activeGradient: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeIn}
      custom={index}
      className="group cursor-default"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-full bg-gradient-to-r ${gradient} group-hover:${activeGradient} backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden transition-all duration-500`}>
        <div className="relative flex flex-col h-full space-y-4">
          <div className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-medium text-white group-hover:text-purple-300 transition-colors">{title}</h3>
          <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors">{description}</p>
          <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
            <span>Explore Gallery</span>
            <motion.svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function PaintIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
} 