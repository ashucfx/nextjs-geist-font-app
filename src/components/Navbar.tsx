"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'dark:bg-gray-900/95 bg-white/98 backdrop-blur-xl border-b dark:border-gray-800/50 border-gray-200/30 shadow-2xl dark:shadow-gray-900/50 shadow-gray-200/50' 
            : 'dark:bg-gray-900/20 bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative w-12 h-12 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Image
                  src="/images/lg-01.png"
                  alt="Ripple Nexus Logo"
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-110 dark:brightness-100 brightness-90"
                  sizes="48px"
                  priority
                />
              </motion.div>
              <motion.div 
                className="text-xl font-bold flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-[#1e56d6] hover:text-[#2563eb] transition-colors duration-300">RIPPLE</span>
                <span className="mx-1.5"></span>
                <span className="dark:text-white text-gray-900 hover:text-[#1e56d6] dark:hover:text-[#1e56d6] transition-colors duration-300">NEXUS</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold dark:text-gray-200 text-gray-700 hover:text-[#1e56d6] dark:hover:text-[#1e56d6] transition-all duration-500 relative group px-4 py-3 rounded-lg hover:bg-[#1e56d6]/10"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1e56d6] to-blue-600 transition-all duration-500 group-hover:w-3/4 rounded-full"></span>
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-[#1e56d6] to-blue-600 text-white rounded-lg hover:from-[#1e56d6]/90 hover:to-blue-600/90 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#1e56d6]/40 font-semibold text-sm tracking-wide hover:scale-110 transform"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              <button
                className="dark:text-white text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 dark:bg-gray-900/95 bg-white/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-medium dark:text-white text-gray-800 hover:text-[#1e56d6] dark:hover:text-[#1e56d6] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-[#1e56d6] text-white rounded-lg hover:bg-[#1e56d6]/90 transition-all duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
