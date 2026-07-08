import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';
import { whatsappLink } from '@/lib/site';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-emerald">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <div
      className={
        (align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left') +
        ' '
      }
    >
      {eyebrow ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={
          'mt-5 font-display text-3xl font-bold leading-tight md:text-4xl ' +
          (light ? 'text-white' : 'text-brand-dark')
        }
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={'mt-4 text-base leading-relaxed md:text-lg ' + (light ? 'text-white/80' : 'text-brand-dark/70')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {image ? (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 0%, rgba(0,168,89,0.25), transparent), linear-gradient(180deg, rgba(21,42,37,0.85), rgba(21,42,37,0.95))',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? (
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-lg leading-relaxed text-white/80">{subtitle}</p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  subtitle,
  primaryLabel = 'Quero Agendar Meu Diagnóstico',
  primaryHref = '/contato',
}: {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-brand-emerald">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <Reveal className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-3 text-white/90 md:text-lg">{subtitle}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform hover:scale-105"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
