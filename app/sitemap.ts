import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host') || 'gr21imoveis.com.br';
  const proto = h.get('x-forwarded-proto') || 'https';
  const base = `${proto}://${host}`;
  const routes = ['', '/sobre', '/servicos', '/resultados', '/equipe', '/faq', '/contato'];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }));
}
