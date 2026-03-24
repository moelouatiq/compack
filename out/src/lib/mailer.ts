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

interface ReservationData {
  id: number
  nom: string
  email: string
  phone?: string | null
  domeLabel: string
  arrival: string
  departure: string
  nights: number
  persons: number
  packageLabel: string
  totalPrice: number
  message?: string | null
  createdAt: Date
}

/* ─── Email de confirmation → client ──────────────────────── */
export async function sendConfirmationToClient(r: ReservationData) {
  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Confirmation SOLATERA</title>
</head>
<body style="margin:0;padding:0;background:#f5f1e8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f1e8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#c4623d;padding:36px 40px;text-align:center;">
            <div style="font-size:13px;letter-spacing:4px;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:8px;">SOLATERA · MARRAKECH</div>
            <h1 style="margin:0;font-size:32px;font-weight:900;color:#fff;letter-spacing:-1px;">Demande reçue !</h1>
            <p style="margin:10px 0 0;color:rgba(255,255,255,0.8);font-size:15px;">Nous confirmerons votre séjour sous 24h</p>
          </td>
        </tr>

        <!-- Bonjour -->
        <tr>
          <td style="padding:36px 40px 0;">
            <p style="font-size:18px;color:#1a0e0b;margin:0 0 8px;">Bonjour <strong>${r.nom}</strong> 👋</p>
            <p style="font-size:15px;color:#666;line-height:1.6;margin:0;">
              Merci pour votre demande de réservation à <strong>SOLATERA</strong>. Voici le récapitulatif de votre séjour.
            </p>
          </td>
        </tr>

        <!-- Détails réservation -->
        <tr>
          <td style="padding:28px 40px;">
            <div style="background:#f5f1e8;border-radius:16px;padding:24px;">
              <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#c4623d;font-weight:700;margin-bottom:16px;">Récapitulatif · N° ${String(r.id).padStart(4,'0')}</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('🏠 Hébergement', r.domeLabel)}
                ${row('📅 Arrivée', formatDate(r.arrival))}
                ${row('📅 Départ', formatDate(r.departure))}
                ${row('🌙 Durée', `${r.nights} nuit${r.nights > 1 ? 's' : ''}`)}
                ${row('👥 Personnes', String(r.persons))}
                ${row('📦 Forfait', r.packageLabel)}
                ${r.message ? row('💬 Message', r.message) : ''}
              </table>
            </div>
          </td>
        </tr>

        <!-- Prix total -->
        <tr>
          <td style="padding:0 40px 28px;">
            <div style="background:#1a0e0b;border-radius:16px;padding:20px 24px;display:flex;justify-content:space-between;align-items:center;">
              <table width="100%"><tr>
                <td style="color:rgba(255,255,255,0.6);font-size:14px;">Total estimé</td>
                <td style="text-align:right;color:#d4a574;font-size:26px;font-weight:900;">${r.totalPrice.toFixed(0)}€</td>
              </tr></table>
            </div>
          </td>
        </tr>

        <!-- Prochaines étapes -->
        <tr>
          <td style="padding:0 40px 28px;">
            <h3 style="font-size:16px;font-weight:700;color:#1a0e0b;margin:0 0 16px;">Prochaines étapes</h3>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${step('1', 'Confirmation', 'Notre équipe vous contactera sous 24h pour confirmer les disponibilités.')}
              ${step('2', 'Paiement', 'Un lien de paiement sécurisé vous sera envoyé par email.')}
              ${step('3', 'Bienvenue !', 'Profitez de votre séjour dans notre éco-village à Marrakech.')}
            </table>
          </td>
        </tr>

        <!-- Contact -->
        <tr>
          <td style="padding:0 40px 36px;">
            <div style="border-top:1px solid #ede8dc;padding-top:24px;text-align:center;">
              <p style="font-size:13px;color:#999;margin:0 0 8px;">Questions ? Contactez-nous</p>
              <a href="mailto:contact@compack.io" style="color:#c4623d;font-weight:700;font-size:14px;text-decoration:none;">contact@compack.io</a>
              &nbsp;·&nbsp;
              <a href="https://wa.me/33788315852" style="color:#c4623d;font-weight:700;font-size:14px;text-decoration:none;">+33 7 88 31 58 52</a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#c4623d;padding:20px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.7);font-size:12px;">
              SOLATERA · Marrakech, Maroc · <a href="https://compack.io" style="color:rgba(255,255,255,0.9);text-decoration:none;">compack.io</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`
  return transporter.sendMail({
    from: `"SOLATERA · Marrakech" <${process.env.SMTP_USER}>`,
    to: r.email,
    subject: `✅ Demande reçue — Séjour SOLATERA du ${formatDate(r.arrival)} au ${formatDate(r.departure)}`,
    html,
  })
}

/* ─── Email de notification → admin ───────────────────────── */
export async function sendNotificationToAdmin(r: ReservationData) {
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
            <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:6px;">SOLATERA · Admin</div>
            <h1 style="margin:0;font-size:22px;font-weight:900;color:#fff;">🔔 Nouvelle réservation</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 40px;">
            <div style="background:#f5f1e8;border-radius:16px;padding:24px;margin-bottom:20px;">
              <div style="font-size:11px;letter-spacing:3px;color:#c4623d;font-weight:700;text-transform:uppercase;margin-bottom:16px;">Client · N° ${String(r.id).padStart(4,'0')}</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('👤 Nom', r.nom)}
                ${row('✉️ Email', r.email)}
                ${row('📞 Téléphone', r.phone || '—')}
              </table>
            </div>
            <div style="background:#f5f1e8;border-radius:16px;padding:24px;">
              <div style="font-size:11px;letter-spacing:3px;color:#1d6e4a;font-weight:700;text-transform:uppercase;margin-bottom:16px;">Détails séjour</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('🏠 Dôme', r.domeLabel)}
                ${row('📅 Arrivée', formatDate(r.arrival))}
                ${row('📅 Départ', formatDate(r.departure))}
                ${row('🌙 Nuits', String(r.nights))}
                ${row('👥 Personnes', String(r.persons))}
                ${row('📦 Forfait', r.packageLabel)}
                ${row('💰 Total estimé', `${r.totalPrice.toFixed(0)}€`)}
                ${r.message ? row('💬 Message', r.message) : ''}
              </table>
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 40px 36px;text-align:center;">
            <a href="mailto:${r.email}" style="display:inline-block;background:#c4623d;color:#fff;font-weight:700;padding:14px 32px;border-radius:999px;text-decoration:none;font-size:14px;">
              Répondre à ${r.nom}
            </a>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`
  return transporter.sendMail({
    from: `"SOLATERA · Notifications" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL || 'contact@compack.io',
    replyTo: r.email,
    subject: `🏠 Réservation #${String(r.id).padStart(4,'0')} — ${r.nom} · ${r.domeLabel} · ${formatDate(r.arrival)}`,
    html,
  })
}

/* ─── helpers ─────────────────────────────────────────────── */
function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:6px 0;color:#999;font-size:13px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#1a0e0b;font-size:13px;font-weight:600;">${value}</td>
    </tr>`
}

function step(num: string, title: string, desc: string) {
  return `
    <tr>
      <td style="padding:8px 0;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:32px;height:32px;background:#c4623d;border-radius:50%;text-align:center;vertical-align:middle;">
              <span style="color:#fff;font-weight:900;font-size:14px;">${num}</span>
            </td>
            <td style="padding-left:14px;">
              <div style="font-weight:700;font-size:14px;color:#1a0e0b;">${title}</div>
              <div style="font-size:13px;color:#888;margin-top:2px;">${desc}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })
}
