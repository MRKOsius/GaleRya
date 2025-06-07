'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Public routes include home and about
  const publicPaths = ['/', '/about'];
  const isPublicRoute = publicPaths.includes(pathname || '');
  
  // Don't show navbar on auth routes
  const isAuthRoute = pathname?.includes('(auth)');
  
  // Don't show navbar on dashboard routes
  const isDashboardRoute = pathname?.includes('(dashboard)');

  // Hide navbar if not a public route or if it's an auth/dashboard route
  if (!isPublicRoute || isAuthRoute || isDashboardRoute) {
    return null;
  }

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold text-white relative group flex items-center"
          >
            <div className="relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                Gale
              </span>
              <span className="text-white">Rya</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 ml-2 animate-pulse" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <NavLink href="/" label="Home" isActive={isActive('/')} />
            <NavLink href="/about" label="About Us" isActive={isActive('/about')} />
            <Link
              href="/login"
              className="px-4 py-1.5 text-sm font-medium text-white/90 hover:text-white border border-white/20 
                rounded-lg hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Sign In</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className="relative group"
    >
      <span className={`text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
      }`}>
        {label}
      </span>
      <motion.div
        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        initial={false}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
} 