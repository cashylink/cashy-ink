"use client";

import { useEffect, useRef, useState } from "react";
import { onWatchVideo } from "@/components/watch-video-dialog";
import Image, { type StaticImageData } from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import VideoThumbAlt from "@/public/images/hero-image-02.jpg";

const slides: { image: StaticImageData; youtubeId: string; label: string }[] = [
  {
    image: VideoThumb,
    youtubeId: "5sLwDi8Xqes",
    label: "شاهد مميزات التطبيق",
  },
  {
    image: VideoThumbAlt,
    youtubeId: "bJ4YA0LyJ_Y",
    label: "شرح التسجيل التلقائي لعمليات السحب والتحويل",
  },
];

export default function ModalVideo() {
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const dragging = useRef(false);

  const play = () => {
    setPlaying(true);
    frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => onWatchVideo(play), []);

  useEffect(() => {
    if (playing) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [playing]);

  const goTo = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  const onPointerDown = (event: React.PointerEvent) => {
    startX.current = event.clientX;
    dragging.current = false;
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (startX.current === null) return;
    if (Math.abs(event.clientX - startX.current) > 12) dragging.current = true;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goTo((active + 1) % slides.length);
    else goTo((active - 1 + slides.length) % slides.length);
  };

  const current = slides[active];

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

      <div
        className="relative touch-pan-y select-none overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        {playing ? (
          <div className="aspect-video w-full bg-black">
            <iframe
              key={current.youtubeId}
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
              title="اكتشف Cashy Link"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
            {slides.map((slide, index) => (
              <Image
                key={slide.youtubeId}
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                draggable={false}
                sizes="(min-width: 896px) 896px, 100vw"
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
              aria-label={current.label}
              onClick={() => {
                if (dragging.current) return;
                play();
              }}
            >
              <span className="pointer-events-none relative max-w-[min(28rem,88%)] px-4 py-2 before:absolute before:inset-0 before:rounded-full before:bg-gray-950/55 before:backdrop-blur-sm md:px-5 md:py-2.5">
                <span className="relative flex items-center justify-center gap-2 md:gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0"
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
                  <span className="text-center text-[11px] font-medium leading-snug text-gray-300 md:text-sm">
                    {current.label}
                  </span>
                </span>
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.youtubeId}
            type="button"
            aria-label={`الفيديو ${index + 1}`}
            aria-current={active === index}
            className={`h-2.5 rounded-full transition-all ${
              active === index
                ? "w-6 bg-indigo-500"
                : "w-2.5 bg-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
