'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.48, 0.68]);

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
        aria-hidden="true"
      >
        <div
          className="h-[120%] w-full"
          style={{
            backgroundImage: "url('/images/banner-principal-novo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 42%',
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            background:
  'linear-gradient(115deg, rgba(21,42,37,0.78) 0%, rgba(21,42,37,0.52) 48%, rgba(0,168,89,0.16) 100%)',
          }}
        />
      </motion.div>

      <div className="mx-auto w-full max-w-[1200px] px-5 pt-24">
        <motion.div
          initial={{ opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light backdrop-blur">
            Consultoria 100% focada no mercado imobiliário
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl">
            Acelere as vendas do seu empreendimento imobiliário
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white drop-shadow-lg md:text-xl">
            Do branding ao pós-venda, transformamos empreendimentos em sucesso de vendas
            com estratégia integrada de marketing e gestão comercial de alta performance.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-emerald px-7 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-105"
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/resultados"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <BarChart3 className="h-5 w-5" />
              Conheça Nossos Resultados
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}