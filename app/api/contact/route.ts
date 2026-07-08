import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const appUrl = process.env.NEXTAUTH_URL || 'https://gr21imoveis.com.br';
    const hostname = (() => { try { return new URL(appUrl).hostname; } catch { return 'gr21imoveis.com.br'; } })();
    const appName = 'GR21';

    const row = (label: string, value: string) => value ? `<p style="margin:8px 0;"><strong style="color:#1e3a34;">${label}:</strong> ${value}</p>` : '';
    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1e3a34;border-bottom:3px solid #00A859;padding-bottom:10px;">Novo contato pelo site GR21</h2>
        <div style="background:#f5f8f4;padding:20px;border-radius:8px;margin:16px 0;">
          ${row('Nome', data?.nome)}
          ${row('E-mail', data?.email)}
          ${row('Telefone/WhatsApp', data?.telefone)}
          ${row('Empresa', data?.empresa)}
          ${row('Cargo', data?.cargo)}
          ${row('Estágio do empreendimento', data?.estagio)}
          ${row('Necessidade', data?.necessidade)}
          <p style="margin:8px 0;"><strong style="color:#1e3a34;">Mensagem:</strong></p>
          <div style="background:#fff;padding:12px;border-radius:6px;border-left:4px solid #00A859;">${(data?.mensagem || 'Sem mensagem').toString()}</div>
        </div>
      </div>`;

    const response = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_CONTATO_DIAGNSTICO,
        subject: `Novo contato pelo site — ${data?.nome || 'Sem nome'}`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'rafael@gr21imoveis.com.br',
        reply_to: data?.email,
        sender_email: `noreply@${hostname}`,
        sender_alias: appName,
      }),
    });
    const result = await response.json();
    if (!result?.success && !result?.notification_disabled) {
      throw new Error(result?.message || 'Falha ao enviar');
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro no formulário de contato:', error);
    return NextResponse.json({ success: false, message: 'Falha ao processar envio' }, { status: 500 });
  }
}
