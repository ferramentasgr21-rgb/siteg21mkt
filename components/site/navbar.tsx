'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { NAV_LINKS } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 12);
    onScroll();
    window?.addEventListener?.('scroll', onScroll);
    return () => window?.removeEventListener?.('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label="GR21 - Página inicial">
        <img
  src="/gr21-logo.svg"
  alt="GR21 Aceleradora de Vendas e Marketing Imobiliário"
  className="h-8 w-auto md:h-9"
/>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS?.map((link) => {
            const active = pathname === link?.href;
            return (
              <li key={link?.href}>
                <Link
                  href={link?.href ?? '/'}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-brand-emerald'
                      : 'text-brand-dark/80 hover:text-brand-emerald'
                  )}
                >
                  {link?.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-dark hover:shadow-lg"
          >
            <CalendarCheck className="h-4 w-4" />
            Diagnóstico Gratuito
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-mist bg-white lg:hidden">
          <ul className="mx-auto max-w-[1200px] px-5 py-3">
            {NAV_LINKS?.map((link) => {
              const active = pathname === link?.href;
              return (
                <li key={link?.href}>
                  <Link
                    href={link?.href ?? '/'}
                    className={cn(
                      'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-brand-mist text-brand-emerald'
                        : 'text-brand-dark/80 hover:bg-brand-mist'
                    )}
                  >
                    {link?.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contato"
                className="flex items-center justify-center gap-2 rounded-md bg-brand-emerald px-5 py-3 text-base font-semibold text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Agendar Diagnóstico Gratuito
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
