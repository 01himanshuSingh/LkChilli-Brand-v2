"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface VideoHeroProps {
  src: string;
  /** Portrait cut shown below the lg breakpoint. Desktop `src` is used from 1024px up. */
  mobileSrc?: string;
  poster: string;
  alt: string;
  /** Extra overlay content (e.g. landing h1). Hidden while the video is playing. */
  children?: ReactNode;
  className?: string;
  priority?: boolean;
}

export function VideoHero({
  src,
  mobileSrc,
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
        {mobileSrc ? (
          <source src={src} type="video/mp4" media="(min-width: 1024px)" />
        ) : null}
        <source src={mobileSrc ?? src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {children ? (
          <div
            className={cn(
              "transition-opacity duration-300",
              playing ? "pointer-events-none opacity-0" : "opacity-100",
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
