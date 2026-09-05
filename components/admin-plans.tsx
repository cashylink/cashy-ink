"use client";

import { FormEvent, useEffect, useState } from "react";
import { clonePlans, type Plan } from "@/lib/plans";
import { fetchPlans, savePlan } from "@/lib/site-content-store";

export default function AdminPlans() {
  const [plans, setPlans] = useState<Plan[]>(clonePlans());
  const [savingId, setSavingId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPlans()
      .then(setPlans)
      .catch(() => undefined);
  }, []);

  const update = (id: string, patch: Partial<Plan>) => {
    setPlans((current) =>
      current.map((plan) => (plan.id === id ? { ...plan, ...patch } : plan)),
    );
  };

  const submit = async (event: FormEvent<HTMLFormElement>, plan: Plan) => {
    event.preventDefault();
    setSavingId(plan.id);
    setMessage("");
    try {
      await savePlan(plan);
      setMessage(`تم حفظ باقة ${plan.name}.`);
    } catch {
      setMessage("تعذر حفظ الباقة. انشر قواعد Firestore من الكونسول.");
    } finally {
      setSavingId("");
    }
  };

  return (
    <section>
      <h2 className="mb-4 font-nacelle text-xl font-semibold text-white">
        الباقات والأسعار
      </h2>
      {message ? <p className="mb-4 text-sm text-indigo-300">{message}</p> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        {plans.map((plan) => (
          <form
            key={plan.id}
            onSubmit={(event) => submit(event, plan)}
            className="rounded-2xl bg-gray-950 p-5 ring-1 ring-gray-800"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm text-gray-300">
                اسم الباقة
                <input
                  className="form-input mt-2 w-full"
                  value={plan.name}
                  onChange={(event) => update(plan.id, { name: event.target.value })}
                  required
                />
              </label>
              <label className="block text-sm text-gray-300">
                المدة
                <input
                  className="form-input mt-2 w-full"
                  value={plan.period}
                  onChange={(event) => update(plan.id, { period: event.target.value })}
                  required
                />
              </label>
            </div>
            <label className="mt-3 block text-sm text-gray-300">
              وصف مختصر
              <input
                className="form-input mt-2 w-full"
                value={plan.summary}
                onChange={(event) => update(plan.id, { summary: event.target.value })}
              />
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm text-gray-300">
                السعر بالجنيه
                <input
                  type="number"
                  min={0}
                  className="form-input mt-2 w-full"
                  dir="ltr"
                  value={plan.price}
                  onChange={(event) =>
                    update(plan.id, { price: Number(event.target.value) })
                  }
                  required
                />
              </label>
              <label className="block text-sm text-gray-300">
                شارة
                <input
                  className="form-input mt-2 w-full"
                  value={plan.badge}
                  onChange={(event) => update(plan.id, { badge: event.target.value })}
                />
              </label>
            </div>
            <label className="mt-3 block text-sm text-gray-300">
              نص إضافي
              <textarea
                className="form-input mt-2 min-h-20 w-full"
                value={plan.extra}
                onChange={(event) => update(plan.id, { extra: event.target.value })}
              />
            </label>
            <label className="mt-3 block text-sm text-gray-300">
              المميزات (سطر لكل ميزة)
              <textarea
                className="form-input mt-2 min-h-32 w-full"
                value={plan.features.join("\n")}
                onChange={(event) =>
                  update(plan.id, {
                    features: event.target.value.split("\n"),
                  })
                }
              />
            </label>
            <label className="mt-3 flex items-center gap-3 text-sm text-gray-200">
              <input
                type="checkbox"
                checked={plan.featured}
                onChange={(event) =>
                  update(plan.id, { featured: event.target.checked })
                }
                className="size-4 rounded border-gray-600 bg-gray-900 text-indigo-500"
              />
              تمييز الباقة
            </label>
            <button
              type="submit"
              disabled={savingId === plan.id}
              className="btn mt-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white disabled:opacity-60"
            >
              {savingId === plan.id ? "جاري الحفظ..." : "حفظ الباقة"}
            </button>
          </form>
        ))}
      </div>
    </section>
  );
}
