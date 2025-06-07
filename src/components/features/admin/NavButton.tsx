import React from 'react';
import { motion } from 'framer-motion';

interface NavButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ children, active, onClick, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
        active
          ? 'bg-purple-500/20 text-purple-400'
          : 'hover:bg-white/5 text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{children}</span>
    </motion.button>
  );
};

export default NavButton; 