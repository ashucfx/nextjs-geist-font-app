import './globals.css';
import RippleNexusCookieBanner from '../components/CookieConsent';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '@fortawesome/fontawesome-svg-core/styles.css'; 

import '../fontawesome'; 

import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Ripple Nexus: Strategy. Scale. Impact.",
  description: "Ripple Nexus delivers end-to-end digital command: from Code to Strategy, Scale to Security, and Branding to Career advancement.",
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
    <html lang="en">
      
      <body className={`${inter.className} 
          min-h-screen antialiased 
          transition-colors duration-300 
          bg-gray-950 text-gray-100`}
      >
        
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow pt-20 
              bg-gradient-to-b from-gray-950 to-gray-800 
              transition-colors duration-300"
          >
            {children}
          </main>
          
          <Footer />
        </div>
        <RippleNexusCookieBanner />
        
      </body>
    </html>
  );
}