'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCamera, FiLock, FiMail, FiGlobe, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiSave, FiEye, FiAlertCircle, FiUser } from 'react-icons/fi';

interface SettingsFormData {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  location: string;
  website: string;
  social: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
    newFollowers: boolean;
    artworkLikes: boolean;
    comments: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private';
    showEmail: boolean;
    showLocation: boolean;
    allowMessages: boolean;
  };
}

const UserAvatar = ({ src, name }: { src: string; name: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative">
      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={src}
            alt={name || 'User avatar'}
            width={96}
            height={96}
            className="object-cover w-full h-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <FiUser className="w-12 h-12 text-white/50" />
          </div>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors shadow-lg"
      >
        <FiCamera className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<SettingsFormData>({
    name: '',
    email: '',
    bio: '',
    avatar: '/avatars/default-avatar.png',
    location: '',
    website: '',
    social: {
      instagram: '',
      twitter: '',
      linkedin: '',
    },
    notifications: {
      email: false,
      push: false,
      marketing: false,
      newFollowers: false,
      artworkLikes: false,
      comments: false,
    },
    privacy: {
      profileVisibility: 'private',
      showEmail: false,
      showLocation: false,
      allowMessages: false,
    },
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiCamera },
    { id: 'account', label: 'Account', icon: FiLock },
    { id: 'notifications', label: 'Notifications', icon: FiMail },
    { id: 'privacy', label: 'Privacy', icon: FiGlobe },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-pink-900/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Gradient Background */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-8 mb-8"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-serif bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Settings
                </h1>
                <p className="text-gray-400 mt-2">Manage your account preferences and profile settings</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => console.log('Preview profile')}
                className="px-4 py-2 text-sm text-purple-400 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 transition-colors flex items-center gap-2"
              >
                <FiEye className="w-4 h-4" />
                Preview Profile
              </motion.button>
            </div>
          </motion.div>

          {/* Tabs with Gradient Hover */}
          <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-white/20 shadow-lg shadow-purple-500/10'
                    : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: showSuccess ? 1 : 0, y: showSuccess ? 0 : -20 }}
            className="fixed top-4 right-4 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FiSave className="w-4 h-4" />
            Settings saved successfully!
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-8 shadow-2xl shadow-purple-500/5"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/5 to-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                {activeTab === 'profile' && (
                  <>
                    {/* Avatar Section */}
                    <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                      <UserAvatar src={formData.avatar} name={formData.name} />
                      <div>
                        <h3 className="text-white font-medium">{formData.name || 'Add your name'}</h3>
                        <p className="text-sm text-gray-400">Upload a photo for your profile</p>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                      />
                      <p className="mt-2 text-xs text-gray-400">Brief description for your profile.</p>
                    </div>

                    {/* Location & Website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                          <FiGlobe className="w-4 h-4" />
                          Website
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                      <h3 className="text-white font-medium">Social Profiles</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <FiInstagram className="w-4 h-4" />
                            Instagram
                          </label>
                          <input
                            type="text"
                            value={formData.social.instagram}
                            onChange={(e) => setFormData({
                              ...formData,
                              social: { ...formData.social, instagram: e.target.value }
                            })}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <FiTwitter className="w-4 h-4" />
                            Twitter
                          </label>
                          <input
                            type="text"
                            value={formData.social.twitter}
                            onChange={(e) => setFormData({
                              ...formData,
                              social: { ...formData.social, twitter: e.target.value }
                            })}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <h3 className="text-white font-medium mb-1">Email Notifications</h3>
                      <p className="text-sm text-gray-400">Choose what updates you want to receive</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <div>
                          <h3 className="text-white font-medium">New Followers</h3>
                          <p className="text-sm text-gray-400">When someone follows your profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.newFollowers}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, newFollowers: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <div>
                          <h3 className="text-white font-medium">Artwork Likes</h3>
                          <p className="text-sm text-gray-400">When someone likes your artwork</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.artworkLikes}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, artworkLikes: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <div>
                          <h3 className="text-white font-medium">Comments</h3>
                          <p className="text-sm text-gray-400">When someone comments on your artwork</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.comments}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, comments: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <div>
                          <h3 className="text-white font-medium">Marketing Updates</h3>
                          <p className="text-sm text-gray-400">News, updates, and promotional offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications.marketing}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                notifications: { ...formData.notifications, marketing: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <h3 className="text-white font-medium mb-1">Privacy Settings</h3>
                      <p className="text-sm text-gray-400">Manage your privacy preferences</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Profile Visibility
                      </label>
                      <select
                        value={formData.privacy.profileVisibility}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            privacy: {
                              ...formData.privacy,
                              profileVisibility: e.target.value as 'public' | 'private',
                            },
                          })
                        }
                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                      >
                        <option value="public">Public - Anyone can view your profile</option>
                        <option value="private">Private - Only approved followers can view</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <h3 className="text-white font-medium">Show Email Address</h3>
                          <p className="text-sm text-gray-400">Display your email on your profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacy.showEmail}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                privacy: { ...formData.privacy, showEmail: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3">
                        <div>
                          <h3 className="text-white font-medium">Show Location</h3>
                          <p className="text-sm text-gray-400">Display your location on your profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacy.showLocation}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                privacy: { ...formData.privacy, showLocation: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between py-3">
                        <div>
                          <h3 className="text-white font-medium">Allow Direct Messages</h3>
                          <p className="text-sm text-gray-400">Let others send you private messages</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.privacy.allowMessages}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                privacy: { ...formData.privacy, allowMessages: e.target.checked },
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <h3 className="text-white font-medium mb-1">Account Settings</h3>
                      <p className="text-sm text-gray-400">Manage your account preferences</p>
                    </div>

                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                          <FiLock className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-400 mt-1">Add an extra layer of security to your account</p>
                          <button className="mt-3 px-4 py-2 text-sm text-yellow-500 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/10 transition-colors">
                            Enable 2FA
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                          <FiLock className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Delete Account</h3>
                          <p className="text-sm text-gray-400 mt-1">Permanently delete your account and all data</p>
                          <button className="mt-3 px-4 py-2 text-sm text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-colors">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Submit Button */}
                <div className="flex justify-end pt-6 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 flex items-center gap-2 ${
                      loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-600 hover:to-pink-600'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <FiSave className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <FiAlertCircle className="w-4 h-4" />
              Need help? Contact support@galerya.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}