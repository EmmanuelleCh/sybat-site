"use client";

import FormField from "./FormField";
import { useContactForm } from "./useContactForm";

export default function ContactForm() {
  const { status, handleSubmit } = useContactForm();

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Carte principale */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-slate-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-sybatDark">
              Parlons de votre projet
            </h2>
            <p className="mt-3 text-gray-600">
              Une question ? Un devis ? Nous vous répondons rapidement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Identité */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField id="firstName" label="Votre prénom *" required />
              <FormField id="lastName" label="Votre nom *" required />
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField id="email" type="email" label="Email *" required />
              <FormField
                id="phone"
                label="Numéro de téléphone *"
                inputMode="tel"
                pattern="^[0-9+(). -]{6,}$"
                required
              />
            </div>

            <FormField id="subject" label="Sujet" />

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-sybatDark"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sybat focus:border-transparent transition"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            {/* Bouton */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sybat text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-60"
              >
                {status === "loading"
                  ? "Envoi en cours…"
                  : "Envoyer le message"}
              </button>
            </div>

            {/* Feedback */}
            {status === "success" && (
              <div className="mt-4 p-4 rounded-xl bg-green-50 text-green-700 text-sm text-center border border-green-200">
                ✅ Votre message a bien été envoyé. Nous revenons vers vous
                rapidement.
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-700 text-sm text-center border border-red-200">
                ❌ Une erreur est survenue. Merci de réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
