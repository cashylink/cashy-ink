import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 md:gap-3"
      aria-label="Cashy Link"
    >
      <Image
        src={logo}
        alt=""
        width={48}
        height={48}
        className="h-8 w-8 rounded-xl md:h-12 md:w-12 md:rounded-2xl"
      />
      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-nacelle text-sm font-semibold tracking-tight text-transparent sm:text-[0.95rem] md:text-xl lg:text-2xl">
        Cashy Link
      </span>
    </Link>
  );
}
