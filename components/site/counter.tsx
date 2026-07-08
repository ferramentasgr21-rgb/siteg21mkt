'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function Counter({ value, prefix = '', suffix = '', duration = 1800 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const target = value ?? 0;
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration || 1), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display?.toLocaleString?.('pt-BR') ?? display}
      {suffix}
    </span>
  );
}
