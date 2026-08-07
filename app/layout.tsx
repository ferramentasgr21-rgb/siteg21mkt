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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'GR21 | Aceleradora de Vendas e Marketing Imobiliário',
    description: SITE.description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'GR21',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GR21',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GR21 | Aceleradora de Vendas e Marketing Imobiliário',
    description: SITE.description,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-white text-brand-dark antialiased`}
      >
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
        <Toaster />
        <ChunkLoadErrorHandler />
      </body>
    </html>
  );
}