'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Overview',
      href: '/user',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM14 13a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
    },
    {
      name: 'Portfolio',
      href: '/user/portfolio',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Upload',
      href: '/user/upload',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      name: 'Settings',
      href: '/user/settings',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        className="sticky top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-xl border-b border-white/10 z-[9999] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
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
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <NavLink 
                  key={item.href}
                  href={item.href} 
                  label={item.name} 
                  isActive={pathname === item.href}
                />
              ))}
            </div>

            {/* Profile and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Profile Button */}
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-4 py-1.5 rounded-lg border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                  <span className="text-white font-medium">A</span>
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-white/90 group-hover:text-white">Artist Name</div>
                </div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        pathname === item.href
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="w-5 h-5">{item.icon}</div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Profile Dropdown */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-6 w-64 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-white/10">
              <p className="text-white font-medium">Artist Name</p>
              <p className="text-sm text-gray-400">artist@galerya.com</p>
            </div>
            <div className="p-2">
              <ProfileMenuItem href="/user/settings" icon="settings">Account Settings</ProfileMenuItem>
              <ProfileMenuItem href="/help" icon="help">Help Center</ProfileMenuItem>
              <button 
                onClick={() => {/* handle logout */}}
                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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

function ProfileMenuItem({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      {icon === 'settings' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )}
      {icon === 'help' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span>{children}</span>
    </Link>
  );
} 