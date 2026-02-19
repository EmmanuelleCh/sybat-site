import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, subject, message, website } =
      body;

    // Honeypot sécurité serveur aussi
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Site SYBAT <onboarding@resend.dev>",
      to: "emmasnakecase@gmail.com",
      replyTo: email,
      subject: subject || "Nouveau message depuis le site",
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
