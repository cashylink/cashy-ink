/** رقم واتساب بصيغة محلية، يتحول تلقائيًا لصيغة دولية */
export const WHATSAPP_SUBSCRIPTION_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_SUBSCRIPTION_NUMBER ?? "01000392539";

export const SITE_NAME = "Cashy Link";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cashy-link.com";
export const SITE_DESCRIPTION =
  "Cashy Link يساعدك تدير مبيعاتك، محافظك الإلكترونية، الأقساط، الديون والصيانة من تطبيق واحد.";

function whatsappDigits() {
  let number = WHATSAPP_SUBSCRIPTION_NUMBER.replace(/\D/g, "");
  if (number.startsWith("00")) number = number.slice(2);
  if (number.startsWith("0")) number = `20${number.slice(1)}`;
  return number;
}

function whatsappUrl(text: string) {
  const number = whatsappDigits();
  const query = `text=${encodeURIComponent(text)}`;
  return number ? `https://wa.me/${number}?${query}` : `https://wa.me/?${query}`;
}

export function whatsappStartUrl() {
  return whatsappUrl("مرحبًا، أريد أبدأ استخدام Cashy Link.");
}

export function whatsappMessageUrl(text: string) {
  return whatsappUrl(text.trim());
}

export function whatsappSubscribeUrl(planName: string, priceLabel: string) {
  return whatsappUrl(
    `مرحبًا، أريد الاشتراك في باقة ${planName} من Cashy Link بسعر ${priceLabel} جنيه.`,
  );
}
