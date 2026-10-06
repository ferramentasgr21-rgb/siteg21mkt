'use client';

import { useEffect, useState } from 'react';

type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'gr21_cookie_consent_v1';

function applyConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined') return;

  const dataLayer = ((window as any).dataLayer = (window as any).dataLayer || []);
  function gtag(..._args: any[]) {
    dataLayer.push(arguments);
  }

  gtag('consent', 'update', {
    analytics_storage: choice.analytics ? 'granted' : 'denied',
    ad_storage: choice.marketing ? 'granted' : 'denied',
    ad_user_data: choice.marketing ? 'granted' : 'denied',
    ad_personalization: choice.marketing ? 'granted' : 'denied',
    personalization_storage: choice.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });

  dataLayer.push({
    event: 'gr21_consent_update',
    consent_analytics: choice.analytics ? 'granted' : 'denied',
    consent_marketing: choice.marketing ? 'granted' : 'denied',
  });
}

function saveConsent(choice: ConsentChoice) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  applyConsent(choice);
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
        return;
      }

      const parsed = JSON.parse(saved) as ConsentChoice;
      setAnalytics(Boolean(parsed.analytics));
      setMarketing(Boolean(parsed.marketing));
      applyConsent({
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const choice = { analytics: true, marketing: true };
    setAnalytics(true);
    setMarketing(true);
    saveConsent(choice);
    setVisible(false);
    setPreferencesOpen(false);
  };

  const rejectOptional = () => {
    const choice = { analytics: false, marketing: false };
    setAnalytics(false);
    setMarketing(false);
    saveConsent(choice);
    setVisible(false);
    setPreferencesOpen(false);
  };

  const savePreferences = () => {
    saveConsent({ analytics, marketing });
    setVisible(false);
    setPreferencesOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <div
        className="mx-auto max-w-5xl rounded-2xl border border-black/10 bg-white p-5 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Preferências de cookies"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-lg font-semibold text-brand-dark">
              Privacidade e cookies
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Usamos cookies necessários para o funcionamento do site e, com sua autorização,
              cookies de análise e marketing para entender o desempenho e melhorar nossas
              campanhas. Você pode aceitar, recusar ou personalizar suas preferências.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:flex-shrink-0">
            <button
              type="button"
              onClick={rejectOptional}
              className="rounded-xl border border-black/15 px-4 py-2.5 text-sm font-medium text-brand-dark transition hover:bg-black/5"
            >
              Recusar opcionais
            </button>
            <button
              type="button"
              onClick={() => setPreferencesOpen((value) => !value)}
              className="rounded-xl border border-black/15 px-4 py-2.5 text-sm font-medium text-brand-dark transition hover:bg-black/5"
            >
              Preferências
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-xl bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Aceitar todos
            </button>
          </div>
        </div>

        {preferencesOpen && (
          <div className="mt-5 border-t border-black/10 pt-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Necessários</p>
                    <p className="mt-1 text-xs leading-5 text-black/60">
                      Mantêm recursos essenciais e segurança do site.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-black/50">Sempre ativos</span>
                </div>
              </div>

              <label className="rounded-xl border border-black/10 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Análise</p>
                    <p className="mt-1 text-xs leading-5 text-black/60">
                      Ajuda a entender navegação, origem e desempenho do site.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="mt-1 h-4 w-4"
                    aria-label="Permitir cookies de análise"
                  />
                </div>
              </label>

              <label className="rounded-xl border border-black/10 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Marketing</p>
                    <p className="mt-1 text-xs leading-5 text-black/60">
                      Permite mensuração e personalização de campanhas publicitárias.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(event) => setMarketing(event.target.checked)}
                    className="mt-1 h-4 w-4"
                    aria-label="Permitir cookies de marketing"
                  />
                </div>
              </label>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-xl bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
