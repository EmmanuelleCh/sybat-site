"use client";

import type { FieldProps } from "./contact.types";

/**
 * Champ input réutilisable
 */
export default function FormField({
  id,
  label,
  type = "text",
  required = false,
  inputMode,
  pattern,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-sybat">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required={required}
        inputMode={inputMode}
        pattern={pattern}
        className="mt-1 w-full rounded-lg border border-sybatDark px-3 py-2"
      />
    </div>
  );
}
