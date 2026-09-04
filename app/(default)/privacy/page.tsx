import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "سياسة خصوصية Cashy Link: إزاي نتعامل مع بياناتك عند زيارة الموقع أو التواصل للاشتراك.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: `سياسة الخصوصية | ${SITE_NAME}`,
    description:
      "سياسة خصوصية Cashy Link: إزاي نتعامل مع بياناتك عند زيارة الموقع أو التواصل للاشتراك.",
    url: `${SITE_URL}/privacy`,
    locale: "ar_EG",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              سياسة الخصوصية
            </h1>
            <div className="space-y-5 text-lg text-indigo-200/65">
              <p>
                سياسة الخصوصية دي بتوضّح إزاي موقع Cashy Link بيتعامل مع
                المعلومات أثناء تصفح الصفحات أو عند التواصل للاشتراك.
              </p>
              <h2 className="pt-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                البيانات اللي ممكن توصلنا
              </h2>
              <p>
                لو تواصلت معنا عبر واتساب أو نموذج في الموقع، ممكن نستقبل الاسم،
                اسم المحل، ووسيلة التواصل اللي تبعتها بنفسك عشان نكمّل طلب
                الاشتراك.
              </p>
              <h2 className="pt-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                استخدام البيانات
              </h2>
              <p>
                بنستخدم البيانات دي للرد عليك، وتوضيح الباقات، وتفعيل الاشتراك.
                مش بنبيع بياناتك لأطراف تانية.
              </p>
              <h2 className="pt-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                ملفات الارتباط
              </h2>
              <p>
                الموقع ممكن يستخدم ملفات تقنية لازمة لتشغيل الصفحات. مش بنستخدم
                بياناتك في إعلانات طرف تالت من خلال الصفحة دي.
              </p>
              <h2 className="pt-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                التواصل
              </h2>
              <p>
                لأي استفسار عن الخصوصية أو بياناتك، تواصل معنا من خلال قنوات
                Cashy Link المتاحة على الموقع.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
