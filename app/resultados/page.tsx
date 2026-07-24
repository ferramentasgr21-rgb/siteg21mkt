import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, SectionHeading, CtaBand } from '@/components/site/ui-blocks';
import { StatsGrid } from '@/components/site/stats-grid';
import { Reveal } from '@/components/site/reveal';
import { CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Resultados',
  description: 'Mais de R$ 120 milhões em VGV, diversos empreendimentos acelerados e resultados mensuráveis.',
};

const CASES = [
  { img: '/images/case-torre-luxo.jpg', tag: 'Torre Comercial', title: 'Empreendimento comercial de alto padrão', desafio: 'Liquidação de salas remanescentes do Le Monde Centro Empresarial', resultados: ['100% das unidades vendidas em 18 meses', 'Leads + qualificados gerados', 'Taxa de conversão otimizada', 'ROI de mídia paga sustentável'] },
  { img: '/images/case-condominio.jpg', tag: 'Lançamento', title: 'Condomínio residencial multifamiliar', desafio: 'Lançamento do Villanova Residence', resultados: ['73% das unidades vendidas em pré-lançamento', 'VGV de R$58 milhões', 'Equipe de vendas treinada', 'Geração contínua de leads qualificados'] },
  { img: '/images/case-aereo.jpg', tag: 'Lançamento', title: 'Empreendimento Premium', desafio: 'Lançamento do Residencial Sequoia', resultados: ['100% vendido em 12 meses', 'Mídia paga otimizada por fase', 'Landing pages de alta conversão', 'Funil comercial estruturado'] },
];

const BENEFICIOS = ['Aumento na geração de leads qualificados', 'Redução no tempo médio de venda', 'Melhora na taxa de conversão do funil', 'ROI médio de mídia paga sustentável', 'Aproveitamento da base de leads', 'Equipe comercial mais produtiva com processo padronizado'];

export default function ResultadosPage() {
  return (
    <>
      <PageHero eyebrow="Resultados que comprovam" title="Números reais. Resultados comprovados." subtitle="Mais de 20 anos de experiência, diversos empreendimentos acelerados e centenas de milhões em VGV gerados. Veja por que construtoras confiam na GR21." image="/images/case-aereo.jpg" />

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5"><StatsGrid /></div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Cases de sucesso" title="Empreendimentos que aceleramos" subtitle="Desafios reais transformados em resultados mensuráveis." />
          <div className="mt-14 space-y-8">
            {CASES?.map((c, i) => (
              <Reveal key={c?.title} delay={0.05}>
                <div className={'grid overflow-hidden rounded-2xl border border-brand-mist bg-white shadow-sm lg:grid-cols-2 ' + (i % 2 === 1 ? 'lg:[direction:rtl]' : '')}>
                  <div className="relative aspect-video bg-brand-mist lg:aspect-auto lg:min-h-[340px] lg:[direction:ltr]">
                    <Image src={c?.img} alt={c?.title} fill className="object-contain bg-brand-cream p-4"/>                
                  </div>
                  <div className="p-8 md:p-10 lg:[direction:ltr]">
                    <span className="inline-flex rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-emerald">{c?.tag}</span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-brand-dark">{c?.title}</h3>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-dark/50">Desafio</p>
                    <p className="mt-1 text-brand-dark/75">{c?.desafio}</p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand-dark/50">Resultados</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {c?.resultados?.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-brand-dark/80"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-emerald" />{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading light eyebrow="O que você ganha" title="Benefícios mensuráveis" />
          <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-4 sm:grid-cols-2">
  {BENEFICIOS?.map((b, i) => (
    <Reveal key={b} delay={i * 0.08} className="h-full">
      <div className="flex h-full min-h-[92px] items-start gap-3 rounded-xl border border-white/15 bg-white/[0.08] p-5 shadow-sm backdrop-blur-sm">
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
        <span className="text-base font-medium leading-relaxed text-white">{b}</span>
      </div>
    </Reveal>
  ))}
</div>
        </div>
      </section>

      <CtaBand title="Quer resultados assim no seu empreendimento?" subtitle="Agende um diagnóstico gratuito e comece a acelerar suas vendas." />
    </>
  );
}

