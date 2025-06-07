'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FormData {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    description: '',
    tags: [],
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    setSelectedFiles(prev => [...prev, ...files]);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          return null;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (fileName: string) => {
    setSelectedFiles(prev => prev.filter(file => file.name !== fileName));
  };

  const handleTagAdd = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(currentTag.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, currentTag.trim()]
        }));
      }
      setCurrentTag('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center"
        >
          <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Upload Artwork
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Share your creative vision with the world. Your artwork will be showcased in your portfolio and can inspire others.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <motion.div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center h-fit ${
            isDragging
              ? 'border-purple-500 bg-purple-500/10'
              : 'border-white/10 hover:border-white/30'
          } backdrop-blur-sm transition-all duration-300`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          animate={{
            scale: isDragging ? 1.02 : 1,
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl" />
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
          
          <label htmlFor="file-upload" className="cursor-pointer block">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Drop your artwork here</h3>
              <p className="text-gray-400 mb-6">or click to browse your files</p>
              
              <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Select Files
              </button>
            </div>

            <div className="text-sm text-gray-500">
              <p>Supported formats: PNG, JPG, GIF</p>
              <p>Max file size: 20MB</p>
            </div>
          </label>

          {/* Selected Files */}
          <AnimatePresence>
            {selectedFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 space-y-2"
              >
                {selectedFiles.map((file) => (
                  <motion.div
                    key={file.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 truncate max-w-[200px]">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(file.name)}
                      className="p-2 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Upload Progress */}
          <AnimatePresence>
            {uploadProgress !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-6"
              >
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">Uploading... {uploadProgress}%</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Upload Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-medium text-white mb-8">Artwork Details</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter artwork title"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Select category</option>
                <option value="digital">Digital Art</option>
                <option value="traditional">Traditional Art</option>
                <option value="photography">Photography</option>
                <option value="3d">3D Art</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors min-h-[120px]"
                placeholder="Describe your artwork..."
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                <AnimatePresence>
                  {formData.tags.map(tag => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="text-purple-300 hover:text-white transition-colors"
                      >
                        ×
                      </button>
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleTagAdd}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Type a tag and press Enter"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/dashboard"
              className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </Link>
            <button
              disabled={!selectedFiles.length || !formData.title || !formData.category}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2
                ${!selectedFiles.length || !formData.title || !formData.category
                  ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white hover:scale-105'
                }`}
            >
              Upload Artwork
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 