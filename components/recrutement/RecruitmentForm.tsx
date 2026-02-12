"use client";

import { useRecruitmentForm } from "./useRecrutementForm";

export default function RecruitmentForm() {
  const { status, errorMsg, handleSubmit } = useRecruitmentForm();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="card p-6 sm:p-8 max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-sybat">
          Rejoignez notre équipe
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 text-left"
          noValidate
        >
          {/* IDENTITÉ */}
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField id="firstName" label="Prénom *" required />
            <InputField id="lastName" label="Nom *" required />
          </div>

          {/* CONTACT */}
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField id="email" label="Email *" type="email" required />
            <InputField id="phone" label="Téléphone" inputMode="tel" />
          </div>

          {/* MESSAGE */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          {/* FICHIERS */}
          <div className="grid sm:grid-cols-2 gap-4">
            <FileField id="cv" label="CV *" required />
            <FileField
              id="coverLetter"
              label="Lettre de motivation *"
              required
            />
          </div>

          {/* BOUTON */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg border border-sybatDark px-4 py-2 disabled:opacity-60"
            >
              {status === "loading" ? "Envoi…" : "Envoyer la candidature"}
            </button>
          </div>

          {/* FEEDBACK */}
          {status === "success" && (
            <p className="text-sm text-green-600 text-center">
              ✅ Candidature envoyée !
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600 text-center">❌ {errorMsg}</p>
          )}

          <p className="text-xs opacity-70 text-center">
            Formats acceptés : PDF, DOC, DOCX · Taille max : 5 Mo
          </p>
        </form>
      </div>
    </main>
  );
}

/* =========================================================
   SOUS-COMPOSANTS UI
========================================================= */

function InputField({
  id,
  label,
  type = "text",
  required = false,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        inputMode={inputMode}
        className="w-full rounded-lg border px-3 py-2"
      />
    </div>
  );
}

function FileField({
  id,
  label,
  required = false,
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="file"
        required={required}
        accept=".pdf,.doc,.docx"
        className="block w-full text-sm"
      />
    </div>
  );
}
