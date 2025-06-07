import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400">{title}</h3>
        <span className="p-2 bg-white/5 rounded-lg">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
    </motion.div>
  );
};

export default StatCard; 