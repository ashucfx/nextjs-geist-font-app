"use client";

import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      // Refined hover/tap scale for a stable, quality feel
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      
      // CSS Refinements: 
      // - Used theme-consistent blue/gray dark mode colors.
      // - Removed unnecessary '/50' opacity from dark:bg/dark:border for solid appearance.
      className="relative p-3 rounded-full bg-gray-100/70 dark:bg-gray-800 
                 text-[#1e56d6] dark:text-white 
                 hover:bg-gray-200/80 dark:hover:bg-gray-700 
                 transition-all duration-300 border border-gray-300 dark:border-gray-700 
                 shadow-md dark:shadow-none backdrop-blur-sm flex-shrink-0"
      
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        
        {/* Sun Icon (Light Mode) */}
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 0 : 1,
            rotate: theme === 'dark' ? 90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <svg 
            className="w-5 h-5" 
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {/* Sun Icon Path */}
            <path 
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        
        {/* Moon Icon (Dark Mode) */}
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" // Changed to fill="currentColor" for a solid moon look
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {/* Moon Icon Path */}
            <path 
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
}