import './globals.css';
import RippleNexusCookieBanner from '../components/CookieConsent';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import BubbleCursor from '../components/BubbleCursor';
import ThemeProvider from '../components/ThemeProvider';
import PageTransition from '../components/PageTransition';
import { organizationSchema, websiteSchema } from '@/lib/schema';

import '@fortawesome/fontawesome-svg-core/styles.css'; 

import '../fontawesome';

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
  title: "Ripple Nexus | Engineering Teams for Complex Technical Transitions",
  description: "Production-grade web/mobile development, AI automation, and cloud infrastructure. We've built 50+ apps with 99.9% uptime across 12 countries. Transparent pricing. No BS.",
  authors: [{ name: "Ashutosh Upadhyay", url: "https://www.theripplenexus.com" }],
  creator: "Ripple Nexus",
  manifest: '/manifest.webmanifest',
  keywords: ['Next.js development', 'React Native apps', 'AI automation', 'Cloud migration', 'DevOps', 'LangChain', 'AWS', 'Azure', 'GCP'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theripplenexus.com',
    title: 'Ripple Nexus | Engineering Teams for Complex Technical Transitions',
    description: 'Production-grade web/mobile development, AI automation, and cloud infrastructure. 50+ apps, 99.9% uptime, 12 countries.',
    siteName: 'Ripple Nexus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripple Nexus | Engineering Teams for Complex Technical Transitions',
    description: 'Production-grade web/mobile development, AI automation, and cloud infrastructure.',
  },
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
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen antialiased transition-colors duration-300 bg-[#070b14] text-white`}
      >
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
        <ThemeProvider />
        <SmoothScroll />
        <BubbleCursor />

        <div className="flex flex-col min-h-screen bg-[#070b14]">
          <Header />

          <main className="flex-grow bg-[#070b14] transition-colors duration-300 app-main">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
        </div>
        <RippleNexusCookieBanner />
      </body>
    </html>
  );
}