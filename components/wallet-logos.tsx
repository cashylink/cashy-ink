import Image from "next/image";

const wallets = [
  {
    name: "WE Pay",
    src: "/images/wallets/we-pay.png",
    cover: false,
  },
  {
    name: "InstaPay",
    src: "/images/wallets/instapay.png",
    cover: false,
  },
  {
    name: "e&",
    src: "/images/wallets/eand.webp",
    cover: false,
  },
  {
    name: "اورنج كاش",
    src: "/images/wallets/orange-cash.png",
    cover: false,
  },
  {
    name: "فودافون كاش",
    src: "/images/wallets/vodafone-cash.jpg",
    cover: true,
  },
] as const;

export default function WalletLogos() {
  return (
    <ul
      className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-3 md:mb-10 md:gap-5"
      data-aos="fade-up"
      data-aos-delay={120}
    >
      {wallets.map((wallet) => (
        <li key={wallet.name}>
          <span className="relative block size-[4.25rem] overflow-hidden rounded-full bg-white shadow-[0_10px_28px_rgba(0,0,0,.35)] ring-2 ring-white/20 transition duration-300 hover:-translate-y-0.5 hover:ring-indigo-300/40 md:size-[5.25rem]">
            <Image
              src={wallet.src}
              alt={wallet.name}
              fill
              sizes="84px"
              className={
                wallet.cover
                  ? "object-cover"
                  : "object-contain p-2.5 md:p-3"
              }
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
