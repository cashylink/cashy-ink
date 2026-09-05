import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import {
  clonePlans,
  defaultPromo,
  PLAN_IDS,
  type Plan,
  type PromoSettings,
} from "@/lib/plans";

const PLANS_COLLECTION = "plans";
const SETTINGS_COLLECTION = "settings";
const PROMO_DOC = "promo";

function asString(value: unknown, fallback: string) {
  return typeof value === "string" ? value : fallback;
}

function asNumber(value: unknown, fallback: number) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asFeatures(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function mergePlan(base: Plan, data: Record<string, unknown>): Plan {
  return {
    ...base,
    name: asString(data.name, base.name).trim() || base.name,
    summary: asString(data.summary, base.summary),
    price: Math.max(0, Math.round(asNumber(data.price, base.price))),
    period: asString(data.period, base.period).trim() || base.period,
    extra: asString(data.extra, base.extra),
    features: asFeatures(data.features, base.features),
    featured: Boolean(data.featured),
    badge: asString(data.badge, base.badge),
  };
}

export async function fetchPlans(): Promise<Plan[]> {
  const db = getFirebaseDb();
  const base = clonePlans();
  if (!db) return base;

  const snap = await getDocs(collection(db, PLANS_COLLECTION));
  if (snap.empty) return base;

  const byId = new Map<string, Record<string, unknown>>();
  snap.forEach((item) => {
    byId.set(item.id, item.data() as Record<string, unknown>);
  });

  return base.map((plan) => {
    const data = byId.get(plan.id);
    return data ? mergePlan(plan, data) : plan;
  });
}

export async function savePlan(plan: Plan) {
  const db = getFirebaseDb();
  if (!db) throw new Error("Firebase غير متصل.");
  if (!PLAN_IDS.includes(plan.id)) throw new Error("باقة غير معروفة.");

  await setDoc(doc(db, PLANS_COLLECTION, plan.id), {
    name: plan.name.trim(),
    summary: plan.summary.trim(),
    price: Math.max(0, Math.round(plan.price)),
    period: plan.period.trim(),
    extra: plan.extra.trim(),
    features: plan.features.map((item) => item.trim()).filter(Boolean),
    featured: Boolean(plan.featured),
    badge: plan.badge.trim(),
    updatedAt: serverTimestamp(),
  });
}

export async function fetchPromo(): Promise<PromoSettings> {
  const db = getFirebaseDb();
  if (!db) return { ...defaultPromo };

  const snap = await getDoc(doc(db, SETTINGS_COLLECTION, PROMO_DOC));
  if (!snap.exists()) return { ...defaultPromo };

  const data = snap.data() as Record<string, unknown>;
  const percent = Math.min(
    90,
    Math.max(1, Math.round(asNumber(data.percent, defaultPromo.percent))),
  );
  return {
    enabled: data.enabled !== false,
    percent,
  };
}

export async function savePromo(settings: PromoSettings) {
  const db = getFirebaseDb();
  if (!db) throw new Error("Firebase غير متصل.");

  await setDoc(doc(db, SETTINGS_COLLECTION, PROMO_DOC), {
    enabled: Boolean(settings.enabled),
    percent: Math.min(90, Math.max(1, Math.round(settings.percent))),
    updatedAt: serverTimestamp(),
  });
}
