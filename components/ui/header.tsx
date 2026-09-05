"use client";

import Link from "next/link";
import Logo from "./logo";
import PromoBar from "@/components/promo-bar";
import { whatsappStartUrl } from "@/lib/site-config";

export default function Header() {
  return (
    <PromoBar>
      <header className="z-30 mt-1 w-full px-3 md:mt-1.5 md:px-8" dir="ltr">
        <div className="w-full">
          <div className="relative flex h-14 w-full items-center justify-between gap-3 rounded-2xl bg-gray-900/80 px-3 backdrop-blur-md md:h-20 md:px-6 lg:h-[5.5rem] lg:px-7">
            <div className="relative z-10 flex flex-1 items-center">
              <Logo />
            </div>

            <ul className="relative z-10 flex flex-1 items-center justify-end gap-2 md:gap-4">
              <li>
                <Link
                  href="/#downloads"
                  className="btn-sm relative isolate bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-200 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] md:rounded-xl md:px-5 md:py-2.5 md:text-base"
                >
                  <span className="relative z-10">تحميل</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="btn-sm relative isolate bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-200 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] md:rounded-xl md:px-5 md:py-2.5 md:text-base"
                >
                  <span className="relative z-10">الأسعار</span>
                </Link>
              </li>
              <li>
                <a
                  href={whatsappStartUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] md:rounded-xl md:px-5 md:py-2.5 md:text-base"
                >
                  ابدأ الآن
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </PromoBar>
  );
}
