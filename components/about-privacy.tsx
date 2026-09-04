import Link from "next/link";

export default function AboutPrivacy() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14">
            <article>
              <h2 className="mb-3 font-nacelle text-3xl font-semibold text-gray-200">
                من نحن
              </h2>
              <p className="mb-5 text-indigo-200/65">
                Cashy Link هو تطبيق لإدارة المحلات يساعدك تجمع المبيعات والمحافظ
                الإلكترونية والأقساط والديون والصيانة في مكان واحد.
              </p>
              <Link
                className="text-sm font-medium text-indigo-500 transition hover:text-indigo-400"
                href="/about"
              >
                اقرأ المزيد
              </Link>
            </article>
            <article>
              <h2 className="mb-3 font-nacelle text-3xl font-semibold text-gray-200">
                سياسة الخصوصية
              </h2>
              <p className="mb-5 text-indigo-200/65">
                نوضح هنا إزاي نتعامل مع بياناتك عند استخدام الموقع أو التواصل
                للاشتراك في Cashy Link، من غير مشاركة بياناتك مع أطراف تانية
                بغرض البيع.
              </p>
              <Link
                className="text-sm font-medium text-indigo-500 transition hover:text-indigo-400"
                href="/privacy"
              >
                اقرأ سياسة الخصوصية
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
