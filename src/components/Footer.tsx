import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b dark:from-black dark:to-gray-900 from-gray-50 to-gray-100 border-t dark:border-[#1e56d6]/20 border-gray-300/50 transition-colors duration-500 shadow-inner">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info & Contact */}
          <div className="space-y-8 md:col-span-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/lg-01.png"
                    alt="Ripple Nexus Logo"
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110 brightness-100"
                    sizes="48px"
                  />
                </div>
                <span className="text-xl font-extrabold dark:text-white text-gray-900 group-hover:text-[#1e56d6] transition-colors duration-300">RIPPLE NEXUS</span>
              </div>
              <p className="dark:text-gray-300 text-gray-600 text-base leading-relaxed max-w-md">
                Build Bold. Scale Smart. Bridging Ideas to Impact — At the Nexus of Innovation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#1e56d6]">Contact</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base max-w-sm">
                <li>
                  Cospazes, A-116 Urbtech Trade Centre<br />
                  Sec -132, Noida - 201304
                </li>
                <li>
                  Phone: <a href="tel:+917599756826" className="hover:text-[#1e56d6] transition-colors underline">+91 7599756826</a>
                </li>
                <li>
                  Email: <a href="mailto:info@theripplenexus.com" className="hover:text-[#1e56d6] transition-colors underline">info@theripplenexus.com</a>
                </li>
              </ul>
            </div>

            {/* Google Maps */}
            <div className="w-full h-[320px] rounded-lg overflow-hidden shadow-lg border dark:border-[#1e56d6]/20 border-gray-300/50 hover:scale-105 transition-transform duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9282419514566!2d77.3779878!3d28.511806600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce72d5d23fd2d%3A0xccad56c7a364950a!2sRipple%20Nexus!5e0!3m2!1sen!2sin!4v1747514622012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ripple Nexus Location"
                className="hover:opacity-90 transition-opacity duration-300 rounded-lg"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#1e56d6]">Quick Links</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
              <li>
                <a href="/" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#1e56d6]">Our Services</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Content Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-2 inline-block">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 pt-12 border-t dark:border-[#1e56d6]/20 border-gray-300/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="dark:text-gray-300 text-gray-700 text-sm font-light">
              © {new Date().getFullYear()} Ripple Nexus - Sole Proprietorship. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="/privacy-policy" className="dark:text-gray-300 text-gray-700 hover:text-[#1e56d6] transition-colors text-sm font-medium">
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="dark:text-gray-300 text-gray-700 hover:text-[#1e56d6] transition-colors text-sm font-medium"
                aria-label="View our Terms of Service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
