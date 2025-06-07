'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiUserPlus, FiSearch, FiFilter, FiMail, FiCalendar, FiShield } from 'react-icons/fi';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'artist';
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
}

// Dummy data untuk contoh
const initialUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'artist',
    status: 'active',
    joinDate: '2024-03-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-03-14',
  },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-pink-900/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 border border-white/10 p-8 mb-8"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-purple-500/20 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <FiUsers className="w-6 h-6 text-purple-400" />
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    User Management
                  </h1>
                </div>
                <p className="text-gray-400 mt-1">Manage and monitor user accounts efficiently</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCreateUser}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl 
                         hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg 
                         shadow-purple-500/20 flex items-center gap-2 group"
              >
                <FiUserPlus className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Add New User</span>
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <FiUsers className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Users</p>
                    <p className="text-2xl font-semibold text-white">{users.length}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiShield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Users</p>
                    <p className="text-2xl font-semibold text-white">
                      {users.filter(user => user.status === 'active').length}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiCalendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">New This Month</p>
                    <p className="text-2xl font-semibold text-white">2</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Filters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search with Animation */}
            <div className="relative group">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-purple-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 transition-all duration-200"
              />
            </div>
            
            {/* Status Filter with Custom Styling */}
            <div className="relative group">
              <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-purple-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                         focus:outline-none focus:border-purple-500 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Role Filter with Custom Styling */}
            <div className="relative group">
              <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-purple-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                         focus:outline-none focus:border-purple-500 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="all">All Roles</option>
                <option value="user">User</option>
                <option value="artist">Artist</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-black/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Join Date</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <AnimatePresence>
                  {filteredUsers.map((user) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      className="transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 
                                     flex items-center justify-center border border-white/10 group-hover:border-white/20"
                          >
                            <span className="text-sm font-medium text-white">{user.name.charAt(0)}</span>
                          </motion.div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">{user.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5">ID: {user.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-300">
                          <FiMail className="w-4 h-4 mr-2 text-gray-400" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5
                          ${user.role === 'artist' 
                            ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30' 
                            : 'bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            user.role === 'artist' ? 'bg-purple-400' : 'bg-blue-400'
                          }`} />
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5
                          ${user.status === 'active' 
                            ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/30' 
                            : user.status === 'inactive' 
                            ? 'bg-red-500/20 text-red-400 ring-1 ring-red-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/30'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            user.status === 'active' ? 'bg-green-400' : 
                            user.status === 'inactive' ? 'bg-red-400' : 'bg-yellow-400'
                          }`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-300">
                          <FiCalendar className="w-4 h-4 mr-2 text-gray-400" />
                          {user.joinDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedUser(user);
                              setIsEditModalOpen(true);
                            }}
                            className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 
                                     transition-colors duration-200 flex items-center gap-1.5"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedUser(user);
                              setIsDeleteModalOpen(true);
                            }}
                            className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 
                                     transition-colors duration-200 flex items-center gap-1.5"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enhanced Edit Modal */}
        <AnimatePresence>
          {isEditModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setIsEditModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <FiUsers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedUser ? 'Edit User' : 'Create New User'}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      {selectedUser ? 'Modify user details' : 'Add a new user to the system'}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                               placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                               placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                                     focus:outline-none focus:border-purple-500 transition-colors appearance-none">
                      <option value="user">User</option>
                      <option value="artist">Artist</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
                                     focus:outline-none focus:border-purple-500 transition-colors appearance-none">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4 pt-6 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2.5 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl 
                               hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg 
                               shadow-purple-500/20 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save Changes
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Delete Modal */}
        <AnimatePresence>
          {isDeleteModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Delete User</h2>
                    <p className="text-red-400 text-sm mt-1">This action cannot be undone</p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                  <p className="text-gray-300">
                    Are you sure you want to delete <span className="text-white font-medium">{selectedUser?.name}</span>?
                    This will permanently remove their account and all associated data.
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="px-4 py-2.5 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (selectedUser) {
                        setUsers(users.filter(user => user.id !== selectedUser.id));
                        setIsDeleteModalOpen(false);
                        setSelectedUser(null);
                      }
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl 
                             hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg 
                             shadow-red-500/20 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete User
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 