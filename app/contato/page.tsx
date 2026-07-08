import type { Metadata } from 'next';
import { PageHero } from '@/components/site/ui-blocks';
import { Reveal } from '@/components/site/reveal';
import { ContactForm } from '@/components/site/contact-form';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Contato',
  description: 'Agende um diagnóstico gratuito ou entre em contato com a GR21. Avenida Carneiro Leão, 563, Sala 1508, Maringá-PR.',
};

export default function ContatoPage() {
  const mapsQuery = encodeURIComponent('Avenida Carneiro Leão, 563, Maringá - PR, 87014-010');
  return (
    <>
      <PageHero eyebrow="Fale conosco" title="Vamos acelerar as vendas do seu empreendimento?" subtitle="Agende um diagnóstico gratuito ou entre em contato para tirar suas dúvidas. Estamos prontos para transformar seu empreendimento em sucesso de vendas." />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand-dark">Informações de contato</h2>
            <div className="mt-8 space-y-6">
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10"><Mail className="h-6 w-6 text-brand-emerald" /></div><div><p className="text-sm font-semibold text-brand-dark/50">E-mail</p><p className="font-medium text-brand-dark group-hover:text-brand-emerald">{SITE.email}</p></div></a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10"><Phone className="h-6 w-6 text-brand-emerald" /></div><div><p className="text-sm font-semibold text-brand-dark/50">WhatsApp / Telefone</p><p className="font-medium text-brand-dark group-hover:text-brand-emerald">{SITE.phoneDisplay}</p></div></a>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10"><MapPin className="h-6 w-6 text-brand-emerald" /></div><div><p className="text-sm font-semibold text-brand-dark/50">Endereço</p><p className="font-medium text-brand-dark">{SITE.address.line1}<br />{SITE.address.line2}</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10"><Clock className="h-6 w-6 text-brand-emerald" /></div><div><p className="text-sm font-semibold text-brand-dark/50">Atendimento</p><p className="font-medium text-brand-dark">Seg a Sex: 08h às 18h<br /><span className="text-sm font-normal text-brand-dark/60">Sábado sob agendamento</span></p></div></div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-dark text-white transition-colors hover:bg-brand-emerald"><Instagram className="h-5 w-5" /></a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-dark text-white transition-colors hover:bg-brand-emerald"><Linkedin className="h-5 w-5" /></a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-brand-mist bg-white p-7 shadow-sm md:p-9">
              <h2 className="font-display text-2xl font-bold text-brand-dark">Agende seu diagnóstico gratuito</h2>
              <p className="mt-2 text-sm text-brand-dark/60">Preencha o formulário e retornaremos em até 24 horas úteis.</p>
              <div className="mt-7"><ContactForm /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="overflow-hidden rounded-2xl border border-brand-mist shadow-sm">
            <iframe title="Localização da GR21 em Maringá-PR" src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`} width="100%" height="420" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
