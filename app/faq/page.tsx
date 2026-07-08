import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/site/ui-blocks';
import { FaqAccordion } from '@/components/site/faq-accordion';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description: 'Tire suas dúvidas sobre a consultoria integrada da GR21: modelo de atuação, prazos, remuneração e diagnóstico gratuito.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Perguntas frequentes sobre nossos serviços" subtitle="Tire suas dúvidas sobre como funciona nossa consultoria, modelo de atuação, prazos e investimento." />
      <section className="py-20 md:py-24"><div className="mx-auto max-w-[1200px] px-5"><FaqAccordion /></div></section>
      <CtaBand title="Ainda tem dúvidas?" subtitle="Entre em contato. Será um prazer entender como podemos ajudar seu empreendimento." primaryLabel="Fale com a GR21" />
    </>
  );
}
