/**
 * FORMULÁRIO GR21 — NETLIFY FORMS
 *
 * O Netlify Forms é o destino padrão deste formulário.
 * O HTML contém:
 * - name="diagnostico-gr21"
 * - method="POST"
 * - data-netlify="true"
 * - input oculto form-name
 * - honeypot bot-field
 *
 * O envio via fetch precisa ser URL-encoded, pois o Netlify Forms não aceita
 * payload JSON nesse tipo de submissão.
 */
const NETLIFY_SUBMIT_URL = "/";

/**
 * false: mostra a confirmação dentro da própria landing page.
 * true: redireciona para /diagnostico-gr21/obrigado.html após o envio.
 */
const REDIRECT_AFTER_SUCCESS = false;
const THANK_YOU_URL = "/diagnostico-gr21/obrigado.html";

const form = document.querySelector("#lead-form");
const submitButton = document.querySelector("#submit-button");
const submitText = submitButton?.querySelector(".button__text");
const formStatus = document.querySelector("#form-status");
const whatsappInput = document.querySelector("#whatsapp");

const fields = {
  nome: document.querySelector("#nome"),
  email: document.querySelector("#email"),
  whatsapp: whatsappInput,
  desafio: document.querySelector("#desafio"),
  consentimento: document.querySelector("#consentimento"),
};

const errorMessages = {
  nome: "Informe seu nome completo.",
  emailRequired: "Informe seu e-mail profissional.",
  emailInvalid: "Digite um e-mail válido.",
  whatsappRequired: "Informe seu WhatsApp.",
  whatsappInvalid: "Digite um WhatsApp com DDD no formato (XX) XXXXX-XXXX.",
  desafio: "Selecione o principal desafio.",
  consentimento: "É necessário autorizar o contato para continuar.",
};

const trackingFields = {
  utm_source: document.querySelector("#utm-source"),
  utm_medium: document.querySelector("#utm-medium"),
  utm_campaign: document.querySelector("#utm-campaign"),
  utm_content: document.querySelector("#utm-content"),
  utm_term: document.querySelector("#utm-term"),
  gclid: document.querySelector("#gclid"),
  fbclid: document.querySelector("#fbclid"),
};

function onlyDigits(value = "") {
  return value.replace(/\D/g, "");
}

function formatBrazilianPhone(value = "") {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : "";
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function setFieldError(fieldName, message = "") {
  const field = fields[fieldName];
  const errorElement = document.querySelector(`[data-error-for="${fieldName}"]`);

  if (!field || !errorElement) return;

  errorElement.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function clearFormStatus() {
  if (!formStatus) return;

  formStatus.textContent = "";
  formStatus.className = "form-status";
}

function showFormStatus(type, message) {
  if (!formStatus) return;

  formStatus.textContent = message;
  formStatus.className = `form-status is-visible is-${type}`;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

function validateForm() {
  const values = {
    nome: fields.nome?.value.trim() ?? "",
    email: fields.email?.value.trim() ?? "",
    whatsapp: fields.whatsapp?.value.trim() ?? "",
    desafio: fields.desafio?.value ?? "",
    consentimento: Boolean(fields.consentimento?.checked),
  };

  let isValid = true;

  if (values.nome.length < 3 || !values.nome.includes(" ")) {
    setFieldError("nome", errorMessages.nome);
    isValid = false;
  } else {
    setFieldError("nome");
  }

  if (!values.email) {
    setFieldError("email", errorMessages.emailRequired);
    isValid = false;
  } else if (!validateEmail(values.email)) {
    setFieldError("email", errorMessages.emailInvalid);
    isValid = false;
  } else {
    setFieldError("email");
  }

  if (!values.whatsapp) {
    setFieldError("whatsapp", errorMessages.whatsappRequired);
    isValid = false;
  } else if (onlyDigits(values.whatsapp).length !== 11) {
    setFieldError("whatsapp", errorMessages.whatsappInvalid);
    isValid = false;
  } else {
    setFieldError("whatsapp");
  }

  if (!values.desafio) {
    setFieldError("desafio", errorMessages.desafio);
    isValid = false;
  } else {
    setFieldError("desafio");
  }

  if (!values.consentimento) {
    setFieldError("consentimento", errorMessages.consentimento);
    isValid = false;
  } else {
    setFieldError("consentimento");
  }

  return { isValid, values };
}

function setLoading(isLoading) {
  if (!submitButton || !submitText) return;

  submitButton.disabled = isLoading;
  submitButton.classList.toggle("is-loading", isLoading);
  submitButton.setAttribute("aria-busy", String(isLoading));
  submitText.textContent = isLoading
    ? "Enviando..."
    : "Solicitar diagnóstico gratuito";
}

function isLocalEnvironment() {
  return ["localhost", "127.0.0.1", "0.0.0.0"].includes(
    window.location.hostname
  );
}

/**
 * Guarda UTMs durante a sessão. Isso evita perder a atribuição caso a pessoa
 * atualize a página antes de enviar o formulário.
 */
function hydrateCampaignTracking() {
  const params = new URLSearchParams(window.location.search);

  Object.entries(trackingFields).forEach(([key, input]) => {
    if (!input) return;

    const storageKey = `gr21_${key}`;
    const queryValue = params.get(key);

    if (queryValue) {
      sessionStorage.setItem(storageKey, queryValue);
    }

    input.value = queryValue || sessionStorage.getItem(storageKey) || "";
  });

  const pageInput = document.querySelector("#pagina");
  const referrerInput = document.querySelector("#referrer");

  if (pageInput) pageInput.value = window.location.href;
  if (referrerInput) referrerInput.value = document.referrer || "Acesso direto";
}

function prepareSubmissionMetadata() {
  const sentAtInput = document.querySelector("#enviado-em");
  const pageInput = document.querySelector("#pagina");

  if (sentAtInput) sentAtInput.value = new Date().toISOString();
  if (pageInput) pageInput.value = window.location.href;
}

/**
 * Dispara eventos somente quando as ferramentas já estiverem instaladas.
 * Este arquivo não carrega Google Analytics, GTM ou Meta Pixel por conta própria.
 */
function trackSuccessfulLead() {
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "lead_form_success",
      form_name: "diagnostico-gr21",
    });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      form_name: "diagnostico-gr21",
    });
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

whatsappInput?.addEventListener("input", (event) => {
  event.target.value = formatBrazilianPhone(event.target.value);
  setFieldError("whatsapp");
  clearFormStatus();
});

Object.entries(fields).forEach(([fieldName, field]) => {
  if (!field || fieldName === "whatsapp") return;

  const eventName =
    field.type === "checkbox" || field.tagName === "SELECT"
      ? "change"
      : "input";

  field.addEventListener(eventName, () => {
    setFieldError(fieldName);
    clearFormStatus();
  });
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearFormStatus();

  const honeypot = form.querySelector("#bot-field");

  /* O servidor do Netlify também rejeitará submissões com o honeypot preenchido. */
  if (honeypot?.value) {
    return;
  }

  const { isValid } = validateForm();

  if (!isValid) {
    const firstInvalidField = form.querySelector('[aria-invalid="true"]');
    firstInvalidField?.focus();
    showFormStatus(
      "error",
      "Revise os campos destacados para enviar sua solicitação."
    );
    return;
  }

  /**
   * O servidor local do Next.js não processa Netlify Forms.
   * O envio real deve ser validado na URL publicada pelo Netlify.
   */
  if (isLocalEnvironment()) {
    showFormStatus(
      "info",
      "Os campos estão válidos. O envio pelo Netlify Forms poderá ser testado após o próximo deploy no Netlify."
    );
    return;
  }

  prepareSubmissionMetadata();
  setLoading(true);

  try {
    const formData = new FormData(form);
    const encodedBody = new URLSearchParams(formData).toString();

    const response = await fetch(NETLIFY_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedBody,
    });

    if (!response.ok) {
      throw new Error(`Falha no envio: ${response.status}`);
    }

    trackSuccessfulLead();

    form.reset();
    hydrateCampaignTracking();
    Object.keys(fields).forEach((fieldName) => setFieldError(fieldName));

    if (REDIRECT_AFTER_SUCCESS) {
      window.location.assign(THANK_YOU_URL);
      return;
    }

    showFormStatus(
      "success",
      "Solicitação enviada com sucesso. A equipe da GR21 entrará em contato para organizar o diagnóstico."
    );
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);

    showFormStatus(
      "error",
      "Não foi possível enviar agora. Tente novamente em alguns instantes. Se o problema continuar, entre em contato diretamente com a GR21."
    );
  } finally {
    setLoading(false);
  }
});

/* FAQ acessível: mantém apenas uma resposta aberta por vez. */
document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const controls = trigger.getAttribute("aria-controls");
    const panel = controls ? document.getElementById(controls) : null;
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion__trigger").forEach((otherTrigger) => {
      const otherControls = otherTrigger.getAttribute("aria-controls");
      const otherPanel = otherControls
        ? document.getElementById(otherControls)
        : null;

      otherTrigger.setAttribute("aria-expanded", "false");
      if (otherPanel) otherPanel.hidden = true;
    });

    if (!isExpanded && panel) {
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});

/* Entrada suave dos elementos, sem dependências externas. */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

hydrateCampaignTracking();
