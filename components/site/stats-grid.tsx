'use client';

import { Reveal } from './reveal';
import { Counter } from './counter';
import { TrendingUp, Building2, Handshake, Award } from 'lucide-react';

const STATS = [
  { icon: TrendingUp, prefix: '+R$ ', value: 120, suffix: 'M', label: 'VGV em gestão 2025 — Maringá' },
  { icon: Building2, prefix: '', value: 4, suffix: '', label: 'Empreendimentos em gestão completa' },
  { icon: Handshake, prefix: '+', value: 40, suffix: '', label: 'Imobiliárias parceiras ativas' },
  { icon: Award, prefix: '+', value: 20, suffix: '', label: 'Anos de experiência no mercado' },
];

export function StatsGrid({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STATS?.map((stat, i) => {
        const Icon = stat?.icon;
        return (
          <Reveal key={stat?.label} delay={i * 0.1}>
            <div
              className={
                'group h-full rounded-xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ' +
                (dark
                  ? 'border-white/10 bg-white/5'
                  : 'border-brand-mist bg-white')
              }
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-emerald/10">
                <Icon className="h-6 w-6 text-brand-emerald" />
              </div>
              <p className={'mt-5 font-display text-3xl font-bold md:text-4xl ' + (dark ? 'text-white' : 'text-brand-dark')}>
                {stat?.prefix}
                <Counter value={stat?.value ?? 0} />
                {stat?.suffix}
              </p>
              <p className={'mt-2 text-sm ' + (dark ? 'text-white/70' : 'text-brand-dark/70')}>
                {stat?.label}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
