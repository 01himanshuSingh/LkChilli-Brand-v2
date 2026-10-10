"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  /** Fire once then disconnect (default true for reveal animations) */
  once?: boolean;
}

export interface UseInViewResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  inView: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.12,
  once = true,
}: UseInViewOptions = {}): UseInViewResult<T> {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        if (once) observer.unobserve(node);
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}
