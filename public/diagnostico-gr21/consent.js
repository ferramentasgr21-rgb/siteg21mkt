(function () {
  var STORAGE_KEY = 'gr21_cookie_consent_v1';
  var callbacks = [];
  var currentChoice = null;

  function dataLayer() {
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  }

  function gtag() {
    dataLayer().push(arguments);
  }

  function notify(choice) {
    currentChoice = choice;
    callbacks.splice(0).forEach(function (callback) {
      try { callback(choice); } catch (error) { console.error(error); }
    });
    window.dispatchEvent(new CustomEvent('gr21:consent-ready', { detail: choice }));
  }

  function applyConsent(choice) {
    gtag('consent', 'update', {
      analytics_storage: choice.analytics ? 'granted' : 'denied',
      ad_storage: choice.marketing ? 'granted' : 'denied',
      ad_user_data: choice.marketing ? 'granted' : 'denied',
      ad_personalization: choice.marketing ? 'granted' : 'denied',
      personalization_storage: choice.marketing ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });

    dataLayer().push({
      event: 'gr21_consent_update',
      consent_analytics: choice.analytics ? 'granted' : 'denied',
      consent_marketing: choice.marketing ? 'granted' : 'denied'
    });

    notify(choice);
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
    } catch (error) {}
    applyConsent(choice);
  }

  function readSavedChoice() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return {
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing)
      };
    } catch (error) {
      return null;
    }
  }

  function createBanner() {
    var saved = readSavedChoice();
    if (saved) {
      applyConsent(saved);
      return;
    }

    var root = document.createElement('div');
    root.className = 'cookie-consent';
    root.innerHTML =
      '<div class="cookie-consent__panel" role="dialog" aria-modal="true" aria-label="Preferências de cookies">' +
        '<div class="cookie-consent__main">' +
          '<div class="cookie-consent__copy">' +
            '<strong>Privacidade e cookies</strong>' +
            '<p>Usamos cookies necessários para o funcionamento do site e, com sua autorização, cookies de análise e marketing para medir desempenho e melhorar nossas campanhas.</p>' +
          '</div>' +
          '<div class="cookie-consent__actions">' +
            '<button type="button" data-consent="reject">Recusar opcionais</button>' +
            '<button type="button" data-consent="preferences">Preferências</button>' +
            '<button type="button" class="cookie-consent__primary" data-consent="accept">Aceitar todos</button>' +
          '</div>' +
        '</div>' +
        '<div class="cookie-consent__preferences" hidden>' +
          '<label><span><strong>Necessários</strong><small>Segurança e funcionamento do site.</small></span><em>Sempre ativos</em></label>' +
          '<label><span><strong>Análise</strong><small>Mede navegação e desempenho.</small></span><input type="checkbox" data-consent-analytics></label>' +
          '<label><span><strong>Marketing</strong><small>Mede e personaliza campanhas.</small></span><input type="checkbox" data-consent-marketing></label>' +
          '<div class="cookie-consent__save"><button type="button" class="cookie-consent__primary" data-consent="save">Salvar preferências</button></div>' +
        '</div>' +
      '</div>';

    document.body.appendChild(root);

    var prefs = root.querySelector('.cookie-consent__preferences');
    var analytics = root.querySelector('[data-consent-analytics]');
    var marketing = root.querySelector('[data-consent-marketing]');

    root.addEventListener('click', function (event) {
      var button = event.target.closest('[data-consent]');
      if (!button) return;
      var action = button.getAttribute('data-consent');

      if (action === 'preferences') {
        prefs.hidden = !prefs.hidden;
        return;
      }

      if (action === 'accept') {
        saveChoice({ analytics: true, marketing: true });
        root.remove();
        return;
      }

      if (action === 'reject') {
        saveChoice({ analytics: false, marketing: false });
        root.remove();
        return;
      }

      if (action === 'save') {
        saveChoice({
          analytics: Boolean(analytics.checked),
          marketing: Boolean(marketing.checked)
        });
        root.remove();
      }
    });
  }

  window.GR21Consent = {
    onReady: function (callback) {
      if (currentChoice) {
        callback(currentChoice);
      } else {
        callbacks.push(callback);
      }
    }
  };

  var saved = readSavedChoice();
  if (saved) {
    applyConsent(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (!saved) createBanner();
    });
  } else if (!saved) {
    createBanner();
  }
})();