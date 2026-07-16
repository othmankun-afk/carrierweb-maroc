import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Route d'envoi du formulaire de contact.
//
// Configuration via variables d'environnement (voir .env.local.example) :
//   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
//   CONTACT_EMAIL_TO   destinataire (défaut : o68218758@gmail.com)
//   CONTACT_EMAIL_FROM expéditeur affiché (défaut : SMTP_USER)
//
// Si le SMTP n'est pas configuré (SMTP_HOST/USER/PASS absents), la route
// renvoie 503 : le client bascule alors sur le repli `mailto:`.

export const runtime = "nodejs";

type ContactPayload = {
  nom?: string;
  email?: string;
  telephone?: string;
  entreprise?: string;
  tailleFlotte?: string;
  message?: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  // SMTP non configuré → le front basculera sur mailto:
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, reason: "smtp_not_configured" },
      { status: 503 }
    );
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_json" }, { status: 400 });
  }

  const nom = (data.nom ?? "").trim();
  const email = (data.email ?? "").trim();
  const telephone = (data.telephone ?? "").trim();
  const entreprise = (data.entreprise ?? "").trim();
  const tailleFlotte = (data.tailleFlotte ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!nom || !email || !message || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, reason: "invalid_fields" },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_EMAIL_TO || "o68218758@gmail.com";
  const from = process.env.CONTACT_EMAIL_FROM || SMTP_USER;
  const port = Number(SMTP_PORT) || 587;
  const secure = SMTP_SECURE ? SMTP_SECURE === "true" : port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    ["Nom complet", nom],
    ["Entreprise", entreprise],
    ["E-mail", email],
    ["Téléphone", telephone],
    ["Taille de flotte", tailleFlotte],
  ];

  const textBody = [
    ...lines.map(([label, value]) => `${label} : ${value || "—"}`),
    "",
    "Message :",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
      <h2 style="margin:0 0 16px">Nouvelle demande — CarrierWeb Maroc</h2>
      <table style="border-collapse:collapse">
        ${lines
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#666">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value || "—")}</strong></td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px;color:#666">Message :</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"CarrierWeb Maroc — Site" <${from}>`,
      to,
      replyTo: email,
      subject: `Demande de démo — ${entreprise || nom}`,
      text: textBody,
      html: htmlBody,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] envoi échoué :", error);
    return NextResponse.json(
      { ok: false, reason: "send_failed" },
      { status: 502 }
    );
  }
}
