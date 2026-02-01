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

      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-12"> 
          
          <div className="space-y-10 md:col-span-2">
            
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-48 h-14 flex-shrink-0">
                  <Image
                    src="/images/logo-footer.svg"
                    alt="Ripple Nexus Logo"
                    fill
                    className="object-contain transition-all duration-300 brightness-110"
                    sizes="192px"
                    priority
                  />
                </div>
                <span className="sr-only">RIPPLE NEXUS</span>
              </Link>
              
              <p className="text-[var(--color-muted)] text-base leading-relaxed max-w-sm">
                <strong>Pioneering Digital Governance.</strong> Securely. Scalably. Compliantly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-400">Connect with us</h3>
              <ul className="space-y-3 text-[var(--color-muted)] text-base">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-400/70 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <div>
                    Cospazes, A-116 Urbtech Trade Centre<br />
                    Sec -132, Noida - 201304, India
                  </div>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400/70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.87 5.26 6.71 6.71l1.17-1.17c.18-.18.43-.24.66-.12 1.37.69 2.8.97 4.28.97.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.83 21 3 13.17 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.48.28 2.91.97 4.28.12.23.06.48-.12.66l-1.17 1.17z"/></svg>
                  <a href="tel:+917599756826" className="hover:text-primary-400 transition-colors font-medium">+91 7599756826</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-400/70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <a href="mailto:info@theripplenexus.com" className="hover:text-primary-400 transition-colors font-medium">info@theripplenexus.com</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-xl font-bold text-[var(--color-fg)] border-b border-[var(--color-border)] pb-2">Follow Our Journey</h3>
              <div className="flex space-x-6 pt-2">
                {socialLinks.map(link => (
                  <a 
                    key={link.url}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl text-[var(--color-muted)] hover:text-primary-400 transition-colors" 
                    aria-label={`Visit our ${link.name}`}
                  >
                    <FontAwesomeIcon icon={['fab', link.icon as any]} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold text-[var(--color-fg)] border-b border-[var(--color-border)] pb-2">Our Location</h3>
              <div className="w-full h-48 md:w-full md:h-64 rounded-xl overflow-hidden shadow-card border border-[var(--color-border)]">
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
            </div>
            
          </div>

          <div className="space-y-6 md:col-span-1">
            <h3 className="text-xl font-bold text-[var(--color-fg)] border-b border-[var(--color-border)] pb-2">Quick Links</h3>
            <ul className="space-y-3 text-[var(--color-fg)] text-base">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 md:col-span-1">
            <h3 className="text-xl font-bold text-[var(--color-fg)] border-b border-[var(--color-border)] pb-2">Our Solutions</h3>
            <ul className="space-y-3 text-[var(--color-fg)] text-base">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6 md:col-span-1">
            <h3 className="text-xl font-bold text-[var(--color-fg)] border-b border-[var(--color-border)] pb-2">Legal & Policy</h3>
            <ul className="space-y-3 text-[var(--color-fg)] text-base">
                <li>
                    <a href="/privacy-policy" className="hover:text-primary-400 transition-all duration-300 hover:underline inline-block">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="/terms-of-service" className="hover:text-primary-400 transition-all duration-300 hover:underline inline-block">
                        Terms of Service
                    </a>
                </li>
                <li>
                    <a href="/cancellation-policy" className="hover:text-primary-400 transition-all duration-300 hover:underline inline-block">
                        Cancellation Policy
                    </a>
                </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8">
          <div className="divider-gradient mb-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-muted)] text-sm font-light">
              © {currentYear} Ripple Nexus - Sole Proprietorship. All Rights Reserved. | <strong className="font-semibold text-accent-400">Udyam Certified MSME, Ministry of Micro, Small & Medium Enterprises, Govt. of India</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}