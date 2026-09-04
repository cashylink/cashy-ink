"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { whatsappMessageUrl } from "@/lib/site-config";
import CallCenterAnim from "@/components/call-center-anim";

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const send = (event?: FormEvent) => {
    event?.preventDefault();
    const text = message.trim();
    if (!text) return;
    window.open(whatsappMessageUrl(text), "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {open && (
        <form
          onSubmit={send}
          className="w-[min(21rem,calc(100vw-2.5rem))] rounded-3xl bg-linear-to-br from-indigo-500 to-indigo-600 p-[3px] shadow-[0_12px_36px_rgba(47,107,255,.55)]"
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-white">
            <div className="flex items-center gap-3 bg-linear-to-l from-indigo-600 to-indigo-500 px-4 py-3.5">
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="rounded-xl ring-2 ring-white/30"
              />
              <div className="min-w-0 flex-1">
                <p className="font-nacelle text-sm font-semibold text-white">
                  Cashy Link
                </p>
                <p className="flex items-center gap-1.5 text-xs text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  كول سنتر — الرد على واتساب
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 hover:text-white"
                aria-label="إغلاق"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 3l8 8M11 3l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3 bg-white p-4">
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-linear-to-l from-indigo-50 to-emerald-50 px-3.5 py-2.5 text-sm leading-relaxed text-gray-800">
                أهلاً، اكتب رسالتك وهنبعتها على واتساب جاهزة للإرسال.
              </div>
              <textarea
                className="min-h-[6.5rem] w-full resize-none rounded-2xl border border-indigo-200 bg-white px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-500"
                placeholder="اكتب رسالتك..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                dir="rtl"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-l from-indigo-600 to-indigo-500 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(47,107,255,.35)] transition hover:opacity-95"
              >
                إرسال عبر واتساب
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex flex-col items-center gap-2"
        aria-label="تواصل معنا"
        aria-expanded={open}
      >
        <span className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-indigo-600 p-[3px] shadow-[0_12px_36px_rgba(47,107,255,.55)] transition hover:scale-105">
          <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full bg-indigo-400/35" />
          {open ? (
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-gray-900">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3l8 8M11 3l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          ) : (
            <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
              <CallCenterAnim />
            </span>
          )}
        </span>
        <span className="relative z-10 whitespace-nowrap rounded-full bg-linear-to-l from-indigo-600 to-indigo-500 px-3 py-1 font-nacelle text-xs font-semibold text-white shadow-[0_8px_20px_rgba(47,107,255,.35)]">
          تواصل معنا
        </span>
      </button>
    </div>
  );
}
