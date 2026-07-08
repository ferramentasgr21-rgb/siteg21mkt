'use client';

import { useEffect, useState } from 'react';
import { whatsappLink } from '@/lib/site';

export function WhatsappButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:pr-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.003 3C9.38 3 4 8.377 4 15c0 2.116.553 4.106 1.523 5.833L4 29l8.36-1.49A11.94 11.94 0 0016.003 27C22.626 27 28 21.623 28 15S22.626 3 16.003 3zm0 21.6c-1.94 0-3.75-.57-5.27-1.55l-.38-.24-4.96.885.9-4.84-.25-.4A9.56 9.56 0 016.4 15c0-5.29 4.31-9.6 9.603-9.6 5.29 0 9.597 4.31 9.597 9.6s-4.307 9.6-9.597 9.6zm5.29-7.19c-.29-.145-1.71-.845-1.976-.94-.265-.097-.458-.145-.65.145-.19.29-.746.94-.915 1.134-.168.193-.336.217-.625.072-.29-.145-1.223-.45-2.33-1.437-.86-.767-1.44-1.714-1.61-2.004-.168-.29-.018-.446.127-.59.13-.13.29-.336.434-.504.145-.168.193-.29.29-.483.096-.193.048-.362-.024-.507-.072-.145-.65-1.566-.89-2.146-.235-.563-.473-.487-.65-.496l-.554-.01c-.193 0-.507.072-.772.362-.265.29-1.013.99-1.013 2.41 0 1.42 1.037 2.795 1.182 2.988.145.193 2.04 3.115 4.944 4.37.69.298 1.23.476 1.65.61.693.22 1.324.19 1.823.115.556-.083 1.71-.7 1.95-1.375.24-.676.24-1.255.168-1.376-.072-.12-.265-.193-.554-.338z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[160px] sm:inline">
        Fale conosco
      </span>
    </a>
  );
}
