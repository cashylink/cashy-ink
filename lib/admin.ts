export const ADMIN_EMAIL = "alkaptin7878@mail.ru";

export const ADMIN_EMAILS = [
  "alkaptin7878@mail.ru",
  "alkaptin@mail.ru",
] as const;

export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  return (ADMIN_EMAILS as readonly string[]).includes(email.toLowerCase());
}
