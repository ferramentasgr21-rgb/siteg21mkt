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
      className="fixed bottom-5 right-5 z-50 flex h-[58px] items-center gap-3 rounded-full bg-[#25D366] px-5 pr-6 shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#20C45A]"
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
        <img
          src="/whatsapp-icon.svg"
          alt=""
          aria-hidden="true"
          className="h-[23px] w-[23px]"
        />
      </span>

      <span className="whitespace-nowrap text-[15px] font-semibold leading-none text-white">
        Fale conosco
      </span>
    </a>
  );
}