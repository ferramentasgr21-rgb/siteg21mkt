import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, SectionHeading, CtaBand } from '@/components/site/ui-blocks';
import { Reveal } from '@/components/site/reveal';
import { Mail, Phone, CheckCircle2, UserPlus } from 'lucide-react';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Equipe',
  description: 'Conheça os especialistas da GR21: profissionais com décadas de experiência em marketing, vendas e inteligência de mercado imobiliário.',
};

const TEAM = [
  { img: '/images/rafael-zanim.jpg', name: 'Rafael Zanim', role: 'CMO & Founder', bio: 'Mais de 20 anos em gestão comercial e marketing, com atuação estratégica na comunicação de grandes empresas e no mercado imobiliário.', items: ['20+ anos de experiência', 'Estratégia comercial imobiliária', 'Liderança em grandes empresas', 'Operações de +R$ 500 milhões em VGV'], email: SITE.email, phone: SITE.phoneDisplay },
  { img: '/images/pedro-carneiro.jpg', name: 'Pedro Carneiro', role: 'Gestor de Marketing', bio: 'Especialista em planejamento e execução de estratégias de marketing digital e branding para o mercado imobiliário.', items: ['Planejamento estratégico 360°', 'Mídia paga (Google, Meta, portais)', 'Branding de empreendimentos', 'Lançamentos e ações institucionais'] },
  { img: '/images/beatriz-lessa.jpg', name: 'Beatriz Lessa', role: 'Gestora de Redes Sociais', bio: 'Criadora de conteúdo estratégico e gestora de presença digital, especialista em engajamento e storytelling.', items: ['Gestão completa de redes sociais', 'Planejamento e calendário editorial', 'Campanhas de engajamento', 'Monitoramento de métricas'] },
  { img: '/images/eloisa-belan.jpg', name: 'Eloisa Belan', role: 'Inteligência de Mercado', bio: 'Analista especializada em pesquisa de mercado, análise de concorrência e inteligência competitiva.', items: ['Estudos de viabilidade e mercado', 'Pesquisa de público e personas', 'Análise de concorrência', 'Relatórios para decisão estratégica'] },
  { img: '/images/leonardo-reis.jpg', name: 'Leonardo Reis', role: 'Criação e Design', bio: 'Designer especializado em comunicação visual para o mercado imobiliário, de identidades a materiais de venda.', items: ['Identidade visual de marcas', 'Materiais de venda e books', 'Peças publicitárias', 'Enxoval de comunicação'] },
  { img: '/images/matheus-arcanjo.jpg', name: 'Matheus Arcanjo', role: 'Gestor de Tráfego', bio: 'Fundador @carbon.aceleradora. Faz parte da rede de parceiros da GR21. Especialista em mídia paga e performance digital, focado em gerar leads qualificados e otimizar ROI.', items: ['Campanhas Google e Meta Ads', 'Otimização de conversão e CAC', 'Testes de audiências e criativos', 'Análise de dados e relatórios'] },
];

export default function EquipePage() {
  return (
    <>
      <PageHero eyebrow="Nossa equipe" title="Especialistas que vivem e respiram mercado imobiliário" subtitle="Nossa equipe reúne profissionais com décadas de experiência combinada em marketing, vendas, inteligência de mercado e gestão comercial no setor imobiliário." image="/images/equipe-reuniao.jpg" />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM?.map((m, i) => (
              <Reveal key={m?.name} delay={(i % 3) * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-mist bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/5] bg-brand-mist">
                    <Image src={m?.img} alt={`${m?.name} — ${m?.role} na GR21`} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-brand-dark">{m?.name}</h3>
                    <p className="text-sm font-medium text-brand-emerald">{m?.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">{m?.bio}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {m?.items?.map((it) => (<li key={it} className="flex items-start gap-2 text-sm text-brand-dark/70"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />{it}</li>))}
                    </ul>
                    {m?.email ? (
                      <div className="mt-5 space-y-2 border-t border-brand-mist pt-4 text-sm">
                        <a href={`mailto:${m?.email}`} className="flex items-center gap-2 text-brand-dark/70 hover:text-brand-emerald"><Mail className="h-4 w-4" />{m?.email}</a>
                        <a href={`tel:+55${SITE.phoneRaw.slice(2)}`} className="flex items-center gap-2 text-brand-dark/70 hover:text-brand-emerald"><Phone className="h-4 w-4" />{m?.phone}</a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-emerald/40 bg-brand-cream p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald/10"><UserPlus className="h-7 w-7 text-brand-emerald" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-dark">Open to Work</h3>
                <p className="text-sm font-medium text-brand-emerald">Gestão Comercial | SDR | BDR</p>
                <p className="mt-3 text-sm text-brand-dark/70">Buscamos talentos para fortalecer nossa operação comercial. Apaixonado por vendas e mercado imobiliário? Venha para o nosso time.</p>
                <a href={`mailto:${SITE.email}?subject=Candidatura%20GR21`} className="mt-5 inline-flex rounded-md bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Enviar currículo</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Nossa cultura" title="Trabalhe com propósito. Cresça com resultado." subtitle="Acreditamos que o sucesso vem da união entre expertise técnica, paixão pelo que fazemos e compromisso com resultados." />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {['Excelência em tudo que fazemos', 'Aprendizado contínuo', 'Trabalho em equipe', 'Foco no cliente', 'Transparência e ética'].map((v) => (
              <span key={v} className="rounded-full border border-brand-mist bg-white px-5 py-2 text-sm font-medium text-brand-dark">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Vamos conversar sobre seu empreendimento?" />
    </>
  );
}
