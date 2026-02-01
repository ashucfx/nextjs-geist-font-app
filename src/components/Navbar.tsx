"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

/**
 * 🎯 PREMIUM BALANCED NAVBAR — SaaS BRAND SYSTEM
 * ===============================================
 * Architecture:
 * ✅ 3-Zone Balanced Layout (LEFT BRAND | CENTER NAV | RIGHT CTA)
 * ✅ Brand Lockup System with Premium Tagline
 * ✅ Color Discipline (Primary, Secondary, Neutral only)
 * ✅ Global Edge Margins (64px desktop, responsive)
 * ✅ Soft Rounded Pill Hover State
 * ✅ Premium 80px Navbar Height
 * ✅ Full Responsive System
 * ✅ Accessibility & Keyboard Navigation
 * ✅ Zero Layout Shift, Smooth Animations
 */

const NavbarCTA: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="inline-block"
  >
    <Link
      href="/contact"
      className="px-6 md:px-7 py-2.5 md:py-3 bg-primary-500 hover:bg-primary-600
                text-white font-semibold text-sm md:text-base tracking-wide will-change-transform
                rounded-lg transition-all duration-250 shadow-soft hover:shadow-lg
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300
                active:scale-95"
      onClick={onClick}
      aria-label="Get Started - Contact Us"
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
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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

  const getMotionProps = (props: object) => isMounted ? props : {};
  const getWhileHover = (hoverProps: object) => isMounted ? hoverProps : {};

  return (
    <>
      {/* ============================================================
          PREMIUM NAVBAR — BALANCED 3-ZONE SYSTEM
          LEFT (BRAND) | CENTER (NAV) | RIGHT (CTA)
          ============================================================ */}
      <motion.nav
        {...getMotionProps({
          initial: { y: -100 },
          animate: { y: 0 },
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        })}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-[#0a0e18] backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
            : 'bg-[#070b14] border-b border-gray-900/50'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* CONTAINER — PREMIUM SPACING & BALANCE */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-5 md:py-6">
          <div className="flex justify-between items-center gap-8 md:gap-12">

            {/* ========================================================
                LEFT ZONE — BRAND LOCKUP
                Logo + Brand Name + Tagline (Stacked)
                ======================================================== */}
            <Link 
              href="/" 
              className="flex-shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-lg transition-opacity duration-200"
              onClick={closeMobileMenu}
              aria-label="Ripple Nexus - Home"
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* LOGO — RESPONSIVE SIZING */}
                <motion.div 
                  className="relative flex-shrink-0"
                  style={{ width: 'clamp(44px, 6vw, 56px)', height: 'clamp(44px, 6vw, 56px)' }}
                  {...getWhileHover({ scale: 1.08 })}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Ripple Nexus Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 44px, (max-width: 1024px) 48px, 56px"
                    priority
                  />
                </motion.div>
                
                {/* BRAND TEXT + TAGLINE — HIDDEN ON MOBILE */}
                <div className="hidden sm:flex flex-col gap-1.5 leading-tight justify-center">
                  {/* BRAND NAME */}
                  <motion.div 
                    className="flex items-baseline gap-1.5"
                    {...getWhileHover({ x: 1 })}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-lg md:text-xl font-black tracking-tight text-white">
                      Ripple
                    </span>
                    <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                      Nexus
                    </span>
                  </motion.div>
                  
                  {/* PREMIUM TAGLINE */}
                  <motion.span 
                    className="text-xs md:text-sm font-medium tracking-widest text-gray-400 uppercase"
                    {...getWhileHover({ x: 0.5 })}
                    transition={{ duration: 0.15 }}
                  >
                    Strategy • Scale • Impact
                  </motion.span>
                </div>
              </div>
            </Link>

            {/* ========================================================
                CENTER ZONE — NAVIGATION LINKS
                Desktop Only - Centered in available space
                ======================================================== */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-2">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.href}
                  {...getWhileHover({ y: -2 })}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  <Link
                    href={link.href}
                    className="px-4 md:px-5 py-2.5 text-sm md:text-base font-medium text-gray-300 hover:text-white 
                              rounded-md transition-all duration-250 ease-out
                              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ========================================================
                RIGHT ZONE — CTA & MOBILE TOGGLE
                Clean aligned to right with proper margin
                ======================================================== */}
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              {/* CTA BUTTON — DESKTOP ONLY */}
              <div className="hidden lg:block">
                <NavbarCTA />
              </div>

              {/* MOBILE MENU BUTTON */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                className="lg:hidden text-gray-300 hover:text-white p-2.5 rounded-lg 
                          hover:bg-primary-500/15 transition-all duration-200 
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ============================================================
          MOBILE MENU — FULL SCREEN DRAWER
          Clean list layout with smooth animation
          ============================================================ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] md:top-[88px] z-40 lg:hidden bg-black/40 backdrop-blur-sm"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* DRAWER MENU */}
            <motion.div
              id="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[72px] md:top-[88px] left-0 right-0 z-50 lg:hidden 
                        bg-black/98 backdrop-blur-xl border-b border-gray-800/50 
                        shadow-lg overflow-y-auto max-h-[calc(100vh-88px)]"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-6 space-y-2">
                {/* MOBILE NAV LINKS */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.25, 
                      delay: index * 0.05, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block text-base font-semibold text-gray-200 hover:text-white 
                                hover:bg-primary-500/12 transition-all duration-200 
                                px-4 py-3.5 rounded-lg focus-visible:outline-2 
                                focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* MOBILE CTA BUTTON */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: navLinks.length * 0.05, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="pt-4 mt-4 border-t border-gray-800/50"
                >
                  <div className="px-4 py-3">
                    <NavbarCTA onClick={closeMobileMenu} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}