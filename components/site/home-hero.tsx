'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/images/hero-slide-01.jpg',
    label: 'Estratégia comercial imobiliária',
  },
  {
    image: '/images/hero-slide-02.jpg',
    label: 'Marketing imobiliário de alta performance',
  },
]; 	

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.75]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-[120%] w-full"
            style={{
              backgroundImage: `url('${currentSlide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 42%',
            }}
          />
        </AnimatePresence>
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
            Acelere as vendas da sua incorporadora
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white drop-shadow-lg md:text-xl">
            Do branding ao pós-venda, transformamos sua incorporadora
            integrando estratégia de marketing e gestão comercial.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-emerald px-7 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-105"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/resultados"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <BarChart3 className="h-5 w-5" />
              Conheça nossos resultados
            </Link>
          </div>

          <div
            className="mt-10 flex items-center gap-3"
            aria-label="Selecionar imagem do banner principal"
          >
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Exibir slide: ${slide.label}`}
                className={
                  'h-2.5 rounded-full transition-all duration-300 ' +
                  (activeSlide === index
                    ? 'w-9 bg-brand-light'
                    : 'w-2.5 bg-white/45 hover:bg-white/70')
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}