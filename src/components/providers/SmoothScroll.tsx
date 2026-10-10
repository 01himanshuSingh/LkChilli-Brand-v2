"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";

export interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Smooth / lazy page scroll via Lenis.
 * Falls back to native scroll when reduced motion is preferred.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (): void => setEnabled(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.15,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
