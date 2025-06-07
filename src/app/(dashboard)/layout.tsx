'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-pink-900/20">
      {/* Glassmorphism Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top-right gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3"
        />
        
        {/* Bottom-left gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-pink-500/10 rounded-full blur-[150px] transform -translate-x-1/3 translate-y-1/3"
        />
        
        {/* Center gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-purple-500/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content with glass effect */}
      <div className="relative min-h-screen backdrop-blur-[1px]">
        {children}
      </div>
    </div>
  );
} 