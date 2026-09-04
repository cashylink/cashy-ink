import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="Cashy Link"
    >
      <Image
        src={logo}
        alt=""
        width={32}
        height={32}
        className="rounded-xl"
      />
      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text font-nacelle text-sm font-semibold tracking-tight text-transparent sm:text-[0.95rem]">
        Cashy Link
      </span>
    </Link>
  );
}
