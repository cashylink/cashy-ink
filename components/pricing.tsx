import { whatsappSubscribeUrl } from "@/lib/site-config";
import { plans, toArabicDigits } from "@/lib/plans";
import Spotlight from "@/components/spotlight";

const secondaryBtn =
  "btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-200 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]";

const primaryBtn =
  "btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]";

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                الباقات
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              اختر الباقة المناسبة لشغلك
            </h2>
            <p className="text-lg text-indigo-200/65">
              ابدأ مع Cashy Link واختر المدة المناسبة لك لإدارة شغلك بسهولة.
            </p>
          </div>

          <Spotlight className="group mx-auto grid max-w-sm items-stretch gap-6 sm:max-w-none sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100 ${plan.featured ? "bg-indigo-500" : "bg-gray-800"}`}
              >
                <div className="relative z-20 flex h-full flex-col rounded-[inherit] bg-gray-950 p-5">
                  {plan.badge ? (
                    <div className="btn-sm relative mb-3 w-fit rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-normal">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {plan.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="mb-3 h-7" />
                  )}
                  <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">{plan.summary}</p>
                  <div className="mb-2 flex flex-wrap items-baseline gap-1">
                    <span className="font-nacelle text-4xl font-semibold text-white">
                      {toArabicDigits(plan.price)}
                    </span>
                    <span className="text-gray-300">ج.م</span>
                    <span className="text-sm text-gray-400">/ {plan.period}</span>
                  </div>
                  <p className="mb-5 text-sm text-gray-300">{plan.extra}</p>
                  <ul className="mb-6 grow space-y-3 text-sm text-gray-200">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 shrink-0 fill-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                        >
                          <path d="M14.414 4 5.707 12.707 1.586 8.586 3 7.172l2.707 2.707L13 2.586z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={plan.featured ? primaryBtn : secondaryBtn}
                    href={whatsappSubscribeUrl(plan.name, toArabicDigits(plan.price))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">اشترك عبر واتساب</span>
                  </a>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
