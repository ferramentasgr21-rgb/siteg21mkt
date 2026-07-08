import type { Metadata } from 'next';
import { PageHero, SectionHeading, CtaBand } from '@/components/site/ui-blocks';
import { Reveal } from '@/components/site/reveal';
import { ClipboardList, Building, Cpu, Rocket, HeartHandshake, Palette, LineChart, Radio, FileText, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Ecossistema integrado de serviços comerciais e de marketing para o mercado imobiliário: gestão de vendas, CRM, branding, mídia paga e mais.',
};

const COMERCIAL = [
  { icon: ClipboardList, title: 'Planejamento e gestão de vendas', result: 'Operação comercial estruturada, previsível e escalável.', items: ['Planejamento estratégico de vendas', 'Estrutura comercial completa', 'Análise do ciclo de vendas', 'Previsão de vendas e receita', 'Metas e indicadores (KPIs)'] },
  { icon: Building, title: 'Estrutura e processos comerciais', result: 'Time comercial profissional, engajado e com clareza de papéis.', items: ['Estrutura física e equipamentos', 'Formato de atuação (in-house, terceirizado, híbrido)', 'Cargos, salários e remuneração', 'Quadro pessoal comercial', 'Gestão de contratos e parcerias'] },
  { icon: Cpu, title: 'Ferramentas e tecnologia de vendas', result: 'Controle total da operação com tecnologia de ponta.', items: ['Análise e implantação de CRM', 'Suporte na implantação de ERP', 'Calculadoras e simuladores', 'Tabela de vendas e prazos', 'Dashboards de performance'] },
  { icon: Rocket, title: 'Estratégia e execução de vendas', result: 'Equipe alinhada, motivada e vendendo com processo claro.', items: ['Estratégia por perfil de cliente', 'Campanhas de vendas', 'Ações para parceiros e imobiliárias', 'Regulamento de campanhas', 'Treinamento do processo comercial'] },
  { icon: HeartHandshake, title: 'Pós-venda e relacionamento', result: 'Clientes satisfeitos que viram embaixadores da marca.', items: ['Estratégia de pós-venda', 'Jornada do cliente após a compra', 'Programas de fidelização', 'NPS e pesquisa de satisfação', 'Base preparada para novos lançamentos'] },
];

const MARKETING = [
  { icon: Palette, title: 'Branding e posicionamento', result: 'Marca forte, diferenciada e memorável no mercado.', items: ['Identidade visual da marca', 'Identidade visual do produto', 'Posicionamento estratégico', 'Diagnóstico e análise SWOT', 'Análise da concorrência'] },
  { icon: LineChart, title: 'Planejamento estratégico de marketing', result: 'Marketing estratégico, mensurável e com ROI comprovado.', items: ['Estruturação 100% da área de marketing', 'Público-alvo e personas', 'Planejamento de lançamento', 'Orçamento anual de marketing', 'Indicadores (ROI, CAC, CPA)'] },
  { icon: Radio, title: 'Comunicação 360°', result: 'Presença digital forte e leads qualificados entrando.', items: ['Set-up completo nos canais', 'Mídia própria (site, redes, blog)', 'Mídia paga (Google, Meta, portais)', 'Assessoria de imprensa e PR', 'Criativos ilimitados e landing pages'] },
  { icon: FileText, title: 'Conteúdo e enxoval de comunicação', result: 'Comunicação profissional que vende e valoriza o produto.', items: ['Enxoval do apartamento decorado', 'Campanhas institucionais', 'Campanhas do produto', 'Copywriting persuasivo', 'Materiais de venda e apresentações'] },
  { icon: Workflow, title: 'Tecnologia e automação de marketing', result: 'Máquina de marketing automatizada, escalável e eficiente.', items: ['Implantação de RD Station e CRM', 'Pastas compartilhadas no Drive', 'Automação de nutrição de leads', 'E-mail marketing e cadências', 'Integração entre ferramentas'] },
];

const MODELOS = [
  { num: '01', title: 'Consultoria Estratégica', desc: 'Ideal para construtoras que possuem equipe interna e precisam de direcionamento estratégico, processos e metodologia.' },
  { num: '02', title: 'Gestão Integrada', tag: 'Mais completo', desc: 'Assumimos a operação de marketing e vendas do seu empreendimento, atuando como seu departamento comercial externo. Do planejamento à execução, do primeiro lead ao pós-venda.' },
  { num: '03', title: 'Projetos Pontuais', desc: 'Lançamento de produto, reposicionamento de marca, campanha específica ou implantação de CRM. Atuamos conforme sua necessidade.' },
];

function ServiceCard({ icon: Icon, title, result, items, i }: any) {
  return (
    <Reveal delay={(i % 3) * 0.1}>
      <div className="flex h-full flex-col rounded-xl border border-brand-mist bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-emerald/10"><Icon className="h-6 w-6 text-brand-emerald" /></div>
        <h3 className="mt-5 font-display text-lg font-semibold text-brand-dark">{title}</h3>
        <ul className="mt-4 flex-1 space-y-2">
          {items?.map((it: string) => (
            <li key={it} className="flex items-start gap-2 text-sm text-brand-dark/70"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />{it}</li>
          ))}
        </ul>
        <p className="mt-5 rounded-lg bg-brand-mist px-4 py-3 text-sm font-medium text-brand-dark">{result}</p>
      </div>
    </Reveal>
  );
}

export default function ServicosPage() {
  return (
    <>
      <PageHero eyebrow="O que oferecemos" title="Soluções completas para cada etapa do seu empreendimento" subtitle="Da estratégia à execução, oferecemos um ecossistema integrado de serviços comerciais e de marketing, desenhado especificamente para o mercado imobiliário." image="/images/estrategia-dashboard.jpg" />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Área comercial" title="Gestão comercial de alta performance" subtitle="Estruturamos e operamos a máquina de vendas do seu empreendimento." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMERCIAL?.map((s, i) => <ServiceCard key={s?.title} {...s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Área de marketing" title="Marketing imobiliário estratégico" subtitle="Da construção da marca à geração contínua de leads qualificados." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MARKETING?.map((s, i) => <ServiceCard key={s?.title} {...s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading eyebrow="Modelo de atuação" title="Flexibilidade para atender sua necessidade" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {MODELOS?.map((m, i) => (
              <Reveal key={m?.num} delay={i * 0.1}>
                <div className={'flex h-full flex-col rounded-xl border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ' + (m?.tag ? 'border-brand-emerald bg-brand-dark text-white' : 'border-brand-mist bg-white')}>
                  <div className="flex items-center justify-between">
                    <span className={'font-display text-4xl font-bold ' + (m?.tag ? 'text-brand-light/40' : 'text-brand-emerald/25')}>{m?.num}</span>
                    {m?.tag ? <span className="rounded-full bg-brand-emerald px-3 py-1 text-xs font-semibold text-white">{m?.tag}</span> : null}
                  </div>
                  <h3 className={'mt-4 font-display text-xl font-semibold ' + (m?.tag ? 'text-white' : 'text-brand-dark')}>{m?.title}</h3>
                  <p className={'mt-3 text-sm leading-relaxed ' + (m?.tag ? 'text-white/80' : 'text-brand-dark/70')}>{m?.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Qual solução faz sentido para seu empreendimento?" subtitle="Agende um diagnóstico e vamos desenhar a estratégia ideal para você." primaryLabel="Agendar Diagnóstico" />
    </>
  );
}
