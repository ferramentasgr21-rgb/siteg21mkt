import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { SITE, NAV_LINKS, whatsappLink } from '@/lib/site';

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-brand-darker text-white/80">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/gr21-logo-white.png"
              alt="GR21"
              width={180}
              height={30}
              className="h-9 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Consultoria integrada de marketing e vendas 100% focada no mercado
              imobiliário. Do branding ao pós-venda, aceleramos as vendas do seu
              empreendimento.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-brand-emerald"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-brand-emerald"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-brand-emerald"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href ?? '/'}
                    className="text-white/70 transition-colors hover:text-brand-light"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-light">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-light">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Atendimento
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábado: sob agendamento</li>
              <li>Domingo e feriados: fechado</li>
            </ul>
            <Link
              href="/contato"
              className="mt-6 inline-flex rounded-md bg-brand-emerald px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
            >
              Agendar Diagnóstico
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>© {year} GR21 — Aceleradora de Vendas e Marketing Imobiliário. Todos os direitos reservados.</p>
          <p>Maringá - PR | Atendemos todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
