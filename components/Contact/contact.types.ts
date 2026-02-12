export type Status = "idle" | "loading" | "success" | "error";

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string; // honeypot
};

export type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
};
