import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host') || 'gr21imoveis.com.br';
  const proto = h.get('x-forwarded-proto') || 'https';
  const base = `${proto}://${host}`;
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
