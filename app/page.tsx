import Link from 'next/link';
import { HomeHero } from '@/components/site/home-hero';
import { StatsGrid } from '@/components/site/stats-grid';
import { Reveal } from '@/components/site/reveal';
import { SectionHeading, CtaBand } from '@/components/site/ui-blocks';
import {
  Unplug, Database, Users, Megaphone, Target, Settings2, LineChart,
  Search, LayoutGrid, Rocket, TrendingUp, HeartHandshake, ArrowRight, CheckCircle2,
} from 'lucide-react';

export const dynamic = 'force-static';

const PROBLEMS = [
  { icon: Unplug, title: 'Marketing e comercial desconectados', desc: 'Investimento em mídia sem retorno mensurável e leads qualificados desperdiçados por falta de follow-up.' },
  { icon: Database, title: 'Mais de 60% da base esquecida', desc: 'CRM subutilizado ou inexistente e oportunidades perdidas por falta de processo.' },
  { icon: Users, title: 'Sem padrão de atendimento', desc: 'Cada corretor atende de um jeito diferente, gerando experiência inconsistente para o cliente.' },
  { icon: Megaphone, title: 'Estratégia apenas de divulgação', desc: 'Foco no imóvel, não no processo de vendas, sem análise de conversão e otimização.' },
];

const DIFERENCIAIS = [
  { icon: Target, title: 'Estratégia 100% focada no imobiliário', items: ['Mais de 20 anos de experiência exclusiva no setor', 'Conhecimento profundo das dores e oportunidades', 'Metodologia testada em diversos empreendimentos'] },
  { icon: Settings2, title: 'Marketing + Vendas = uma só operação', items: ['Fim da desconexão entre marketing e comercial', 'Processos integrados que maximizam conversão', 'CRM, scripts, treinamento e acompanhamento'] },
  { icon: LineChart, title: 'Resultados mensuráveis e previsíveis', items: ['Dashboards com KPIs em tempo real', 'Metas claras e acompanhamento de performance', 'Otimização constante baseada em dados'] },
];

const ETAPAS = [
  { icon: Search, num: '01', title: 'Diagnóstico Estratégico', desc: 'Mapeamento de gargalos comerciais, análise SWOT, estudo de mercado e definição de público-alvo ideal.' },
  { icon: LayoutGrid, num: '02', title: 'Estruturação Comercial e Marketing', desc: 'Planejamento integrado, identidade visual, processo comercial padronizado, CRM e treinamento da equipe.' },
  { icon: Rocket, num: '03', title: 'Captação Qualificada', desc: 'Comunicação 360°, criativos profissionais, mídia paga otimizada e landing pages de alta conversão.' },
  { icon: TrendingUp, num: '04', title: 'Conversão e Performance', desc: 'Acompanhamento do time, scripts padronizados, follow-up via CRM e otimização contínua do funil.' },
  { icon: HeartHandshake, num: '05', title: 'Pós-venda e Retenção', desc: 'Jornada do cliente, relacionamento, NPS e base aquecida para novos lançamentos e indicações.' },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-brand-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-brand-dark md:text-3xl">Números que comprovam resultados</h2>
            <p className="mt-3 text-brand-dark/70">Experiência, execução e resultados reais no mercado imobiliário.</p>
          </Reveal>
          <StatsGrid />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Por que a GR21" title="O que está travando as vendas da sua construtora?" subtitle="Identificamos os gargalos mais comuns que impedem empreendimentos de venderem no ritmo que poderiam." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS?.map((p, i) => {
              const Icon = p?.icon;
              return (
                <Reveal key={p?.title} delay={i * 0.1}>
                  <div className="group h-full rounded-xl border border-brand-mist bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-emerald/40 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">{p?.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">{p?.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link href="/contato" className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-emerald">
              Transforme esses problemas em resultados
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Nossa solução" title="Do branding ao pós-venda: atuação em todo o ciclo" subtitle="Somos um hub de negócios completo. Nossa metodologia integra marketing estratégico e gestão comercial de alta performance, criando um sistema previsível e escalável para acelerar suas vendas." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {DIFERENCIAIS?.map((d, i) => {
              const Icon = d?.icon;
              return (
                <Reveal key={d?.title} delay={i * 0.1}>
                  <div className="h-full rounded-xl border border-brand-mist bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-emerald text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-brand-dark">{d?.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {d?.items?.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-brand-dark/75">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Metodologia GR21" title="Do posicionamento de mercado à venda integrada" subtitle="Um método estruturado em 5 etapas que transforma operações comerciais e de marketing em uma máquina de vendas previsível." />
          <div className="mt-14 space-y-5">
            {ETAPAS?.map((e, i) => {
              const Icon = e?.icon;
              return (
                <Reveal key={e?.num} delay={i * 0.08}>
                  <div className="flex flex-col gap-5 rounded-xl border border-brand-mist bg-white p-6 shadow-sm transition-all hover:border-brand-emerald/40 hover:shadow-md md:flex-row md:items-center md:p-8">
                    <div className="flex items-center gap-5 md:w-1/3">
                      <span className="font-display text-4xl font-bold text-brand-emerald/25">{e?.num}</span>
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-emerald/10">
                        <Icon className="h-7 w-7 text-brand-emerald" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-brand-dark">{e?.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-dark/70 md:w-2/3">{e?.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Pronto para acelerar as vendas do seu empreendimento?" subtitle="Agende um diagnóstico gratuito e descubra como transformar seus resultados em até 90 dias." />
    </>
  );
}
