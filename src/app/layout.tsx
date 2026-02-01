import './globals.css';
import RippleNexusCookieBanner from '../components/CookieConsent';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import BubbleCursor from '../components/BubbleCursor';
import ThemeProvider from '../components/ThemeProvider';
import PageTransition from '../components/PageTransition';

import '@fortawesome/fontawesome-svg-core/styles.css'; 

import '../fontawesome';

import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
  preload: true
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-display',
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Ripple Nexus: Strategy. Scale. Impact.",
  description: "Ripple Nexus delivers end-to-end digital command: from Code to Strategy, Scale to Security, and Branding to Career advancement.",
  authors: [{ name: "Ripple Nexus Team", url: "https://www.theripplenexus.com" }],
  creator: "Ripple Nexus Development",
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/maskable-icon.png' }
    ]
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
        <link rel="preload" href="/images/logo-vertical.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen antialiased transition-colors duration-300 bg-[var(--color-bg)] text-[var(--color-fg)]`}
      >
        <ThemeProvider />
        <SmoothScroll />
        <BubbleCursor />

        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow pt-20 transition-colors duration-300 app-main">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
        </div>
        <RippleNexusCookieBanner />
      </body>
    </html>
  );
}