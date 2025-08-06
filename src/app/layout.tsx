import './globals.css'
import RippleNexusCookieBanner from '../components/CookieConsent'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider, ThemeScript } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ripple Nexus - Digital Solutions',
  description: 'Build Bold. Scale Smart. Bridging Ideas to Impact — At the Nexus of Innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} min-h-screen antialiased transition-colors duration-300 dark:bg-gray-900 bg-white dark:text-white text-gray-900`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
              <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <RippleNexusCookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
