"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-950 text-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h1 className="pb-4 text-3xl font-semibold">حصل خطأ</h1>
          <p className="mb-8 text-indigo-200/65">حدّث الصفحة أو حاول تاني.</p>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  );
}
