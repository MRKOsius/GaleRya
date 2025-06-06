'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Don't show navbar on login page or dashboard pages
  if (pathname === '/login' || pathname.startsWith('/dashboard')) return null;

  const isActive = (path: string) => pathname === path;

  const notifications = [
    { id: 1, text: "Your artwork 'Sunset Dreams' was featured!", time: "2 hours ago", isNew: true },
    { id: 2, text: "New comment on your recent upload", time: "5 hours ago", isNew: true },
    { id: 3, text: "Welcome to GaleRya! Start by uploading your first artwork.", time: "1 day ago", isNew: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-white relative group">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
              Gale
            </span>
            <span>Rya</span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" label="Home" isActive={isActive('/')} />
            <NavLink href="/gallery" label="Gallery" isActive={isActive('/gallery')} />
            <NavLink href="/dashboard" label="Dashboard" isActive={isActive('/dashboard')} />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsProfileOpen(false);
                }}
                className="p-2 text-white/80 hover:text-white transition-colors relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl py-2"
                  >
                    <div className="px-4 py-2 border-b border-white/10">
                      <h3 className="text-white font-medium">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {notification.isNew && (
                              <span className="w-2 h-2 bg-pink-500 rounded-full block" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-white">{notification.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-white/10">
                      <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        Mark all as read
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsNotificationsOpen(false);
                }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              >
                <span className="text-white font-medium">A</span>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl py-2"
                  >
                    <div className="px-4 py-2 border-b border-white/10">
                      <p className="text-white font-medium">Artist Name</p>
                      <p className="text-sm text-gray-400">artist@galerya.com</p>
                    </div>
                    <div className="py-1">
                      <DropdownLink href="/profile" label="Profile Settings" />
                      <DropdownLink href="/dashboard" label="Dashboard" />
                      <DropdownLink href="/portfolio" label="My Portfolio" />
                      <div className="border-t border-white/10 mt-1 pt-1">
                        <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
    >
      <span className={isActive ? 'text-white' : 'text-gray-300 hover:text-white'}>
        {label}
      </span>
      {isActive && (
        <motion.div
          layoutId="activeNavLink"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-200 hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
} 