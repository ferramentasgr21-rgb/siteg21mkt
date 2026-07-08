import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, SectionHeading, CtaBand } from '@/components/site/ui-blocks';
import { Reveal } from '@/components/site/reveal';
import {
  Target,
  Zap,
  BarChart3,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Rocket,
  Handshake,
  Eye,
} from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A GR21 é um hub de negócios 100% focado no mercado imobiliário, com mais de 20 anos de experiência integrando marketing e vendas.',
};

const PILARES = [
  {
    icon: Target,
    title: 'Expertise imobiliária',
    desc: '20+ anos de experiência exclusiva no setor. Conhecemos cada desafio e cada detalhe que faz diferença entre vender 30% ou 100% do empreendimento no primeiro ano.',
  },
  {
    icon: Zap,
    title: 'Integração total',
    desc: 'Marketing e vendas operando como uma máquina única. Sem desperdício de leads, sem desconexão estratégica, sem orçamento jogado fora.',
  },
  {
    icon: BarChart3,
    title: 'Resultados mensuráveis',
    desc: 'Dashboards, KPIs, metas claras. Você acompanha cada real investido e cada resultado gerado. Transparência total, performance comprovada.',
  },
  {
    icon: ShieldCheck,
    title: 'Metodologia validada',
    desc: 'Nosso método foi testado e refinado em dezenas de empreendimentos, gerando mais de R$ 120 milhões em VGV só em 2025 na região de Maringá.',
  },
];

const VALORES = [
  {
    icon: Target,
    title: 'Foco em resultados',
    desc: 'Não vendemos promessas, entregamos performance.',
  },
  {
    icon: Handshake,
    title: 'Parceria verdadeira',
    desc: 'Seu sucesso é o nosso sucesso.',
  },
  {
    icon: Eye,
    title: 'Transparência total',
    desc: 'Dados, relatórios e acesso completo aos processos.',
  },
  {
    icon: Rocket,
    title: 'Inovação constante',
    desc: 'Sempre um passo à frente do mercado.',
  },
  {
    icon: ShieldCheck,
    title: 'Profissionalismo',
    desc: 'Compromisso, pontualidade e entrega de excelência.',
  },
];

const DNA = [
  'Atuamos em todas as etapas do ciclo de vida do empreendimento',
  'Do branding ao pós-venda, com visão 360° do negócio',
  'Processos integrados, resultados previsíveis',
  'Equipe especializada exclusivamente no mercado imobiliário',
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            100% focados no mercado imobiliário.
            <br />
            100% dedicados ao seu sucesso.
          </>
        }
        subtitle="A GR21 nasceu da necessidade real do mercado: construtoras e incorporadoras precisavam de um parceiro estratégico que entendesse profundamente o setor e integrasse marketing e vendas em uma operação única."
        image="/images/equipe-reuniao.jpg"
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-brand-mist px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-emerald">
              Nossa história
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold text-brand-dark md:text-4xl">
              Especialistas que atuaram nas trincheiras do mercado
            </h2>

            <div className="mt-6 space-y-4 text-brand-dark/75 leading-relaxed">
              <p>
                Com mais de 20 anos de experiência em gestão comercial e marketing imobiliário,
                a GR21 é fruto da visão de especialistas que lideraram operações comerciais de
                grandes construtoras e desenvolveram estratégias que geraram centenas de milhões
                em VGV.
              </p>

              <p>
                Fundada com o propósito de acelerar vendas e potencializar marcas, a GR21 se
                tornou referência em consultoria integrada — o hub de negócios que construtoras
                procuram quando precisam de resultados reais, mensuráveis e sustentáveis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-mist shadow-lg">
              <Image
                src="/images/estrategia-dashboard.jpg"
                alt="Equipe da GR21 analisando dashboards de marketing e vendas imobiliárias"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-dark py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading
            light
            eyebrow="Nosso DNA"
            title="Mais que uma agência. Um hub de negócios."
            subtitle="Não somos uma agência de marketing tradicional. Não somos apenas consultoria comercial. Somos o parceiro estratégico que une o melhor dos dois mundos."
          />

          <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-4 sm:grid-cols-2">
            {DNA.map((item, i) => (
              <Reveal key={item} delay={i * 0.1} className="h-full">
                <div className="flex h-full min-h-[92px] items-start gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-5 shadow-sm backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
                  <span className="text-base font-medium leading-relaxed text-white">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Nossos pilares" title="O que sustenta cada resultado" />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILARES.map((p, i) => {
              const Icon = p.icon;

              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="flex h-full gap-5 rounded-xl border border-brand-mist bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <Icon className="h-6 w-6 text-brand-emerald" />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-dark">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading
            eyebrow="Nossos valores"
            title="Os princípios que guiam nosso trabalho"
          />

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {VALORES.map((v, i) => {
              const Icon = v.icon;

              return (
                <Reveal
                  key={v.title}
                  delay={i * 0.08}
                  className="w-full sm:max-w-[370px] sm:flex-[1_1_320px] lg:flex-[0_1_370px]"
                >
                  <div className="h-full min-h-[202px] rounded-xl border border-brand-mist bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-emerald text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">
                      {v.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brand-dark/75">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-brand-mist bg-white p-8 shadow-sm">
              <MapPin className="h-7 w-7 flex-shrink-0 text-brand-emerald" />

              <div>
                <h3 className="font-display text-lg font-semibold text-brand-dark">
                  Nossa localização
                </h3>

                <p className="mt-2 text-brand-dark/75">
                  Avenida Carneiro Leão, 563 | Sala 1508 — Maringá - PR | CEP:
                  87014-010
                </p>

                <p className="mt-1 text-sm text-brand-dark/60">
                  Atendemos construtoras e incorporadoras em todo o Brasil, com base
                  estratégica no Paraná.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Vamos construir o sucesso do seu empreendimento juntos?" />
    </>
  );
}