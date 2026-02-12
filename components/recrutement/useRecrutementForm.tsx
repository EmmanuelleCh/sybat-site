"use client";

import { useState, useCallback } from "react";

/* =========================================================
   CONFIGURATION
========================================================= */

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type Status = "idle" | "loading" | "success" | "error";

/* =========================================================
   HOOK
========================================================= */

export function useRecruitmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  /**
   * Validation d’un fichier
   */
  const validateFile = (file: File | null, label: string): string | null => {
    if (!file || file.size === 0) {
      return `${label} est obligatoire.`;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      return `${label} invalide (format non autorisé).`;
    }

    if (file.size > MAX_SIZE) {
      return `${label} trop volumineux (> 5 Mo).`;
    }

    return null;
  };

  /**
   * Soumission sécurisée
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (status === "loading") return; // anti double-submit

      setStatus("loading");
      setErrorMsg("");

      const form = e.currentTarget;
      const formData = new FormData(form);

      const cv = formData.get("cv") as File | null;
      const coverLetter = formData.get("coverLetter") as File | null;

      const cvError = validateFile(cv, "Le CV");
      if (cvError) {
        setStatus("error");
        setErrorMsg(cvError);
        return;
      }

      const coverError = validateFile(coverLetter, "La lettre de motivation");
      if (coverError) {
        setStatus("error");
        setErrorMsg(coverError);
        return;
      }

      try {
        const res = await fetch("/api/recruitment", {
          method: "POST",
          body: formData, // multipart auto
        });

        if (!res.ok) throw new Error("Erreur serveur");

        form.reset();
        setStatus("success");
      } catch (error) {
        console.error("Erreur recrutement:", error);
        setStatus("error");
        setErrorMsg("Impossible d’envoyer la candidature.");
      }
    },
    [status]
  );

  return { status, errorMsg, handleSubmit };
}
