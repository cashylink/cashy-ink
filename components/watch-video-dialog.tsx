"use client";

const PLAY_EVENT = "open-cashy-video";

export function openWatchVideo() {
  window.dispatchEvent(new Event(PLAY_EVENT));
}

export function onWatchVideo(handler: () => void) {
  window.addEventListener(PLAY_EVENT, handler);
  return () => window.removeEventListener(PLAY_EVENT, handler);
}
