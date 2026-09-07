import ModalVideo from "@/components/modal-video";
import WalletLogos from "@/components/wallet-logos";
import { whatsappStartUrl } from "@/lib/site-config";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 md:py-12">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-10">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl lg:text-[2.65rem]"
              data-aos="fade-up"
            >
              إدارة محافظك الإلكترونية ومحلك بالكامل مع Cashy Link
            </h1>
            <WalletLogos />
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Cashy Link يساعدك تدير مبيعاتك، محافظك الإلكترونية، الأقساط،
                الديون والصيانة من تطبيق واحد.
              </p>
              <div className="hidden">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={whatsappStartUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      ابدأ الآن
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#features"
                  >
                    اكتشف Cashy Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl md:max-w-4xl">
            <ModalVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
