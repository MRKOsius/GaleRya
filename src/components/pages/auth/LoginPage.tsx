'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

type Role = 'admin' | 'artist';

// Decorative SVG Components
const CirclePattern = () => (
  <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circles)" />
  </svg>
);

const WavePattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg className="absolute w-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M-100 50 C 200 100, 400 0, 600 50 C 800 100, 1000 0, 1200 50 C 1400 100, 1600 0, 1800 50"
        fill="none"
        stroke="url(#wave-gradient)"
        strokeWidth="0.5"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-600 0"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role>('artist');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'artist' as Role
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role: selectedRole }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        router.push(selectedRole === 'admin' ? '/admin' : '/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black flex items-center justify-center p-4">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <motion.div 
          animate={{ 
            background: selectedRole === 'admin' 
              ? 'radial-gradient(circle at top right, rgba(244,114,182,0.2), rgba(0,0,0,0) 50%)' 
              : 'radial-gradient(circle at top right, rgba(167,139,250,0.2), rgba(0,0,0,0) 50%)'
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        />
        <CirclePattern />
        <WavePattern />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl ${
            selectedRole === 'admin' ? 'bg-pink-500/10' : 'bg-purple-500/10'
          }`}
        />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
            selectedRole === 'admin' ? 'bg-rose-500/10' : 'bg-indigo-500/10'
          }`}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 left-[20%] text-6xl text-white/5"
        >
          ✧
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-40 right-[30%] text-4xl text-white/5"
        >
          ⬡
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-32 left-[35%] text-5xl text-white/5"
        >
          ⬢
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Side Decorations */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent"></div>
            <div className={`absolute inset-0 bg-gradient-to-b ${
              selectedRole === 'admin' 
                ? 'from-pink-500/5 via-transparent to-transparent'
                : 'from-purple-500/5 via-transparent to-transparent'
            }`}></div>
          </div>

          {/* Logo and Title */}
          <motion.div 
            className="text-center mb-8 relative"
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="text-4xl font-serif mb-3 relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className={`bg-gradient-to-r ${
                selectedRole === 'admin'
                  ? 'from-pink-400 to-rose-400'
                  : 'from-purple-400 to-indigo-400'
              } text-transparent bg-clip-text`}>
                GaleRya {selectedRole === 'admin' ? 'Admin' : 'Artist'}
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-px"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: selectedRole === 'admin'
                    ? 'linear-gradient(to right, transparent, rgba(244,114,182,0.5), transparent)'
                    : 'linear-gradient(to right, transparent, rgba(167,139,250,0.5), transparent)'
                }}
              />
            </motion.h1>
            <p className="text-gray-400 text-lg">
              Sign in to {selectedRole === 'admin' ? 'manage gallery' : 'showcase your art'}
            </p>
          </motion.div>

          {/* Role Selection */}
          <div className="flex gap-4 mb-8">
            <motion.button
              type="button"
              onClick={() => setSelectedRole('artist')}
              className={`flex-1 py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                selectedRole === 'artist'
                  ? 'bg-purple-600/20 text-purple-300'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-purple-400/10"
                initial={false}
                animate={{ 
                  opacity: selectedRole === 'artist' ? 1 : 0,
                  scale: selectedRole === 'artist' ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              />
              <span className="relative">Artist</span>
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setSelectedRole('admin')}
              className={`flex-1 py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                selectedRole === 'admin'
                  ? 'bg-pink-600/20 text-pink-300'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-pink-400/10"
                initial={false}
                animate={{ 
                  opacity: selectedRole === 'admin' ? 1 : 0,
                  scale: selectedRole === 'admin' ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              />
              <span className="relative">Admin</span>
            </motion.button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                    selectedRole === 'admin'
                      ? 'border-pink-500/20 focus:border-pink-500/50'
                      : 'border-purple-500/20 focus:border-purple-500/50'
                  }`}
                  placeholder={selectedRole === 'admin' ? 'admin@galerya.com' : 'artist@galerya.com'}
                />
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                  formData.email ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-xl ${
                    selectedRole === 'admin'
                      ? 'bg-gradient-to-r from-pink-500/5 to-rose-500/5'
                      : 'bg-gradient-to-r from-purple-500/5 to-indigo-500/5'
                  }`} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                    selectedRole === 'admin'
                      ? 'border-pink-500/20 focus:border-pink-500/50'
                      : 'border-purple-500/20 focus:border-purple-500/50'
                  }`}
                  placeholder="••••••••"
                />
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
                  formData.password ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-xl ${
                    selectedRole === 'admin'
                      ? 'bg-gradient-to-r from-pink-500/5 to-rose-500/5'
                      : 'bg-gradient-to-r from-purple-500/5 to-indigo-500/5'
                  }`} />
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                selectedRole === 'admin'
                  ? 'bg-pink-600/20 text-pink-300 hover:bg-pink-600/30'
                  : 'bg-purple-600/20 text-purple-300 hover:bg-purple-600/30'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`absolute inset-0 ${
                  selectedRole === 'admin'
                    ? 'bg-gradient-to-r from-pink-500/20 to-rose-500/20'
                    : 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                }`}
                initial={false}
                animate={{ 
                  opacity: isLoading ? 0.8 : 0.2
                }}
                transition={{ duration: 0.2 }}
              />
              <span className="relative flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in as {selectedRole === 'admin' ? 'Admin' : 'Artist'}
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-white/30 text-sm"
        >
          Discover and showcase extraordinary artworks
        </motion.div>
      </motion.div>
    </div>
  );
} 