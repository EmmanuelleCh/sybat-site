"use client";

import { useState } from "react";
import type { Status, ContactPayload } from "./contact.types";

/**
 * Hook dédié à la gestion du formulaire de contact
 */
export function useContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: ContactPayload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    // Validation minimale côté client
    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.email ||
      !payload.phone ||
      !payload.message
    ) {
      setStatus("error");
      return;
    }

    // Honeypot anti-bot
    if (payload.website) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Erreur contact:", error);
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
