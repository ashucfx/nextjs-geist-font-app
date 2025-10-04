import './globals.css';
import RippleNexusCookieBanner from '../components/CookieConsent';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider, ThemeScript } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 1. Import Font Awesome CSS styles
import '@fortawesome/fontawesome-svg-core/styles.css'; 

// 2. Import your configuration file to register the icons
import '../fontawesome'; 

// ... other imports below this, like your global CSS ...
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export const metadata: Metadata = {
  // Use a clear, professional structure: Company Name | Service/Niche
  title: "Ripple Nexus | Official Digital Strategy & Enterprise Development Firm",
  // More specific, authoritative description focusing on trust and security
  description: "Official site for Ripple Nexus. We provide bespoke digital transformation, scalable enterprise solutions, and secure data infrastructure for businesses and governmental bodies.",
  // Crucial for E-E-A-T (Expertise, Authoritativeness, Trustworthiness)
  authors: [{ name: "Ripple Nexus Team", url: "https://www.theripplenexus.com" }],
  creator: "Ripple Nexus Development",
  
  icons: {
    icon: '/favicon.ico', 
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html> tag remains the same
    <html lang="en" suppressHydrationWarning>
      
      <body className={`${inter.className} 
          min-h-screen antialiased 
          transition-colors duration-300 
          dark:bg-gray-900 bg-gray-50 
          dark:text-white text-gray-900`}
      >
        {/* ThemeScript is moved here to execute immediately upon <body> load 
            to prevent the flash of unstyled content (FOUC) */}
        <ThemeScript /> 
        
        <ThemeProvider>
          {/* Main layout container with flex for header/main/footer */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* The <main> element takes the primary layout/background classes 
                to simplify the DOM structure. pt-20 matches Navbar height. */}
            <main className="flex-grow pt-20 
                 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 
                 bg-gradient-to-b from-gray-50 to-white 
                 transition-colors duration-300"
            >
              {children}
            </main>
            
            <Footer />
          </div>
          <RippleNexusCookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}