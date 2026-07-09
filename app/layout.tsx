import { Poppins, Inter } from 'next/font/google';
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
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GR21' }],
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
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-brand-dark antialiased`}>
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
