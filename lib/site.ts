export const SITE = {
  name: 'GR21',
  fullName: 'GR21 - Aceleradora de Vendas e Marketing Imobiliário',
  tagline: 'Aceleradora de Vendas e Marketing Imobiliário',
  description:
    'Consultoria integrada de marketing e vendas 100% focada no mercado imobiliário. Do branding ao pós-venda, aceleramos as vendas do seu empreendimento com metodologia comprovada.',
  url: 'https://gr21imoveis.com.br',
  email: 'rafael@gr21imoveis.com.br',
  phoneDisplay: '+55 44 99132 3939',
  phoneRaw: '5544991323939',
  whatsappMessage:
    'Olá! Vim pelo site e gostaria de mais informações sobre os serviços da GR21.',
  address: {
    line1: 'Avenida Carneiro Leão, 563 | Sala 1508',
    line2: 'Maringá - PR | CEP: 87014-010',
    city: 'Maringá - PR',
  },
  social: {
    instagram: 'https://www.instagram.com/gr21mktimobiliario/',
    instagramHandle: '@gr21mktimobiliario',
    linkedin: 'https://www.linkedin.com/company/grupo-gr21/',
  },
};

export function whatsappLink(message?: string) {
  const msg = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.phoneRaw}?text=${msg}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
];
