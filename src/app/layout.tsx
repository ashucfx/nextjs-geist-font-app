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
  icons: {
    icon: "/favicon.ico",
  },
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
      <body className={`${inter.className} min-h-screen antialiased transition-colors duration-300 dark:bg-gray-900 bg-gray-50 dark:text-white text-gray-900`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-50 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20">
              <div className="dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 bg-gradient-to-b from-gray-50 to-white min-h-screen transition-colors duration-300">
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
