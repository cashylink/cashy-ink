"use client";

import { openWatchVideo } from "@/components/watch-video-dialog";

export default function WatchNowButton() {
  return (
    <button
      type="button"
      onClick={openWatchVideo}
      className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
    >
      <span className="relative z-10">شاهد مميزات التطبيق</span>
    </button>
  );
}
