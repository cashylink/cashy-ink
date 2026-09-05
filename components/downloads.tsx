"use client";

import { useEffect, useState } from "react";
import Spotlight from "@/components/spotlight";
import { emptyDownloads, fetchDownloadLinks } from "@/lib/download-store";
import { type DownloadLink } from "@/lib/download-apps";
import { isFirebaseConfigured } from "@/lib/firebase";

const downloadBtn =
  "btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]";

const disabledBtn =
  "btn w-full cursor-not-allowed bg-gray-800 text-gray-400";

export default function Downloads() {
  const [apps, setApps] = useState<DownloadLink[]>(emptyDownloads());

  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    fetchDownloadLinks()
      .then(setApps)
      .catch(() => undefined);
  }, []);

  return (
    <section id="downloads">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                التحميل
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              حمّل تطبيق Cashy Link
            </h2>
            <p className="text-lg text-indigo-200/65">
              اختار النسخة المناسبة لجهازك.
            </p>
          </div>

          <Spotlight className="group mx-auto grid max-w-sm items-stretch gap-6 sm:max-w-none sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {apps.map((app) => {
              const ready = Boolean(app.url);
              return (
                <article
                  key={app.id}
                  className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px"
                >
                  <div className="relative z-20 flex h-full flex-col rounded-[inherit] bg-gray-950 p-5">
                    <h3 className="mb-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                      {app.title}
                    </h3>
                    <p className="mb-6 grow text-sm text-gray-400">
                      {app.summary}
                    </p>
                    {ready ? (
                      <a
                        className={downloadBtn}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        تحميل التطبيق
                      </a>
                    ) : (
                      <span className={disabledBtn}>التحميل غير متاح حاليًا</span>
                    )}
                  </div>
                </article>
              );
            })}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
