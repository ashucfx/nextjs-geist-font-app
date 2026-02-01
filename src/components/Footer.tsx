import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export default function Footer() {

  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Authority' },
    { href: '/services', label: 'Core Solutions' },
    { href: '/casestudies', label: 'Case Studies' },
    { href: '/contact', label: 'Engage Us' }
  ];

  const serviceLinks = [
    { href: '/casestudies?category=Website%20Development', label: 'Bespoke Development' },
    { href: '/casestudies?category=Digital%20Marketing', label: 'Digital Marketing' },
    { href: '/casestudies?category=Enterprise%20Solutions', label: 'Cloud Governance & DevOps' },
    { href: '/casestudies?category=App%20Development', label: 'App Development' },
    { href: '/casestudies?category=UI/UX', label: 'UX/UI Engineering' },
    { href: '/casestudies?category=Professional+%26+Career+Branding&+Career+Branding=', label: 'Career & Professional Branding' },
  ];
  
  const socialLinks = [
    { name: 'linkedin', url: 'https://www.linkedin.com/company/ripple-nexus/', icon: 'linkedin' },
    { name: 'twitter', url: 'https://twitter.com/RippleNexus', icon: 'twitter' },
    { name: 'instagram', url: 'https://www.instagram.com/ripplenexus/', icon: 'instagram' },
  ];
  
  return (
    <footer className="bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-card)] border-t border-[var(--color-border)] transition-colors duration-500 relative">
      {/* Divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient"></div>

      <div className="max-w-7xl mx-auto py-20 md:py-24 lg:py-32 px-6 sm:px-12 lg:px-20">
        
        {/* ENTERPRISE GRID: LEFT (BRAND + SOCIAL) | CENTER (NAV) | RIGHT (MAP) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT ZONE — BRAND AUTHORITY BLOCK */}
          <div className="md:col-span-3 flex flex-col">
            
            {/* LOGO BLOCK - Enterprise Anchor */}
            <div className="mb-8 lg:mb-12">
              <Link href="/" className="group inline-block">
                <div className="relative w-[140px] h-[165px] sm:w-[160px] sm:h-[189px] md:w-[160px] md:h-[189px] lg:w-[180px] lg:h-[212px]">
                  <Image
                    src="/images/logo-footer.svg"
                    alt="Ripple Nexus - Digital Governance"
                    fill
                    className="object-contain transition-all duration-300 brightness-110 group-hover:brightness-125 group-hover:scale-105"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 160px, 180px"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* TAGLINE - Brand Statement */}
            <div className="mb-12 lg:mb-16">
              <div className="space-y-1 mb-6">
                <p className="text-sm lg:text-base text-[var(--color-fg)] font-bold leading-snug">
                  Pioneering Digital Governance.
                </p>
                <p className="text-xs lg:text-sm text-[var(--color-muted)] font-medium leading-snug">
                  Securely. Scalably. Compliantly.
                </p>
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary-400 to-transparent rounded-full"></div>
            </div>
            
            {/* SOCIAL ICONS - Trust Signal */}
            <div>
              <h4 className="text-sm font-bold text-[var(--color-fg)] mb-4 uppercase tracking-wide">Follow</h4>
              <div className="flex space-x-5">
                {socialLinks.map(link => (
                  <a 
                    key={link.url}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-card)] text-[var(--color-muted)] hover:bg-primary-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                    aria-label={`Visit our ${link.name}`}
                  >
                    <FontAwesomeIcon icon={['fab', link.icon as any]} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
            
          </div>

          {/* CENTER ZONES — NAVIGATION GROUPS */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-2 gap-8 md:gap-6 lg:gap-8">
            
            {/* QUICK LINKS */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-[var(--color-fg)] uppercase tracking-wide border-b border-[var(--color-border)] pb-3">Navigation</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-[var(--color-muted)] hover:text-primary-400 transition-all duration-300 hover:translate-x-0.5 inline-block font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-[var(--color-fg)] uppercase tracking-wide border-b border-[var(--color-border)] pb-3">Solutions</h3>
              <ul className="space-y-3">
                {serviceLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-[var(--color-muted)] hover:text-primary-400 transition-all duration-300 hover:translate-x-0.5 inline-block font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT ZONE — MAPS + CONTACT */}
          <div className="md:col-span-5 flex flex-col gap-8">
            
            {/* MAP SECTION */}
            <div className="h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-card border border-[var(--color-border)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.928086071705!2d77.3754128749523!3d28.51181128955354!2m3!1f0!2f0!0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce72d5d23fd2d%3A0xccad56c7a364950a!2sRipple%20Nexus!5e0!3m2!1sen!2sin!4v1760524957424!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ripple Nexus Office Location Map"
                className="hover:opacity-95 transition-opacity duration-300"
              />
            </div>

            {/* CONTACT & LEGAL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* CONTACT DETAILS */}
              <div>
                <h4 className="text-sm font-bold text-[var(--color-fg)] uppercase tracking-wide mb-4">Get In Touch</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.87 5.26 6.71 6.71l1.17-1.17c.18-.18.43-.24.66-.12 1.37.69 2.8.97 4.28.97.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.83 21 3 13.17 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.48.28 2.91.97 4.28.12.23.06.48-.12.66l-1.17 1.17z"/></svg>
                    <a href="tel:+917599756826" className="text-sm text-[var(--color-muted)] hover:text-primary-400 transition-colors font-medium">+91 7599756826</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    <a href="mailto:info@theripplenexus.com" className="text-sm text-[var(--color-muted)] hover:text-primary-400 transition-colors font-medium">info@theripplenexus.com</a>
                  </li>
                </ul>
              </div>

              {/* CERTIFICATION */}
              <div>
                <h4 className="text-sm font-bold text-[var(--color-fg)] uppercase tracking-wide mb-4">Certified</h4>
                <p className="text-xs lg:text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                  <strong className="text-primary-400">Udyam Certified MSME</strong><br />
                  Ministry of Micro, Small &<br />
                  Medium Enterprises<br />
                  Govt. of India
                </p>
              </div>

            </div>

            {/* REGISTERED OFFICE - Below contact/certification */}
            <div className="pt-6 border-t border-[var(--color-border)]">
              <h4 className="text-sm font-bold text-[var(--color-fg)] mb-3 uppercase tracking-wide">Registered Office</h4>
              <p className="text-xs lg:text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                Cospazes, A-116 Urbtech<br />
                Trade Centre, Sec -132<br />
                Noida - 201304, India
              </p>
            </div>

          </div>

        </div>
        
        {/* FOOTER BOTTOM */}
        <div className="mt-16 pt-8">
          <div className="divider-gradient mb-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-muted)] text-xs font-light">
              © {currentYear} Ripple Nexus - Sole Proprietorship. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}