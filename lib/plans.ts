export const DISCOUNT_PERCENT = 25;

export const PLAN_IDS = [
  "quarterly",
  "semiannual",
  "annual",
  "lifetime",
] as const;

export type PlanId = (typeof PLAN_IDS)[number];

export type Plan = {
  id: PlanId;
  name: string;
  summary: string;
  price: number;
  period: string;
  extra: string;
  features: string[];
  featured: boolean;
  badge: string;
};

export type PromoSettings = {
  enabled: boolean;
  percent: number;
};

export const defaultPromo: PromoSettings = {
  enabled: true,
  percent: DISCOUNT_PERCENT,
};

export const defaultPlans: Plan[] = [
  {
    id: "quarterly",
    name: "ربع سنوية",
    summary: "٣ أشهر وصول كامل",
    price: 600,
    period: "٣ أشهر",
    extra: "مناسبة لتجربة Cashy Link والبدء بإدارة شغلك بكل الميزات.",
    features: [
      "دعم 5 مرات شهريًا",
      "عدد محافظ 15 محفظة",
      "استخدام جهاز واحد فقط (كمبيوتر أو موبايل)",
      "إمكانية إضافة 1 كاشير",
    ],
    featured: false,
    badge: "",
  },
  {
    id: "semiannual",
    name: "نصف سنوية",
    summary: "٦ أشهر وصول كامل",
    price: 1000,
    period: "٦ أشهر",
    extra: "اختيار مناسب لو عايز تستخدم Cashy Link لفترة أطول وتدير شغلك بسهولة.",
    features: [
      "دعم حتى 10 مرات شهريًا",
      "عدد محافظ 35 محفظة",
      "استخدام جهازين معًا",
      "إمكانية إضافة 2 كاشير",
    ],
    featured: false,
    badge: "",
  },
  {
    id: "annual",
    name: "سنوية",
    summary: "١٢ شهرًا وصول كامل",
    price: 1600,
    period: "سنة",
    extra: "أفضل اختيار للمحلات والتجار اللي بيعتمدوا على Cashy Link بشكل يومي.",
    features: [
      "دعم طوال السنة",
      "عدد محافظ 45 محفظة",
      "استخدام 3 أجهزة",
      "إمكانية إضافة 3 كاشير",
      "يعمل بها وضع الأونلاين",
    ],
    featured: true,
    badge: "الأكثر طلبًا",
  },
  {
    id: "lifetime",
    name: "مدى الحياة",
    summary: "دفعة واحدة — بدون تجديد",
    price: 5000,
    period: "مرة واحدة",
    extra: "ادفع مرة واحدة واستمر في استخدام الباقة بدون تجديد.",
    features: [
      "دعم مجاني",
      "عدد محافظ مفتوح",
      "إمكانية استخدام 3 أجهزة معًا",
      "إمكانية إضافة 4 كاشير",
      "يعمل بها وضع الأونلاين",
    ],
    featured: false,
    badge: "دفعة واحدة",
  },
];

export const plans = defaultPlans;

export function clonePlans(): Plan[] {
  return defaultPlans.map((plan) => ({
    ...plan,
    features: [...plan.features],
  }));
}

export function toArabicDigits(value: number | string) {
  return String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
}

export function discountedPrice(price: number, percent = DISCOUNT_PERCENT) {
  return Math.round(price * (1 - percent / 100));
}
