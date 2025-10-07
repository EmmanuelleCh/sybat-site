"use client";

import { useState } from "react";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPT = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function RecruitmentForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const cv = fd.get("cv") as File | null;
    const coverLetter = fd.get("coverLetter") as File | null; // <-- nom cohérent

    if (!cv || cv.size === 0) {
      setStatus("error");
      setErrorMsg("Le CV est obligatoire.");
      return;
    }
    if (!coverLetter || coverLetter.size === 0) {
      setStatus("error");
      setErrorMsg("La lettre de motivation est obligatoire.");
      return;
    }

    if (!ACCEPT.includes(cv.type) || cv.size > MAX_SIZE) {
      setStatus("error");
      setErrorMsg("CV invalide (type ou taille > 5 Mo).");
      return;
    }
    if (!ACCEPT.includes(coverLetter.type) || coverLetter.size > MAX_SIZE) {
      setStatus("error");
      setErrorMsg("Lettre de motivation invalide (type ou taille > 5 Mo).");
      return;
    }

    try {
      const res = await fetch("/api/recruitment", {
        method: "POST",
        body: fd, // multipart/form-data auto
      });
      if (!res.ok) throw new Error("Erreur serveur");
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Impossible d’envoyer la candidature.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="card p-6 sm:p-8 max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-sybat">
          Rejoignez notre équipe
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-5 text-left">
          {/* Identité */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                Prénom *
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Nom *
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                inputMode="tel"
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          {/* Message */}
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

          {/* Fichiers */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cv" className="block text-sm font-medium mb-1">
                CV *
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium mb-1"
              >
                Lettre de motivation *
              </label>
              <input
                id="coverLetter"
                name="coverLetter"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm"
              />
            </div>
          </div>

          {/* Bouton visible partout (mobile inclus) */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary rounded-lg border border-sybatDark p-1 disabled:opacity-60"
            >
              {status === "loading" ? "Envoi…" : "Envoyer la candidature"}
            </button>
          </div>

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
