"use client";

import { useEffect, useRef, useState } from "react";
import { onWatchVideo } from "@/components/watch-video-dialog";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import VideoThumb from "@/public/images/hero-image-01.jpg";

const YOUTUBE_ID = "5sLwDi8Xqes";

export default function ModalVideo() {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const play = () => {
    setPlaying(true);
    frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => onWatchVideo(play), []);

  return (
    <div className="relative" id="hero-video" ref={frameRef}>
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt=""
        />
      </div>

      {playing ? (
        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="اكتشف Cashy Link"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
          onClick={play}
          aria-label="شاهد مميزات التطبيق"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <figure className="relative w-full overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
            <Image
              src={VideoThumb}
              width={1104}
              height={576}
              priority
              alt="واجهة Cashy Link"
            />
          </figure>
          <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
            <span className="relative flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
              >
                <path
                  fill="url(#pla)"
                  fillRule="evenodd"
                  d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                  clipRule="evenodd"
                />
                <defs>
                  <linearGradient
                    id="pla"
                    x1={10}
                    x2={10}
                    y1={0}
                    y2={20}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2F6BFF" />
                    <stop offset={1} stopColor="#22C55E" stopOpacity=".85" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-sm font-medium leading-tight text-gray-300">
                شاهد مميزات التطبيق
              </span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
