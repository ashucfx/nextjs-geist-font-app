export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-[#1e56d6]/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info & Contact */}
          <div className="space-y-6 md:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 4L20 18H4L12 4Z"
                      fill="#1e56d6"
                      className="transform origin-center transition-transform hover:scale-110"
                    />
                    <path
                      d="M12 8L16 16H8L12 8Z"
                      fill="#1e56d6"
                      className="transform origin-center transition-transform hover:scale-110 opacity-50"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">RIPPLE NEXUS</span>
              </div>
              <p className="text-gray-200 text-sm">
                Build Bold. Scale Smart. Bridging Ideas to Impact — At the Nexus of Innovation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1e56d6]">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-200 text-sm">
                  Cospazes, A-116 Urbtech Trade Centre<br />
                  Sec -132, Noida - 201304
                </li>
                <li className="text-gray-200 text-sm">
                  Phone: <a href="tel:+917599756826" className="hover:text-[#1e56d6] transition-colors">+91 7599756826</a>
                </li>
                <li className="text-gray-200 text-sm">
                  Email: <a href="mailto:info@ripplenexus.com" className="hover:text-[#1e56d6] transition-colors">info@ripplenexus.com</a>
                </li>
              </ul>
            </div>

            {/* Google Maps */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg border border-[#1e56d6]/20 hover:scale-105 transition-transform duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9282419514566!2d77.3779878!3d28.511806600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce72d5d23fd2d%3A0xccad56c7a364950a!2sRipple%20Nexus!5e0!3m2!1sen!2sin!4v1747514622012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ripple Nexus Location"
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1e56d6]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1e56d6]">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Content Strategy
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-200 hover:text-[#1e56d6] transition-all duration-300 hover:translate-x-1 inline-block">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1e56d6]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-200 hover:text-[#1e56d6] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-200 hover:text-[#1e56d6] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
