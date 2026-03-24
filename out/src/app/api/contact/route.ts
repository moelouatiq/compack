import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nom, email, sujet, message, honeypot, captchaAnswer, captchaResult } = body

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }) // silently ignore bots
    }

    // Captcha check
    if (Number(captchaAnswer) !== Number(captchaResult)) {
      return NextResponse.json({ error: 'Réponse au captcha incorrecte' }, { status: 400 })
    }

    // Basic validation
    if (!nom?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
    }

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f5f1e8;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:#1a0e0b;padding:28px 40px;">
            <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:6px;">COMPACK · Contact</div>
            <h1 style="margin:0;font-size:22px;font-weight:900;color:#fff;">📩 Nouveau message</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 40px;">
            <div style="background:#f5f1e8;border-radius:16px;padding:24px;margin-bottom:20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:6px 0;color:#999;font-size:13px;width:100px;vertical-align:top;">👤 Nom</td>
                  <td style="padding:6px 0;color:#1a0e0b;font-size:13px;font-weight:600;">${nom}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#999;font-size:13px;vertical-align:top;">✉️ Email</td>
                  <td style="padding:6px 0;color:#1a0e0b;font-size:13px;font-weight:600;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#999;font-size:13px;vertical-align:top;">📌 Sujet</td>
                  <td style="padding:6px 0;color:#1a0e0b;font-size:13px;font-weight:600;">${sujet || '—'}</td>
                </tr>
              </table>
            </div>
            <div style="background:#f5f1e8;border-radius:16px;padding:24px;">
              <div style="font-size:11px;letter-spacing:3px;color:#c4623d;font-weight:700;text-transform:uppercase;margin-bottom:12px;">Message</div>
              <p style="color:#1a0e0b;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 40px 36px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#c4623d;color:#fff;font-weight:700;padding:14px 32px;border-radius:999px;text-decoration:none;font-size:14px;">
              Répondre à ${nom}
            </a>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    await transporter.sendMail({
      from: `"COMPACK · Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'contact@compack.io',
      replyTo: email,
      subject: `📩 [COMPACK] ${sujet || 'Nouveau message'} — ${nom}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[POST /api/contact]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
