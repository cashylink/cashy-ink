export const DOWNLOAD_APPS = [
  {
    id: "windows-32",
    title: "تطبيق الكمبيوتر 32 بت",
    summary: "نسخة ويندوز للأجهزة 32-bit.",
  },
  {
    id: "windows-64",
    title: "تطبيق الكمبيوتر 64 بت",
    summary: "نسخة ويندوز للأجهزة 64-bit.",
  },
  {
    id: "android-transactions",
    title: "تطبيق الأندرويد للمعاملات",
    summary: "تطبيق الموبايل لإدارة المعاملات.",
  },
  {
    id: "android-sms",
    title: "تطبيق قراءة الرسائل",
    summary: "للتسجيل التلقائي لعمليات السحب والتحويل.",
  },
] as const;

export type DownloadAppId = (typeof DOWNLOAD_APPS)[number]["id"];

export type DownloadLink = {
  id: string;
  title: string;
  summary: string;
  url: string;
};
