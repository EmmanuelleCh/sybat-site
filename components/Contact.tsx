"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          captcha: formData.get("captcha") === "on", // case cochée
          website: formData.get("website"), // honeypot
        }),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="card p-4 sm:p-6 max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Prénom + Nom */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-sybat"
            >
              Votre prénom *
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              placeholder="Votre prénom"
              className="mt-1 w-full rounded-lg  border border-sybatDark dark:bg-white/5 px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-sybat"
            >
              Votre nom *
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              placeholder="Votre nom"
              className="mt-1 w-full rounded-lg border border-sybatDark dark:bg-white/5 px-3 py-2 "
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-sybat">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="toi@exemple.com"
              className="mt-1 w-full rounded-lg  border border-sybatDark dark:bg-white/5 px-3 py-2 "
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-sybat">
              Numéro de téléphone *
            </label>
            <input
              id="phone"
              name="phone"
              inputMode="tel"
              required
              pattern="^[0-9+(). -]{6,}$"
              placeholder="Votre numéro"
              className="mt-1 w-full rounded-lg border border-sybatDark dark:bg-white/5 px-3 py-2 "
            />
          </div>
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-sybat">
            Sujet
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            className="mt-1 w-full rounded-lg border border-sybatDark dark:bg-white/5 px-3 py-2 "
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="text-sm font-medium text-sybat">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Dis-moi ce que tu veux construire…"
            className="mt-1 w-full rounded-lg rounded-lg border border-sybatDark dark:bg-white/5 px-3 py-2 "
          />
        </div>
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary rounded-lg border border-sybatDark p-1 disabled:opacity-60"
          >
            {status === "loading" ? "Envoi…" : "Envoyer"}
          </button>
        </div>

        {status === "success" && (
          <p className="mt-2 text-sm text-green-600">✅ Message envoyé !</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">
            ❌ Erreur lors de l’envoi.
          </p>
        )}
      </form>
    </div>
  );
}
