'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '/services', 
    label: 'Services',
    dropdown: [
      { href: '/services', label: 'All Services' },
      { href: '/services/web-mobile-development', label: 'Web & Mobile' },
      { href: '/services/ai-automation', label: 'AI & Automation' },
      { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
      { href: '/services/digital-marketing', label: 'Digital Marketing' },
      { href: '/services/career-branding', label: 'Career Branding' }
    ]
  },
  { href: '/casestudies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking overlay
  const handleOverlayClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Keyboard escape to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 14, 24, 0.95)' : '#070b14',
          boxShadow: isScrolled 
            ? '0 10px 40px rgba(0, 0, 0, 0.9), 0 1px 0 rgba(59, 130, 246, 0.1)' 
            : '0 4px 12px rgba(0, 0, 0, 0.4)',
          borderBottom: isScrolled ? '1px solid rgba(59, 130, 246, 0.15)' : 'none',
        }}
      >
        <div className={styles.navContainer}>
          {/* Brand Zone */}
          <Link href="/" className={styles.brandZone}>
            <Image
              src="/images/logo.svg"
              alt="Ripple Nexus"
              width={64}
              height={64}
              className={styles.logoImage}
              priority
              quality={100}
            />
            <div className={styles.brandContent}>
              <span className={styles.brandText}>Ripple Nexus</span>
              <span className={styles.brandTagline}>Engineering Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li 
                  key={item.href}
                  className={item.dropdown ? 'relative group' : ''}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <Link href={item.href} className={`${styles.navLink} flex items-center gap-1`}>
                        {item.label}
                        <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                      </Link>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-[#1e56d6] transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Zone */}
          <div className={styles.ctaZone}>
            <Link href="/contact" className={styles.ctaButton}>
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={handleOverlayClick}
          role="presentation"
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}
        aria-label="Mobile navigation"
        role="navigation"
      >
        <div className={styles.mobileMenuContent}>
          {navItems.map((item) => (
            <div key={item.href}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`${styles.mobileMenuLink} w-full`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left' }}
                  >
                    <span>{item.label}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-gray-400 hover:text-[#1e56d6] transition-colors"
                          onClick={handleNavClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={styles.mobileMenuLink}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.mobileCtaButton}
            onClick={handleNavClick}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}
