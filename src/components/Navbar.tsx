"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const NavbarCTA: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="inline-block"
  >
    <Link
      href="/contact"
      className="px-6 py-2.5 bg-gradient-to-r from-[#1e56d6] to-blue-600 
                text-white rounded-lg hover:from-blue-600 hover:to-[#1e56d6] 
                transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#1e56d6]/40 
                font-semibold text-sm tracking-wide transform"
      onClick={onClick}
    >
      Get Started
    </Link>
  </motion.div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/casestudies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' }
  ];

  const linkTransition = { type: "spring", stiffness: 400, damping: 25 };

  const getMotionProps = (props: object) => isMounted ? props : {};
  const getWhileHover = (hoverProps: object) => isMounted ? hoverProps : {};

  return (
    <>
      <motion.nav
        {...getMotionProps({
          initial: { y: -100 },
          animate: { y: 0 },
          transition: { duration: 0.5, ease: 'easeOut' }
        })}
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.div 
                className="relative w-12 h-12 flex-shrink-0"
                {...getWhileHover({ scale: 1.05 })}
                transition={linkTransition}
              >
                <Image
                  src="/images/lg-01.png"
                  alt="Ripple Nexus Logo"
                  fill
                  className="object-contain transition-all duration-300 brightness-100"
                  sizes="48px"
                  priority
                />
              </motion.div>
              
              <div className="flex flex-col items-start leading-none">
                <motion.div 
                  className="text-xl font-bold flex items-center tracking-tight"
                  {...getWhileHover({ x: 3 })}
                  transition={linkTransition}
                >
                  <span className="text-[#1e56d6] transition-colors duration-300">RIPPLE</span>
                  <span className="mx-1"></span>
                  <span className="text-white transition-colors duration-300">NEXUS</span>
                </motion.div>
                
                <span className="text-xs font-semibold text-green-400 mt-1">
                  Udyam Certified MSME, Govt. of India
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.href}
                  {...getWhileHover({ scale: 1.05, y: -2 })}
                  transition={linkTransition}
                  className="inline-block"
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium text-gray-300 hover:text-[#1e56d6] transition-colors duration-200 relative group px-2 py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#1e56d6] transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </motion.div>
              ))}
              <NavbarCTA />
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <button
                className="text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 md:hidden" 
          >
            <div className="fixed inset-x-0 top-20 bottom-0 bg-gray-900/98 backdrop-blur-xl shadow-2xl overflow-y-auto">
              <div className="flex flex-col items-center justify-start pt-12 pb-10 space-y-6"> 
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-semibold text-gray-200 hover:text-[#1e56d6] transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <NavbarCTA onClick={toggleMobileMenu} />
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}