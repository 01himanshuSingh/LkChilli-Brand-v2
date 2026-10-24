"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { primaryNav, secondaryNav } from "@/data/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex h-[100dvh] w-screen flex-col bg-brand-red px-6 py-6 text-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mb-10 flex items-center justify-between">
        <span className="font-serif text-lg tracking-[0.08em]">MENU</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-sm p-1 transition-opacity hover:opacity-80"
        >
          <CloseIcon />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-6" aria-label="Mobile primary">
        {[...primaryNav, ...secondaryNav].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-serif text-base font-normal uppercase tracking-[0.22em] transition-opacity hover:opacity-80"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/30 pt-6 pb-[env(safe-area-inset-bottom)]">
        <SocialIcons className="gap-4" />
      </div>
    </div>
  );
}
