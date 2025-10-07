import { NextResponse } from "next/server";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPT = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(req: Request) {
  const fd = await req.formData();

  const data = {
    firstName: String(fd.get("firstName") || ""),
    lastName: String(fd.get("lastName") || ""),
    email: String(fd.get("email") || ""),
    phone: String(fd.get("phone") || ""),
    position: String(fd.get("position") || ""),
    message: String(fd.get("message") || ""),
    captcha: fd.get("captcha") ? true : false,
    website: String(fd.get("website") || ""),
    cv: fd.get("cv") as File | null,
    portfolio: fd.get("LettredeMotivation") as File | null,
  };

  // Champs requis
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.message ||
    !data.cv
  ) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants" },
      { status: 400 }
    );
  }

  // Validations fichiers
  const files: { name: string; file: File }[] = [];
  if (data.cv) files.push({ name: "cv", file: data.cv });
  if (data.portfolio && data.portfolio.size > 0)
    files.push({ name: "portfolio", file: data.portfolio });

  for (const { file } of files) {
    if (!ACCEPT.has(file.type) || file.size > MAX_SIZE) {
      return NextResponse.json(
        { ok: false, error: "Fichier invalide (type ou taille)" },
        { status: 400 }
      );
    }
  }

  // DEV: log
  console.log("📥 Nouvelle candidature:", {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    position: data.position,
    message:
      data.message.slice(0, 200) + (data.message.length > 200 ? "…" : ""),
    files: files.map(({ file }) => ({
      name: file.name,
      type: file.type,
      size: file.size,
    })),
  });

  // --- Envoi email (optionnel) ---
  // 1) npm i nodemailer
  // 2) ajoute dans .env.local : SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, HR_TO
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, HR_TO } =
      process.env as Record<string, string | undefined>;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && HR_TO) {
      // @ts-ignore (si pas installé en dev)
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const attachments = await Promise.all(
        files.map(async ({ file }) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        }))
      );

      await transporter.sendMail({
        from: `"Candidature — ${data.firstName} ${data.lastName}" <${SMTP_USER}>`,
        replyTo: data.email,
        to: HR_TO,
        subject: `Candidature: ${data.position || "Poste non précisé"}`,
        text: `
Nom: ${data.firstName} ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone}
Poste: ${data.position}
Message:
${data.message}
        `.trim(),
        attachments,
      });
    }
  } catch (e) {
    console.error("Email error:", e);
    // on n'échoue pas si l'envoi email rate; à toi de décider
  }

  return NextResponse.json({ ok: true });
}
