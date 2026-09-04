import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "Cashy Link هو تطبيق لإدارة المحلات يساعدك تجمع المبيعات والمحافظ الإلكترونية والأقساط والديون والصيانة في مكان واحد.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `من نحن | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/about`,
    locale: "ar_EG",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              من نحن
            </h1>
            <div className="space-y-5 text-lg text-indigo-200/65">
              <p>
                Cashy Link هو تطبيق لإدارة المحلات يساعدك تجمع المبيعات والمحافظ
                الإلكترونية والأقساط والديون والصيانة في مكان واحد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
