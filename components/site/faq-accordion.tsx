'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './reveal';

const FAQS = [
  { q: 'A GR21 é uma agência de marketing ou consultoria comercial?', a: 'Somos as duas coisas integradas. Não somos uma agência tradicional que apenas executa campanhas, nem uma consultoria que só entrega planos. Somos um hub de negócios que une estratégia e execução, atuando em marketing E vendas de forma integrada, do planejamento ao resultado final.' },
  { q: 'Vocês atendem apenas grandes construtoras?', a: 'Não. Atendemos desde incorporadoras que estão lançando seu primeiro empreendimento até grandes construtoras com múltiplos projetos. O que importa é o compromisso com resultado e a vontade de profissionalizar a operação comercial e de marketing.' },
  { q: 'Como funciona o modelo de remuneração?', a: 'Trabalhamos com dois modelos principais: honorário fixo mensal para serviços operacionais de marketing (criativos, gestão de redes, mídia paga) e remuneração variável (percentual sobre o valor vendido por contrato), especialmente na gestão comercial integrada. O modelo é sempre transparente e acordado previamente.' },
  { q: 'Quanto tempo leva para ver resultados?', a: 'Depende do estágio: lançamento do zero leva de 60 a 90 dias de estruturação, com primeiros resultados entre 90 e 120 dias. Empreendimentos em andamento começam a melhorar entre 30 e 60 dias. Campanhas de aceleração trazem resultados nas primeiras semanas. Nossa metodologia gera resultados sustentáveis, não apenas um pico de vendas.' },
  { q: 'Vocês substituem minha equipe interna?', a: 'Não necessariamente. Oferecemos três modelos: Consultoria (trabalhamos junto com sua equipe), Gestão Integrada (assumimos a operação completa como seu departamento externo) e Projetos Pontuais (executamos projetos específicos). Você escolhe o que faz mais sentido para sua realidade.' },
  { q: 'Atendem apenas em Maringá/PR?', a: 'Temos base em Maringá-PR, mas atendemos construtoras e incorporadoras em todo o Brasil. Grande parte do trabalho pode ser feita remotamente, com visitas presenciais estratégicas conforme necessário.' },
  { q: 'O que inclui no diagnóstico gratuito?', a: 'Analisamos a situação atual da operação comercial e de marketing, principais gargalos e oportunidades, benchmarking de mercado e recomendações iniciais de ações prioritárias. Duração de 30 a 40 minutos, sem compromisso. É uma conversa estratégica para entendermos se faz sentido trabalharmos juntos.' },
  { q: 'Vocês criam o site/sistema do empreendimento?', a: 'Sim. Desenvolvemos landing pages de alta conversão, hotsite do empreendimento e integramos com plataformas de CRM e automação. Também trabalhamos com parceiros de tecnologia para sistemas mais complexos (tour virtual 360°, configurador de planta, etc.).' },
  { q: 'Como funciona a gestão de mídia paga?', a: 'Planejamos, criamos e gerenciamos campanhas em Google Ads, Meta Ads e portais imobiliários. O investimento em mídia é sempre do cliente (você define o budget) e nossa taxa de gestão é acordada previamente. Fornecemos relatórios completos de performance, CAC, ROI e taxa de conversão.' },
  { q: 'Preciso ter CRM implantado para trabalhar com vocês?', a: 'Não. Se você não tem CRM, fazemos a análise e implantação. Trabalhamos principalmente com RD Station CRM (imobiliário), mas integramos com outras plataformas que você já utilize. O importante é ter processo, controle e dados para otimizar resultados.' },
  { q: 'O que acontece se não batermos as metas de vendas?', a: 'Trabalhamos com transparência total. Vendas dependem de múltiplos fatores (produto, preço, localização, momento de mercado). Nosso compromisso é entregar processo comercial estruturado, leads qualificados em volume adequado, equipe treinada e otimização constante do funil. Se todos os pilares estão no lugar, revisamos a estratégia juntos — nosso sucesso está ligado ao seu.' },
  { q: 'Vocês fazem apenas lançamentos ou também destravam empreendimentos parados?', a: 'Ambos! Temos expertise em lançamentos do zero, reposicionamento de empreendimentos com vendas travadas, aceleração de vendas em empreendimentos em andamento e estratégias de liquidação de estoque. Cada situação exige um diagnóstico específico e estratégias personalizadas.' },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {FAQS?.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item?.q} delay={(i % 4) * 0.05}>
            <div className="overflow-hidden rounded-xl border border-brand-mist bg-white shadow-sm">
              <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                <span className="font-display text-base font-semibold text-brand-dark md:text-lg">{item?.q}</span>
                <ChevronDown className={'h-5 w-5 flex-shrink-0 text-brand-emerald transition-transform ' + (isOpen ? 'rotate-180' : '')} />
              </button>
              <div className={'grid transition-all duration-300 ' + (isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden"><p className="px-6 pb-5 leading-relaxed text-brand-dark/70">{item?.a}</p></div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
