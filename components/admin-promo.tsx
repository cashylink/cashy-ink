"use client";

import { FormEvent, useEffect, useState } from "react";
import { defaultPromo, type PromoSettings } from "@/lib/plans";
import { fetchPromo, savePromo } from "@/lib/site-content-store";

export default function AdminPromo() {
  const [promo, setPromo] = useState<PromoSettings>(defaultPromo);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPromo()
      .then(setPromo)
      .catch(() => undefined);
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      await savePromo(promo);
      setMessage(promo.enabled ? "تم تفعيل العرض." : "تم إيقاف العرض.");
    } catch {
      setMessage("تعذر حفظ العرض. انشر قواعد Firestore من الكونسول.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section>
      <h2 className="mb-4 font-nacelle text-xl font-semibold text-white">
        عرض الخصم
      </h2>
      <form
        onSubmit={submit}
        className="rounded-2xl bg-gray-950 p-5 ring-1 ring-gray-800"
      >
        <label className="flex items-center gap-3 text-sm text-gray-200">
          <input
            type="checkbox"
            checked={promo.enabled}
            onChange={(event) =>
              setPromo((current) => ({
                ...current,
                enabled: event.target.checked,
              }))
            }
            className="size-4 rounded border-gray-600 bg-gray-900 text-indigo-500"
          />
          تفعيل شريط العرض على الموقع
        </label>
        <label className="mt-4 block text-sm text-gray-300">
          نسبة الخصم
          <input
            type="number"
            min={1}
            max={90}
            value={promo.percent}
            onChange={(event) =>
              setPromo((current) => ({
                ...current,
                percent: Number(event.target.value),
              }))
            }
            className="form-input mt-2 w-full max-w-40"
            dir="ltr"
          />
        </label>
        {message ? <p className="mt-4 text-sm text-indigo-300">{message}</p> : null}
        <button
          type="submit"
          disabled={saving}
          className="btn mt-4 bg-linear-to-t from-indigo-600 to-indigo-500 text-white disabled:opacity-60"
        >
          {saving ? "جاري الحفظ..." : "حفظ العرض"}
        </button>
      </form>
    </section>
  );
}
