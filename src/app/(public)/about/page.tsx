'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Portfolio Showcase",
      description: "Create stunning portfolios to showcase your artwork with our modern and intuitive interface."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Community Engagement",
      description: "Connect with fellow artists and art enthusiasts through comments, likes, and shared inspirations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Growth",
      description: "Accelerate your artistic journey with our powerful platform and global reach."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: "Global Network",
      description: "Join a worldwide community of artists and art enthusiasts."
    }
  ];

  const teamMembers = [
    {
      name: "Ar-rayyan Ramadhani",
      role: "Tech Lead",
      image: "/team/ar-rayyan.jpg"
    },
    {
      name: "Azzariyat Azra",
      role: "Lead Designer",
      image: "/team/azzariyat.jpg"
    },
    {
      name: "T.M.Fadlul Ihsan",
      role: "Manager",
      image: "/team/fadlul.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-black to-pink-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 mix-blend-overlay" />
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black/60"
          />
          {/* Abstract Shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            About GaleRya
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering artists to showcase their creativity and connect with the world
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1 h-3 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  GaleRya is dedicated to empowering artists by providing a dynamic platform where creativity knows no bounds. 
                  We believe in creating a space where artists can showcase their work, connect with art enthusiasts, 
                  and build meaningful relationships within the global art community.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our platform is built on the foundation of innovation, community, and artistic freedom. 
                  We're here to help artists thrive in the digital age.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose GaleRya</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of technology and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The passionate individuals behind GaleRya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center overflow-hidden"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-medium text-white/40">{member.name[0]}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-white/10 p-12 text-center"
        >
          {/* Abstract Background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Have questions or want to join our community? We'd love to hear from you. 
              Reach out and be part of something extraordinary.
            </p>
            <a 
              href="mailto:contact@galerya.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-300 group hover:scale-105"
            >
              Contact Us
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}