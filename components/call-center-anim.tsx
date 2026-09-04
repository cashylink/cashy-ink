"use client";

import { useEffect, useRef } from "react";

type LottiePlayer = {
  loadAnimation: (opts: {
    container: Element;
    renderer: "svg";
    loop: boolean;
    autoplay: boolean;
    path: string;
  }) => { destroy: () => void };
};

export default function CallCenterAnim() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let anim: { destroy: () => void } | undefined;

    const play = () => {
      const lottie = (window as unknown as { lottie?: LottiePlayer }).lottie;
      if (!lottie || !ref.current || cancelled) return;
      ref.current.innerHTML = "";
      anim = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/call-center.json",
      });
    };

    const w = window as unknown as { lottie?: LottiePlayer };
    if (w.lottie) {
      play();
    } else {
      const prev = document.querySelector<HTMLScriptElement>(
        "script[data-lottie-web]",
      );
      if (prev) {
        prev.addEventListener("load", play);
      } else {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
        script.async = true;
        script.dataset.lottieWeb = "true";
        script.onload = play;
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return <div ref={ref} className="h-11 w-11" />;
}
