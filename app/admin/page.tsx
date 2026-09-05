"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ADMIN_EMAIL, isAdminEmail } from "@/lib/admin";
import { type DownloadLink } from "@/lib/download-apps";
import {
  emptyDownloads,
  fetchDownloadLinks,
  saveDownloadLink,
} from "@/lib/download-store";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [apps, setApps] = useState<DownloadLink[]>(emptyDownloads());
  const [savingId, setSavingId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      router.replace("/admin/login");
      return;
    }
    return onAuthStateChanged(auth, async (user) => {
      if (!user || !isAdminEmail(user.email)) {
        router.replace("/admin/login");
        return;
      }
      try {
        setApps(await fetchDownloadLinks());
      } catch {
        setApps(emptyDownloads());
      }
      setReady(true);
    });
  }, [router]);

  const save = async (event: FormEvent<HTMLFormElement>, id: string) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const url = String(form.get("url") ?? "");
    setSavingId(id);
    setMessage("");
    try {
      await saveDownloadLink(id, url);
      setApps((current) =>
        current.map((app) => (app.id === id ? { ...app, url: url.trim() } : app)),
      );
      setMessage("تم حفظ الرابط.");
    } catch {
      setMessage("تعذر حفظ الرابط. تأكد من قواعد Firestore وتسجيل الدخول.");
    } finally {
      setSavingId("");
    }
  };

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (auth) await signOut(auth);
    router.replace("/admin/login");
  };

  if (!ready) {
    return (
      <main className="px-4 py-20 text-center text-gray-400" dir="rtl">
        جاري التحقق من الجلسة...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10" dir="rtl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-indigo-300">لوحة الأدمن</p>
          <h1 className="mt-1 font-nacelle text-2xl font-semibold text-white">
            روابط تحميل التطبيقات
          </h1>
          <p className="mt-1 text-sm text-gray-400">{ADMIN_EMAIL}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/#downloads"
            className="btn-sm bg-gray-800 text-gray-200"
          >
            عرض الموقع
          </Link>
          <button
            type="button"
            onClick={logout}
            className="btn-sm bg-gray-800 text-gray-200"
          >
            خروج
          </button>
        </div>
      </div>

      {!isFirebaseConfigured() ? (
        <p className="mb-6 rounded-xl bg-red-500/10 px-3 py-2 text-sm text-red-300">
          Firebase غير مضبوط.
        </p>
      ) : null}

      {message ? (
        <p className="mb-6 text-sm text-indigo-300">{message}</p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        {apps.map((app) => (
          <form
            key={app.id}
            onSubmit={(event) => save(event, app.id)}
            className="rounded-2xl bg-gray-950 p-5 ring-1 ring-gray-800"
          >
            <h2 className="font-nacelle text-lg font-semibold text-white">
              {app.title}
            </h2>
            <p className="mt-1 text-sm text-gray-400">{app.summary}</p>
            <label className="mt-4 block text-sm text-gray-300">
              رابط التحميل
              <input
                name="url"
                type="url"
                defaultValue={app.url}
                placeholder="https://..."
                className="form-input mt-2 w-full"
                dir="ltr"
              />
            </label>
            <button
              type="submit"
              disabled={savingId === app.id}
              className="btn mt-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white disabled:opacity-60"
            >
              {savingId === app.id ? "جاري الحفظ..." : "حفظ الرابط"}
            </button>
          </form>
        ))}
      </div>
    </main>
  );
}
