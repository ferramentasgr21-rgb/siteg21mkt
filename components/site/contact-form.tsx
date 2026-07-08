'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

const ESTAGIOS = ['Planejando lançamento', 'Já lançado, em vendas', 'Vendas travadas, preciso acelerar', 'Múltiplos empreendimentos', 'Outro'];
const NECESSIDADES = ['Diagnóstico gratuito', 'Consultoria de marketing', 'Gestão comercial', 'Lançamento de empreendimento', 'Acelerar vendas', 'Orçamento completo'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', empresa: '', cargo: '', estagio: '', necessidade: '', mensagem: '', aceite: false });

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form?.aceite) { setStatus('error'); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data?.success) { setStatus('success'); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-emerald/30 bg-brand-cream p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/15"><CheckCircle2 className="h-9 w-9 text-brand-emerald" /></div>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-dark">Mensagem enviada com sucesso!</h3>
        <p className="mt-3 text-brand-dark/70">Em breve um de nossos especialistas entrará em contato. Prefere falar agora?</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"><MessageCircle className="h-4 w-4" />Chamar no WhatsApp</a>
      </div>
    );
  }

  const inputCls = 'w-full rounded-md border border-brand-mist bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Nome completo *</label><input required value={form.nome} onChange={(e) => update('nome', e.target.value)} className={inputCls} placeholder="Seu nome" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">E-mail *</label><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="voce@empresa.com" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Telefone / WhatsApp *</label><input required value={form.telefone} onChange={(e) => update('telefone', e.target.value)} className={inputCls} placeholder="(44) 99999-9999" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Empresa / Construtora *</label><input required value={form.empresa} onChange={(e) => update('empresa', e.target.value)} className={inputCls} placeholder="Nome da empresa" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Cargo</label><input value={form.cargo} onChange={(e) => update('cargo', e.target.value)} className={inputCls} placeholder="Seu cargo" /></div>
        <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Estágio do empreendimento *</label><select required value={form.estagio} onChange={(e) => update('estagio', e.target.value)} className={inputCls}><option value="">Selecione...</option>{ESTAGIOS.map((o) => <option key={o} value={o}>{o}</option>)}</select></div>
      </div>
      <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Qual sua principal necessidade? *</label><select required value={form.necessidade} onChange={(e) => update('necessidade', e.target.value)} className={inputCls}><option value="">Selecione...</option>{NECESSIDADES.map((o) => <option key={o} value={o}>{o}</option>)}</select></div>
      <div><label className="mb-1.5 block text-sm font-medium text-brand-dark">Mensagem / detalhes do projeto</label><textarea value={form.mensagem} onChange={(e) => update('mensagem', e.target.value)} rows={4} className={inputCls} placeholder="Conte um pouco sobre seu empreendimento e seus desafios" /></div>
      <label className="flex items-start gap-3 text-sm text-brand-dark/70"><input type="checkbox" checked={form.aceite} onChange={(e) => update('aceite', e.target.checked)} className="mt-1 h-4 w-4 rounded border-brand-mist text-brand-emerald focus:ring-brand-emerald" />Aceito receber contato da GR21 via e-mail e WhatsApp.</label>
      {status === 'error' ? <p className="text-sm font-medium text-red-500">Não foi possível enviar. Verifique o aceite e os campos obrigatórios, ou fale conosco no WhatsApp.</p> : null}
      <button type="submit" disabled={status === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-emerald px-7 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-dark disabled:opacity-60 sm:w-auto">{status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" />Enviando...</> : <><Send className="h-5 w-5" />Enviar mensagem</>}</button>
    </form>
  );
}
