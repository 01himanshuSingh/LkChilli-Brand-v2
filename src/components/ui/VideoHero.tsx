"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PauseIcon, PlayIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export interface VideoHeroProps {
  src: string;
  poster: string;
  alt: string;
  /** Extra overlay content below the play button (e.g. landing h1) */
  children?: ReactNode;
  className?: string;
  priority?: boolean;
}

export function VideoHero({
  src,
  poster,
  alt,
  children,
  className,
  priority = false,
}: VideoHeroProps) {
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
    if (!video) return;

    // Force mute for autoplay policies / browser quirks
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (reducedMotion) return;

    void video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [reducedMotion]);

  const togglePlayback = (): void => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className={cn("relative w-full overflow-hidden bg-black", className)}
      aria-label="Hero video"
    >
      {/* (AUTO PLAYED VIDEO) — development note only */}
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        muted
        playsInline
        loop
        autoPlay={!reducedMotion}
        preload="metadata"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
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
        {children}
      </div>
    </section>
  );
}
