"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex grow flex-col">
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 text-center md:py-20">
            <h1 className="pb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              حصل خطأ
            </h1>
            <p className="mb-8 text-lg text-indigo-200/65">
              حدّث الصفحة أو حاول تاني.
            </p>
            <button
              type="button"
              onClick={reset}
              className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
