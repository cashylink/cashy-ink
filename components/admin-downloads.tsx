"use client";

import { FormEvent, useEffect, useState } from "react";
import { emptyDownloads, fetchDownloadLinks, saveDownloadLink } from "@/lib/download-store";
import { type DownloadLink } from "@/lib/download-apps";

export default function AdminDownloads() {
  const [apps, setApps] = useState<DownloadLink[]>(emptyDownloads());
  const [savingId, setSavingId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchDownloadLinks()
      .then(setApps)
      .catch(() => setApps(emptyDownloads()));
  }, []);

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
      setMessage("تعذر حفظ الرابط. انشر قواعد Firestore من الكونسول.");
    } finally {
      setSavingId("");
    }
  };

  return (
    <section>
      <h2 className="mb-4 font-nacelle text-xl font-semibold text-white">
        روابط التحميل
      </h2>
      {message ? <p className="mb-4 text-sm text-indigo-300">{message}</p> : null}
      <div className="grid gap-4 md:grid-cols-2">
        {apps.map((app) => (
          <form
            key={app.id}
            onSubmit={(event) => save(event, app.id)}
            className="rounded-2xl bg-gray-950 p-5 ring-1 ring-gray-800"
          >
            <h3 className="font-nacelle text-lg font-semibold text-white">
              {app.title}
            </h3>
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
    </section>
  );
}
