"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  DISCOUNT_PERCENT,
  discountedPrice,
  plans,
  toArabicDigits,
} from "@/lib/plans";
import { whatsappDiscountSubscribeUrl } from "@/lib/site-config";

const enjoyBtn =
  "shrink-0 rounded-md bg-[#dc2626] px-2.5 py-1 text-xs font-semibold leading-none text-white hover:bg-[#b91c1c] md:rounded-lg md:px-4 md:py-2 md:text-base";

export default function PromoBar({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="إغلاق عرض الخصم"
          className="fixed inset-0 z-30 bg-gray-950/45"
          onClick={() => setOpen(false)}
        />
      ) : null}
    <div className="relative sticky top-0 z-40">
      <div className="overflow-hidden bg-gray-950">
        <div
          className="mx-auto flex w-full max-w-7xl min-w-0 flex-nowrap items-center justify-center gap-2 overflow-x-hidden px-3 py-2 md:gap-4 md:px-8 md:py-3"
          dir="rtl"
        >
          <p className="flex min-w-0 items-center gap-1.5 text-xs font-medium leading-none text-gray-200 md:gap-3 md:text-lg">
            <span className="inline-flex shrink-0 rounded-full bg-[#dc2626] px-2 py-1 text-xs font-bold leading-none text-white md:px-3 md:py-1.5 md:text-sm">
              خصم {toArabicDigits(DISCOUNT_PERCENT)}٪
            </span>
            <span className="hidden sm:inline">على أسعار الاشتراك</span>
            <span className="shrink-0 text-red-400">لفترة محدودة</span>
          </p>
          <button
            type="button"
            className={enjoyBtn}
            aria-expanded={open}
            aria-controls="discount-plans"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "إخفاء الباقات" : "استمتع بالخصم"}
          </button>
        </div>
      </div>

      {children}

      <div
        id="discount-plans"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full origin-top transition-[transform,opacity] duration-500 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-3 opacity-0"
        }`}
        dir="rtl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-b-2xl border border-t-0 border-gray-800 bg-gray-950/98 shadow-[0_28px_70px_-24px_rgba(0,0,0,.75)] backdrop-blur-md">
            <div className="max-h-[min(78vh,820px)] overflow-y-auto p-4 sm:p-5">
              <div className="mb-4 text-center sm:text-right">
                <p className="text-xs font-semibold text-red-400">
                  الباقات بعد الخصم
                </p>
                <h2 className="mt-1 font-nacelle text-lg font-semibold text-white">
                  وفّر {toArabicDigits(DISCOUNT_PERCENT)}٪ واختر الباقة المناسبة
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan) => {
                  const after = discountedPrice(plan.price);
                  const saved = plan.price - after;
                  return (
                    <article
                      key={plan.name}
                      className={`flex flex-col rounded-2xl bg-gray-950 p-4 ring-1 ${
                        plan.featured ? "ring-indigo-500" : "ring-gray-800"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h3 className="font-nacelle text-sm font-semibold text-gray-100">
                          {plan.name}
                        </h3>
                        <span className="rounded-full bg-red-600/20 px-2 py-0.5 text-[11px] font-semibold text-red-400">
                          خصم {toArabicDigits(DISCOUNT_PERCENT)}٪
                        </span>
                      </div>
                      <p className="mb-3 text-xs text-gray-400">{plan.summary}</p>
                      <div className="mb-1 flex flex-wrap items-baseline gap-2">
                        <span className="text-sm text-gray-500 line-through">
                          {toArabicDigits(plan.price)} ج.م
                        </span>
                        <span className="font-nacelle text-2xl font-semibold text-white">
                          {toArabicDigits(after)}
                        </span>
                        <span className="text-sm text-gray-300">ج.م</span>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                        <p className="text-xs font-medium text-red-400">
                          وفّرت {toArabicDigits(saved)} جنيه
                        </p>
                        <a
                          className="btn-sm shrink-0 bg-[#dc2626] py-1.5 text-white hover:bg-[#b91c1c]"
                          href={whatsappDiscountSubscribeUrl({
                            planName: plan.name,
                            period: plan.period,
                            originalLabel: toArabicDigits(plan.price),
                            discountedLabel: toArabicDigits(after),
                            savedLabel: toArabicDigits(saved),
                            percent: toArabicDigits(DISCOUNT_PERCENT),
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          استمتع بالخصم
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
