'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft } from '@/utils/animations';

type ProjectCategory = 'Visual Art' | 'Design' | 'Multimedia' | 'Creative Projects';

interface ProjectForm {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  files: File[];
}

export default function Upload() {
  const [form, setForm] = useState<ProjectForm>({
    title: '',
    description: '',
    category: 'Visual Art',
    tags: [],
    files: [],
  });
  
  const [currentTag, setCurrentTag] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', form);
  };

  const handleTagAdd = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      if (!form.tags.includes(currentTag.trim())) {
        setForm(prev => ({
          ...prev,
          tags: [...prev.tags, currentTag.trim()]
        }));
      }
      setCurrentTag('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    setForm(prev => ({
      ...prev,
      files: [...prev.files, ...Array.from(files)]
    }));
  };

  const removeFile = (fileName: string) => {
    setForm(prev => ({
      ...prev,
      files: prev.files.filter(file => file.name !== fileName)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-4xl"
      >
        <motion.h1 
          variants={fadeIn}
          className="text-5xl md:text-6xl font-serif font-bold text-center mb-8"
        >
          Share Your Work
        </motion.h1>
        <motion.p 
          variants={fadeIn}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Showcase your creative projects to the world. Fill out the form below to upload your work.
        </motion.p>

        <motion.form
          variants={slideInLeft}
          onSubmit={handleSubmit}
          className="space-y-8 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl"
        >
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              value={form.title}
              onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value as ProjectCategory }))}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="Visual Art">Visual Art</option>
              <option value="Design">Design</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Creative Projects">Creative Projects</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              required
            />
          </div>

          {/* Tags Input */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {form.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleTagRemove(tag)}
                    className="text-purple-300 hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              id="tags"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyDown={handleTagAdd}
              placeholder="Type a tag and press Enter"
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Files
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <input
                type="file"
                id="files"
                multiple
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="hidden"
              />
              <label
                htmlFor="files"
                className="cursor-pointer text-gray-400 hover:text-white transition-colors"
              >
                <span className="block mb-2">
                  Drag and drop your files here, or click to select files
                </span>
                <span className="text-sm">
                  Supported formats: PNG, JPG, GIF, MP4, PDF (max 50MB)
                </span>
              </label>
            </div>

            {/* File Preview */}
            {form.files.length > 0 && (
              <div className="mt-4 space-y-2">
                {form.files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg"
                  >
                    <span className="text-sm text-gray-300 truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Upload Project
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
} 