'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

const NECESSIDADES = [
  'Diagnóstico gratuito',
  'Consultoria de marketing',
  'Gestão comercial',
  'Lançamento de empreendimento',
  'Acelerar vendas',
  'Orçamento completo',
];

const FORM_NAME = 'contato-diagnostico';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    necessidade: '',
    mensagem: '',
    aceite: false,
  });

  const update = (k: string, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.aceite) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const body = new URLSearchParams();

      body.append('form-name', FORM_NAME);
      body.append('subject', `Novo contato pelo site GR21 — ${form.nome || 'Sem nome'}`);
      body.append('nome', form.nome);
      body.append('email', form.email.trim());
      body.append('telefone', form.telefone);
      body.append('empresa', form.empresa);
      body.append('cargo', form.cargo);
      body.append('necessidade', form.necessidade);
      body.append('mensagem', form.mensagem);
      body.append('aceite', form.aceite ? 'Sim' : 'Não');

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error('Falha no envio');
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-brand-emerald/30 bg-brand-cream p-10 text-center shadow-[0_24px_80px_rgba(21,42,37,0.10)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/15">
          <CheckCircle2 className="h-9 w-9 text-brand-emerald" />
        </div>

        <h3 className="mt-5 font-display text-2xl font-bold text-brand-dark">
          Mensagem enviada com sucesso!
        </h3>

        <p className="mt-3 text-brand-dark/70">
          Em breve um de nossos especialistas entrará em contato. Prefere falar agora?
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Chamar no WhatsApp
        </a>
      </div>
    );
  }

  const inputCls =
    'w-full rounded-md border border-brand-mist bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20';

  return (
    <>
      <form name={FORM_NAME} method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <input type="hidden" name="subject" />
        <input name="nome" />
        <input name="email" />
        <input name="telefone" />
        <input name="empresa" />
        <input name="cargo" />
        <input name="necessidade" />
        <textarea name="mensagem" />
        <input name="aceite" />
      </form>

      <form
  name={FORM_NAME}
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="relative overflow-hidden rounded-[32px] border border-brand-emerald/35 bg-white p-6 pt-8 shadow-[0_32px_100px_rgba(21,42,37,0.18)] ring-1 ring-brand-emerald/10 md:p-9 md:pt-10"
>
        <div
  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-emerald via-brand-light to-brand-emerald"
  aria-hidden="true"
/>

        <div className="mb-8 rounded-3xl border border-brand-emerald/25 bg-gradient-to-br from-brand-mist/90 via-white to-brand-cream/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] md:p-6">
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-emerald px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(0,168,89,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_22px_55px_rgba(21,42,37,0.30)] disabled:opacity-60 sm:w-auto">
            Diagnóstico gratuito
          </span>

          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-brand-dark">
            Preencha as informações para iniciarmos sua análise
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
            Quanto mais completas forem as informações, melhor conseguimos entender
            seu momento comercial e direcionar a conversa com a GR21.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              Nome completo *
            </label>
            <input
              required
              name="nome"
              value={form.nome}
              onChange={(e) => update('nome', e.target.value)}
              className={inputCls}
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              E-mail *
            </label>
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value.replace(/\s/g, ''))}
              className={inputCls}
              placeholder="voce@empresa.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              Telefone / WhatsApp *
            </label>
            <input
              required
              name="telefone"
              value={form.telefone}
              onChange={(e) => update('telefone', e.target.value)}
              className={inputCls}
              placeholder="(44) 99999-9999"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              Empresa / Construtora *
            </label>
            <input
              required
              name="empresa"
              value={form.empresa}
              onChange={(e) => update('empresa', e.target.value)}
              className={inputCls}
              placeholder="Nome da empresa"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              Cargo
            </label>
            <input
              name="cargo"
              value={form.cargo}
              onChange={(e) => update('cargo', e.target.value)}
              className={inputCls}
              placeholder="Seu cargo"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-dark">
              Principal necessidade *
            </label>
            <select
              required
              name="necessidade"
              value={form.necessidade}
              onChange={(e) => update('necessidade', e.target.value)}
              className={inputCls}
            >
              <option value="">Selecione...</option>
              {NECESSIDADES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            Mensagem / detalhes do projeto
          </label>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={(e) => update('mensagem', e.target.value)}
            rows={4}
            className={inputCls}
            placeholder="Conte um pouco sobre seu empreendimento, desafio comercial ou objetivo de vendas"
          />
        </div>

        <div className="mt-5 rounded-2xl border border-brand-dark/10 bg-brand-cream/70 p-4">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-brand-dark/75">
            <input
              type="checkbox"
              name="aceite"
              checked={form.aceite}
              onChange={(e) => update('aceite', e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-brand-mist text-brand-emerald focus:ring-brand-emerald"
            />
            <span>
              Aceito receber contato da GR21 via e-mail e WhatsApp para tratar
              sobre diagnóstico, consultoria e oportunidades relacionadas ao meu
              empreendimento.
            </span>
          </label>
        </div>

        {status === 'error' ? (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            Não foi possível enviar. Verifique o aceite e os campos obrigatórios,
            ou fale conosco pelo WhatsApp.
          </p>
        ) : null}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-emerald px-7 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Enviar mensagem
              </>
            )}
          </button>

          <p className="text-xs leading-relaxed text-brand-dark/55">
            Resposta normalmente em horário comercial.
          </p>
        </div>
      </form>
    </>
  );
}