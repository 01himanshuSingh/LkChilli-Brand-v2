"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/ui/Icons";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (): void => {
      setReducedMotion(media.matches);
      if (media.matches) {
        videoRef.current?.pause();
        setPlaying(false);
      }
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    void video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [reducedMotion]);

  const togglePlayback = (): void => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      // Mobile: 100svh — stable height against collapsing browser chrome
      // Desktop: 100dvh — true full-screen hero
      className="relative h-[100svh] w-full min-h-[28rem] overflow-hidden bg-black lg:h-dvh lg:min-h-0"
      aria-label="Hero video"
    >
      {/* (AUTO PLAYED VIDEO) — development note only */}
      <Image
        src="/images/hero-poster.jpg"
        alt="Chef pouring LK Chilli oil onto tasting spoons"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-poster.jpg"
        muted
        loop
        playsInline
        autoPlay={!reducedMotion}
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 sm:gap-5">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause video" : "Play video"}
          aria-pressed={playing}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-[1px] transition-colors duration-250 hover:bg-black/50 sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
        >
          {playing ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
        </button>

        <h1 className="font-serif text-[clamp(1.875rem,5vw,3.25rem)] font-normal italic text-white">
          Just Drip It
        </h1>
      </div>
    </section>
  );
}
