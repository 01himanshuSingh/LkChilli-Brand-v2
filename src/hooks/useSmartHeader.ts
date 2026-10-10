"use client";

import { useEffect, useRef, useState } from "react";

export interface SmartHeaderState {
  visible: boolean;
  scrolled: boolean;
}

interface UseSmartHeaderOptions {
  topOffset?: number;
  idleMs?: number;
  deltaThreshold?: number;
}

/**
 * Professional sticky header:
 * - hides on intentional scroll-down
 * - shows on scroll-up
 * - auto-reveals when scrolling stops
 * - rAF-throttled for smooth performance
 */
export function useSmartHeader({
  topOffset = 16,
  idleMs = 220,
  deltaThreshold = 6,
}: UseSmartHeaderOptions = {}): SmartHeaderState {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY;

    const clearIdle = (): void => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
        idleTimer.current = null;
      }
    };

    const update = (): void => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - lastY.current;

      setScrolled(currentY > topOffset);

      if (currentY <= topOffset) {
        setVisible(true);
        lastY.current = currentY;
        clearIdle();
        ticking.current = false;
        return;
      }

      if (Math.abs(delta) >= deltaThreshold) {
        setVisible(delta < 0);
        lastY.current = currentY;
      }

      clearIdle();
      idleTimer.current = setTimeout(() => {
        setVisible(true);
      }, idleMs);

      ticking.current = false;
    };

    const onScroll = (): void => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearIdle();
    };
  }, [topOffset, idleMs, deltaThreshold]);

  return { visible, scrolled };
}
