import type { ReactNode } from 'react';
import { Poppins, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { WhatsappButton } from '@/components/site/whatsapp-button';
import { CookieConsent } from '@/components/site/cookie-consent';
import { SITE } from '@/lib/site';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || SITE.url),
  title: {
    default: 'GR21 | Aceleradora de Vendas e Marketing Imobiliário',
    template: '%s | GR21',
  },
  description: SITE.description,
  keywords: [
    'marketing imobiliário',
    'consultoria de vendas',
    'aceleradora de vendas',
    'gestão comercial imobiliária',
    'lançamento imobiliário',
    'CRM imobiliário',
    'GR21',
    'Maringá',
  ],
  authors: [{ name: 'GR21' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'GR21 | Aceleradora de Vendas e Marketing Imobiliário',
    description: SITE.description,
    url: SITE.url,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'GR21',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GR21 — Aceleradora de Vendas e Marketing Imobiliário',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GR21 | Aceleradora de Vendas e Marketing Imobiliário',
    description: SITE.description,
    images: ['/og-image.png'],
  },
  other: {
    'facebook-domain-verification': 'pvr7ewo98hm4xsuvyhk2f1gp0bn8gp',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: 'GR21 Aceleradora de Vendas e Marketing Imobiliário',
  alternateName: 'GR21',
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/icon-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE.url}/og-image.png`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Carneiro Leão, 563, Sala 1508',
    addressLocality: 'Maringá',
    addressRegion: 'PR',
    postalCode: '87014-010',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  sameAs: [SITE.social.instagram, SITE.social.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-white text-brand-dark antialiased`}
      >
        <Script id="gr21-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              personalization_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>

        <Script
          id="abacus-chatllm"
          src="https://apps.abacus.ai/chatllm/appllm-lib.js"
          strategy="afterInteractive"
        />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBTRCCL5');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBTRCCL5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappButton />
        <CookieConsent />
        <Toaster />
        <ChunkLoadErrorHandler />
      </body>
    </html>
  );
}
